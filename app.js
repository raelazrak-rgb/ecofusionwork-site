/* EcoFusion Work — scripts communs */
const PHONE = '212706813669';
const wa = (msg) => 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);

/* Suivi des conversions (actif dès qu'un pixel Meta / GA4 est ajouté dans le <head>) */
function track(name, data) {
  try { if (window.fbq) fbq('track', name, data || {}); } catch (e) {}
  try { if (window.gtag) gtag('event', name, data || {}); } catch (e) {}
}

/* Liens WhatsApp : data-wa="message" */
document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = wa(a.dataset.wa || 'Bonjour EcoFusion Work, je souhaite un devis pour mon jardin.');
  a.target = '_blank'; a.rel = 'noopener';
  a.addEventListener('click', () => track('Contact', { method: 'whatsapp' }));
});
document.querySelectorAll('a[href^="tel:"]').forEach(a => a.addEventListener('click', () => track('Contact', { method: 'phone' })));

/* Menu mobile */
const menu = document.getElementById('menu'), burger = document.querySelector('.burger');
if (burger && menu) {
  burger.addEventListener('click', () => { menu.classList.toggle('open'); burger.setAttribute('aria-expanded', menu.classList.contains('open')); });
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });
}

/* Avant / après */
document.querySelectorAll('.ba').forEach(ba => {
  const r = ba.querySelector('input');
  const set = v => ba.style.setProperty('--p', v + '%');
  r.addEventListener('input', () => set(r.value)); set(r.value);
});

/* Simulateur de prix — fourchettes indicatives en MAD par m² (à ajuster) */
const PRICES = {
  gazon:      { label: 'Création de pelouse (gazon)',            min: 45,  max: 70,  floor: 2500 },
  arrosage:   { label: 'Arrosage automatique',                    min: 120, max: 160, floor: 3500 },
  gazonArros: { label: 'Gazon + arrosage automatique',            min: 165, max: 230, floor: 6000 },
  complet:    { label: 'Jardin clé en main (conception + travaux)', min: 220, max: 380, floor: 8000 },
  entretien:  { label: 'Entretien de jardin (par passage)',       min: 8,   max: 14,  floor: 400 },
  goutte:     { label: 'Goutte-à-goutte (massifs, haies)',        min: 35,  max: 60,  floor: 1500 }
};
const est = document.getElementById('est');
if (est) {
  let svc = (est.querySelector('.opts button[aria-pressed=true]') || {}).dataset?.svc || 'gazonArros';
  const surf = est.querySelector('#surf'), out = est.querySelector('#surfOut'), city = est.querySelector('#city');
  const rMin = est.querySelector('#rMin'), rMax = est.querySelector('#rMax'), rLbl = est.querySelector('#rLbl'), go = est.querySelector('#estGo');
  const fmt = n => (Math.round(n / 100) * 100).toLocaleString('fr-FR');
  function calc() {
    const p = PRICES[svc], m2 = +surf.value;
    out.textContent = m2 + ' m²';
    const lo = Math.max(p.floor, p.min * m2), hi = Math.max(p.floor * 1.3, p.max * m2);
    rMin.textContent = fmt(lo); rMax.textContent = fmt(hi); rLbl.textContent = p.label;
    go.href = wa('Bonjour EcoFusion Work, j\'ai utilisé le simulateur de votre site.\n• Projet : ' + p.label + '\n• Surface : ' + m2 + ' m²\n• Ville / quartier : ' + (city.value || '—') + '\n• Estimation affichée : ' + fmt(lo) + ' à ' + fmt(hi) + ' MAD\nPouvez-vous me faire un devis exact ?');
  }
  est.querySelectorAll('.opts button').forEach(b => b.addEventListener('click', () => {
    svc = b.dataset.svc; est.querySelectorAll('.opts button').forEach(x => x.setAttribute('aria-pressed', x === b)); calc(); track('CustomizeProduct', { service: svc });
  }));
  surf.addEventListener('input', calc); city.addEventListener('input', calc);
  go.addEventListener('click', () => track('Lead', { source: 'simulateur', service: svc }));
  go.target = '_blank'; go.rel = 'noopener';
  calc();
}

/* Formulaire de devis → WhatsApp */
const f = document.getElementById('devis');
if (f) {
  const txt = () => { const d = new FormData(f); return 'Bonjour EcoFusion Work,\nNom : ' + d.get('nom') + '\nTéléphone : ' + d.get('tel') + '\nVille : ' + (d.get('ville') || '-') + '\nProjet : ' + d.get('type') + '\n\n' + d.get('msg'); };
  f.addEventListener('submit', e => { e.preventDefault(); if (!f.reportValidity()) return; track('Lead', { source: 'formulaire' }); window.open(wa(txt()), '_blank', 'noopener'); });
  const m = document.getElementById('mail');
  if (m) m.addEventListener('click', () => { m.href = 'mailto:contact@ecofusionwork.com?subject=' + encodeURIComponent('Demande de devis – ' + new FormData(f).get('type')) + '&body=' + encodeURIComponent(txt()); track('Lead', { source: 'email' }); });
  document.querySelectorAll('[data-svc-pick]').forEach(a => a.addEventListener('click', () => { const s = f.querySelector('[name=type]'); [...s.options].forEach(o => { if (o.text === a.dataset.svcPick) s.value = o.text; }); }));
}

/* Catalogue à onglets */
const tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
if (tabs && panels && window.CAT) {
  CAT.forEach(([t, d, items], i) => {
    const b = document.createElement('button'); b.setAttribute('role', 'tab'); b.textContent = t; b.setAttribute('aria-selected', i === 0);
    b.onclick = () => { tabs.querySelectorAll('button').forEach(x => x.setAttribute('aria-selected', x === b)); panels.querySelectorAll('.panel').forEach((p, j) => p.classList.toggle('on', j === i)); };
    tabs.appendChild(b);
    const p = document.createElement('div'); p.className = 'panel' + (i === 0 ? ' on' : ''); p.setAttribute('role', 'tabpanel');
    p.innerHTML = '<p>' + d + '</p><div class="items">' + items.map(([n, tag, ds, pr, u]) => '<div class="item">' + (tag ? '<span class="tag">' + tag.toUpperCase() + '</span>' : '') + '<h3>' + n + '</h3><p>' + ds + '</p><div class="pr">' + (pr ? 'à partir de <b>' + pr + '</b> ' + u : '<b>' + u + '</b>') + '</div></div>').join('') + '</div>';
    panels.appendChild(p);
  });
}
const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
