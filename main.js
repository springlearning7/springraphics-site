/* Springraphics — main.js (intro, toggles, hover switch, filters, motion, i18n) */

/* ====== CONFIG: swap media and contact here, never in the code below ====== */
const CONFIG = {
  whatsapp: '528127582207',
  waMsg: {
    es: 'Hola Primavera, quiero agendar la reunión de 30 min sin costo.',
    en: "Hi Primavera, I'd like to book the free 30-minute meeting."
  },
  media: {
    reel: 'assets/reel.mp4',            // compressed 720p loop
    reelPoster: 'assets/reel-poster.webp',
    about: 'assets/about.webp'            // studio or team photo
  },
  cats: {
    all:      { es: 'Todo',            en: 'All' },
    brand:    { es: 'Branding',        en: 'Branding' },
    strategy: { es: 'Estrategia',      en: 'Strategy' },
    social:   { es: 'Redes sociales',  en: 'Social media' },
    edu:      { es: 'SpringLearning',  en: 'SpringLearning' },
    '3d':     { es: '3D y Animación',  en: '3D & Animation' }
  },
  /* Case studies: fill in the three texts per language. Empty ones show a 'coming soon' note. */
  cases: {
    pepbiosystem: { name: 'PepBioSystem', img: 'assets/case-pepbiosystem.webp',
      challenge: { es: '', en: '' },
      did: { es: 'Estrategia de marca y de redes sociales para Oasis by PepBioSystem, pilares de contenido y publicaciones.',
             en: 'Brand and social media strategy for Oasis by PepBioSystem, content pillars and posts.' },
      result: { es: '', en: '' } },
    '4blum': { name: '4Blum', img: 'assets/case-4blum.webp',
      did: { es: 'Análisis FODA y estrategia, programa de embajadoras, tarjetas de presentación, historias y publicaciones para redes.',
             en: 'SWOT analysis and strategy, ambassador program, business cards, stories and social posts.' } },
    kinni: { name: 'Kinni', img: 'assets/case-kinni.webp',
      did: { es: 'Identidad de marca, análisis FODA, estrategia de contenido, etiquetas para la línea de productos y publicaciones para redes.',
             en: 'Brand identity, SWOT analysis, content strategy, labels for the product line and social posts.' } },
    lasik: { name: 'Lasik Vision Center Chiapas', img: 'assets/case-lasik.webp',
      did: { es: 'Plan y estrategia mensual, estrategia de base de datos de clientes y publicaciones para el feed.',
             en: 'Monthly plan and strategy, customer database strategy and feed posts.' } }
  },
  work: [
    { src: 'assets/work-kinni-identidad.webp',        cat: 'brand',    es: 'Kinni · Identidad de marca',            en: 'Kinni · Brand identity' },
    { src: 'assets/work-lasik-lentes.webp',           cat: 'social',   es: 'Lasik Vision · Campaña de lentes',      en: 'Lasik Vision · Eyewear campaign' },
    { src: 'assets/work-springlearning-ia.webp',      cat: 'edu',      es: 'SpringLearning · Clase de IA',          en: 'SpringLearning · AI class' },
    { src: 'assets/work-4blum-tarjeta.webp',          cat: 'brand',    es: '4Blum · Tarjeta de presentación',       en: '4Blum · Business card' },
    { src: 'assets/work-oasis-brand-strategy.webp',   cat: 'strategy', es: 'Oasis by PBS · Estrategia de marca',    en: 'Oasis by PBS · Brand strategy' },
    { src: 'assets/work-4blum-hidrafacial.webp',      cat: 'social',   es: '4Blum · Historia Hidrafacial',          en: '4Blum · Hydrafacial story' },
    { src: 'assets/work-lasik-plan.webp',             cat: 'strategy', es: 'Lasik Vision · Plan y estrategia',      en: 'Lasik Vision · Plan and strategy' },
    { src: 'assets/work-springlearning-quimica.webp', cat: 'edu',      es: 'SpringLearning · Intro a la química',   en: 'SpringLearning · Intro to chemistry' },
    { src: 'assets/work-oasis-post.webp',             cat: 'social',   es: 'Oasis by PBS · Publicación',            en: 'Oasis by PBS · Post' },
    { src: 'assets/work-4blum-estrategia.webp',       cat: 'strategy', es: '4Blum · Estrategia',                    en: '4Blum · Strategy' },
    { src: 'assets/work-lasik-checkup.webp',          cat: 'social',   es: 'Lasik Vision · Publicación check-up',   en: 'Lasik Vision · Check-up post' },
    { src: 'assets/work-lasik-base-de-datos.webp',    cat: 'strategy', es: 'Lasik Vision · Mapa de base de datos',  en: 'Lasik Vision · Database map' },
    { src: 'assets/work-3d-01.webp',                  cat: '3d',       es: '3D y Animación · Próximamente',       en: '3D & Animation · Coming soon' }
  ]
};

