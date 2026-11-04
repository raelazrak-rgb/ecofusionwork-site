/* =====================================================================
   CATALOGUE ECOFUSION WORK — fichier à modifier pour gérer la boutique
   ---------------------------------------------------------------------
   Pour chaque produit :
     id    : identifiant unique (ne pas changer une fois publié)
     c     : rayon (voir RAYONS ci-dessous)
     n     : nom du produit
     d     : courte description
     u     : unité de vente (pièce, m², sac 50 L, rouleau 100 m…)
     p     : prix en MAD  → null = « Prix sur demande »
     tag   : étiquette facultative (Best-seller, Nouveau, Promo…)
     stock : false = « Sur commande »
   ===================================================================== */
window.RAYONS = [
  { id: 'arbres',    n: 'Arbres & palmiers',        img: 'arbres' },
  { id: 'plantes',   n: 'Plantes & arbustes',       img: 'plantes' },
  { id: 'gazon',     n: 'Gazon, terre & paillage',  img: 'substrats' },
  { id: 'irrigation',n: 'Arrosage & irrigation',    img: 'irrigation' },
  { id: 'outils',    n: 'Outillage à main',         img: 'outils' },
  { id: 'moteur',    n: 'Matériel motorisé',        img: 'motorise' },
  { id: 'engrais',   n: 'Engrais & traitements',    img: 'engrais' },
  { id: 'deco',      n: 'Pots, bacs & déco',        img: 'deco' }
];

