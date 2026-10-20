(function () {
  'use strict';

  var $ = function (selector) { return document.querySelector(selector); };
  var STORAGE = 'squadra-player-first-v5';

  var icons = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5M9 21v-7h6v7"/>',
    chart: '<path d="M4 19V9m6 10V5m6 14v-7m5 7H2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6"/>',
    shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    bolt: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    trophy: '<path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6"/>',
    star: '<path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3.1L6.1 20l1.1-6.4L2.5 9 9 8l3-6Z"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/>',
    shirt: '<path d="M8 3 4 5 1 10l4 2 2-3v12h10V9l2 3 4-2-3-5-4-2a5 5 0 0 1-8 0Z"/>',
    vote: '<path d="M4 21h16M6 17h12v4M8 17V3h8v14"/><path d="m10 7 1.5 1.5L14 6"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    weight: '<path d="M5 9h14l2 12H3L5 9Z"/><path d="M9 9a3 3 0 0 1 6 0"/>',
    strength: '<path d="M7 8v8M17 8v8M3 10v4M21 10v4M7 12h10"/>',
    spark: '<path d="m12 3-2 6-6 3 6 2 2 7 2-7 6-2-6-3-2-6Z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
    logout: '<path d="M10 17l5-5-5-5M15 12H3M15 3h5v18h-5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    megaphone: '<path d="m3 11 15-6v14L3 13v-2ZM7 15l2 6h4l-2-5"/>',
    edit: '<path d="m4 20 4-1 11-11-3-3L5 16l-1 4ZM14 7l3 3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>'
  };

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (icons[name] || icons.info) + '</svg>';
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char];
    });
  }

  function initials(name) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(function (part) { return part[0]; }).join('').toUpperCase();
  }

  function ageFromBirth(date) {
    if (!date) return '—';
    var birth = new Date(date + 'T12:00:00');
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) age -= 1;
    return age;
  }

  function dateForInput(date) {
    var parts = String(date || '').split('/');
    return parts.length === 3 ? parts[2] + '-' + parts[1] + '-' + parts[0] : date;
  }

  var units = [
    { id: 'piqueri', name: 'Piqueri', city: 'São Paulo · Jardim Íris', teacher: 'Prof. Rafael', color: '#ff6a00', address: 'Av. Raimundo Pereira de Magalhães, 1881 - Jardim Íris, São Paulo - SP', slots: [['Segunda','19:00','20:00'],['Segunda','21:00','22:00'],['Segunda','21:00','22:00','Treino de goleiros'],['Quarta','18:30','19:30'],['Quarta','21:00','22:00'],['Quarta','21:00','22:00','Treino de goleiros']] },
    { id: 'freguesia', name: 'Freguesia do Ó', city: 'São Paulo', teacher: 'Prof. Marina', color: '#33835a', address: 'Av. Nossa Senhora do Ó, 1756 - Limão, São Paulo - SP', slots: [['Segunda','19:00','20:00'],['Segunda','19:00','20:00','Treino de goleiros'],['Terça','06:30','07:30'],['Quarta','19:00','20:00'],['Quarta','19:00','20:00','Treino de goleiros'],['Quinta','06:30','07:30']] },
    { id: 'pestana', name: 'Pestana', city: 'Osasco', teacher: 'Prof. Diego', color: '#3d6fa8', address: 'Rua Arminda Beranger, 1178 - Pestana, Osasco - SP', slots: [['Segunda','06:30','07:30'],['Terça','18:00','19:00'],['Quarta','06:30','07:30'],['Quinta','18:00','19:00'],['Sexta','06:30','07:30']] },
    { id: 'escrefo', name: 'Escrefo', city: 'Osasco · Rochdale', teacher: 'Prof. Bruno', color: '#9a5ab5', address: 'Av. Brasil, 2854 - Rochdale, Osasco - SP', slots: [['Segunda','18:00','19:00'],['Quinta','18:00','19:00']] },
    { id: 'granja', name: 'Granja Viana', city: 'Cotia', teacher: 'Prof. André', color: '#a87714', address: '', slots: [['Segunda','20:30','21:30'],['Quarta','20:30','21:30'],['Sábado','07:30','09:00','Treino técnico']] },
    { id: 'regina', name: 'Jardim Regina', city: 'São Paulo', teacher: 'Prof. Camila', color: '#bc4f47', address: '', slots: [['Segunda','21:00','22:00'],['Quarta','21:00','22:00']] },
    { id: 'umuarama', name: 'Umuarama / Morumbi', city: 'São Paulo · Morumbi', teacher: 'Prof. Felipe', color: '#23858a', address: '', slots: [['Terça','06:30','07:30'],['Quinta','06:30','07:30']] },
    { id: 'vila', name: 'Vila Guilherme', city: 'São Paulo', teacher: 'Prof. Gabriel', color: '#d46c24', address: 'Rua José Bernardo Pinto, 1324 - Vila Guilherme, São Paulo - SP', slots: [['Terça','19:00','20:00'],['Quinta','19:00','20:00'],['Quinta','19:00','20:00','Treino de goleiros']] },
    { id: 'brooklin', name: 'Brooklin', city: 'São Paulo', teacher: 'Prof. Thiago', color: '#5968b0', address: '', slots: [['Terça','19:50','20:50'],['Quinta','19:50','20:50'],['Sábado','07:00','08:30']] }
  ];

  var skillNames = ['Passe', 'Domínio', 'Condução', 'Drible', 'Finalização', 'Marcação', 'Posicionamento', 'Visão', 'Decisão', 'Jogo coletivo'];
  var players = [
    { id: 'gui', name: 'Guilherme Pontes', nick: 'Gui', unit: 'piqueri', position: 'Meio-campo', technical: 4.1, physical: 3.9, goals: 4, points: 1280, status: 'avaliado' },
    { id: 'lucas', name: 'Lucas Ferreira', nick: 'Luquinhas', unit: 'piqueri', position: 'Atacante', technical: 4.5, physical: 4.2, goals: 6, points: 1460, status: 'avaliado' },
    { id: 'pedro', name: 'Pedro Almeida', nick: 'Pedrinho', unit: 'freguesia', position: 'Meio-campo', technical: 4.4, physical: 4.4, goals: 5, points: 1395, status: 'avaliado' },
    { id: 'renato', name: 'Renato Lima', nick: 'Rê', unit: 'pestana', position: 'Defensor', technical: 4.0, physical: 4.6, goals: 5, points: 1340, status: 'pendente' },
    { id: 'carlos', name: 'Carlos Souza', nick: 'Carlão', unit: 'granja', position: 'Goleiro', technical: 4.2, physical: 4.1, goals: 3, points: 1295, status: 'avaliado' },
    { id: 'thiago', name: 'Thiago Martins', nick: 'TH', unit: 'piqueri', position: 'Defensor', technical: 3.9, physical: 4.4, goals: 4, points: 1240, status: 'pendente' },
    { id: 'andre', name: 'André Nunes', nick: 'Dedé', unit: 'vila', position: 'Atacante', technical: 4.3, physical: 3.8, goals: 3, points: 1215, status: 'avaliado' },
    { id: 'marcos', name: 'Marcos Silva', nick: 'Marquinhos', unit: 'brooklin', position: 'Meio-campo', technical: 3.8, physical: 4.0, goals: 2, points: 1160, status: 'pendente' }
  ];

  var schedule = units.flatMap(function (unit) {
    return unit.slots.map(function (slot) {
      return { day: slot[0], unit: unit.id, time: slot[1], end: slot[2], title: slot[3] || 'Futebol funcional', level: 'Todos os níveis', teacher: unit.teacher };
    });
  });

  var initialState = {
    role: 'player',
    page: 'home',
    evoTab: 'technical',
    scheduleUnit: 'all',
    rankingCategory: 'general',
    experienceInterest: false,
    profile: { nickname: 'Gui', birthDate: '1992-07-15', photo: '' },
    physicalGoals: { strength: 42, explosion: 6.5, review: '15/12/2026' },
    pollVotes: {},
    productInterests: [],
    feedbacks: [
      { id: 1, player: 'Guilherme Pontes', unit: 'Piqueri', date: '18/10/2026', type: 'Professor', subject: 'Prof. Rafael', overall: 5, methodology: 5, teacher: 4, text: 'Os treinos estão mais dinâmicos e estou entendendo melhor meu posicionamento.' },
      { id: 2, player: 'Pedro Almeida', unit: 'Freguesia do Ó', date: '16/10/2026', type: 'Gestão / Squadra geral', subject: 'Squadra geral', overall: 4, methodology: 4, teacher: 5, text: 'Gostei muito do retorno individual depois do treino.' }
    ],
    goals: { text: 'Aprimorar tomada de decisão no último terço', progress: 72, review: '15/11/2026' },
    technicalEvaluations: [
      { month: 'OUT', date: '15/10/2026', scores: [4.3, 4.1, 3.8, 3.6, 4.0, 3.4, 4.2, 4.4, 4.1, 4.5], teacher: 'Prof. Rafael', note: 'Evoluiu na leitura de jogo e passou a acelerar melhor as decisões. Próximo foco: finalização sob pressão.' },
      { month: 'SET', date: '14/09/2026', scores: [4.0, 3.9, 3.6, 3.5, 3.7, 3.3, 3.9, 4.1, 3.8, 4.3], teacher: 'Prof. Rafael', note: 'Boa participação coletiva. Trabalhar domínio orientado antes do passe.' },
      { month: 'AGO', date: '12/08/2026', scores: [3.7, 3.7, 3.4, 3.3, 3.5, 3.2, 3.7, 3.9, 3.6, 4.0], teacher: 'Prof. Rafael', note: 'Mostrou boa visão. Pode ocupar melhor os espaços sem a bola.' }
    ],
    physicalEvaluations: [
      { month: 'OUT', date: '15/10/2026', weight: 83.4, dynamometer: 38.6, explosionTime: 6.84, course: 'Percurso Squadra 30 m' },
      { month: 'SET', date: '14/09/2026', weight: 84.1, dynamometer: 36.2, explosionTime: 7.05, course: 'Percurso Squadra 30 m' },
      { month: 'AGO', date: '12/08/2026', weight: 84.8, dynamometer: 34.8, explosionTime: 7.28, course: 'Percurso Squadra 30 m' }
    ],
    extraEvaluations: [],
    interests: [
      { type: 'Experience', player: 'Lucas Ferreira', unit: 'Piqueri', date: '20/10/2026', status: 'Novo interesse' },
      { type: 'Produto — Camisa Treino', player: 'Pedro Almeida', unit: 'Freguesia do Ó', date: '19/10/2026', status: 'Contatado' }
    ],
    adminPolls: []
  };

  var stored;
  try { stored = JSON.parse(localStorage.getItem(STORAGE)); } catch (error) { stored = null; }
  var state = Object.assign({}, initialState, stored || {});
  state.goals = Object.assign({}, initialState.goals, state.goals || {});
  state.profile = Object.assign({}, initialState.profile, state.profile || {});
  state.physicalGoals = Object.assign({}, initialState.physicalGoals, state.physicalGoals || {});

  function save() { localStorage.setItem(STORAGE, JSON.stringify(state)); }
  function unitName(id) { var found = units.find(function (unit) { return unit.id === id; }); return found ? found.name : ''; }
  function latestTech() { return state.technicalEvaluations[0]; }
  function latestPhysical() { return state.physicalEvaluations[0]; }
  function average(values) {
    var valid = values.filter(function (value) { return typeof value === 'number'; });
    return valid.length ? (valid.reduce(function (sum, value) { return sum + value; }, 0) / valid.length) : 0;
  }

  function avatarMarkup(name, classes, usePlayerPhoto) {
    var photo = usePlayerPhoto && state.profile.photo;
    return '<span class="avatar ' + (classes || '') + '">' + (photo ? '<img src="' + photo + '" alt="Foto de perfil de ' + esc(name) + '">' : initials(name)) + '</span>';
  }

  function navItems() {
    if (state.role === 'teacher') {
      return [
        ['coach-home', 'home', 'Visão geral'],
        ['players', 'users', 'Jogadores'],
        ['evaluations', 'clipboard', 'Avaliações'],
        ['schedule', 'calendar', 'Horários'],
        ['coach-profile', 'user', 'Perfil']
      ];
    }
    if (state.role === 'admin') {
      return [
        ['admin-home', 'home', 'Visão geral'],
        ['admin-evaluations', 'clipboard', 'Avaliações'],
        ['admin-feedback', 'message', 'Feedbacks'],
        ['admin-community', 'globe', 'Comunidade'],
        ['admin-profile', 'settings', 'Gestão']
      ];
    }
    return [
      ['home', 'home', 'Início'],
      ['evolution', 'chart', 'Evolução'],
      ['schedule', 'calendar', 'Horários'],
      ['cup', 'trophy', 'Squadra Cup'],
      ['experience', 'shirt', 'Experience'],
      ['ranking', 'star', 'Ranking'],
      ['polls', 'vote', 'Enquetes'],
      ['products', 'shirt', 'Produtos'],
      ['profile', 'user', 'Perfil']
    ];
  }

  function bottomNavItems() {
    if (state.role !== 'player') return navItems();
    return [
      ['home', 'home', 'Início'],
      ['evolution', 'chart', 'Evolução'],
      ['schedule', 'calendar', 'Horários'],
      ['cup', 'trophy', 'Cup'],
      ['more', 'globe', 'Mais']
    ];
  }

  function roleTitle() {
    return state.role === 'teacher' ? ['Professor Rafael', 'Área do professor'] : state.role === 'admin' ? ['Gestão Squadra', 'Desenvolvimento dos jogadores'] : ['Guilherme Pontes', 'Jogador · Piqueri'];
  }

  function renderShell() {
    var nav = navItems();
    var user = roleTitle();
    $('#sidebar').innerHTML =
      '<a class="brand" href="#" data-go="' + nav[0][0] + '">' +
        '<img src="assets/squadra-logo.jpg" alt="Squadra Soccer">' +
        '<span class="brand-name">SQUADRA<small>SOCCER</small></span>' +
      '</a>' +
      '<div class="side-caption">' + (state.role === 'player' ? 'Minha jornada' : state.role === 'teacher' ? 'Acompanhamento' : 'Gestão esportiva') + '</div>' +
      '<div class="side-nav">' +
        nav.map(function (item) {
          return '<button class="nav-button ' + (state.page === item[0] ? 'active' : '') + '" data-go="' + item[0] + '">' + icon(item[1]) + '<span>' + item[2] + '</span></button>';
        }).join('') +
      '</div>' +
      '<div class="side-profile">' +
        '<div class="side-profile-top">' + avatarMarkup(user[0], 'orange', state.role === 'player') + '<div><strong>' + user[0] + '</strong><small>' + user[1] + '</small></div></div>' +
        '<p>Protótipo interativo focado no desenvolvimento e na experiência de cada jogador.</p>' +
      '</div>';

    $('#topbar').innerHTML =
      '<img class="mobile-logo" src="assets/squadra-logo.jpg" alt="Squadra Soccer">' +
      '<div class="topbar-title"><small>Squadra Soccer</small><strong>' + pageLabel() + '</strong></div>' +
      '<div class="topbar-actions">' +
        '<div class="role-picker"><label for="role-select">Visualizar como</label><select id="role-select">' +
          '<option value="player" ' + (state.role === 'player' ? 'selected' : '') + '>Jogador</option>' +
          '<option value="teacher" ' + (state.role === 'teacher' ? 'selected' : '') + '>Professor</option>' +
          '<option value="admin" ' + (state.role === 'admin' ? 'selected' : '') + '>Gestão</option>' +
        '</select></div>' +
        '<button class="icon-btn" data-action="notifications" aria-label="Abrir avisos">' + icon('bell') + '<span class="notification-dot"></span></button>' +
        '<div class="top-user">' + avatarMarkup(user[0], '', state.role === 'player') + '<div><strong>' + user[0] + '</strong><small>' + user[1] + '</small></div></div>' +
      '</div>';

    $('#bottom-nav').innerHTML = bottomNavItems().map(function (item) {
      var communityActive = item[0] === 'more' && ['experience','ranking','polls','products','profile'].indexOf(state.page) >= 0;
      return '<button class="bottom-button ' + (state.page === item[0] || communityActive ? 'active' : '') + '" ' + (item[0] === 'more' ? 'data-action="more-menu"' : 'data-go="' + item[0] + '"') + '>' + icon(item[1]) + '<span>' + item[2] + '</span></button>';
    }).join('');
  }

  function pageLabel() {
    var item = navItems().find(function (entry) { return entry[0] === state.page; });
    return item ? item[2] : 'Squadra Soccer';
  }

  function pageHead(kicker, title, description, actions) {
    return '<header class="page-head"><div><div class="eyebrow">' + kicker + '</div><h1>' + title + '</h1><p>' + description + '</p></div>' + (actions ? '<div class="page-actions">' + actions + '</div>' : '') + '</header>';
  }

  function panelHead(title, subtitle, action) {
    return '<div class="panel-head"><div><h2>' + title + '</h2>' + (subtitle ? '<p>' + subtitle + '</p>' : '') + '</div>' + (action || '') + '</div>';
  }

  function metric(label, value, unit, note, progress, iconName) {
    return '<article class="metric-card"><div class="metric-top"><span>' + label + '</span>' + icon(iconName || 'chart') + '</div><div class="metric-value">' + value + (unit ? ' <small>' + unit + '</small>' : '') + '</div><div class="metric-note ' + (note.indexOf('+') === 0 || note.indexOf('Melhor') === 0 ? 'positive' : '') + '">' + note + '</div><div class="mini-bar"><span style="width:' + progress + '%"></span></div></article>';
  }

  function playerHome() {
    var techAvg = average(latestTech().scores).toFixed(1).replace('.', ',');
    var previousAvg = average(state.technicalEvaluations[1].scores);
    var delta = (average(latestTech().scores) - previousAvg).toFixed(1).replace('.', ',');
    var activePoll = pollData()[0];
    return pageHead('OLÁ, ' + esc((state.profile.nickname || 'Guilherme').toUpperCase()), 'Seu jogo está evoluindo.', 'Acompanhe sua evolução sem comparar peso ou dados privados com outros jogadores.') +
      '<div class="grid-main"><div class="stack">' +
        '<section class="player-hero"><div class="hero-grid"></div><div class="hero-content"><div class="hero-kicker"><span class="tag dark"><span class="dot"></span> Avaliação de outubro</span><span>Atualizada em 15/10</span></div><h2>Mais visão.<br><span>Mais decisão.</span></h2><p>Seu professor destacou a evolução na leitura de jogo. O próximo passo é manter a qualidade da decisão sob pressão.</p><div class="hero-actions"><button class="btn primary" data-go="evolution">' + icon('chart') + 'Ver evolução completa</button><button class="btn ghost" data-action="feedback">Enviar feedback</button></div></div><div class="hero-bottom"><div><small>FOCO ATUAL</small><strong>Decisão no último terço</strong></div><div><small>PRÓXIMA AVALIAÇÃO</small><strong>Novembro</strong></div><div><small>PROFESSOR</small><strong>Rafael</strong></div></div></section>' +
        '<div class="grid-4 metrics-mobile">' +
          metric('Evolução técnica', techAvg, '/ 5', '+' + delta + ' desde setembro', 82, 'chart') +
          metric('Força', String(latestPhysical().dynamometer).replace('.', ','), 'kgf', '+2,4 kgf no dinamômetro', 82, 'strength') +
          metric('Explosão', String(latestPhysical().explosionTime).replace('.', ','), 'segundos', 'Melhor tempo: -0,21 s', 79, 'spark') +
          metric('Ranking geral', '#6', '', '+2 posições no mês', 66, 'trophy') +
        '</div>' +
        '<section class="panel">' + panelHead('Tudo do seu Squadra', 'Acesse rapidamente as áreas mais usadas') +
          '<div class="section-shortcuts">' +
            shortcut('evolution', 'chart', 'Minha evolução', 'Técnica e física') +
            shortcut('schedule', 'calendar', 'Grade de horários', 'Todas as unidades') +
            shortcut('cup', 'trophy', 'Squadra Cup', 'Jogos e classificação') +
            shortcut('polls', 'vote', 'Enquetes', 'Sua opinião conta') +
          '</div></section>' +
        '<section class="panel">' + panelHead('Última avaliação técnica', 'Escala de 1 a 5', '<button class="text-button" data-go="evolution">Ver detalhes ' + icon('arrow', 'sm') + '</button>') +
          '<div class="grid-2"><div>' + latestTech().scores.slice(0, 5).map(function (score, index) { return skillScore(skillNames[index], score); }).join('') + '</div><div>' + latestTech().scores.slice(5).map(function (score, index) { return skillScore(skillNames[index + 5], score); }).join('') + '</div></div>' +
          '<div class="divider"></div><div class="coach-row"><span class="avatar dark">RF</span><div><strong>Feedback do Prof. Rafael</strong><small>15 de outubro de 2026</small></div></div><div class="feedback-quote" style="margin-top:14px">' + latestTech().note + '</div>' +
        '</section>' +
      '</div><aside class="stack">' +
        '<section class="goal-card"><div class="eyebrow">MEU OBJETIVO</div><h3>' + esc(state.goals.text) + '</h3><p>Definido junto com o professor para o ciclo atual.</p><div class="goal-progress"><span>Progresso estimado</span><b>' + state.goals.progress + '%</b></div><div class="mini-bar"><span style="width:' + state.goals.progress + '%"></span></div><button class="text-button" data-action="goal" style="margin-top:13px">Atualizar objetivo ' + icon('edit', 'sm') + '</button></section>' +
        '<section class="panel">' + panelHead('Próximos treinos', 'Grade aberta em todas as unidades', '<button class="text-button" data-go="schedule">Ver grade ' + icon('arrow', 'sm') + '</button>') +
          schedule.slice(0, 3).map(compactClass).join('') +
        '</section>' +
        '<section class="panel">' + panelHead('Enquete em destaque', 'A gestão verá quem participou') +
          '<span class="tag orange">ABERTA ATÉ 25/10</span><h3 style="margin:14px 0 6px">' + activePoll.question + '</h3><p class="muted" style="font-size:9px">Vote para ajudar a definir as próximas experiências.</p>' +
          activePoll.options.slice(0, 2).map(function (option) { return '<button class="btn secondary full" data-action="quick-poll" data-id="' + activePoll.id + '" data-value="' + esc(option.label) + '" style="margin-top:8px">' + esc(option.label) + '</button>'; }).join('') +
          '<button class="text-button" data-go="polls" style="margin-top:10px">Ver todas as opções ' + icon('arrow', 'sm') + '</button></section>' +
        '<section class="panel">' + panelHead('Squadra Experience', 'Um time para viver o futebol') +
          '<div class="notice orange">' + icon('trophy') + '<span><b>Squadra Experience</b><br>Treinos dedicados, amistosos e campeonatos como um verdadeiro time.</span></div><button class="btn dark full" data-go="experience" style="margin-top:12px">Conhecer o Experience</button></section>' +
      '</aside></div>';
  }

  function shortcut(go, iconName, title, subtitle) {
    return '<button class="shortcut" data-go="' + go + '"><span class="icon-wrap">' + icon(iconName) + '</span><span><strong>' + title + '</strong><small>' + subtitle + '</small></span>' + icon('chevron', 'sm arrow') + '</button>';
  }

  function skillScore(name, value) {
    return '<div class="assessment-score"><span class="score-pill">' + String(value).replace('.', ',') + '</span><div class="assessment-score-info"><strong><span>' + name + '</span><span>' + Math.round(value * 20) + '%</span></strong><small>' + (value >= 4.3 ? 'Destaque atual' : value >= 4 ? 'Nível avançado' : value >= 3.5 ? 'Evoluindo bem' : 'Foco de desenvolvimento') + '</small><div class="mini-bar"><span style="width:' + (value * 20) + '%"></span></div></div></div>';
  }

  function compactClass(item) {
    return '<div class="class-row" style="grid-template-columns:58px 1fr"><div class="class-time">' + item.time + '</div><div class="class-info"><h3>' + item.title + '</h3><p>' + item.day + ' · ' + unitName(item.unit) + ' · ' + item.teacher + '</p></div></div>';
  }

  function evolutionPage() {
    var tabs = [
      ['technical', 'Técnica'],
      ['physical', 'Avaliação física'],
      ['history', 'Histórico'],
      ['goals', 'Metas']
    ];
    var content = state.evoTab === 'physical' ? physicalView() : state.evoTab === 'history' ? historyView() : state.evoTab === 'goals' ? goalsView() : technicalView();
    return pageHead('MINHA EVOLUÇÃO', 'Cada treino deixa uma marca.', 'Avaliações mensais separadas por dimensão, sem uma nota geral arbitrária.') +
      '<div class="tabs">' + tabs.map(function (tab) { return '<button class="tab ' + (state.evoTab === tab[0] ? 'active' : '') + '" data-evo="' + tab[0] + '">' + tab[1] + '</button>'; }).join('') + '</div>' + content;
  }

  function technicalView() {
    return '<div class="grid-main"><div class="stack"><section class="panel">' + panelHead('Mapa técnico', 'Avaliação de outubro · escala de 1 a 5', '<span class="tag orange">10 fundamentos</span>') +
      '<div class="grid-2"><div>' + radarChart(latestTech().scores) + '</div><div class="skill-list">' + latestTech().scores.map(function (score, index) {
        return '<div><div class="skill-row-head"><span>' + skillNames[index] + '</span><b>' + String(score).replace('.', ',') + '</b></div><div class="skill-bar"><span style="width:' + (score * 20) + '%"></span></div></div>';
      }).join('') + '</div></div></section>' +
      '<section class="panel">' + panelHead('Evolução técnica no ciclo', 'Média dos fundamentos observados') + lineChart([3.7, 3.9, 4.1], ['AGO', 'SET', 'OUT']) + '</section></div>' +
      '<aside class="stack"><section class="panel">' + panelHead('Leitura do professor', 'Avaliação publicada em 15/10') + '<div class="coach-row"><span class="avatar orange">RF</span><div><strong>Rafael Mendes</strong><small>Professor · Unidade Piqueri</small></div></div><div class="feedback-quote" style="margin-top:16px">' + latestTech().note + '</div></section>' +
      '<section class="goal-card"><div class="eyebrow">PRÓXIMO PASSO</div><h3>Finalização sob pressão</h3><p>Treinar escolha de canto e velocidade de execução após domínio orientado.</p><div class="goal-progress"><span>Ciclo atual</span><b>3 de 4 semanas</b></div><div class="mini-bar"><span style="width:75%"></span></div></section>' +
      '<div class="privacy-note">' + icon('info', 'sm') + '<span>O professor pode marcar “não observado” quando não houver evidência suficiente para avaliar um fundamento.</span></div></aside></div>';
  }

  function radarChart(values) {
    var cx = 170, cy = 150, radius = 112;
    function point(index, scale) {
      var angle = (-Math.PI / 2) + index * (Math.PI * 2 / values.length);
      return (cx + Math.cos(angle) * radius * scale) + ',' + (cy + Math.sin(angle) * radius * scale);
    }
    var grids = [1, .75, .5, .25].map(function (scale) {
      return '<polygon points="' + values.map(function (_, i) { return point(i, scale); }).join(' ') + '" fill="none" stroke="#e8e8df" stroke-width="1"/>';
    }).join('');
    var axes = values.map(function (_, i) { return '<line x1="' + cx + '" y1="' + cy + '" x2="' + point(i, 1).split(',')[0] + '" y2="' + point(i, 1).split(',')[1] + '" stroke="#ededE6" />'; }).join('');
    var polygon = values.map(function (value, i) { return point(i, value / 5); }).join(' ');
    return '<svg class="radar" viewBox="0 0 340 300" role="img" aria-label="Gráfico radar da avaliação técnica">' + grids + axes + '<polygon points="' + polygon + '" fill="rgba(255,106,0,.18)" stroke="#ff6a00" stroke-width="3"/>' + values.map(function (value, i) { var xy = point(i, value / 5).split(','); return '<circle cx="' + xy[0] + '" cy="' + xy[1] + '" r="4" fill="#ff6a00" stroke="#fff" stroke-width="2"/>'; }).join('') + '</svg>';
  }

  function lineChart(values, labels) {
    var min = 3.2, max = 4.5;
    var points = values.map(function (value, index) {
      var x = 25 + index * (350 / (values.length - 1));
      var y = 160 - ((value - min) / (max - min)) * 120;
      return { x: x, y: y, value: value };
    });
    var line = points.map(function (p) { return p.x + ',' + p.y; }).join(' ');
    return '<div class="chart-wrap"><svg class="chart-svg" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet"><defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6a00" stop-opacity=".24"/><stop offset="100%" stop-color="#ff6a00" stop-opacity="0"/></linearGradient></defs><path class="chart-grid" d="M25 40H375M25 80H375M25 120H375M25 160H375"/><polygon class="chart-area" points="' + points[0].x + ',160 ' + line + ' ' + points[points.length - 1].x + ',160"/><polyline class="chart-line" points="' + line + '"/>' + points.map(function (p) { return '<circle class="chart-dot" cx="' + p.x + '" cy="' + p.y + '" r="5"/><rect x="' + (p.x - 17) + '" y="' + (p.y - 30) + '" width="34" height="19" rx="7" fill="#fff0e5"/><text x="' + p.x + '" y="' + (p.y - 17) + '" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="10" fill="#a84500">' + String(p.value).replace('.', ',') + '</text>'; }).join('') + '</svg><div class="chart-labels">' + labels.map(function (label) { return '<span>' + label + '</span>'; }).join('') + '</div><div class="legend"><span><i></i>Média dos fundamentos avaliados</span></div></div>';
  }

  function metricTrend(values, labels, unit, description) {
    var low = Math.min.apply(null, values);
    var high = Math.max.apply(null, values);
    var range = Math.max(high - low, 0.5);
    var min = low - range * .35;
    var max = high + range * .35;
    var points = values.map(function (value, index) {
      return { x: 25 + index * (350 / (values.length - 1)), y: 158 - ((value - min) / (max - min)) * 112, value: value };
    });
    var line = points.map(function (point) { return point.x + ',' + point.y; }).join(' ');
    return '<div class="chart-wrap"><svg class="chart-svg" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet"><path class="chart-grid" d="M25 45H375M25 95H375M25 145H375"/><polyline class="chart-line" points="' + line + '"/>' + points.map(function (point) { return '<circle class="chart-dot" cx="' + point.x + '" cy="' + point.y + '" r="5"/><rect x="' + (point.x - 24) + '" y="' + (point.y - 30) + '" width="48" height="19" rx="7" fill="#fff0e5"/><text x="' + point.x + '" y="' + (point.y - 17) + '" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="10" fill="#a84500">' + String(point.value).replace('.', ',') + ' ' + unit + '</text>'; }).join('') + '</svg><div class="chart-labels">' + labels.map(function (label) { return '<span>' + label + '</span>'; }).join('') + '</div><div class="legend"><span><i></i>' + description + '</span></div></div>';
  }

  function physicalView() {
    var current = latestPhysical();
    return '<div class="stack"><div class="privacy-note orange">' + icon('lock', 'sm') + '<span><b>Seu peso é privado.</b> Ele só é visível para você e para os profissionais autorizados. Não aparece em rankings ou comparações públicas.</span></div>' +
      '<div class="grid-3">' +
        '<section class="panel"><div class="eyebrow">PESO</div><div class="physical-card" style="margin-top:13px"><span class="icon-wrap">' + icon('weight') + '</span><small>Registro de outubro</small><strong>' + String(current.weight).replace('.', ',') + ' <span>kg</span></strong><em>-0,7 kg desde setembro</em></div><div style="margin-top:15px">' + metricTrend([84.8, 84.1, 83.4], ['AGO', 'SET', 'OUT'], 'kg', 'Evolução mensal do peso') + '</div></section>' +
        '<section class="panel"><div class="eyebrow">FORÇA</div><div class="physical-card" style="margin-top:13px"><span class="icon-wrap">' + icon('strength') + '</span><small>Dinamômetro · outubro</small><strong>' + String(current.dynamometer).replace('.', ',') + ' <span>kgf</span></strong><em>+2,4 kgf desde setembro</em></div><div style="margin-top:15px">' + metricTrend([34.8, 36.2, 38.6], ['AGO', 'SET', 'OUT'], 'kgf', 'Força medida no dinamômetro') + '</div></section>' +
        '<section class="panel"><div class="eyebrow">EXPLOSÃO</div><div class="physical-card" style="margin-top:13px"><span class="icon-wrap">' + icon('spark') + '</span><small>' + current.course + '</small><strong>' + String(current.explosionTime).replace('.', ',') + ' <span>segundos</span></strong><em>Melhor tempo: -0,21 s</em></div><div style="margin-top:15px">' + metricTrend([7.28, 7.05, 6.84], ['AGO', 'SET', 'OUT'], 's', 'Menor tempo indica evolução') + '</div></section>' +
      '</div><section class="panel">' + panelHead('Histórico das avaliações físicas', 'Medições mensais de peso, força e explosão') + '<div class="table-wrap"><table><thead><tr><th>Mês</th><th>Peso</th><th>Força no dinamômetro</th><th>Explosão</th><th>Protocolo</th></tr></thead><tbody>' + state.physicalEvaluations.map(function (item) { return '<tr><td><b>' + item.month + '</b></td><td>' + String(item.weight).replace('.', ',') + ' kg</td><td>' + String(item.dynamometer).replace('.', ',') + ' kgf</td><td>' + String(item.explosionTime).replace('.', ',') + ' s</td><td>' + item.course + '</td></tr>'; }).join('') + '</tbody></table></div></section></div>';
  }

  function physicalCard(iconName, title, value, unit, note) {
    return '<article class="physical-card"><span class="icon-wrap">' + icon(iconName) + '</span><small>' + title + '</small><strong>' + value + ' <span>' + unit + '</span></strong><em>' + note + '</em></article>';
  }

  function historyView() {
    var all = state.technicalEvaluations.map(function (item, index) {
      return '<article class="timeline-item"><span class="timeline-date">' + item.date + '</span><h3>Avaliação técnica de ' + item.month + '</h3><p>Média ' + average(item.scores).toFixed(1).replace('.', ',') + '/5 · ' + esc(item.teacher) + '<br>' + esc(item.note) + '</p>' + (index === 0 ? '<span class="tag green" style="margin-top:8px">Evolução publicada</span>' : '') + '</article>';
    }).join('');
    return '<div class="grid-main"><section class="panel">' + panelHead('Linha do tempo', 'Sua história de evolução no Squadra') + '<div class="timeline">' + all + '<article class="timeline-item"><span class="timeline-date">03/08/2026</span><h3>Meta definida com o professor</h3><p>Melhorar leitura de jogo e tomada de decisão no último terço.</p></article></div></section><aside class="stack"><section class="panel">' + panelHead('Resumo do ciclo') + '<div class="grid-2">' + metric('Avaliações', '3', 'meses', 'Ciclo completo', 100, 'clipboard') + metric('Fundamentos', '8', 'em alta', '+2 neste mês', 80, 'chart') + '</div></section><section class="goal-card"><div class="eyebrow">DESTAQUE</div><h3>Visão de jogo</h3><p>Foi o fundamento com evolução mais consistente nos últimos três meses.</p><div class="goal-progress"><span>Agosto</span><b>3,9 → 4,4</b></div><div class="mini-bar"><span style="width:88%"></span></div></section></aside></div>';
  }

  function goalsView() {
    var strengthProgress = Math.min(100, Math.round(latestPhysical().dynamometer / state.physicalGoals.strength * 100));
    var explosionProgress = Math.max(0, Math.min(100, Math.round((7.28 - latestPhysical().explosionTime) / (7.28 - state.physicalGoals.explosion) * 100)));
    return '<div class="stack"><section class="panel">' + panelHead('Minhas metas físicas', 'Defina onde quer chegar em força e explosão', '<button class="btn secondary" data-action="physical-goals">' + icon('edit') + 'Editar metas</button>') + '<div class="grid-2"><div class="goal-card"><div class="eyebrow">META DE FORÇA</div><h3>' + String(latestPhysical().dynamometer).replace('.', ',') + ' → ' + String(state.physicalGoals.strength).replace('.', ',') + ' kgf</h3><p>Força mensal medida pelo dinamômetro.</p><div class="goal-progress"><span>Progresso até a meta</span><b>' + strengthProgress + '%</b></div><div class="mini-bar"><span style="width:' + strengthProgress + '%"></span></div></div><div class="goal-card"><div class="eyebrow">META DE EXPLOSÃO</div><h3>' + String(latestPhysical().explosionTime).replace('.', ',') + ' → ' + String(state.physicalGoals.explosion).replace('.', ',') + ' s</h3><p>Objetivo de reduzir o tempo no percurso Squadra.</p><div class="goal-progress"><span>Progresso até a meta</span><b>' + explosionProgress + '%</b></div><div class="mini-bar"><span style="width:' + explosionProgress + '%"></span></div></div></div></section><div class="grid-main"><div class="stack"><section class="goal-card"><div class="eyebrow">META TÉCNICA ATUAL</div><h3>' + esc(state.goals.text) + '</h3><p>Revisão combinada com o professor para ' + state.goals.review + '.</p><div class="goal-progress"><span>Progresso do ciclo</span><b>' + state.goals.progress + '%</b></div><div class="mini-bar"><span style="width:' + state.goals.progress + '%"></span></div><button class="btn primary" data-action="goal" style="margin-top:17px">' + icon('edit') + 'Atualizar meta técnica</button></section><section class="panel">' + panelHead('Plano de evolução', 'Pequenas ações para o próximo nível') + goalStep('1', 'Domínio orientado', 'Preparar o corpo antes de receber a bola.', true) + goalStep('2', 'Decisão em dois toques', 'Identificar duas opções antes do domínio.', true) + goalStep('3', 'Treino no percurso de explosão', 'Buscar consistência antes de baixar o tempo.', false) + goalStep('4', 'Revisão com o professor', 'Reavaliar técnica, força e explosão em novembro.', false) + '</section></div><aside class="stack"><section class="panel">' + panelHead('Conquistas do ciclo') + achievement('star', 'Visão de jogo', 'Três avaliações seguidas em evolução', true) + achievement('strength', 'Força em alta', 'Evoluiu 3,8 kgf desde agosto', true) + achievement('bolt', 'Explosão em evolução', 'Reduziu 0,44 s no percurso', true) + achievement('target', 'Metas físicas', 'Alcance força e explosão definidas', false) + '</section><div class="privacy-note">' + icon('info', 'sm') + '<span>As metas são individuais e podem ser revisadas com o professor a qualquer momento.</span></div></aside></div></div>';
  }

  function goalStep(number, title, text, done) {
    return '<div class="assessment-score"><span class="score-pill ' + (done ? 'green' : '') + '">' + (done ? icon('check', 'sm') : number) + '</span><div class="assessment-score-info"><strong>' + title + '</strong><small>' + text + '</small></div></div>';
  }

  function achievement(iconName, title, text, unlocked) {
    return '<div class="assessment-score"><span class="score-pill ' + (unlocked ? 'green' : '') + '">' + icon(iconName) + '</span><div class="assessment-score-info"><strong>' + title + '</strong><small>' + text + '</small></div><span class="tag ' + (unlocked ? 'green' : '') + '">' + (unlocked ? 'Conquistada' : 'Em progresso') + '</span></div>';
  }

  function schedulePage() {
    var filteredUnits = units.filter(function (unit) { return state.scheduleUnit === 'all' || unit.id === state.scheduleUnit; });
    var unitOptions = '<option value="all">Todas as unidades</option>' + units.map(function (unit) { return '<option value="' + unit.id + '" ' + (state.scheduleUnit === unit.id ? 'selected' : '') + '>' + unit.name + '</option>'; }).join('');
    return pageHead('GRADE DE TREINOS', 'Escolha a unidade e confira os horários.', 'As nove unidades aparecem separadamente para facilitar a consulta da grade semanal.', '<button class="btn secondary" data-action="schedule-image">' + icon('eye') + 'Ver grade oficial</button>') +
      '<div class="filters"><select class="filter-control" id="schedule-unit">' + unitOptions + '</select></div>' +
      '<div class="unit-schedule-grid">' + filteredUnits.map(unitScheduleCard).join('') + '</div><div class="privacy-note orange" style="margin-top:18px">' + icon('calendar', 'sm') + '<span>Os horários são informativos e podem ser ajustados pela equipe. Consulte os avisos antes de se deslocar.</span></div>';
  }

  function unitScheduleCard(unit) {
    var grouped = {};
    unit.slots.forEach(function (slot) { if (!grouped[slot[0]]) grouped[slot[0]] = []; grouped[slot[0]].push(slot); });
    var query = encodeURIComponent(unit.address || ('Squadra Soccer ' + unit.name + ' ' + unit.city));
    return '<section class="panel unit-schedule-card"><div class="unit-card-top"><div><span class="tag"><i class="unit-color" style="background:' + unit.color + '"></i>' + unit.city + '</span><h2>' + unit.name + '</h2><p>' + unit.teacher + (unit.address ? ' · ' + unit.address : '') + '</p></div><span class="score-pill" style="background:' + unit.color + '18;color:' + unit.color + '">' + icon('map') + '</span></div><div class="unit-days">' + Object.keys(grouped).map(function (day) { return '<div class="unit-day-row"><strong>' + day + '</strong><div>' + grouped[day].map(function (slot) { return '<span class="time-chip"><b>' + slot[1] + '</b>–' + slot[2] + (slot[3] ? '<small>' + slot[3] + '</small>' : '') + '</span>'; }).join('') + '</div></div>'; }).join('') + '</div><div class="unit-links"><a class="text-button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + query + '">Google Maps ' + icon('arrow', 'sm') + '</a><a class="text-button" target="_blank" rel="noopener" href="https://www.waze.com/ul?q=' + query + '">Waze ' + icon('arrow', 'sm') + '</a></div></section>';
  }

  function cupPage() {
    return pageHead('SQUADRA CUP', 'A rivalidade saudável entre unidades.', 'Acompanhe seu time, jogos, classificação e os recados do técnico.') + cupView();
  }

  function experiencePage() {
    return pageHead('SQUADRA EXPERIENCE', 'Faça parte de um time Squadra.', 'Um projeto separado da Cup, com treinos próprios, amistosos e campeonatos externos.') + experienceView();
  }

  function rankingPage() {
    return pageHead('RANKING DE ATLETAS', 'Evolução que vira conquista.', 'Uma gamificação saudável baseada em evolução técnica, física, metas e experiências.') + rankingView();
  }

  function pollsPage() {
    return pageHead('ENQUETES', 'Sua opinião entra em campo.', 'Vote nas decisões da comunidade e acompanhe os resultados agregados.') + pollsView();
  }

  function productsPage() {
    return pageHead('PRODUTOS SQUADRA', 'Demonstre interesse nos produtos.', 'Escolha suas preferências e aguarde o contato da equipe, sem pagamento pelo aplicativo.') + productsView();
  }

  function cupView() {
    var standings = [
      ['Piqueri Orange', 12, 4, '+8'],
      ['Freguesia Wolves', 10, 4, '+5'],
      ['Pestana FC', 7, 4, '+1'],
      ['Vila Guilherme', 5, 4, '-2']
    ];
    return '<div class="grid-main"><div class="stack"><section class="cup-banner"><img src="assets/squadra-cup-2026.png" alt=""><div class="cup-banner-content"><span class="tag orange">TEMPORADA 2026</span><h3>Squadra Cup</h3><p>O campeonato interno que coloca as unidades frente a frente.</p><button class="btn primary" style="margin-top:15px" data-action="cup-interest">' + icon('trophy') + 'Quero participar</button></div></section><section class="panel">' + panelHead('Próximos jogos', 'Rodada 5 · sábado, 24 de outubro') + matchRow('Piqueri Orange', 'Pestana FC', '09:00', 'Arena Central') + matchRow('Freguesia Wolves', 'Vila Guilherme', '10:20', 'Arena Central') + '</section></div><aside class="stack"><section class="panel">' + panelHead('Classificação', 'Após 4 rodadas') + '<div class="standing-row header"><span>#</span><span>TIME</span><span>PTS</span><span>J</span><span>SG</span></div>' + standings.map(function (team, index) { return '<div class="standing-row ' + (index === 0 ? 'highlight' : '') + '"><span class="position-number">' + (index + 1) + '</span><strong>' + team[0] + '</strong><b>' + team[1] + '</b><span>' + team[2] + '</span><span>' + team[3] + '</span></div>'; }).join('') + '</section><section class="panel">' + panelHead('Meu time', 'Piqueri Orange') + '<div class="coach-row"><span class="avatar orange">RF</span><div><strong>Técnico Rafael</strong><small>Recado para a rodada</small></div></div><div class="feedback-quote" style="margin-top:14px">Vamos manter linhas compactas e acelerar pelos lados. Cheguem 30 minutos antes do jogo.</div><div class="grid-2" style="margin-top:15px">' + metric('Próximo jogo', '24', 'OUT', '09:00 · Arena Central', 100, 'calendar') + metric('Posição', '1º', '', '12 pontos', 92, 'trophy') + '</div></section></aside></div>';
  }

  function matchRow(home, away, time, place) {
    return '<div class="assessment-score"><span class="score-pill dark">' + time.replace(':', 'h') + '</span><div class="assessment-score-info"><strong>' + home + ' <span class="muted">x</span> ' + away + '</strong><small>' + place + '</small></div><button class="icon-btn" data-action="match-detail" aria-label="Ver jogo">' + icon('chevron') + '</button></div>';
  }

  function experienceView() {
    var interested = state.experienceInterest;
    return '<div class="grid-main"><div class="stack"><section class="experience-hero"><svg class="experience-pitch" viewBox="0 0 800 400"><rect x="40" y="35" width="720" height="330" rx="4" fill="none" stroke="white"/><line x1="400" y1="35" x2="400" y2="365" stroke="white"/><circle cx="400" cy="200" r="72" fill="none" stroke="white"/><rect x="40" y="115" width="120" height="170" fill="none" stroke="white"/><rect x="640" y="115" width="120" height="170" fill="none" stroke="white"/></svg><div class="experience-content"><span class="tag orange">NOVO PROJETO</span><h2>Vista a camisa.<br>Faça parte do time.</h2><p>O Squadra Experience é uma atividade à parte: treinos dedicados, amistosos e campeonatos, com comissão técnica e a experiência de defender um time de verdade.</p>' + (interested ? '<div class="interest-state">' + icon('check') + '<span><b>Interesse registrado!</b><br>A equipe Squadra entrará em contato com os próximos passos.</span></div>' : '<button class="btn primary" data-action="experience-interest" style="margin-top:20px">' + icon('shirt') + 'Quero fazer parte</button>') + '</div></section><section class="panel">' + panelHead('Como funciona', 'Uma jornada de time completa') + '<div class="grid-3">' + featureCard('users', 'Time Squadra', 'Elenco formado por jogadores interessados e selecionados para o projeto.') + featureCard('clipboard', 'Treinos dedicados', 'Preparação específica com técnico, tática e funções bem definidas.') + featureCard('trophy', 'Jogos de verdade', 'Amistosos e campeonatos externos durante a temporada.') + '</div></section></div><aside class="stack"><section class="panel">' + panelHead('Próxima temporada', 'Manifestação de interesse') + '<div class="assessment-score"><span class="score-pill">' + icon('calendar') + '</span><div class="assessment-score-info"><strong>Início previsto</strong><small>Fevereiro de 2027</small></div></div><div class="assessment-score"><span class="score-pill">' + icon('map') + '</span><div class="assessment-score-info"><strong>Treinos</strong><small>1 encontro semanal · local a definir</small></div></div><div class="assessment-score"><span class="score-pill">' + icon('trophy') + '</span><div class="assessment-score-info"><strong>Calendário</strong><small>Amistosos e campeonatos regionais</small></div></div><div class="privacy-note orange" style="margin-top:15px">' + icon('info', 'sm') + '<span>Demonstrar interesse não garante vaga e não gera cobrança. A equipe apresentará formato, valores e condições fora do aplicativo.</span></div></section></aside></div>';
  }

  function featureCard(iconName, title, text) {
    return '<article class="metric-card"><div class="metric-top">' + icon(iconName) + '</div><h3 style="margin-top:15px;font-size:11px">' + title + '</h3><p class="metric-note">' + text + '</p></article>';
  }

  function rankingName(player) {
    return player.id === 'gui' ? (state.profile.nickname || player.name.split(' ')[0]) : player.nick;
  }

  function rankingView() {
    var sorted = players.slice().sort(function (a, b) { return b.points - a.points; });
    var podium = [sorted[1], sorted[0], sorted[2]];
    return '<div class="grid-main"><section class="panel">' + panelHead('Ranking de atletas', 'Pontos por evolução, metas e participação em experiências') +
      '<div class="filters"><select class="filter-control" id="ranking-category"><option value="general" ' + (state.rankingCategory === 'general' ? 'selected' : '') + '>Ranking geral</option><option value="technical" ' + (state.rankingCategory === 'technical' ? 'selected' : '') + '>Evolução técnica</option><option value="physical" ' + (state.rankingCategory === 'physical' ? 'selected' : '') + '>Evolução física</option><option value="goals" ' + (state.rankingCategory === 'goals' ? 'selected' : '') + '>Metas concluídas</option></select><select class="filter-control"><option>Todas as unidades</option>' + units.map(function (unit) { return '<option>' + unit.name + '</option>'; }).join('') + '</select></div>' +
      '<div class="rank-top">' + podium.map(function (player, index) { var first = index === 1; var name = rankingName(player); return '<div class="podium ' + (first ? 'first' : '') + '">' + avatarMarkup(name, first ? 'orange' : '', player.id === 'gui') + '<strong>' + esc(name) + '</strong><small>' + unitName(player.unit) + '</small><b>' + player.points + '</b><small>pontos</small></div>'; }).join('') + '</div>' +
      sorted.map(function (player, index) { var name = rankingName(player); return '<div class="rank-row ' + (player.id === 'gui' ? 'me' : '') + '"><b>' + (index + 1) + '</b>' + avatarMarkup(name, 'sm', player.id === 'gui') + '<div class="rank-name"><strong>' + esc(name) + (player.id === 'gui' ? ' · você' : '') + '</strong><small>' + unitName(player.unit) + ' · ' + player.position + '</small></div><div class="rank-points">' + player.points + '<small>PONTOS</small></div></div>'; }).join('') +
      '</section><aside class="stack"><section class="panel">' + panelHead('Como pontua?', 'Modelo demonstrativo') + scoringRow('chart', 'Evolução técnica', '+10 a +80 pts') + scoringRow('strength', 'Evolução física', '+10 a +80 pts') + scoringRow('target', 'Metas concluídas', '+100 pts') + scoringRow('trophy', 'Cup e Experience', '+20 a +150 pts') + '</section><div class="privacy-note">' + icon('lock', 'sm') + '<span>O ranking não usa peso, presença ou dados sensíveis. O jogador pode escolher aparecer pelo primeiro nome ou apelido.</span></div></aside></div>';
  }

  function scoringRow(iconName, title, points) {
    return '<div class="assessment-score"><span class="score-pill">' + icon(iconName) + '</span><div class="assessment-score-info"><strong>' + title + '</strong><small>Reconhece desenvolvimento e constância</small></div><span class="tag orange">' + points + '</span></div>';
  }

  function pollData() {
    return [
      { id: 'uniform', question: 'Qual cor você prefere para o próximo uniforme?', ends: '25/10/2026', voters: 184, options: [{ label: 'Preto com laranja', votes: 92 }, { label: 'Laranja com preto', votes: 57 }, { label: 'Branco com detalhes', votes: 35 }] },
      { id: 'clinic', question: 'Qual tema você quer no próximo treino especial?', ends: '30/10/2026', voters: 126, options: [{ label: 'Finalização', votes: 48 }, { label: 'Drible e 1x1', votes: 43 }, { label: 'Posicionamento', votes: 35 }] }
    ].concat(state.adminPolls || []);
  }

  function pollsView() {
    return '<div class="grid-2">' + pollData().map(function (poll) {
      var voted = state.pollVotes[poll.id];
      var total = poll.options.reduce(function (sum, option) { return sum + option.votes; }, 0) + (voted ? 1 : 0);
      return '<section class="panel">' + panelHead('Enquete ativa', 'Encerra em ' + poll.ends, '<span class="tag green"><span class="dot"></span> ABERTA</span>') + '<h3 style="font-size:16px;line-height:1.4">' + esc(poll.question) + '</h3><div style="margin-top:16px">' + poll.options.map(function (option) {
        var votes = option.votes + (voted === option.label ? 1 : 0);
        var pct = Math.round(votes / total * 100);
        if (voted) return '<div class="poll-option"><button class="' + (voted === option.label ? 'selected' : '') + '" disabled><span class="poll-option-fill" style="width:' + pct + '%"></span><span>' + esc(option.label) + '</span><b>' + pct + '%</b></button></div>';
        return '<div class="poll-option"><button data-action="poll-vote" data-id="' + poll.id + '" data-value="' + esc(option.label) + '"><span>' + esc(option.label) + '</span></button></div>';
      }).join('') + '</div><div class="poll-meta"><span>' + (total) + ' votos</span><span>' + (voted ? 'Seu voto: ' + esc(voted) : 'Escolha uma opção') + '</span></div><div class="privacy-note" style="margin-top:15px">' + icon('info', 'sm') + '<span>Os jogadores veem apenas o resultado geral. A gestão consegue identificar quem participou.</span></div></section>';
    }).join('') + '</div>';
  }

  function productsView() {
    var products = [
      { id: 'shirt-training', title: 'Camisa de treino', subtitle: 'Dry-fit oficial Squadra', art: 'orange-art', shape: '' },
      { id: 'shirt-black', title: 'Camisa lifestyle', subtitle: 'Preta · edição Squadra', art: 'black-art', shape: 'orange-shirt' },
      { id: 'kit', title: 'Kit de treino', subtitle: 'Camisa + shorts', art: '', shape: '' }
    ];
    return '<div class="stack"><div class="privacy-note orange">' + icon('shirt', 'sm') + '<span>Este é um catálogo de interesse. Você escolhe o item e a equipe entra em contato. Não existe pagamento dentro do aplicativo.</span></div><div class="product-grid">' + products.map(function (product) {
      var interested = state.productInterests.some(function (item) { return item.product === product.id; });
      return '<article class="product-card"><div class="product-art ' + product.art + '"><span class="jersey-shape ' + product.shape + '"></span></div><div class="product-body"><h3>' + product.title + '</h3><p>' + product.subtitle + '</p><button class="btn ' + (interested ? 'soft' : 'dark') + '" data-action="product-interest" data-id="' + product.id + '" data-title="' + product.title + '">' + icon(interested ? 'check' : 'shirt') + (interested ? 'Interesse enviado' : 'Tenho interesse') + '</button></div></article>';
    }).join('') + '</div></div>';
  }

  function profilePage() {
    var nickname = state.profile.nickname || 'Guilherme';
    var birthLabel = state.profile.birthDate ? state.profile.birthDate.split('-').reverse().join('/') : 'Não informada';
    return pageHead('MEU PERFIL', 'Seu espaço no Squadra.', 'Preferências, privacidade e canal direto de feedback.') +
      '<div class="grid-main"><div class="stack"><section class="profile-card"><div class="profile-main">' + avatarMarkup('Guilherme Pontes', 'orange lg', true) + '<div><h2>Guilherme Pontes</h2><p>' + esc(nickname) + ' · Meio-campo · Unidade Piqueri</p></div></div><div class="profile-meta"><div><small>DATA DE NASCIMENTO</small><strong>' + birthLabel + '</strong></div><div><small>IDADE</small><strong>' + ageFromBirth(state.profile.birthDate) + ' anos</strong></div><div><small>PROFESSOR</small><strong>Rafael Mendes</strong></div></div><button class="btn ghost" data-action="profile-edit" style="margin-top:18px">' + icon('edit') + 'Editar perfil e foto</button></section><section class="panel">' + panelHead('Minha experiência', 'Escolha para quem deseja enviar o feedback') + '<div class="notice orange">' + icon('message') + '<span><b>Seu feedback é confidencial.</b><br>A gestão identifica o autor. Quando o destino é um professor, ele recebe o conteúdo sem seu nome.</span></div><div class="grid-2" style="margin-top:14px"><button class="btn primary" data-action="feedback" data-feedback-type="Professor">' + icon('users') + 'Feedback do professor</button><button class="btn dark" data-action="feedback" data-feedback-type="Gestão / Squadra geral">' + icon('shield') + 'Feedback da gestão</button></div></section></div><aside class="stack"><section class="panel">' + panelHead('Preferências e privacidade') + settingRow('user', 'Dados do perfil', 'Apelido, foto e data de nascimento', 'profile-edit') + settingRow('star', 'Nome no ranking', 'Exibir como “' + esc(nickname) + '”', 'profile-edit') + settingRow('bell', 'Notificações', 'Avaliações, jogos e avisos', 'notifications') + settingRow('lock', 'Dados físicos', 'Peso visível apenas para autorizados', 'privacy') + settingRow('target', 'Minhas metas', 'Técnica, força e explosão', 'physical-goals') + '</section><section class="panel">' + panelHead('Meus interesses') + interestSummary('Experience', state.experienceInterest ? 'Interesse registrado' : 'Ainda não demonstrado', state.experienceInterest) + interestSummary('Produtos Squadra', state.productInterests.length + ' interesse(s)', state.productInterests.length > 0) + interestSummary('Squadra Cup', 'Temporada 2026', true) + '</section></aside></div>';
  }

  function settingRow(iconName, title, subtitle, action) {
    return '<div class="settings-row"><span class="settings-icon">' + icon(iconName) + '</span><div class="settings-info"><strong>' + title + '</strong><small>' + subtitle + '</small></div><button class="icon-btn" data-action="' + action + '">' + icon('chevron') + '</button></div>';
  }

  function interestSummary(title, subtitle, active) {
    return '<div class="assessment-score"><span class="score-pill ' + (active ? 'green' : '') + '">' + icon(active ? 'check' : 'info') + '</span><div class="assessment-score-info"><strong>' + title + '</strong><small>' + subtitle + '</small></div></div>';
  }

  function teacherHome() {
    var evaluated = players.filter(function (player) { return player.status === 'avaliado'; }).length;
    return pageHead('ÁREA DO PROFESSOR', 'Desenvolvimento em primeiro plano.', 'Avalie com clareza, acompanhe pendências e devolva orientações úteis para cada jogador.', '<button class="btn primary" data-action="new-evaluation">' + icon('plus') + 'Nova avaliação</button>') +
      '<div class="grid-4 metrics-mobile">' + metric('Jogadores', players.length, 'ativos', 'Unidade Piqueri', 100, 'users') + metric('Avaliados no mês', evaluated, 'de ' + players.length, '+' + Math.round(evaluated / players.length * 100) + '% da base', Math.round(evaluated / players.length * 100), 'clipboard') + metric('Pendentes', players.length - evaluated, 'jogadores', 'Avaliação de outubro', 38, 'calendar') + metric('Metas abertas', 6, '', '4 em evolução', 67, 'target') + '</div><div class="grid-main" style="margin-top:20px"><div class="stack"><section class="panel">' + panelHead('Avaliações pendentes', 'Prioridades para fechar o ciclo', '<button class="text-button" data-go="players">Ver jogadores ' + icon('arrow', 'sm') + '</button>') + players.filter(function (player) { return player.status === 'pendente'; }).map(teacherPlayerRow).join('') + '</section><section class="panel">' + panelHead('Atualizações recentes', 'Últimas devolutivas publicadas') + players.filter(function (player) { return player.status === 'avaliado'; }).slice(0, 4).map(function (player) { return '<div class="player-row"><span class="avatar">' + initials(player.name) + '</span><div class="player-row-info"><strong>' + player.name + '</strong><small>Avaliação técnica e física publicadas</small></div><span class="tag green">Concluída</span><button class="icon-btn" data-action="open-player" data-id="' + player.id + '">' + icon('chevron') + '</button></div>'; }).join('') + '</section></div><aside class="stack"><section class="panel">' + panelHead('Avaliação mensal', 'Fluxo sugerido') + goalStep('1', 'Escolha o jogador', 'Confira histórico e meta atual.', true) + goalStep('2', 'Avalie o observado', 'Use 1 a 5 ou “não observado”.', true) + goalStep('3', 'Registre os testes físicos', 'Peso, dinamômetro e tempo de explosão.', false) + goalStep('4', 'Escreva o próximo passo', 'Feedback curto e acionável.', false) + '</section><div class="privacy-note orange">' + icon('message', 'sm') + '<span>Feedbacks dos jogadores chegam sem identificação para o professor. A gestão preserva o autor para acompanhamento.</span></div></aside></div>';
  }

  function teacherPlayerRow(player) {
    return '<div class="player-row"><span class="avatar orange">' + initials(player.name) + '</span><div class="player-row-info"><strong>' + player.name + '</strong><small>' + player.position + ' · ' + unitName(player.unit) + '</small></div><div class="coverage"><b>Última: setembro</b>Avaliação atrasada</div><button class="btn soft" data-action="evaluate-player" data-id="' + player.id + '">Avaliar</button></div>';
  }

  function playersPage() {
    var filtered = players.filter(function (player) { return state.role === 'admin' || player.unit === 'piqueri'; });
    return pageHead('JOGADORES', 'Acompanhe cada trajetória.', 'Abra o histórico antes de avaliar e mantenha o feedback conectado às metas do jogador.', '<button class="btn primary" data-action="new-evaluation">' + icon('plus') + 'Nova avaliação</button>') +
      '<section class="panel"><div class="filters"><div class="search-box" style="flex:1;min-width:220px">' + icon('search') + '<input id="player-search" type="search" placeholder="Buscar jogador..." aria-label="Buscar jogador"></div><select class="filter-control" id="player-status"><option value="all">Todos os status</option><option value="pendente">Pendentes</option><option value="avaliado">Avaliados</option></select></div><div id="player-list">' + filtered.map(fullPlayerRow).join('') + '</div></section>';
  }

  function fullPlayerRow(player) {
    return '<div class="player-row" data-player-name="' + player.name.toLowerCase() + '" data-player-status="' + player.status + '"><span class="avatar">' + initials(player.name) + '</span><div class="player-row-info"><strong>' + player.name + '</strong><small>' + player.position + ' · ' + unitName(player.unit) + ' · Meta: ' + player.goals + ' concluída(s)</small></div><div class="coverage"><b>Técnica ' + String(player.technical).replace('.', ',') + '</b>Físico ' + String(player.physical).replace('.', ',') + '</div><button class="btn secondary" data-action="open-player" data-id="' + player.id + '">Ver jogador</button></div>';
  }

  function evaluationsPage() {
    return pageHead('AVALIAÇÕES', 'Mensal, simples e útil.', 'Registre técnica e físico em etapas curtas, com rascunho e histórico por jogador.', '<button class="btn primary" data-action="new-evaluation">' + icon('plus') + 'Iniciar avaliação</button>') +
      '<div class="grid-main"><section class="panel">' + panelHead('Ciclo de outubro', 'Situação por jogador') + players.filter(function (player) { return player.unit === 'piqueri'; }).map(function (player) { return '<div class="player-row"><span class="avatar">' + initials(player.name) + '</span><div class="player-row-info"><strong>' + player.name + '</strong><small>' + player.position + ' · última avaliação: ' + (player.status === 'avaliado' ? 'outubro' : 'setembro') + '</small></div><span class="tag ' + (player.status === 'avaliado' ? 'green' : 'yellow') + '">' + (player.status === 'avaliado' ? 'Concluída' : 'Pendente') + '</span><button class="icon-btn" data-action="' + (player.status === 'avaliado' ? 'open-player' : 'evaluate-player') + '" data-id="' + player.id + '">' + icon(player.status === 'avaliado' ? 'eye' : 'plus') + '</button></div>'; }).join('') + '</section><aside class="stack"><section class="panel">' + panelHead('Medições físicas mensais', 'Protocolo padronizado') + scoringRow('weight', 'Peso', 'Privado') + scoringRow('strength', 'Força no dinamômetro', 'kgf') + scoringRow('spark', 'Tempo de explosão', 'segundos') + '<div class="privacy-note" style="margin-top:14px">' + icon('info', 'sm') + '<span>Use sempre o mesmo dinamômetro e o percurso cadastrado para manter o histórico comparável.</span></div></section><section class="panel">' + panelHead('Rascunhos') + '<div class="empty">Nenhum rascunho pendente.<br>Uma avaliação em andamento será salva automaticamente.</div></section></aside></div>';
  }

  function coachProfilePage() {
    return pageHead('PERFIL DO PROFESSOR', 'Seu painel de acompanhamento.', 'Preferências, unidade e orientações para avaliações consistentes.') +
      '<div class="grid-main"><section class="profile-card"><div class="profile-main"><span class="avatar orange lg">RF</span><div><h2>Rafael Mendes</h2><p>Professor · Unidade Piqueri</p></div></div><div class="profile-meta"><div><small>JOGADORES</small><strong>8 acompanhados</strong></div><div><small>AVALIAÇÕES</small><strong>5 neste mês</strong></div><div><small>COBERTURA</small><strong>63%</strong></div></div></section><aside class="panel">' + panelHead('Orientações') + settingRow('clipboard', 'Escala técnica', '1 inicial · 5 destaque', 'methodology') + settingRow('strength', 'Protocolos físicos', 'Peso, dinamômetro e percurso', 'methodology') + settingRow('message', 'Feedback aos jogadores', 'Curto, concreto e acionável', 'methodology') + '</aside></div>';
  }

  function adminHome() {
    return pageHead('GESTÃO DE JOGADORES', 'Visão completa da evolução.', 'Qualidade das avaliações, experiência dos jogadores e engajamento na comunidade — sem módulos financeiros.') +
      '<div class="grid-4 metrics-mobile">' + metric('Jogadores ativos', '486', '', '+18 no trimestre', 86, 'users') + metric('Cobertura mensal', '78', '%', '+9 pontos no mês', 78, 'clipboard') + metric('Feedback médio', '4,6', '/ 5', '32 respostas', 92, 'message') + metric('Interesses ativos', '67', '', 'Experience e produtos', 69, 'star') + '</div><div class="grid-main" style="margin-top:20px"><div class="stack"><section class="panel">' + panelHead('Cobertura por unidade', 'Avaliações técnicas e físicas de outubro') + adminUnitRow('Piqueri', 86, 118, 102) + adminUnitRow('Freguesia do Ó', 81, 132, 107) + adminUnitRow('Pestana', 74, 106, 78) + adminUnitRow('Vila Guilherme', 68, 130, 88) + '</section><section class="panel">' + panelHead('Pontos de atenção', 'Ações recomendadas') + attentionRow('calendar', '42 avaliações ainda pendentes', 'Priorizar as unidades com menor cobertura', 'Ver avaliações', 'admin-evaluations') + attentionRow('message', '3 feedbacks pedem retorno', 'A gestão conhece os autores e pode acompanhar', 'Ver feedbacks', 'admin-feedback') + attentionRow('shirt', '21 novos interesses em produtos', 'Organizar contato por item e tamanho', 'Ver comunidade', 'admin-community') + '</section></div><aside class="stack"><section class="panel">' + panelHead('Engajamento Squadra') + scoringRow('trophy', 'Squadra Cup', '94 inscritos') + scoringRow('shirt', 'Squadra Experience', (state.experienceInterest ? 47 : 46) + ' interessados') + scoringRow('vote', 'Enquetes', '310 votos') + scoringRow('shirt', 'Produtos', (21 + state.productInterests.length) + ' interesses') + '</section><div class="privacy-note">' + icon('shield', 'sm') + '<span>Somente a gestão identifica autores de feedback e votos. Professores recebem informações anonimizadas.</span></div></aside></div>';
  }

  function adminUnitRow(name, pct, total, done) {
    return '<div class="assessment-score"><span class="score-pill">' + pct + '%</span><div class="assessment-score-info"><strong><span>' + name + '</span><span>' + done + ' de ' + total + '</span></strong><small>Avaliações do ciclo atual</small><div class="mini-bar"><span style="width:' + pct + '%"></span></div></div></div>';
  }

  function attentionRow(iconName, title, text, action, go) {
    return '<div class="assessment-score"><span class="score-pill">' + icon(iconName) + '</span><div class="assessment-score-info"><strong>' + title + '</strong><small>' + text + '</small></div><button class="text-button" data-go="' + go + '">' + action + ' ' + icon('arrow', 'sm') + '</button></div>';
  }

  function adminEvaluationsPage() {
    return pageHead('COBERTURA DE AVALIAÇÕES', 'Nenhum jogador fica sem retorno.', 'Acompanhe pendências, consistência e publicação das avaliações mensais.', '<button class="btn secondary" data-action="export">' + icon('clipboard') + 'Exportar relatório</button>') +
      '<div class="grid-main"><section class="panel">' + panelHead('Pendências do ciclo', '42 jogadores em toda a rede') + '<div class="table-wrap"><table><thead><tr><th>Jogador</th><th>Unidade</th><th>Professor</th><th>Última avaliação</th><th>Status</th><th>Ação</th></tr></thead><tbody>' + players.filter(function (player) { return player.status === 'pendente'; }).map(function (player) { return '<tr><td><b>' + player.name + '</b></td><td>' + unitName(player.unit) + '</td><td>' + units.find(function (unit) { return unit.id === player.unit; }).teacher + '</td><td>Setembro/2026</td><td><span class="tag yellow">Pendente</span></td><td><button class="text-button" data-action="open-player" data-id="' + player.id + '">Ver jogador</button></td></tr>'; }).join('') + '</tbody></table></div></section><aside class="stack"><section class="panel">' + panelHead('Qualidade do preenchimento') + adminUnitRow('Fundamentos observados', 92, 486, 447) + adminUnitRow('Feedback acionável', 84, 486, 408) + adminUnitRow('Testes físicos completos', 76, 486, 369) + '</section><div class="privacy-note orange">' + icon('info', 'sm') + '<span>A gestão pode ajustar os protocolos e critérios; a metodologia deve ser validada antes de criar qualquer nota geral.</span></div></aside></div>';
  }

  function adminFeedbackPage() {
    return pageHead('FEEDBACKS DOS JOGADORES', 'Escuta com responsabilidade.', 'A gestão identifica o autor para acompanhamento. Professores recebem apenas a visão anonimizada.') +
      '<div class="grid-main"><section class="panel">' + panelHead('Respostas recentes', state.feedbacks.length + ' feedbacks demonstrativos') + state.feedbacks.map(function (feedback) {
        return '<article style="padding:17px 0;border-bottom:1px solid var(--line)"><div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div class="coach-row"><span class="avatar orange">' + initials(feedback.player) + '</span><div><strong>' + feedback.player + '</strong><small>' + feedback.unit + ' · ' + feedback.date + '</small></div></div><span class="tag orange">' + feedback.overall + '/5 ' + icon('star', 'sm') + '</span></div><div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:11px"><span class="tag blue">' + esc(feedback.type || 'Professor') + '</span><span class="tag">' + esc(feedback.subject || 'Squadra geral') + '</span></div><div class="feedback-quote" style="margin-top:12px">' + esc(feedback.text) + '</div><div style="display:flex;gap:7px;margin-top:11px"><span class="tag">Metodologia ' + feedback.methodology + '/5</span><span class="tag">Atendimento ' + feedback.teacher + '/5</span></div></article>';
      }).join('') + '</section><aside class="stack"><section class="panel">' + panelHead('Resumo da experiência') + '<div class="grid-2">' + metric('Geral', '4,6', '/ 5', '+0,2 no ciclo', 92, 'star') + metric('Metodologia', '4,7', '/ 5', '+0,3 no ciclo', 94, 'clipboard') + '</div><div style="margin-top:12px">' + metric('Professores', '4,5', '/ 5', '32 respostas', 90, 'users') + '</div></section><div class="privacy-note">' + icon('lock', 'sm') + '<span>Esses dados pessoais exigem controle de acesso e registro de auditoria na versão de produção.</span></div></aside></div>';
  }

  function adminCommunityPage() {
    var interests = state.interests.concat(state.experienceInterest ? [{ type: 'Experience', player: 'Guilherme Pontes', unit: 'Piqueri', date: '20/10/2026', status: 'Novo interesse' }] : []).concat(state.productInterests.map(function (item) { return { type: 'Produto — ' + item.title, player: 'Guilherme Pontes', unit: 'Piqueri', date: '20/10/2026', status: 'Novo interesse' }; }));
    return pageHead('COMUNIDADE E INTERESSES', 'Transforme interesse em relacionamento.', 'Cup, Experience, enquetes e produtos em um só painel, sempre sem cobrança dentro do app.', '<button class="btn primary" data-action="new-poll">' + icon('plus') + 'Criar enquete</button>') +
      '<div class="grid-main"><div class="stack"><section class="panel">' + panelHead('Interesses recentes', interests.length + ' registros') + '<div class="table-wrap"><table><thead><tr><th>Tipo</th><th>Jogador</th><th>Unidade</th><th>Data</th><th>Status</th></tr></thead><tbody>' + interests.map(function (item) { return '<tr><td><b>' + esc(item.type) + '</b></td><td>' + esc(item.player) + '</td><td>' + esc(item.unit) + '</td><td>' + item.date + '</td><td><select class="filter-control" style="min-height:34px;padding-top:6px;padding-bottom:6px"><option>' + item.status + '</option><option>Contatado</option><option>Pedido realizado</option><option>Entregue</option></select></td></tr>'; }).join('') + '</tbody></table></div></section><section class="panel">' + panelHead('Enquetes ativas', pollData().length + ' em andamento') + pollData().map(function (poll) { return '<div class="assessment-score"><span class="score-pill">' + icon('vote') + '</span><div class="assessment-score-info"><strong>' + esc(poll.question) + '</strong><small>' + poll.voters + ' votos · encerra em ' + poll.ends + '</small></div><span class="tag green">Ativa</span></div>'; }).join('') + '</section></div><aside class="stack"><section class="panel">' + panelHead('Resumo') + scoringRow('shirt', 'Experience', (46 + (state.experienceInterest ? 1 : 0)) + ' interessados') + scoringRow('shirt', 'Produtos', (21 + state.productInterests.length) + ' interessados') + scoringRow('trophy', 'Squadra Cup', '94 inscritos') + scoringRow('vote', 'Enquetes', '310 votos') + '</section><div class="privacy-note orange">' + icon('info', 'sm') + '<span>Interesse não representa compra, inscrição confirmada ou cobrança. O contato e qualquer contratação acontecem fora do aplicativo.</span></div></aside></div>';
  }

  function adminProfilePage() {
    return pageHead('CONFIGURAÇÕES DA GESTÃO', 'Regras claras, dados protegidos.', 'Ajuste critérios, privacidade e comunicação da plataforma.') +
      '<div class="grid-2"><section class="panel">' + panelHead('Metodologia') + settingRow('clipboard', 'Fundamentos técnicos', '10 critérios configurados', 'methodology') + settingRow('strength', 'Força mensal', 'Medição pelo dinamômetro em kgf', 'methodology') + settingRow('spark', 'Explosão mensal', 'Tempo no percurso padronizado', 'methodology') + settingRow('target', 'Metas e conquistas', 'Regras de gamificação', 'methodology') + '</section><section class="panel">' + panelHead('Privacidade e experiência') + settingRow('lock', 'Dados físicos', 'Acesso restrito', 'privacy') + settingRow('message', 'Feedback identificado', 'Visível somente à gestão', 'privacy') + settingRow('trophy', 'Ranking', 'Peso e presença não pontuam', 'methodology') + settingRow('megaphone', 'Comunicações', 'Avisos por unidade e perfil', 'notifications') + '</section></div>';
  }

  function render() {
    renderShell();
    var pages = {
      home: playerHome,
      evolution: evolutionPage,
      schedule: schedulePage,
      cup: cupPage,
      experience: experiencePage,
      ranking: rankingPage,
      polls: pollsPage,
      products: productsPage,
      profile: profilePage,
      'coach-home': teacherHome,
      players: playersPage,
      evaluations: evaluationsPage,
      'coach-profile': coachProfilePage,
      'admin-home': adminHome,
      'admin-evaluations': adminEvaluationsPage,
      'admin-feedback': adminFeedbackPage,
      'admin-community': adminCommunityPage,
      'admin-profile': adminProfilePage
    };
    var view = pages[state.page] || (state.role === 'player' ? playerHome : state.role === 'teacher' ? teacherHome : adminHome);
    $('#app-main').innerHTML = view();
  }

  function navigate(page) {
    if ($('#app-modal').open) closeModal();
    state.page = page;
    save();
    render();
    window.scrollTo({ top: 0, behavior: 'instant' });
    $('#app-main').focus({ preventScroll: true });
  }

  var toastTimer;
  function toast(message) {
    $('#toast').textContent = message;
    $('#toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { $('#toast').classList.remove('show'); }, 3300);
  }

  var lastFocus;
  function openModal(title, description, body) {
    lastFocus = document.activeElement;
    $('#modal-body').innerHTML = '<div class="modal-head"><h2 id="modal-title">' + title + '</h2><button class="icon-btn" data-action="close-modal" aria-label="Fechar">' + icon('close') + '</button></div>' + (description ? '<p class="modal-description">' + description + '</p>' : '') + body;
    if (!$('#app-modal').open) $('#app-modal').showModal();
  }

  function closeModal() {
    $('#app-modal').close();
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  }

  function modalActions(label) {
    return '<div class="modal-actions"><button type="button" class="btn secondary" data-action="close-modal">Cancelar</button><button type="submit" class="btn primary">' + icon('check') + (label || 'Salvar') + '</button></div>';
  }

  function feedbackModal(type) {
    var selectedType = type || 'Professor';
    var isTeacher = selectedType === 'Professor';
    var labels = isTeacher ? ['Experiência com o professor', 'Clareza das orientações', 'Qualidade do feedback'] : ['Experiência geral', 'Metodologia Squadra', 'Atendimento da gestão'];
    openModal(isTeacher ? 'Feedback do professor' : 'Feedback da gestão e Squadra', 'Seu nome ficará visível apenas para a gestão. O conteúdo destinado ao professor será apresentado sem sua identificação.', '<form id="feedback-form"><input type="hidden" name="type" value="' + selectedType + '"><div class="form-field"><label for="feedback-subject">' + (isTeacher ? 'Professor avaliado' : 'Área avaliada') + '</label><select id="feedback-subject" name="subject">' + (isTeacher ? '<option>Prof. Rafael</option><option>Prof. Marina</option><option>Prof. Diego</option><option>Prof. Bruno</option><option>Outro professor</option>' : '<option>Squadra em geral</option><option>Gestão da unidade</option><option>Metodologia</option><option>Comunicação</option>') + '</select></div><div class="privacy-note orange" style="margin-bottom:18px">' + icon('lock', 'sm') + '<span><b>Confidencial, mas identificado para a gestão.</b><br>Isso permite acolher e acompanhar situações importantes.</span></div>' + labels.map(function (label, index) { var name = ['overall', 'methodology', 'teacher'][index]; return '<fieldset class="form-field" style="border:0;padding:0"><legend>' + label + '</legend><div class="rating-options">' + [1,2,3,4,5].map(function (value) { return '<label><input type="radio" name="' + name + '" value="' + value + '" required><span>' + value + '</span></label>'; }).join('') + '</div><small>1 = precisa melhorar · 5 = excelente</small></fieldset>'; }).join('') + '<div class="form-field"><label for="feedback-text">Conte sua experiência</label><textarea id="feedback-text" name="text" required maxlength="1200" placeholder="O que está funcionando? O que pode melhorar?"></textarea></div>' + modalActions('Enviar feedback') + '</form>');
  }

  function goalModal() {
    openModal('Minha meta do ciclo', 'Defina um objetivo claro para revisar com seu professor.', '<form id="goal-form"><div class="form-field"><label for="goal-text">Objetivo</label><input id="goal-text" name="text" value="' + esc(state.goals.text) + '" required maxlength="160"></div><div class="form-grid"><div class="form-field"><label for="goal-progress">Progresso estimado (%)</label><input id="goal-progress" name="progress" type="number" min="0" max="100" value="' + state.goals.progress + '" required></div><div class="form-field"><label for="goal-review">Data de revisão</label><input id="goal-review" name="review" type="date" value="2026-11-15" required></div></div>' + modalActions('Atualizar meta') + '</form>');
  }

  function physicalGoalsModal() {
    openModal('Metas de força e explosão', 'Defina os números que você deseja atingir e revise com seu professor.', '<form id="physical-goals-form"><div class="form-grid"><div class="form-field"><label for="strength-goal">Meta de força (kgf)</label><input id="strength-goal" name="strength" type="number" min="1" max="150" step="0.1" value="' + state.physicalGoals.strength + '" required><small>Medida pelo dinamômetro.</small></div><div class="form-field"><label for="explosion-goal">Meta de explosão (segundos)</label><input id="explosion-goal" name="explosion" type="number" min="1" max="30" step="0.01" value="' + state.physicalGoals.explosion + '" required><small>Menor tempo no percurso indica evolução.</small></div></div><div class="form-field"><label for="physical-review">Data de revisão</label><input id="physical-review" name="review" type="date" value="' + dateForInput(state.physicalGoals.review) + '" required></div><div class="privacy-note">' + icon('target', 'sm') + '<span>As metas são individuais. O professor poderá orientar valores seguros e realistas.</span></div>' + modalActions('Salvar metas') + '</form>');
  }

  function profileEditModal() {
    openModal('Editar meu perfil', 'Seu nome permanece no cadastro. Você pode atualizar apelido, nascimento e foto.', '<form id="profile-form"><div class="form-field"><label for="profile-name">Nome completo</label><input id="profile-name" value="Guilherme Pontes" readonly></div><div class="form-grid"><div class="form-field"><label for="profile-nickname">Apelido</label><input id="profile-nickname" name="nickname" value="' + esc(state.profile.nickname) + '" maxlength="30" placeholder="Como prefere ser chamado?"></div><div class="form-field"><label for="profile-birth">Data de nascimento</label><input id="profile-birth" name="birthDate" type="date" value="' + state.profile.birthDate + '" required></div></div><div class="form-field"><label for="profile-photo">Foto de perfil</label><input id="profile-photo" name="photo" type="file" accept="image/png,image/jpeg,image/webp"><small>A foto fica salva somente neste navegador durante a demonstração.</small></div>' + modalActions('Salvar perfil') + '</form>');
  }

  function moreMenuModal() {
    openModal('Mais opções', 'Acesse as outras áreas do aplicativo.', '<div class="more-menu-grid"><button class="shortcut" data-go="experience"><span class="icon-wrap">' + icon('shirt') + '</span><span><strong>Experience</strong><small>Faça parte do time</small></span></button><button class="shortcut" data-go="ranking"><span class="icon-wrap">' + icon('star') + '</span><span><strong>Ranking</strong><small>Classificação de atletas</small></span></button><button class="shortcut" data-go="polls"><span class="icon-wrap">' + icon('vote') + '</span><span><strong>Enquetes</strong><small>Participe das decisões</small></span></button><button class="shortcut" data-go="products"><span class="icon-wrap">' + icon('shirt') + '</span><span><strong>Produtos</strong><small>Demonstre interesse</small></span></button><button class="shortcut" data-go="profile"><span class="icon-wrap">' + icon('user') + '</span><span><strong>Meu perfil</strong><small>Apelido, foto e feedbacks</small></span></button></div>');
  }

  function productModal(id, title) {
    var existing = state.productInterests.find(function (item) { return item.product === id; });
    openModal('Interesse em ' + esc(title), 'Escolha suas preferências. A equipe Squadra entrará em contato; nenhum pagamento será solicitado aqui.', '<form id="product-form" data-id="' + id + '" data-title="' + esc(title) + '"><div class="form-grid"><div class="form-field"><label for="product-size">Tamanho</label><select id="product-size" name="size"><option>P</option><option ' + (existing && existing.size === 'M' ? 'selected' : '') + '>M</option><option ' + (existing && existing.size === 'G' ? 'selected' : '') + '>G</option><option ' + (existing && existing.size === 'GG' ? 'selected' : '') + '>GG</option></select></div><div class="form-field"><label for="product-color">Cor</label><select id="product-color" name="color"><option>Preto</option><option>Laranja</option><option>Branco</option></select></div></div><div class="form-field"><label for="product-quantity">Quantidade</label><input id="product-quantity" name="quantity" type="number" min="1" max="10" value="' + (existing ? existing.quantity : 1) + '" required></div><label class="checkbox-row"><input type="checkbox" required> Entendo que isso apenas demonstra interesse e que a equipe fará contato para informar disponibilidade e condições.</label>' + modalActions(existing ? 'Atualizar interesse' : 'Tenho interesse') + '</form>');
  }

  function evaluationModal(playerId) {
    var player = players.find(function (item) { return item.id === playerId; }) || players[0];
    openModal('Avaliação mensal', 'Um fluxo rápido em três etapas. Registre apenas o que realmente foi observado.', '<form id="evaluation-form"><div class="form-grid"><div class="form-field"><label for="evaluation-player">Jogador</label><select id="evaluation-player" name="player">' + players.filter(function (item) { return item.unit === 'piqueri'; }).map(function (item) { return '<option value="' + item.id + '" ' + (item.id === player.id ? 'selected' : '') + '>' + item.name + '</option>'; }).join('') + '</select></div><div class="form-field"><label for="evaluation-date">Data</label><input id="evaluation-date" name="date" type="date" value="2026-10-20" required></div></div><div class="tabs" style="margin:18px 0 14px"><button class="tab active" type="button" data-action="eval-step" data-step="1">1 · Técnica</button><button class="tab" type="button" data-action="eval-step" data-step="2">2 · Física</button><button class="tab" type="button" data-action="eval-step" data-step="3">3 · Feedback</button></div><section class="eval-step" data-eval-panel="1"><div class="privacy-note" style="margin-bottom:13px">' + icon('info', 'sm') + '<span>Use “não observado” quando não houver evidência suficiente. Você não precisa preencher todos os fundamentos.</span></div><div class="grid-2">' + skillNames.map(function (name, index) { return '<div class="form-field"><label for="skill-' + index + '">' + name + '</label><select id="skill-' + index + '" name="skill' + index + '"><option value="">Não observado</option><option value="1">1 — Inicial</option><option value="2">2 — Em desenvolvimento</option><option value="3">3 — Consistente</option><option value="4">4 — Avançado</option><option value="5">5 — Destaque</option></select></div>'; }).join('') + '</div><div class="modal-actions"><button class="btn secondary" type="button" data-action="close-modal">Cancelar</button><button class="btn primary" type="button" data-action="eval-step" data-step="2">Continuar para físico ' + icon('arrow') + '</button></div></section><section class="eval-step" data-eval-panel="2" hidden><div class="privacy-note orange" style="margin-bottom:13px">' + icon('lock', 'sm') + '<span>Use as medições mensais oficiais: peso, dinamômetro e tempo no percurso de explosão.</span></div><div class="form-grid"><div class="form-field"><label>Peso (kg)</label><input name="weight" type="number" step="0.1" placeholder="83,4"></div><div class="form-field"><label>Força no dinamômetro (kgf)</label><input name="dynamometer" type="number" step="0.1" placeholder="38,6"></div><div class="form-field"><label>Tempo de explosão (segundos)</label><input name="explosionTime" type="number" step="0.01" placeholder="6,84"></div><div class="form-field"><label>Protocolo do percurso</label><select name="course"><option>Percurso Squadra 30 m</option><option>Outro percurso cadastrado</option></select></div></div><div class="modal-actions"><button class="btn secondary" type="button" data-action="eval-step" data-step="1">Voltar</button><button class="btn primary" type="button" data-action="eval-step" data-step="3">Continuar para feedback ' + icon('arrow') + '</button></div></section><section class="eval-step" data-eval-panel="3" hidden><div class="form-field"><label for="evaluation-note">O que evoluiu?</label><textarea id="evaluation-note" name="note" required placeholder="Descreva uma evolução concreta observada neste ciclo..."></textarea></div><div class="form-field"><label for="evaluation-next">Qual é o próximo passo?</label><input id="evaluation-next" name="next" required maxlength="180" placeholder="Ex.: reduzir o tempo do percurso mantendo a execução correta"></div><div class="privacy-note">' + icon('message', 'sm') + '<span>O jogador verá esse retorno no painel e poderá acompanhar o objetivo no próximo ciclo.</span></div><div class="modal-actions"><button class="btn secondary" type="button" data-action="eval-step" data-step="2">Voltar</button><button class="btn primary" type="submit">' + icon('check') + 'Publicar avaliação</button></div></section></form>');
  }

  function playerModal(id) {
    var player = players.find(function (item) { return item.id === id; });
    if (!player) return;
    openModal(player.name, player.position + ' · ' + unitName(player.unit), '<div class="grid-2">' + metric('Técnica', String(player.technical).replace('.', ','), '/ 5', 'Última avaliação', player.technical * 20, 'chart') + metric('Físico', String(player.physical).replace('.', ','), '/ 5', 'Última avaliação', player.physical * 20, 'strength') + '</div><div class="goal-card" style="margin-top:15px"><div class="eyebrow">META ATUAL</div><h3>' + (player.id === 'gui' ? esc(state.goals.text) : 'Aprimorar consistência durante o jogo') + '</h3><p>' + player.goals + ' meta(s) concluída(s) no ciclo.</p></div><div class="feedback-quote" style="margin-top:15px">Último retorno: boa evolução no entendimento do jogo. Manter o foco em decisões rápidas.</div><div class="modal-actions"><button class="btn secondary" data-action="close-modal">Fechar</button><button class="btn primary" data-action="evaluate-player" data-id="' + player.id + '">' + icon('plus') + 'Nova avaliação</button></div>');
  }

  function newPollModal() {
    openModal('Criar enquete', 'A gestão poderá identificar quem votou; os jogadores verão apenas o resultado agregado.', '<form id="poll-form"><div class="form-field"><label for="poll-question">Pergunta</label><input id="poll-question" name="question" required maxlength="160" placeholder="O que você quer perguntar?"></div><div class="form-field"><label for="poll-options">Opções</label><textarea id="poll-options" name="options" required placeholder="Uma opção por linha"></textarea><small>Informe de 2 a 5 opções.</small></div><div class="form-field"><label for="poll-end">Data de encerramento</label><input id="poll-end" name="end" type="date" value="2026-11-10" required></div>' + modalActions('Publicar enquete') + '</form>');
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('button, a[data-go]');
    if (!button) return;
    if (button.dataset.go) {
      event.preventDefault();
      navigate(button.dataset.go);
      return;
    }
    if (button.dataset.evo) {
      state.evoTab = button.dataset.evo;
      save();
      render();
      return;
    }
    var action = button.dataset.action;
    if (!action) return;
    if (action === 'close-modal') closeModal();
    if (action === 'feedback') feedbackModal(button.dataset.feedbackType || 'Professor');
    if (action === 'goal') goalModal();
    if (action === 'physical-goals') physicalGoalsModal();
    if (action === 'profile-edit') profileEditModal();
    if (action === 'more-menu') moreMenuModal();
    if (action === 'product-interest') productModal(button.dataset.id, button.dataset.title);
    if (action === 'experience-interest') {
      state.experienceInterest = true;
      save();
      render();
      toast('Interesse no Squadra Experience registrado!');
    }
    if (action === 'poll-vote' || action === 'quick-poll') {
      state.pollVotes[button.dataset.id] = button.dataset.value;
      save();
      if (state.page === 'home') state.page = 'polls';
      render();
      toast('Voto registrado. Obrigado por participar!');
    }
    if (action === 'new-evaluation' || action === 'evaluate-player') evaluationModal(button.dataset.id);
    if (action === 'eval-step') {
      var requestedStep = button.dataset.step;
      document.querySelectorAll('[data-eval-panel]').forEach(function (panel) { panel.hidden = panel.dataset.evalPanel !== requestedStep; });
      document.querySelectorAll('#evaluation-form [data-action="eval-step"].tab').forEach(function (tab) { tab.classList.toggle('active', tab.dataset.step === requestedStep); });
      var modalScroller = $('#app-modal');
      if (modalScroller) modalScroller.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (action === 'open-player') playerModal(button.dataset.id);
    if (action === 'new-poll') newPollModal();
    if (action === 'cup-interest') toast('Interesse no Squadra Cup registrado!');
    if (action === 'match-detail') openModal('Detalhes do jogo', 'Rodada 5 · Squadra Cup 2026', '<div class="notice orange">' + icon('calendar') + '<span><b>Sábado, 24 de outubro · 09:00</b><br>Arena Central · chegada recomendada às 08:30.</span></div><div class="feedback-quote" style="margin-top:15px">Recado do técnico: mantenha linhas compactas e acelere pelos lados.</div><div class="modal-actions"><button class="btn primary" data-action="close-modal">Entendi</button></div>');
    if (action === 'schedule-image') openModal('Grade oficial Squadra', 'Imagem de referência utilizada pela equipe.', '<img src="assets/horarios-squadra.png" alt="Grade de horários Squadra" style="width:100%;border-radius:14px"><div class="modal-actions"><button class="btn primary" data-action="close-modal">Fechar</button></div>');
    if (action === 'notifications') openModal('Avisos Squadra', 'Atualizações importantes da sua jornada.', '<div class="assessment-score"><span class="score-pill">' + icon('clipboard') + '</span><div class="assessment-score-info"><strong>Nova avaliação publicada</strong><small>Confira os comentários do professor em Evolução.</small></div></div><div class="assessment-score"><span class="score-pill">' + icon('vote') + '</span><div class="assessment-score-info"><strong>Enquete aberta</strong><small>Escolha a cor do próximo uniforme.</small></div></div><div class="assessment-score"><span class="score-pill">' + icon('trophy') + '</span><div class="assessment-score-info"><strong>Squadra Cup</strong><small>A rodada 5 já tem horários definidos.</small></div></div>');
    if (action === 'privacy') openModal('Privacidade dos dados', 'Controle pensado para proteger informações sensíveis.', '<div class="notice">' + icon('lock') + '<span><b>Peso e dados físicos</b><br>Visíveis somente para você, professores autorizados e gestão.</span></div><div class="notice" style="margin-top:10px">' + icon('message') + '<span><b>Feedback</b><br>Identificado para a gestão e anonimizado para o professor.</span></div><div class="notice" style="margin-top:10px">' + icon('trophy') + '<span><b>Ranking</b><br>Não utiliza peso nem informações sensíveis.</span></div>');
    if (action === 'methodology') openModal('Metodologia de avaliação', 'Parâmetros demonstrativos para a proposta.', '<div class="notice orange">' + icon('clipboard') + '<span><b>Técnica:</b> escala de 1 a 5, com opção “não observado”.<br><b>Força:</b> medição mensal pelo dinamômetro, registrada em kgf.<br><b>Explosão:</b> tempo para completar o percurso de corrida definido pela Squadra — quanto menor, melhor.<br><b>Resultado:</b> indicadores separados, sem nota geral arbitrária.</span></div>');
    if (action === 'export') toast('Relatório demonstrativo preparado para exportação.');
  });

  document.addEventListener('change', function (event) {
    if (event.target.id === 'role-select') {
      state.role = event.target.value;
      state.page = state.role === 'player' ? 'home' : state.role === 'teacher' ? 'coach-home' : 'admin-home';
      save();
      render();
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (event.target.id === 'schedule-unit') {
      state.scheduleUnit = event.target.value;
      save();
      render();
    }
    if (event.target.id === 'ranking-category') {
      state.rankingCategory = event.target.value;
      save();
      toast('Categoria do ranking atualizada.');
    }
    if (event.target.id === 'player-status') filterPlayers();
  });

  document.addEventListener('input', function (event) {
    if (event.target.id === 'player-search') filterPlayers();
  });

  function filterPlayers() {
    var search = ($('#player-search') ? $('#player-search').value : '').toLowerCase();
    var status = $('#player-status') ? $('#player-status').value : 'all';
    document.querySelectorAll('#player-list .player-row').forEach(function (row) {
      var visible = row.dataset.playerName.indexOf(search) >= 0 && (status === 'all' || row.dataset.playerStatus === status);
      row.style.display = visible ? 'grid' : 'none';
    });
  }

  document.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = new FormData(form);
    if (form.id === 'feedback-form') {
      state.feedbacks.unshift({ id: Date.now(), player: 'Guilherme Pontes', unit: 'Piqueri', date: '20/10/2026', type: data.get('type'), subject: data.get('subject'), overall: Number(data.get('overall')), methodology: Number(data.get('methodology')), teacher: Number(data.get('teacher')), text: data.get('text').trim() });
      save();
      closeModal();
      render();
      toast('Feedback enviado com confidencialidade.');
    }
    if (form.id === 'goal-form') {
      state.goals.text = data.get('text').trim();
      state.goals.progress = Number(data.get('progress'));
      state.goals.review = data.get('review').split('-').reverse().join('/');
      save();
      closeModal();
      render();
      toast('Meta atualizada.');
    }
    if (form.id === 'physical-goals-form') {
      state.physicalGoals = {
        strength: Number(data.get('strength')),
        explosion: Number(data.get('explosion')),
        review: data.get('review').split('-').reverse().join('/')
      };
      save();
      closeModal();
      render();
      toast('Metas físicas atualizadas.');
    }
    if (form.id === 'product-form') {
      var record = { product: form.dataset.id, title: form.dataset.title, size: data.get('size'), color: data.get('color'), quantity: Number(data.get('quantity')) };
      state.productInterests = state.productInterests.filter(function (item) { return item.product !== record.product; });
      state.productInterests.push(record);
      save();
      closeModal();
      render();
      toast('Interesse registrado. A equipe entrará em contato.');
    }
    if (form.id === 'evaluation-form') {
      var scores = skillNames.map(function (_, index) { var value = data.get('skill' + index); return value === '' ? null : Number(value); });
      var hasScore = scores.some(function (value) { return value !== null; });
      var hasPhysical = ['weight', 'dynamometer', 'explosionTime'].some(function (name) { return data.get(name); });
      if (!hasScore && !hasPhysical) { toast('Preencha ao menos um indicador avaliado.'); return; }
      state.extraEvaluations.unshift({ id: Date.now(), player: data.get('player'), date: data.get('date'), scores: scores, note: data.get('note').trim(), next: data.get('next').trim(), physical: { weight: data.get('weight'), dynamometer: data.get('dynamometer'), explosionTime: data.get('explosionTime'), course: data.get('course') } });
      var evaluatedPlayer = players.find(function (player) { return player.id === data.get('player'); });
      if (evaluatedPlayer) evaluatedPlayer.status = 'avaliado';
      save();
      closeModal();
      render();
      toast('Avaliação publicada no histórico do jogador.');
    }
    if (form.id === 'poll-form') {
      var options = data.get('options').split('\n').map(function (value) { return value.trim(); }).filter(Boolean).slice(0, 5);
      if (options.length < 2) { toast('Informe pelo menos duas opções.'); return; }
      state.adminPolls.unshift({ id: 'poll-' + Date.now(), question: data.get('question').trim(), ends: data.get('end').split('-').reverse().join('/'), voters: 0, options: options.map(function (label) { return { label: label, votes: 0 }; }) });
      save();
      closeModal();
      render();
      toast('Enquete publicada para os jogadores.');
    }
    if (form.id === 'profile-form') {
      state.profile.nickname = data.get('nickname').trim() || 'Guilherme';
      state.profile.birthDate = data.get('birthDate');
      var photo = form.querySelector('[name="photo"]').files[0];
      var finishProfileSave = function () {
        save();
        closeModal();
        render();
        toast('Perfil atualizado.');
      };
      if (photo) {
        var reader = new FileReader();
        reader.onload = function () {
          state.profile.photo = reader.result;
          finishProfileSave();
        };
        reader.readAsDataURL(photo);
      } else {
        finishProfileSave();
      }
    }
  });

  $('#app-modal').addEventListener('click', function (event) {
    if (event.target === $('#app-modal')) closeModal();
  });

  render();
})();