/* ====== I18N: Spanish lives in index.html (source of truth, good for SEO); English lives here ====== */
const I18N = {
  es: {
    'ben.p3': 'Tres fases de 4 semanas: observación y análisis, implementación y seguimiento, análisis de progreso y propuestas.',
    'm.challenge': 'El reto', 'm.did': 'Lo que hicimos', 'm.result': 'El resultado',
    'm.add.challenge': 'En construcción · Próximamente', 'm.add.did': 'En construcción · Próximamente', 'm.add.result': 'En construcción · Próximamente',
    'm.cta': 'Quiero algo así',
    'ben.p6': 'El ciclo completo: cimentación, implementación y optimización, con atención y capacitación a tu equipo.'
  },
  en: {
    'meta.title': 'Springraphics · Branding Studio | 3D & animation',
    'meta.desc': 'Springraphics is a branding, 3D and animation studio in Tuxtla Gutiérrez, Chiapas. Home of Spring Studio and the BEN program. Free 30-minute meeting.',
    'a11y.skip': 'Skip to content',
    'intro.skip': 'Skip intro',
    'nav.menu': 'Menu',
    'nav.about': 'About us',
    'nav.work': 'Portfolio',
    'nav.contact': 'Contact',
    'cta.meet': 'Free meeting',
    'cta.wa': 'Message us on WhatsApp',
    'cta.work': 'See the portfolio',
    'hero.eyebrow': '3D · Animation · Digital strategy',
    'hero.sub': 'We design, animate and put your brand online. We are Spring Studio: home of Springraphics, <a href="https://springlearning.mx" target="_blank" rel="noopener">SpringLearning</a>, SpringDeploy and BEN.',
    'hero.vid': 'Springraphics logo animation',
    'marquee': '<li>Branding</li><li>3D animation</li><li>CGI</li><li>Graphic design</li><li>Websites</li><li>SEO</li><li>Social media</li><li>Photo & video</li><li>AI imagery</li><li>Business strategy</li>',
    'casa.serif': 'Four doors, one family.',
    'casa.spg': 'Branding, 3D and animation, graphic design, digital marketing, web, social, photo and video, prompts and AI.',
    'casa.spg.link': 'See the work',
    'casa.sl': 'AI literacy, English and digital skills, in two languages, for kids, adults and institutions. Includes Spring Academy and Spring Talks.',
    'casa.sd': 'AI training for schools and businesses. Already taught in 2 schools.',
    'casa.sd.link': 'Train your team',
    'casa.ben': 'Branding · Business Strategy · Digital Business. The program that ties it all together.',
    'casa.ben.link': 'Meet BEN',
    'work.title': 'Portfolio',
    'work.serif': 'From sketch to render, everything moves.',
    'work.reel': 'Springraphics animation reel',
    'work.gallery': 'Project gallery',
    'work.filter': 'Filter projects',
    'work.hint': 'Swipe to see more →',
    'ben.eyebrow': 'Branding · Business Strategy · Digital Business',
    'ben.lead': 'A 3 or 6 month program that puts your brand, your strategy and your digital presence in order. It always starts with a diagnostic.',
    'ben.tog': 'Switch between 3 and 6 months',
    'ben.months': 'months',
    'ben.p3': 'Three 4-week phases: observation and analysis, implementation and follow-up, progress review and proposals.',
    'ben.p6': 'The full cycle: foundation, implementation and optimization, with support and training for your team.',
    'ben.t1': 'Diagnostic', 'ben.t1p': '2 to 4 weeks to see where you stand today.',
    'ben.t2': 'Foundation', 'ben.t2p': 'Brand, strategy and digital basics.',
    'ben.t3': 'Implementation', 'ben.t3p': 'We put it to work with you and your team.',
    'ben.t4': 'Optimization', 'ben.t4p': 'We measure, adjust and plan what comes next.',
    'ben.pipeline': 'Exploration → Research → Creation → Application → Reflection',
    'ben.inc': "What's included",
    'ben.list': '<li><strong>Branding:</strong> logo, identity, stationery, mood board, palette and tone.</li><li><strong>Business strategy:</strong> SWOT and business plan.</li><li><strong>Digital business:</strong> website, SEO and social.</li><li><strong>Social media:</strong> 5 posts a week, templates and campaigns.</li><li><strong>3D and CGI</strong> for your marketing.</li><li><strong>AI imagery</strong> for your brand.</li>',
    'ben.cases': 'BEN cases',
    'ben.case': 'View case',
    'about.eyebrow': 'Who we are',
    'about.title': 'About us',
    'about.alt': 'The Springraphics team',
    'about.bio': 'We are a digital art studio that brings art, technology and design together. We do branding, 3D animation and digital strategy to help brands grow. We work in Spanish and English from Tuxtla Gutiérrez, Chiapas.',
    'about.founder': 'Springraphics started in February 2024. It was founded by Primavera Flores, who holds a BS in Animation from Los Angeles Film School, specializing in Environment &amp; Character Design, and 6 Canva certifications.',
    'about.serif': 'We animate brands the way you animate a character: with intention.',
    'about.tools': 'Tools',
    'about.sl': 'Visit SpringLearning ↗',
    'c.title': "Let's talk about your <span class=\"gold\">brand.</span>",
    'c.lead': 'A free 30-minute meeting. Then comes the diagnostic, and you get a custom quote within 48 hours.',
    'c.phone': 'Phone', 'c.mail': 'Email', 'c.where': 'Where',
    'c.loc': 'Tuxtla Gutiérrez, Chiapas · remote too',
    'f.family': 'Spring family',
    'm.close': 'Close', 'm.prev': 'Previous', 'm.next': 'Next',
    'm.challenge': 'The challenge', 'm.did': 'What we did', 'm.result': 'The result',
    'm.add.challenge': 'Work in progress · Coming soon', 'm.add.did': 'Work in progress · Coming soon', 'm.add.result': 'Work in progress · Coming soon',
    'm.cta': 'I want something like this'
  }
};

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const html = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasGsap = typeof gsap !== 'undefined';
  const motion = hasGsap && !reduced;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  /* squash-and-stretch pop, reused by every toggle */
  const squish = el => { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); };

  /* ---------- i18n ---------- */
  const textNodes = $$('[data-i18n]');
  const ariaNodes = $$('[data-i18n-aria]');
  const altNodes = $$('[data-i18n-alt]');
  const metaDesc = $('meta[name="description"]');
  textNodes.forEach(n => { I18N.es[n.dataset.i18n] = n.innerHTML; });
  ariaNodes.forEach(n => { I18N.es[n.dataset.i18nAria] = n.getAttribute('aria-label'); });
  altNodes.forEach(n => { I18N.es[n.dataset.i18nAlt] = n.alt; });
  I18N.es['meta.title'] = document.title;
  I18N.es['meta.desc'] = metaDesc.content;
  let lang = 'es', plan = '3', filter = 'all';

  function setLang(l) {
    lang = I18N[l] ? l : 'es';
    const d = I18N[lang];
    html.lang = lang;
    textNodes.forEach(n => { const v = d[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    ariaNodes.forEach(n => { const v = d[n.dataset.i18nAria]; if (v != null) n.setAttribute('aria-label', v); });
    altNodes.forEach(n => { const v = d[n.dataset.i18nAlt]; if (v != null) n.alt = v; });
    document.title = d['meta.title'];
    metaDesc.content = d['meta.desc'];
    $$('.js-lang').forEach(b => {
      b.setAttribute('aria-checked', String(lang === 'en'));
      b.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.waMsg[lang])}`;
    $$('[data-wa]').forEach(a => { a.href = wa; });
    $('#planText').textContent = d['ben.p' + plan];
    buildMarquee();
    buildFilter();
    renderWork();
    store.set('spg-lang', lang);
  }

  /* ---------- toggles: language + BEN 3/6 months ---------- */
  function initToggles() {
    $$('.js-lang').forEach(b => b.addEventListener('click', () => {
      setLang(lang === 'es' ? 'en' : 'es');
      $$('.js-lang i').forEach(squish);
    }));
    const pt = $('#planTog'), txt = $('#planText');
    pt.addEventListener('click', () => {
      plan = plan === '3' ? '6' : '3';
      pt.setAttribute('aria-checked', String(plan === '6'));
      txt.textContent = I18N[lang]['ben.p' + plan];
      squish($('i', pt));
      if (motion) gsap.fromTo(txt, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .45, ease: 'back.out(2)' });
    });
  }

  /* ---------- marquee: duplicate the group for a seamless loop ---------- */
  function buildMarquee() {
    const track = $('.marquee__track');
    const group = $('.marquee__group', track);
    $$('.marquee__clone', track).forEach(c => c.remove());
    const clone = group.cloneNode(true);
    clone.classList.add('marquee__clone');
    clone.removeAttribute('data-i18n');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  /* ---------- Spring Studio: hover/tap list, jumping orb, counter, crossfading card ---------- */
  function initSwitch() {
    const root = $('#casaSwitch');
    const items = $$('.switch__item', root), panels = $$('.switch__panel', root);
    const dot = $('.switch__dot', root), num = $('#casaNum');
    let cur = -1, auto = null, taken = false;
    const place = (animate) => {
      const b = items[cur];
      const y = b.offsetTop + b.offsetHeight / 2 - dot.offsetHeight / 2;
      if (motion && animate) {
        gsap.to(dot, { y, duration: .65, ease: 'elastic.out(1,.6)', overwrite: 'auto' });
        gsap.fromTo(dot, { scaleX: .65, scaleY: 1.5 }, { scaleX: 1, scaleY: 1, duration: .65, ease: 'elastic.out(1,.45)' });
      } else if (hasGsap) gsap.set(dot, { y });
      else dot.style.transform = `translateY(${y}px)`;
    };
    const go = i => {
      if (i === cur) return;
      cur = i;
      items.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
      panels.forEach((p, k) => p.classList.toggle('is-on', k === i));
      num.textContent = '0' + (i + 1);
      if (motion) gsap.fromTo(num, { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .35, ease: 'back.out(2.5)' });
      place(true);
    };
    const stop = () => { clearInterval(auto); auto = null; };
    items.forEach((b, i) => {
      b.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') { taken = true; stop(); go(i); } });
      b.addEventListener('focus', () => { taken = true; stop(); go(i); });
      b.addEventListener('click', () => { taken = true; stop(); go(i); });
    });
    cur = 0; place(false);
    addEventListener('resize', () => place(false));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => place(false));
    /* cycles on its own while visible, until the visitor takes over */
    if (!reduced && 'IntersectionObserver' in window) {
      new IntersectionObserver(es => {
        const vis = es[0].isIntersecting;
        if (vis && !auto && !taken) auto = setInterval(() => go((cur + 1) % items.length), 3200);
        if (!vis) stop();
      }, { threshold: .4 }).observe(root);
    }
  }

  /* ---------- portfolio: filter pills with a sliding indicator ---------- */
  function movePill(animate) {
    const box = $('#filter'), pill = $('.filter__pill', box), on = $('[aria-pressed="true"]', box);
    if (!pill || !on) return;
    const to = { x: on.offsetLeft, y: on.offsetTop, width: on.offsetWidth, height: on.offsetHeight };
    if (motion && animate) { gsap.to(pill, { ...to, duration: .55, ease: 'elastic.out(1,.7)' }); }
    else if (hasGsap) gsap.set(pill, to);
    else Object.assign(pill.style, { transform: `translate(${to.x}px,${to.y}px)`, width: to.width + 'px', height: to.height + 'px' });
  }
  function buildFilter() {
    const box = $('#filter');
    box.textContent = '';
    const pill = document.createElement('span');
    pill.className = 'filter__pill';
    box.appendChild(pill);
    Object.keys(CONFIG.cats).forEach(k => {
      const b = document.createElement('button');
      b.textContent = CONFIG.cats[k][lang];
      b.setAttribute('aria-pressed', String(k === filter));
      b.addEventListener('click', () => {
        if (filter === k) return;
        filter = k;
        $$('button', box).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        movePill(true);
        applyFilter(true);
      });
      box.appendChild(b);
    });
    movePill(false);
  }
  function applyFilter(animate) {
    const figs = $$('.work');
    const show = figs.filter(f => filter === 'all' || f.dataset.cat === filter);
    figs.forEach(f => { f.hidden = !show.includes(f); });
    $('#strip').scrollTo({ left: 0 });
    if (motion && animate) gsap.fromTo(show, { scale: .6, opacity: 0, rotation: -4 }, { scale: 1, opacity: 1, rotation: 0, duration: .5, ease: 'back.out(2)', stagger: .06, clearProps: 'all' });
  }

  /* ---------- media with visible placeholders when a file is missing ---------- */
  function markMissing(box, path) {
    box.classList.add('ph');
    /* label text comes from CSS (Spanish/English) */
  }
  function renderWork() {
    const strip = $('#strip');
    strip.textContent = '';
    CONFIG.work.forEach(w => {
      const cat = CONFIG.cats[w.cat][lang];
      const fig = document.createElement('figure');
      fig.className = 'work';
      fig.dataset.cat = w.cat;
      fig.dataset.tilt = '';
      fig.tabIndex = 0;
      fig.setAttribute('role', 'button');
      const box = document.createElement('div');
      box.className = 'work__img';
      const img = new Image();
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = `${cat}: ${w[lang]}`;
      img.addEventListener('error', () => markMissing(box, w.src));
      img.src = w.src;
      box.appendChild(img);
      const cap = document.createElement('figcaption');
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = cat;
      cap.append(tag, document.createElement('br'), w[lang]);
      fig.append(box, cap);
      strip.appendChild(fig);
    });
    applyFilter(false);
  }
  function initMedia() {
    const portrait = $('[data-media="about"]');
    portrait.addEventListener('error', () => markMissing(portrait.parentElement));
    portrait.src = CONFIG.media.about;
    const reel = $('[data-media="reel"]');
    reel.poster = CONFIG.media.reelPoster;
    const load = () => {
      reel.addEventListener('error', () => markMissing(reel.parentElement), { once: true });
      reel.src = CONFIG.media.reel;
      reel.preload = 'metadata';
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => {
        if (es.some(e => e.isIntersecting)) { io.disconnect(); load(); }
      }, { rootMargin: '300px' });
      io.observe(reel);
    } else load();
    if (reduced) { const v = $('#heroVid'); v.removeAttribute('autoplay'); v.pause(); v.controls = true; }
  }

  /* ---------- pop-up: portfolio lightbox + BEN case studies ---------- */
  function initModal() {
    const dlg = $('#modal'), body = $('#modalBody'), nav = $('#modalNav');
    if (!dlg.showModal) return;
    let list = [], idx = 0, opener = null;
    const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
    const media = (src, alt) => {
      const box = el('div', 'modal__img');
      const img = new Image();
      img.alt = alt;
      img.addEventListener('error', () => markMissing(box, src));
      img.src = src;
      box.appendChild(img);
      return box;
    };
    const pop = () => {
      if (!dlg.open) dlg.showModal();
      body.classList.remove('pop'); void body.offsetWidth; body.classList.add('pop');   /* CSS pop: GSAP must not touch a modal dialog */
    };
    const showWork = i => {
      idx = (i + list.length) % list.length;
      const w = list[idx], cat = CONFIG.cats[w.cat][lang];
      body.textContent = '';
      const h = el('h3', null, w[lang]); h.id = 'modalTitle';
      body.append(media(w.src, `${cat}: ${w[lang]}`), el('span', 'tag', cat), h);
      nav.hidden = list.length < 2;
      pop();
    };
    const showCase = key => {
      const c = CONFIG.cases[key], d = I18N[lang];
      if (!c) return;
      body.textContent = '';
      const h = el('h3', null, c.name); h.id = 'modalTitle';
      body.append(media(c.img, c.name), el('span', 'tag', 'BEN'), h);
      ['challenge', 'did', 'result'].forEach(k => {
        body.append(el('h4', null, d['m.' + k]), el('p', null, (c[k] && c[k][lang]) || d['m.add.' + k]));
      });
      const a = el('a', 'btn', d['m.cta']);
      a.href = $('[data-wa]').href; a.target = '_blank'; a.rel = 'noopener';
      body.append(a);
      nav.hidden = true;
      pop();
    };
    const openWork = fig => {
      opener = fig;
      const figs = $$('.work').filter(f => !f.hidden);
      list = figs.map(f => CONFIG.work[$$('.work').indexOf(f)]);
      showWork(figs.indexOf(fig));
    };
    $('#strip').addEventListener('click', e => { const f = e.target.closest('.work'); if (f) openWork(f); });
    $('#strip').addEventListener('keydown', e => {
      const f = e.target.closest('.work');
      if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openWork(f); }
    });
    $$('[data-case]').forEach(b => b.addEventListener('click', () => { opener = b; showCase(b.dataset.case); }));
    $('#modalX').addEventListener('click', () => dlg.close());
    $('#modalPrev').addEventListener('click', () => showWork(idx - 1));
    $('#modalNext').addEventListener('click', () => showWork(idx + 1));
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', e => {
      if (nav.hidden) return;
      if (e.key === 'ArrowLeft') showWork(idx - 1);
      if (e.key === 'ArrowRight') showWork(idx + 1);
    });
    dlg.addEventListener('close', () => { if (opener && opener.isConnected) opener.focus(); });
  }

  /* ---------- header menu ---------- */
  function initMenu() {
    const btn = $('#menuBtn'), nav = $('#nav');
    const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- scroll progress: an orb rolls along the top ---------- */
  function initRoll() {
    const roll = $('.roll');
    if (reduced) return;
    let busy = false;
    const update = () => {
      const max = html.scrollHeight - innerHeight;
      const x = (max > 0 ? scrollY / max : 0) * (innerWidth - roll.offsetWidth);
      roll.style.transform = `translateX(${x}px) rotate(${x * 2.5}deg)`;
      busy = false;
    };
    addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* ---------- desktop pointer play: orb follower, magnetic buttons, tilting cards ---------- */
  function initPointer() {
    if (!motion || !fine) return;
    const c = $('.cursor');
    const x = gsap.quickTo(c, 'x', { duration: .45, ease: 'power3' });
    const y = gsap.quickTo(c, 'y', { duration: .45, ease: 'power3' });
    addEventListener('pointermove', e => { c.classList.add('on'); x(e.clientX + 18); y(e.clientY + 18); }, { passive: true });
    document.addEventListener('pointerover', e => {
      c.classList.toggle('big', !!e.target.closest('a,button,.work,.case'));
    });
    document.documentElement.addEventListener('pointerleave', () => c.classList.remove('on'));

    $$('.btn').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { '--mx': (e.clientX - r.left - r.width / 2) * .25 + 'px', '--my': (e.clientY - r.top - r.height / 2) * .35 + 'px', duration: .3 });
      });
      b.addEventListener('pointerleave', () => gsap.to(b, { '--mx': '0px', '--my': '0px', duration: .7, ease: 'elastic.out(1,.4)' }));
    });

    document.addEventListener('pointermove', e => {
      const t = e.target.closest && e.target.closest('[data-tilt]');
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 14 + 'deg');
      t.style.setProperty('--rx', (.5 - (e.clientY - r.top) / r.height) * 14 + 'deg');
    }, { passive: true });
    document.addEventListener('pointerout', e => {
      const t = e.target.closest && e.target.closest('[data-tilt]');
      if (t && !t.contains(e.relatedTarget)) { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); }
    });
  }

  /* ---------- scroll motion: reveals, parallax, bouncing timeline ---------- */
  function initScroll() {
    if (!motion || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('[data-reveal]', { opacity: 0, y: 56, rotation: -2, scale: .96 });
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%',
      once: true,
      onEnter: els => gsap.to(els, { opacity: 1, y: 0, rotation: 0, scale: 1, duration: .75, ease: 'back.out(1.7)', stagger: .09, overwrite: 'auto' })
    });
    /* orbs and shapes drift at different speeds while you scroll */
    $$('.float,.shape').forEach((el, i) => {
      gsap.to(el, { '--py': (i % 2 ? 90 : -120) + 'px', ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    });
    /* big headings slide sideways a little with the scroll */
    $$('.big, #ben .mega, .contact .mega').forEach((el, i) => {
      gsap.fromTo(el, { x: i % 2 ? 40 : -40 }, { x: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 45%', scrub: 1 } });
    });
    /* marquee leans with scroll speed */
    const track = $('.marquee__track');
    const skew = gsap.quickTo(track, 'skewX', { duration: .4, ease: 'power3' });
    ScrollTrigger.create({ onUpdate: s => skew(gsap.utils.clamp(-14, 14, s.getVelocity() / -180)) });
  }

  /* ---------- hero: letters drop in one by one ---------- */
  function splitTitle() {
    const h = $('#heroTitle');
    h.setAttribute('aria-label', h.textContent);
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          [...n.textContent].forEach(ch => {
            if (ch === ' ') { frag.append(' '); return; }
            const s = document.createElement('span');
            s.className = 'ch'; s.textContent = ch; s.setAttribute('aria-hidden', 'true');
            frag.append(s);
          });
          n.replaceWith(frag);
        } else walk(n);
      });
    };
    walk(h);
  }
  function heroIn() {
    const v = $('#heroVid');
    if (!reduced) { try { v.currentTime = 0; const p = v.play(); if (p) p.catch(() => {}); } catch (e) {} }
    if (!motion) return;
    gsap.from('#heroTitle .ch', { yPercent: -120, opacity: 0, rotation: () => gsap.utils.random(-25, 25), duration: .7, ease: 'bounce.out', stagger: .035, clearProps: 'all' });
    gsap.from('[data-hero]', { opacity: 0, y: 50, duration: .7, ease: 'back.out(1.6)', stagger: .09, delay: .25, clearProps: 'all' });
  }

  /* ---------- intro: orb drops, squashes, splashes, the real logo pops in (about 2 s) ---------- */
  function initIntro() {
    const intro = $('#intro');
    let finished = false, tl;
    const finish = () => {
      if (finished) return;
      finished = true;
      if (tl) tl.kill();
      html.classList.remove('intro-on');
      intro.remove();
      try { sessionStorage.setItem('spg-intro', '1'); } catch (e) {}
      heroIn();
    };
    if (!html.classList.contains('intro-on')) { finished = true; intro.remove(); heroIn(); return; }
    if (!hasGsap) { finish(); return; }
    const orb = $('.intro__orb'), ripple = $('.intro__ripple'), logo = $('.intro__logo');
    $('#introSkip').addEventListener('click', finish);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') finish(); });
    tl = gsap.timeline({ onComplete: finish });
    tl.set(orb, { y: -innerHeight * .75, transformOrigin: '50% 100%' })
      .set(logo, { scale: .2, opacity: 0 })
      .to(orb, { y: 0, duration: .42, ease: 'power2.in' })
      .to(orb, { scaleX: 1.45, scaleY: .5, duration: .09, ease: 'power1.out' })
      .fromTo(ripple, { scale: .1, opacity: .8 }, { scale: 1, opacity: 0, duration: .6, ease: 'power2.out' }, '<')
      .to(orb, { scaleX: .42, scaleY: 1.55, duration: .16, ease: 'power2.out' })
      .to(orb, { scale: 0, opacity: 0, duration: .25, ease: 'power2.in' })
      .to(logo, { scale: 1, opacity: 1, duration: .7, ease: 'elastic.out(1,.55)' }, '<.05')
      .to(intro, { yPercent: -100, duration: .5, ease: 'power3.inOut' }, '+=.25');
  }

  /* ---------- boot ---------- */
  splitTitle();
  setLang(store.get('spg-lang') || 'es');
  initToggles();
  initSwitch();
  initMenu();
  initModal();
  initMedia();
  initRoll();
  initPointer();
  initScroll();
  initIntro();
  addEventListener('resize', () => movePill(false));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => movePill(false));
})();