window.PRODUITS = [
  // ---------- ARBRES & PALMIERS
  { id: 'olivier-jeune', ph: 1, c: 'arbres', n: 'Olivier (Olea europaea)', d: 'Jeune olivier en pot, 1,5 à 2 m. Résistant à la sécheresse, idéal jardins et haies.', u: 'pièce', p: null, tag: 'Best-seller' },
  { id: 'olivier-centenaire', ph: 1, c: 'arbres', n: 'Olivier centenaire', d: 'Sujet d\'exception au tronc sculpté, pour entrée de villa ou patio. Livraison et plantation sur devis.', u: 'pièce', p: null, tag: 'Premium', stock: false },
  { id: 'washingtonia', ph: 1, c: 'arbres', n: 'Palmier Washingtonia', d: 'Palmier élancé à croissance rapide, très résistant. Hauteurs de 1 à 4 m.', u: 'pièce', p: null },
  { id: 'phoenix-dactylifera', ph: 1, c: 'arbres', n: 'Palmier dattier (Phoenix dactylifera)', d: 'Le palmier emblématique du Maroc, pour allées et jardins méditerranéens.', u: 'pièce', p: null },
  { id: 'phoenix-canariensis', ph: 1, c: 'arbres', n: 'Palmier des Canaries (Phoenix canariensis)', d: 'Couronne ample et décorative, parfait en sujet isolé.', u: 'pièce', p: null },
  { id: 'citronnier', ph: 1, c: 'arbres', n: 'Citronnier en pot', d: 'Agrume parfumé, fructifie presque toute l\'année. En pot ou en pleine terre.', u: 'pièce', p: null },
  { id: 'oranger', ph: 1, c: 'arbres', n: 'Oranger / Bigaradier', d: 'Arbre d\'ombrage et d\'ornement traditionnel des jardins marocains.', u: 'pièce', p: null },
  { id: 'grenadier', ph: 1, c: 'arbres', n: 'Grenadier', d: 'Floraison rouge vif et fruits en automne. Très rustique.', u: 'pièce', p: null },
  { id: 'jacaranda', ph: 1, c: 'arbres', n: 'Jacaranda', d: 'Spectaculaire floraison bleu-violet au printemps, arbre d\'ombrage.', u: 'pièce', p: null },
  { id: 'ficus-nitida', ph: 1, c: 'arbres', n: 'Ficus nitida', d: 'Feuillage dense et persistant, pour haies hautes et alignements.', u: 'pièce', p: null },
  { id: 'caroubier', ph: 1, c: 'arbres', n: 'Caroubier', d: 'Arbre local très résistant à la sécheresse, ombrage généreux.', u: 'pièce', p: null },
  { id: 'cypres', ph: 1, c: 'arbres', n: 'Cyprès de Provence', d: 'Silhouette fine et verticale, idéal en écran ou en alignement.', u: 'pièce', p: null },

  // ---------- PLANTES & ARBUSTES
  { id: 'bougainvillier', c: 'plantes', n: 'Bougainvillier', d: 'Grimpant à floraison abondante (fuchsia, blanc, orange) pour murs et pergolas.', u: 'pièce', p: null, tag: 'Best-seller' },
  { id: 'laurier-rose', c: 'plantes', n: 'Laurier-rose', d: 'Arbuste fleuri très résistant à la chaleur, pour haies fleuries.', u: 'pièce', p: null },
  { id: 'lavande', c: 'plantes', n: 'Lavande', d: 'Parfumée, mellifère et sobre en eau. Pour bordures et massifs.', u: 'pot', p: null },
  { id: 'romarin', c: 'plantes', n: 'Romarin', d: 'Aromatique persistant, couvre-sol ou petite haie.', u: 'pot', p: null },
  { id: 'agapanthe', c: 'plantes', n: 'Agapanthe', d: 'Grandes ombelles bleues ou blanches en été, très facile.', u: 'pot', p: null },
  { id: 'hibiscus', c: 'plantes', n: 'Hibiscus', d: 'Grandes fleurs exotiques, en pot ou en massif ensoleillé.', u: 'pièce', p: null },
  { id: 'pittosporum', c: 'plantes', n: 'Pittosporum (haie)', d: 'Arbuste de haie persistant, dense et facile à tailler.', u: 'pièce', p: null },
  { id: 'thuya', c: 'plantes', n: 'Thuya', d: 'Conifère pour haie brise-vue rapide.', u: 'pièce', p: null },
  { id: 'jasmin', c: 'plantes', n: 'Jasmin étoilé', d: 'Grimpant persistant au parfum envoûtant, pour clôtures et pergolas.', u: 'pièce', p: null },
  { id: 'rosier', c: 'plantes', n: 'Rosiers', d: 'Rosiers buissons et grimpants, coloris variés.', u: 'pièce', p: null },
  { id: 'graminees', c: 'plantes', n: 'Graminées ornementales', d: 'Pennisetum, Stipa, Miscanthus : mouvement et légèreté, très peu d\'eau.', u: 'pot', p: null },
  { id: 'succulentes', c: 'plantes', n: 'Plantes grasses & succulentes', d: 'Agaves, aloès, echeverias : jardins secs et rocailles.', u: 'pot', p: null },
  { id: 'strelitzia', c: 'plantes', n: 'Oiseau de paradis (Strelitzia)', d: 'Feuillage tropical et fleurs spectaculaires.', u: 'pièce', p: null },
  { id: 'plantes-interieur', c: 'plantes', n: 'Plantes d\'intérieur', d: 'Monstera, ficus, sansevieria, pothos… pour bureaux et halls.', u: 'pièce', p: null },

  // ---------- GAZON, TERRE & PAILLAGE
  { id: 'gazon-plaques', ph: 1, c: 'gazon', n: 'Gazon en plaques', d: 'Pelouse prête en 2 à 3 semaines. Pose possible par nos équipes.', u: 'm²', p: null, tag: 'Best-seller' },
  { id: 'semences-gazon', ph: 1, c: 'gazon', n: 'Semences de gazon résistant chaleur', d: 'Mélange adapté au climat marocain, faible besoin en eau.', u: 'kg', p: null },
  { id: 'paspalum', ph: 1, c: 'gazon', n: 'Paspalum (gazon côtier)', d: 'Supporte le sel et la chaleur : idéal Harhoura, Skhirat, Bouznika.', u: 'm²', p: null },
  { id: 'terre-vegetale', ph: 1, c: 'gazon', n: 'Terre végétale criblée', d: 'Pour créer ou recharger pelouses et massifs. Livraison en vrac.', u: 'm³', p: null },
  { id: 'terreau', ph: 1, c: 'gazon', n: 'Terreau universel', d: 'Riche et léger, pour plantations et pots.', u: 'sac 50 L', p: null },
  { id: 'ecorce', ph: 1, c: 'gazon', n: 'Paillage écorce de pin', d: 'Garde l\'humidité, limite les mauvaises herbes, décoratif.', u: 'sac 50 L', p: null },
  { id: 'gravier', ph: 1, c: 'gazon', n: 'Gravier & galets décoratifs', d: 'Blanc, beige ou noir, pour allées et jardins secs.', u: 'sac 25 kg', p: null },
  { id: 'feutre', ph: 1, c: 'gazon', n: 'Toile de paillage anti-herbes', d: 'Feutre géotextile perméable sous gravier ou écorce.', u: 'rouleau', p: null },

  // ---------- ARROSAGE & IRRIGATION
  { id: 'goutte-16', ph: 1, c: 'irrigation', n: 'Tuyau goutte-à-goutte Ø16 mm', d: 'Goutteurs intégrés tous les 33 cm, pour massifs et haies.', u: 'rouleau 100 m', p: null, tag: 'Best-seller' },
  { id: 'goutteurs', ph: 1, c: 'irrigation', n: 'Goutteurs réglables', d: 'Goutteurs autorégulants 2 à 8 L/h.', u: 'sachet de 100', p: null },
  { id: 'pe-25', ph: 1, c: 'irrigation', n: 'Tube PE Ø25 / Ø32 mm', d: 'Canalisation principale pour réseau d\'arrosage.', u: 'rouleau 50 m', p: null },
  { id: 'raccords', ph: 1, c: 'irrigation', n: 'Raccords & accessoires', d: 'Tés, coudes, bouchons, prises en charge, vannes manuelles.', u: 'lot', p: null },
  { id: 'programmateur', ph: 1, c: 'irrigation', n: 'Programmateur d\'arrosage', d: 'Programmateur 4 à 8 zones, avec option capteur de pluie.', u: 'pièce', p: null },
  { id: 'programmateur-wifi', ph: 1, c: 'irrigation', n: 'Programmateur connecté Wi-Fi', d: 'Pilotage depuis le téléphone, ajustement selon la météo.', u: 'pièce', p: null, tag: 'Nouveau' },
  { id: 'electrovanne', ph: 1, c: 'irrigation', n: 'Électrovanne 24 V', d: 'Pour automatiser chaque zone d\'arrosage.', u: 'pièce', p: null },
  { id: 'tuyere', ph: 1, c: 'irrigation', n: 'Arroseurs escamotables (tuyères)', d: 'Pour pelouses : portée et angle réglables.', u: 'pièce', p: null },
  { id: 'turbine', ph: 1, c: 'irrigation', n: 'Turbines d\'arrosage', d: 'Pour grandes surfaces de gazon, portée jusqu\'à 15 m.', u: 'pièce', p: null },
  { id: 'filtre', ph: 1, c: 'irrigation', n: 'Filtre à disques', d: 'Protège le goutte-à-goutte contre le bouchage.', u: 'pièce', p: null },
  { id: 'tuyau-arrosage', ph: 1, c: 'irrigation', n: 'Tuyau d\'arrosage + pistolet', d: 'Tuyau anti-torsion 25 m avec pistolet multi-jets.', u: 'kit', p: null },
  { id: 'regard', ph: 1, c: 'irrigation', n: 'Regards de vannes', d: 'Boîtiers enterrés pour protéger électrovannes et raccords.', u: 'pièce', p: null },

  // ---------- OUTILLAGE À MAIN
  { id: 'secateur', c: 'outils', n: 'Sécateur professionnel', d: 'Lames acier trempé, coupe nette jusqu\'à 25 mm.', u: 'pièce', p: null },
  { id: 'cisaille', c: 'outils', n: 'Cisaille à haies', d: 'Lames ondulées, manches confort.', u: 'pièce', p: null },
  { id: 'echenilloir', c: 'outils', n: 'Échenilloir / élagueur', d: 'Pour couper les branches en hauteur.', u: 'pièce', p: null },
  { id: 'scie', c: 'outils', n: 'Scie d\'élagage', d: 'Lame courbe, coupe rapide des branches.', u: 'pièce', p: null },
  { id: 'beche', c: 'outils', n: 'Bêche & pelle', d: 'Pour plantations et travaux du sol.', u: 'pièce', p: null },
  { id: 'rateau', c: 'outils', n: 'Râteau & balai à gazon', d: 'Nivellement du sol, ramassage des feuilles.', u: 'pièce', p: null },
  { id: 'binette', c: 'outils', n: 'Binette & sarcloir', d: 'Désherbage et aération du sol.', u: 'pièce', p: null },
  { id: 'brouette', c: 'outils', n: 'Brouette 100 L', d: 'Cuve acier renforcée, roue gonflable.', u: 'pièce', p: null },
  { id: 'pulverisateur', c: 'outils', n: 'Pulvérisateur à dos 16 L', d: 'Pour traitements et engrais liquides.', u: 'pièce', p: null },
  { id: 'gants', c: 'outils', n: 'Gants de jardinage', d: 'Enduits, résistants aux épines.', u: 'paire', p: null },
  { id: 'kit-outils', c: 'outils', n: 'Kit jardinier (5 outils)', d: 'Sécateur, transplantoir, griffe, gants, sac de rangement.', u: 'kit', p: null, tag: 'Idée cadeau' },

  // ---------- MATÉRIEL MOTORISÉ
  { id: 'tondeuse-thermique', c: 'moteur', n: 'Tondeuse thermique', d: 'Coupe 46 à 53 cm, bac de ramassage, pour jardins de 300 à 1 500 m².', u: 'pièce', p: null },
  { id: 'tondeuse-electrique', c: 'moteur', n: 'Tondeuse électrique', d: 'Légère et silencieuse, pour petites pelouses.', u: 'pièce', p: null },
  { id: 'debroussailleuse', c: 'moteur', n: 'Débroussailleuse thermique', d: 'Fil et lame, pour bordures et terrains enherbés.', u: 'pièce', p: null },
  { id: 'taille-haie', c: 'moteur', n: 'Taille-haie', d: 'Électrique, sur batterie ou thermique.', u: 'pièce', p: null },
  { id: 'souffleur', c: 'moteur', n: 'Souffleur de feuilles', d: 'Nettoyage rapide des allées et terrasses.', u: 'pièce', p: null },
  { id: 'tronconneuse', c: 'moteur', n: 'Tronçonneuse élagueuse', d: 'Compacte, pour l\'élagage et la coupe de bois.', u: 'pièce', p: null },
  { id: 'motobineuse', c: 'moteur', n: 'Motobineuse', d: 'Préparation du sol pour potagers et nouvelles pelouses.', u: 'pièce', p: null, stock: false },
  { id: 'entretien-machines', c: 'moteur', n: 'Révision & affûtage', d: 'Entretien de vos tondeuses, débroussailleuses et taille-haies.', u: 'service', p: null },

  // ---------- ENGRAIS & TRAITEMENTS
  { id: 'engrais-gazon', c: 'engrais', n: 'Engrais gazon NPK', d: 'Reverdissement rapide et longue durée.', u: 'sac 25 kg', p: null },
  { id: 'engrais-universel', c: 'engrais', n: 'Engrais universel', d: 'Pour massifs, arbustes et arbres fruitiers.', u: 'sac', p: null },
  { id: 'fumier', c: 'engrais', n: 'Fumier organique composté', d: 'Amendement naturel qui nourrit le sol.', u: 'sac 40 L', p: null },
  { id: 'compost', c: 'engrais', n: 'Compost végétal', d: 'Améliore la structure du sol et la rétention d\'eau.', u: 'sac 50 L', p: null },
  { id: 'engrais-agrumes', c: 'engrais', n: 'Engrais agrumes & palmiers', d: 'Formule enrichie en magnésium et oligo-éléments.', u: 'sac', p: null },
  { id: 'insecticide-bio', c: 'engrais', n: 'Insecticide naturel', d: 'À base d\'huile de neem ou savon noir, contre pucerons et cochenilles.', u: 'flacon', p: null },
  { id: 'fongicide', c: 'engrais', n: 'Fongicide', d: 'Prévention et traitement des maladies du feuillage.', u: 'flacon', p: null },
  { id: 'charancon', c: 'engrais', n: 'Traitement palmiers (charançon rouge)', d: 'Protection préventive des palmiers. Application par nos équipes possible.', u: 'traitement', p: null, tag: 'Conseillé' },

  // ---------- POTS, BACS & DÉCO
  { id: 'pots-terre-cuite', c: 'deco', n: 'Pots en terre cuite', d: 'Poterie artisanale marocaine, toutes tailles.', u: 'pièce', p: null },
  { id: 'bacs-fibre', c: 'deco', n: 'Bacs & jardinières design', d: 'Fibre-ciment ou résine, gris anthracite, blanc ou sable.', u: 'pièce', p: null },
  { id: 'bordures', c: 'deco', n: 'Bordures de jardin', d: 'Acier, bois ou PVC pour délimiter massifs et pelouses.', u: 'mètre', p: null },
  { id: 'eclairage-solaire', c: 'deco', n: 'Éclairage solaire de jardin', d: 'Balises et spots solaires sans câblage.', u: 'pièce', p: null },
  { id: 'pas-japonais', c: 'deco', n: 'Pas japonais', d: 'Dalles en pierre ou béton imitation pour allées.', u: 'pièce', p: null },
  { id: 'gazon-synthetique', c: 'deco', n: 'Gazon synthétique', d: 'Zéro arrosage, idéal terrasses, balcons et aires de jeux.', u: 'm²', p: null },
  { id: 'brise-vue', c: 'deco', n: 'Brise-vue & canisses', d: 'Bambou, bruyère ou PVC pour l\'intimité de votre jardin.', u: 'rouleau', p: null }
];
