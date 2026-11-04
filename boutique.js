/* Boutique EcoFusion Work — panier & commande WhatsApp */
(function () {
  const R = window.RAYONS, P = window.PRODUITS;
  const $ = s => document.querySelector(s);
  const grid = $('#grid'), chips = $('#chips'), q = $('#q'), count = $('#count');
  const imgOf = c => '/img/rayons/' + (R.find(r => r.id === c) || R[0]).img + '.webp';
  const pimg = p => p.ph ? '/img/produits/' + p.id + '.webp' : imgOf(p.c);
  const rayonName = c => (R.find(r => r.id === c) || {}).n || '';
  const money = n => n.toLocaleString('fr-FR') + ' MAD';
  let cat = new URLSearchParams(location.search).get('rayon') || 'tous';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem('efw_cart') || '{}') || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem('efw_cart', JSON.stringify(cart)); } catch (e) {} };
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  // chips
  chips.innerHTML = '<button data-c="tous">Tout</button>' + R.map(r => `<button data-c="${r.id}">${r.n}</button>`).join('');
  chips.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cat = b.dataset.c; render(); history.replaceState(null, '', cat === 'tous' ? location.pathname : '?rayon=' + cat); });
  q.addEventListener('input', render);

  // rayon tiles
  const tiles = $('#tiles');
  if (tiles) tiles.innerHTML = R.map(r => `<button class="tile" data-c="${r.id}"><img src="/img/rayons/${r.img}.webp" alt="${r.n}" loading="lazy" width="400" height="400"><span>${r.n}<small>${P.filter(p => p.c === r.id).length} produits</small></span></button>`).join('');
  if (tiles) tiles.addEventListener('click', e => { const b = e.target.closest('.tile'); if (!b) return; cat = b.dataset.c; render(); $('#catalogue-produits').scrollIntoView({ behavior: 'smooth' }); });

  function render() {
    chips.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.c === cat));
    const term = norm(q.value.trim());
    const list = P.filter(p => (cat === 'tous' || p.c === cat) && (!term || norm(p.n + ' ' + p.d + ' ' + rayonName(p.c)).includes(term)));
    count.textContent = list.length + ' produit' + (list.length > 1 ? 's' : '');
    grid.innerHTML = list.length ? list.map(p => `
      <article class="prod">
        <div class="pimg"><img src="${pimg(p)}" alt="${p.n}" loading="lazy" width="400" height="400">${p.tag ? `<span class="ptag">${p.tag}</span>` : ''}</div>
        <div class="pin">
          <small>${rayonName(p.c)}</small>
          <h3>${p.n}</h3>
          <p>${p.d}</p>
          <div class="pfoot">
            <div class="price">${p.p ? `<b>${money(p.p)}</b><span>/ ${p.u}</span>` : `<b class="ask">Prix sur demande</b><span>${p.u}</span>`}${p.stock === false ? '<em>Sur commande</em>' : ''}</div>
            <button class="btn btn-p add" data-id="${p.id}">${cart[p.id] ? '✓ Ajouté (' + cart[p.id] + ')' : 'Ajouter'}</button>
          </div>
        </div>
      </article>`).join('') : `<p class="empty">Aucun produit trouvé. <a href="#" data-wa-search>Demandez-le-nous sur WhatsApp</a> : nous le trouvons pour vous.</p>`;
    const ws = grid.querySelector('[data-wa-search]');
    if (ws) { ws.href = wa('Bonjour EcoFusion Work, je cherche : ' + q.value); ws.target = '_blank'; }
  }
  grid.addEventListener('click', e => {
    const b = e.target.closest('.add'); if (!b) return;
    cart[b.dataset.id] = (cart[b.dataset.id] || 0) + 1; save(); render(); updateCart(); bump();
    track('AddToCart', { content_ids: [b.dataset.id] });
  });

  // cart drawer
  const drawer = $('#cart'), fab = $('#cartBtn'), lines = $('#lines'), badge = $('#cartN');
  const open = () => { drawer.classList.add('on'); drawer.setAttribute('aria-hidden', 'false'); };
  const close = () => { drawer.classList.remove('on'); drawer.setAttribute('aria-hidden', 'true'); };
  fab.addEventListener('click', open); $('#cartClose').addEventListener('click', close);
  drawer.addEventListener('click', e => { if (e.target === drawer) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  function bump() { fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump'); }
  function updateCart() {
    const ids = Object.keys(cart).filter(id => cart[id] > 0 && P.find(p => p.id === id));
    const n = ids.reduce((s, id) => s + cart[id], 0);
    badge.textContent = n; fab.hidden = n === 0;
    lines.innerHTML = ids.length ? ids.map(id => { const p = P.find(x => x.id === id); return `
      <div class="line"><img src="${pimg(p)}" alt="" width="56" height="56"><div><b>${p.n}</b><small>${p.p ? money(p.p) + ' / ' + p.u : 'Prix sur demande · ' + p.u}</small></div>
      <div class="qty"><button data-q="-1" data-id="${id}" aria-label="Moins">−</button><span>${cart[id]}</span><button data-q="1" data-id="${id}" aria-label="Plus">+</button></div></div>`; }).join('') : '<p class="empty">Votre panier est vide.</p>';
    const priced = ids.filter(id => P.find(p => p.id === id).p);
    const total = priced.reduce((s, id) => s + P.find(p => p.id === id).p * cart[id], 0);
    $('#total').textContent = priced.length ? money(total) + (priced.length < ids.length ? ' + articles sur devis' : '') : 'Sur devis';
    $('#orderForm').hidden = !ids.length;
  }
  lines.addEventListener('click', e => { const b = e.target.closest('button[data-q]'); if (!b) return; cart[b.dataset.id] = Math.max(0, (cart[b.dataset.id] || 0) + +b.dataset.q); if (!cart[b.dataset.id]) delete cart[b.dataset.id]; save(); updateCart(); render(); });

  $('#orderForm').addEventListener('submit', e => {
    e.preventDefault(); const f = e.target; if (!f.reportValidity()) return;
    const d = new FormData(f);
    const ids = Object.keys(cart).filter(id => cart[id] > 0);
    const items = ids.map(id => { const p = P.find(x => x.id === id); return '• ' + cart[id] + ' × ' + p.n + ' (' + p.u + ')' + (p.p ? ' — ' + money(p.p * cart[id]) : ''); }).join('\n');
    const msg = 'Bonjour EcoFusion Work, je souhaite commander :\n' + items + '\n\nTotal affiché : ' + $('#total').textContent +
      '\n\nNom : ' + d.get('nom') + '\nTéléphone : ' + d.get('tel') + '\nVille : ' + d.get('ville') + '\nAdresse : ' + (d.get('adresse') || '-') +
      '\nRéception : ' + d.get('mode') + (d.get('note') ? '\nRemarque : ' + d.get('note') : '');
    track('InitiateCheckout', { num_items: ids.length });
    window.open(wa(msg), '_blank', 'noopener');
  });

  render(); updateCart();
})();
