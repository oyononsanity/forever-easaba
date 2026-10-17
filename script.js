/* ==========================================================================
   SCRIPT.JS — COMPLETE INTERACTIVE ENGINE & BLOOMING TREE (10/10 REWRITE)
   ========================================================================== */

/* ==========================================================================
   FEATURE 7: CENTRALIZED EDITABLE CONFIGURATION (ONE CONFIG TO RULE THEM ALL)
   ========================================================================== */
function fnv(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return (h>>>0).toString(16)}
const CONFIG = {
  // Secret Vault Passcode
  passLen: 4,
  passHash: "b8c82964", // FNV-1a hash of the code, so it is not readable in source

  // Lock-screen photo (put your own image path here, e.g. "images/us.jpg")
  lockPhoto: "images/lock.jpg",

  // Notes typed one by one in "Forever for Kashshaf" (edit with your own feelings)
  foreverNotes: [
    "I never knew a person could feel like home until I met you.",
    "Your smile is my favorite part of every single day.",
    "With you, even the quiet moments feel full.",
    "I'm proud of you in ways I never say out loud enough.",
    "Thank you for being so gentle with my heart.",
    "Whatever tomorrow brings, I want to face it beside you.",
    "You are my calm, my chaos, and my favorite person.",
    "I love you, Kashshaf. Today, tomorrow, and always. 🤍"
  ],

  // Target Countdown Date
  countdownDate: "2026-11-18T00:00:00+06:00", // Bangladesh Standard Time (UTC+06:00)

  // Couple Names & Key Info
  names: {
    heroTitle: "Hey Kashshaf! 🤍",
    passenger: "Kashshaf & Me"
  },

  // Love letter section (edit the text and photos here)
  loveLetter: {
    name: "Kashshaf.",
    photo1: "images/loveletter-1.jpeg",
    photo2: "images/loveletter-2.jpg",
    text: "Dear Kashshaf,\nJust a little love letter because you have been living in my heart since day one.\nYou are my calm, my favorite person, and my safest place.\nThank you for being mine and for making everything feel so easy.\nI'm never letting go.",
    from: "From: Me, always"
  },

  // Section backgrounds: ONLY TWO photos, alternated across the first five sections.
  sectionBackgrounds: [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1600&auto=format&fit=crop"
  ],

  // Love Notes for the Reasons Jar
  loveNotes: [
    "Because your smile completely brightens my darkest days.",
    "Because you make me feel like the luckiest person alive.",
    "Because your laugh is my absolute favorite sound in the world.",
    "Because even quiet moments with you feel like magic.",
    "Because you understand my heart without me needing to speak.",
    "Because loving you is the easiest, most natural thing I've ever done.",
    "Because you turn ordinary days into unforgettable memories.",
    "Because your hand fits perfectly in mine.",
    "Because every future plan I make has you in it.",
    "Because you inspire me to be a better person every single day."
  ],

  // Boarding Pass Configuration
  boardingPass: {
    passengerName: "Kashshaf & Me",
    originCode: "LAL",
    originName: "Lalbagh, Dhaka",
    destCode: "SKY",
    destName: "Skyfall · Mohakhali",
    boardingTime: "19:00",
    flightNo: "LOVE-2026",
    gate: "A18",
    seat: "01A",
    scratchDestination: "✨ Skyfall Restaurant · 10th Floor, SKS Tower, Mohakhali ✨"
  },

  // Journey Roadmap Carousel Items (replace image URLs with your own photos; "message" shows beside the opened photo)
  roadmapItems: [
    {
      title: "1. The Spark",
      caption: "Where two strangers quietly became each other's favorite person.",
     	image: "images/roadmap-1.jpg",
      message: "The day I met you, I had no idea my whole world was about to get softer, brighter and so much happier."
    },
    {
      title: "2. Girlfriend Day",
      caption: "Celebrating our special bond and every moment together.",
      image: "images/roadmap-2.jpg",
      message: "Every celebration feels small next to the joy of simply having you. Happy Girlfriend Day, my love."
    },
    {
      title: "3. Golden Hour Walks",
      caption: "Watching sunsets while wishing time would stand still.",
     image: "images/roadmap-3.jpg",
      message: "Walking beside you at golden hour is my favorite kind of quiet. I wanted that evening to last forever."
    },
    {
      title: "4. Still Choosing You",
      caption: "Every path leading back to you, today and forever.",
      image: "images/roadmap-4.jpg",
      message: "If I could live every day again, I would choose you every single time."
    },
    {
      title: "5. Late-Night Talks",
      caption: "Hours of talking that still felt too short.",
      image: "images/roadmap-5.jpg",
      message: "You make midnight feel like home. I could talk to you until the stars got tired."
    },
    {
      title: "6. Little Laughs",
      caption: "The tiny moments that turned into big memories.",
     image: "images/roadmap-6.jpg",
      message: "Your laugh is my favorite sound. It fixes my worst days without even trying."
    },
    {
      title: "7. Simply Us",
      caption: "No plan, no rush, just us being us.",
      image: "images/roadmap-7.jpg",
      message: "Ordinary days with you are my favorite days. Nothing needs to be perfect when you are there."
    },
    {
      title: "8. Our Next Chapter",
      caption: "Whatever comes next, we will write it together.",
      image: "images/roadmap-8.jpg",
      message: "I do not know every page ahead, but I know I want you in all of them."
    }
  ],

  // Optional: your own portrait photos for the 3D galaxy + infinity loop, [{ src, title, msg }, ...]. Empty = built from the roadmap photos.
  memoryPhotos: [],

  // Love Tree birds: how many birds arrive per wave (2, then 3, then 4) and the letters they carry (one per bird).
  birdWaves: [2, 3, 4],
  birdLetters: [
    { title: "Hello from a little bird", text: "I flew all this way just to tell you that someone loves you very much." },
    { title: "Reason #1", text: "Because you make ordinary days feel like a story I never want to finish." },
    { title: "A tiny reminder", text: "You are doing better than you think. I am proud of you, always." },
    { title: "Reason #2", text: "Because your smile is the first thing I look for in every memory." },
    { title: "For your hard days", text: "Rest your head here for a minute. I am with you, even in the quiet." },
    { title: "Reason #3", text: "Because loving you feels like the easiest thing in the world." },
    { title: "A secret", text: "Sometimes I read our old messages just to feel close to you again." },
    { title: "A promise", text: "I will keep choosing you, in the loud days and the quiet ones." },
    { title: "The last letter", text: "Whatever tomorrow brings, I hope it brings us closer. I love you, Kashshaf. 🤍" }
  ],

  // Optional: paste a form endpoint (e.g. Formspree) to also receive the notes people save in the last section.
  noteEndpoint: "",

  // Video Section Configuration
   videos: [
    {
      title: "Our Special Sunset Moment 🌅",
      subtitle: "A sweet memory frozen in time",
      src: "videos/video-1.mp4",
      poster: "images/poster-1.JPG"
    },
    {
      title: "Laughter & Sweet Memories ✨",
      subtitle: "Every second with you is a gift",
      src: "videos/video-2.mp4",
      poster: "images/poster-2.JPG"
    }
  ],

  // Audio Files
  bgMusicSrc: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-piano-10815.mp3",
  featuredMusic: {
    title: "Aarzu Cinematic",
    artist: "Asim Azhar, Noor, Khan, Madhurxo · DJ Sumit Rajwanshi",
    cover: "images/bg-2.jpg",
    src: "audio/aarzu-cinematic.mp3",
    note: "A melody to stay with for a little while. 🤍"
  },
  // Add user-provided lyrics here with timestamps after the lyrics text is supplied.
  // Format: { time: 12.4, text: "your provided lyric line" }
  // Supplied audio duration is about 144.7 seconds.
  // Do not populate copyrighted song lyrics from audio alone.
  featuredLyrics: [],

  // Interactive Quiz Questions
  quiz: [
    {
      question: "When did our journey officially start counting?",
      options: ["January 26, 2026", "February 14, 2026", "December 31, 2025"],
      correct: 0,
      feedback: "Correct! The most special day ever. 🤍"
    },
    {
      question: "Where did we spend our memorable evening walk?",
      options: ["Dhanmondi Lake", "By the Sea", "Mountain Trail"],
      correct: 0,
      feedback: "Spot on! Golden hour by the lake was magical. ✨"
    },
    {
      question: "What is my absolute favorite thing about you?",
      options: ["Your smile", "Your kindness", "Everything about you"],
      correct: 2,
      feedback: "Obviously all of it! You're my favorite person. 🤍"
    }
  ],

  // Open When Envelopes Content
  letters: {
    miss: {
      title: "Open When You Miss Me...",
      text: "Hey, Kashshaf.\n\nIf you're missing me right now, close your eyes for a second and imagine me holding your hand. No matter how far apart we are, my heart finds its way to you."
    },
    smile: {
      title: "Open When You Need a Smile...",
      text: "Hey, beautiful.\n\nRemember this—you look cutest when you smile, and your smile becomes my reason to smile too. Take a deep breath and smile for me!"
    },
    stress: {
      title: "Open When You're Stressing...",
      text: "My love,\n\nI know today may have been heavy. Let this remind you that you don't have to carry everything alone. Rest, breathe, and remember you are deeply loved."
    }
  }
};

/* ==========================================================================
   SYNTHETIC WEB AUDIO SOUND HOOKS (ZERO EXTERNAL ASSET FAILURES)
   ========================================================================== */
class AudioHooks {
  static playGlassChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch(e) {}
  }

  static playBowArrowSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch(e) {}
  }
}

/* ==========================================================================
   INITIALIZATION & APPLICATION ENGINE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initLockScreen();
  initHello();
  initRouteMap();
  initCinematicFlight();
  initLoveNotes();
  initSectionBackgrounds();
  initLoveLetter();
  initStoryClock();
  initThemeSwitcher();
  initReasonsJar();
  initBoardingPass();
  initBloomingTree();
  initQuiz();
  initGrandFireworks();
  initRoadmapCarousel();
  initMemoryGalaxy();
  initInfinityLoop();
  initAudioPlayer();
  initFeaturedMusic();
  initSkies();
  initVideoSection();
  initEnvelopes();
  initPersonalNote();
  initParticleCanvas();
  initGSAPScroll();
  initBgZone();
  initVaultHeart();
  initVibeCarousel();
  initDreamyMemoryCarousel();
  initEnvelopeLetter();
  initLazyAssets();
});

/* ==========================================================================
   BACKGROUND SLIDESHOW & PARALLAX ENGINE
   ========================================================================== */
function initSectionBackgrounds() {
  const list = CONFIG.sectionBackgrounds;
  document.querySelectorAll('.has-bg').forEach((sec, i) => {
    sec.style.setProperty('--sec-bg', `url("${list[i % list.length]}")`);
  });
}

function initLoveLetter() {
  const L = CONFIG.loveLetter; if (!L) return;
  const set = (id, fn) => { const el = document.getElementById(id); if (el) fn(el); };
  set('llPhoto1', e => e.src = L.photo1);
  set('llPhoto2', e => e.src = L.photo2);
  set('llName', e => e.textContent = L.name);
  set('llText', e => e.textContent = L.text);
  set('llFrom', e => e.textContent = L.from);
}

/* ==========================================================================
   COUNTDOWN TIMER ENGINE
   ========================================================================== */
function initStoryClock() {
  const start = new Date(CONFIG.storyStart).getTime();
  const end = new Date(CONFIG.countdownDate).getTime();
  const spanDays = Math.ceil((end - start) / 864e5);
  const RING = 276.46; // circumference of r=44
  const num = (id, v) => { const el = $(id); if (el) el.textContent = v.toLocaleString('en-US'); };
  const ring = (key, value, max) => {
    const n = $('c-' + key), r = $('rg-' + key);
    if (n) n.textContent = String(value).padStart(2, '0');
    if (r) r.style.strokeDashoffset = RING * (1 - Math.min(1, value / max));
  };
  function paint() {
    const now = Date.now(), left = Math.max(0, end - now);
    ring('days', Math.floor(left / 864e5), spanDays);
    ring('hours', Math.floor(left / 36e5) % 24, 24);
    ring('mins', Math.floor(left / 6e4) % 60, 60);
    ring('secs', Math.floor(left / 1e3) % 60, 60);
    const p = Math.min(1, Math.max(0, (now - start) / (end - start)));
    const fill = $('jrFill'), dot = $('jrDot');
    if (fill) fill.style.width = p * 100 + '%';
    if (dot) dot.style.left = p * 100 + '%';
    num('jrPct', 0); if ($('jrPct')) $('jrPct').textContent = Math.round(p * 100) + '%';
    const since = Math.max(0, now - start);
    num('tg-days', Math.floor(since / 864e5)); num('tg-weeks', Math.floor(since / 6048e5)); num('tg-hours', Math.floor(since / 36e5));
  }
  paint();
  setInterval(paint, 1000);
}

/* ==========================================================================
   THEME SWITCHER ENGINE
   ========================================================================== */
function initThemeSwitcher() {
  const triggerBtn = document.getElementById('themeTriggerBtn');
  const switcherBox = document.getElementById('themeSwitcherBox');
  const dots = document.querySelectorAll('.theme-dot');
  const validThemes = ['theme-purple', 'theme-emerald', 'theme-sunset', 'theme-ruby'];

  if (!triggerBtn || !switcherBox) return;

  const applyTheme = (theme) => {
    const safeTheme = validThemes.includes(theme) ? theme : 'theme-purple';
    document.body.classList.remove(...validThemes);
    document.body.classList.add(safeTheme);
    localStorage.setItem('preferred_theme', safeTheme);
  };

  triggerBtn.addEventListener('click', () => switcherBox.classList.toggle('active'));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      applyTheme(dot.getAttribute('data-theme'));
      switcherBox.classList.remove('active');
    });
  });

  const savedTheme = localStorage.getItem('preferred_theme');
  applyTheme(savedTheme || 'theme-purple');
}

/* ==========================================================================
   FEATURE 2: REASONS WHY I LOVE YOU JAR (10/10 POLISH + NON-REPEATING)
   ========================================================================== */
function initReasonsJar() {
  const jar = document.getElementById('loveJar');
  const popup = document.getElementById('jarNotePopup');
  const noteText = document.getElementById('jarNoteText');
  const closeBtn = document.getElementById('closeJarNoteBtn');
  const jarParticleCanvas = document.getElementById('jar-particle-canvas');

  if (!jar || !popup || !noteText) return;

  let availableNotes = [...CONFIG.loveNotes];
  let isAnimating = false;

  // Particle System for Jar Ambient Dust
  let jarCtx = null;
  let particles = [];
  if (jarParticleCanvas) {
    jarParticleCanvas.width = 400;
    jarParticleCanvas.height = 500;
    jarCtx = jarParticleCanvas.getContext('2d');
    
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * 400,
        y: Math.random() * 500,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random()
      });
    }

    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let jarVisible = false, jarFrame = 0;
    function renderJarParticles() {
      jarFrame = 0;
      if (!jarCtx || !jarVisible || reduceMotion || document.hidden) return;
      jarCtx.clearRect(0, 0, 400, 500);
      particles.forEach(p => {
        p.y += p.vy; p.x += p.vx;
        if (p.y < 0) p.y = 500;
        if (p.x < 0 || p.x > 400) p.vx *= -1;
        jarCtx.beginPath(); jarCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        jarCtx.fillStyle = `rgba(255, 220, 230, ${p.alpha * 0.6})`; jarCtx.fill();
      });
      jarFrame = requestAnimationFrame(renderJarParticles);
    }
    if ('IntersectionObserver' in window && !reduceMotion) {
      const jarObserver = new IntersectionObserver(entries => {
        jarVisible = entries[0].isIntersecting;
        if (jarVisible && !jarFrame) jarFrame = requestAnimationFrame(renderJarParticles);
        if (!jarVisible && jarFrame) { cancelAnimationFrame(jarFrame); jarFrame = 0; }
      }, { threshold: 0.05 });
      jarObserver.observe(jar);
    } else if (!reduceMotion) { jarVisible = true; renderJarParticles(); }
  }

  function drawNote() {
    if (isAnimating) return;
    isAnimating = true;

    AudioHooks.playGlassChime();

    if (availableNotes.length === 0) {
      availableNotes = [...CONFIG.loveNotes];
    }
    const randomIndex = Math.floor(Math.random() * availableNotes.length);
    const selectedNote = availableNotes.splice(randomIndex, 1)[0];

    jar.classList.add('open');

    setTimeout(() => {
      noteText.innerText = `"${selectedNote}"`;
      popup.classList.add('active');
    }, 750);
  }

  function closeJarNote() {
    popup.classList.remove('active');
    setTimeout(() => {
      jar.classList.remove('open');
      isAnimating = false;
    }, 450);
  }

  jar.addEventListener('click', drawNote);
  jar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') drawNote();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeJarNote);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closeJarNote();
  });
}

/* ==========================================================================
   FEATURE 3: PREMIUM BOARDING PASS & CANVAS SCRATCH REVEAL
   ========================================================================== */
function initBoardingPass() {
  const p = CONFIG.boardingPass;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setEl('passPassenger', p.passengerName);
  setEl('stubPassenger', p.passengerName);
  setEl('passOriginCode', p.originCode);
  setEl('passOriginName', p.originName);
  setEl('passDestCode', p.destCode);
  setEl('passDestName', p.destName);
  setEl('stubDest', p.destName);
  setEl('passFlightNo', p.flightNo);
  setEl('passBoardingTime', p.boardingTime);
  setEl('passGate', p.gate);
  setEl('passSeat', p.seat);
  setEl('stubSeat', p.seat);
  setEl('scratchHiddenText', p.scratchDestination);

  // Generate SVG Barcode
  const barcodeSvg = document.getElementById('barcodeSvg');
  if (barcodeSvg) {
    let barcodeHtml = '';
    for (let i = 0; i < 35; i++) {
      const x = i * 4;
      const width = Math.random() > 0.5 ? 2.5 : 1;
      barcodeHtml += `<rect x="${x}" y="0" width="${width}" height="40" fill="#2b2b2b"/>`;
    }
    barcodeSvg.innerHTML = barcodeHtml;
  }

  // Generate SVG QR Code
  const qrSvg = document.getElementById('qrSvg');
  if (qrSvg) {
    let qrHtml = '<rect width="40" height="40" fill="#fff"/>';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (Math.random() > 0.4 || (r < 3 && c < 3)) {
          qrHtml += `<rect x="${c*5}" y="${r*5}" width="4" height="4" fill="#2b2b2b"/>`;
        }
      }
    }
    qrSvg.innerHTML = qrHtml;
  }
      // 3D Perspective Tilt on Card Hover
  const card = document.getElementById('boardingPassCard');
  if (card && window.innerWidth > 768) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateY(${x * 0.02}deg) rotateX(${-y * 0.02}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    });
  }

  // Scratch Canvas Effect
  const canvas = document.getElementById('scratchCanvas');
  const box = document.getElementById('scratchBox');
  const stamp = document.getElementById('boardingStamp');

  if (!canvas || !box) return;

  const ctx = canvas.getContext('2d');
  let isScratching = false;

  function resizeCanvas() {
    canvas.width = box.clientWidth;
    canvas.height = box.clientHeight;

    ctx.fillStyle = '#ff6b81';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '600 13px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH TO REVEAL DESTINATION ✨', canvas.width / 2, canvas.height / 2);
  }

  resizeCanvas();

  function checkScratchPercentage() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) transparentCount++;
    }

    const percentage = (transparentCount / (pixels.length / 16)) * 100;
    if (percentage > 45) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (stamp) stamp.classList.add('stamped');
    }
  }

  function scratch(e) {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    scratch.n = (scratch.n || 0) + 1;
    if (scratch.n % 6 === 0) checkScratchPercentage();
  }

  canvas.style.touchAction = 'none';
  canvas.addEventListener('pointerdown', e => { isScratching = true; try { canvas.setPointerCapture(e.pointerId); } catch (_) {} scratch(e); });
  canvas.addEventListener('pointermove', scratch);
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(t => canvas.addEventListener(t, () => { isScratching = false; }));
  canvas.addEventListener('dblclick', () => { ctx.clearRect(0, 0, canvas.width, canvas.height); if (stamp) stamp.classList.add('stamped'); });
}

/* ==========================================================================
   GRAND CELEBRATION & FIREWORKS ENGINE
   ========================================================================== */
function initGrandFireworks() {
  const section = document.getElementById('grandFireworkSection');
  const canvas = document.getElementById('grand-firework-canvas');
  const pulseBtn = document.getElementById('grandPulseBtn');
  const resetBtn = document.getElementById('resetFireworkBtn');

  if (!canvas || !pulseBtn) return;

  const ctx = canvas.getContext('2d');
  let fireworks = [];
  let isRunning = false;

  function resize() {
    canvas.width = section.clientWidth;
    canvas.height = section.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createExplosion(x, y) {
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      fireworks.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: `hsl(${Math.random() * 360}, 100%, 75%)`
      });
    }
  }

  function loop() {
          if (!isRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.08) {
      createExplosion(Math.random() * canvas.width, Math.random() * (canvas.height * 0.7));
    }

    fireworks.forEach((f, idx) => {
      f.x += f.vx;
      f.y += f.vy;
      f.vy += 0.05;
      f.alpha -= 0.015;

      ctx.beginPath();
      ctx.arc(f.x, f.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = f.color;
      ctx.globalAlpha = Math.max(0, f.alpha);
      ctx.fill();

      });
    ctx.globalAlpha = 1;
    fireworks = fireworks.filter(f => f.alpha > 0);

    requestAnimationFrame(loop);
  }

  pulseBtn.addEventListener('click', () => {
    if (isRunning) return;
    section.classList.add('exploded');
    isRunning = true;
    loop();
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      section.classList.remove('exploded');
      isRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
}

/* ==========================================================================
   AUDIO PLAYER ENGINE
   ========================================================================== */
function initAudioPlayer() {
  const toggle = document.getElementById('audioToggle');
  const audio = document.getElementById('bgMusic');
  const status = document.getElementById('audioStatus');

  if (!toggle || !audio) return;

  audio.src = CONFIG.bgMusicSrc;
  audio.loop = true;
  audio.preload = 'none';
  let isPlaying = false;

  const syncUI = () => {
    isPlaying = !audio.paused;
    toggle.classList.toggle('playing', isPlaying);
    if (status) status.innerText = isPlaying ? '🎵 Playing Background Vibe' : '🎵 Background Vibe Paused';
  };

  const playMusic = () => {
    const promise = audio.play();
    if (promise && typeof promise.then === 'function') {
      promise.then(syncUI).catch(() => {
        syncUI();
        if (status) status.innerText = '🎵 Tap to play background music';
      });
    } else {
      syncUI();
    }
  };

  // Background music is now fully user-controlled. It never starts from scroll position.
  let userPaused = false;
  const featured = document.getElementById('featuredSongAudio');
  if (featured) featured.addEventListener('play', () => audio.pause());

  toggle.addEventListener('click', () => {
    if (audio.paused) { userPaused = false; playMusic(); }
    else { userPaused = true; audio.pause(); }
  });

  audio.addEventListener('play', syncUI);
  audio.addEventListener('pause', syncUI);
  audio.addEventListener('ended', syncUI);
}

/* ==========================================================================
   FEATURE 6: VIDEO MEMORIES GRID & AUTOMATIC SEQUENTIAL SCROLL PLAYBACK
   ========================================================================== */
function initVideoSection() {
  const grid = document.getElementById('videoGrid');
  const section = document.getElementById('video-section');
  if (!grid || !section) return;

  grid.innerHTML = '';
  const videoElements = [];
  let sectionVisible = false;
  let activeIndex = 0;

  CONFIG.videos.forEach((v, idx) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <div class="video-wrapper" role="button" tabindex="0" aria-label="Play or pause ${v.title}">
        <video id="memVideo_${idx}" src="${v.src}" poster="${v.poster}" playsinline muted preload="metadata" controls></video>
        <div class="video-play-hint" aria-hidden="true">▶</div>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.subtitle}</p>
      </div>
    `;
    grid.appendChild(card);

    const wrapper = card.querySelector('.video-wrapper');
    const videoEl = card.querySelector('video');
    videoElements.push(videoEl);

    const toggleVideo = () => {
      if (videoEl.paused) {
        activeIndex = idx;
        videoElements.forEach((other, otherIdx) => {
          if (otherIdx !== idx) other.pause();
        });
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    };

    wrapper.addEventListener('click', (e) => {
      if (e.target.closest('video') && e.target.closest('video').controls) return;
      toggleVideo();
    });
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleVideo(); }
    });

    videoEl.addEventListener('play', () => {
      activeIndex = idx;
      videoElements.forEach((other, otherIdx) => {
        if (otherIdx !== idx) other.pause();
      });
      card.classList.add('is-playing');
    });
    videoEl.addEventListener('pause', () => card.classList.remove('is-playing'));

    videoEl.addEventListener('ended', () => {
      card.classList.remove('is-playing');
      if (idx < videoElements.length - 1 && sectionVisible) {
        activeIndex = idx + 1;
        videoElements[activeIndex].currentTime = 0;
        videoElements[activeIndex].play().catch(() => {});
        videoElements[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      sectionVisible = entry.isIntersecting;
      if (sectionVisible) {
        // Start only the first video automatically; the next one is chained on ended.
        if (videoElements[0] && videoElements.every(v => v.paused || v.ended)) {
          activeIndex = Math.min(activeIndex, videoElements.length - 1);
          videoElements[activeIndex].play().catch(() => {});
        }
      } else {
        videoElements.forEach(v => v.pause());
      }
    });
  }, { threshold: 0.25 });

  observer.observe(section);
}

/* ==========================================================================
   OPEN WHEN ENVELOPES ENGINE
   ========================================================================== */
function initEnvelopes() {
  const modal = document.getElementById('letter-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('closeLetterBtn');
  const envelopeCards = document.querySelectorAll('.envelope-card');

  if (!modal) return;

  envelopeCards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-letter');
      const letter = CONFIG.letters[key];
      if (letter) {
        modalTitle.innerText = letter.title;
        modalBody.innerText = letter.text;
        modal.classList.add('active');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

/* ==========================================================================
   QUIZ ENGINE (decorated, with score screen)
   ========================================================================== */
function initQuiz() {
  const card = $('quizCard'), qEl = $('quizQuestion'), oEl = $('quizOptions'), fEl = $('quizFeedback'), pEl = $('quizProgress'), deco = $('quizDeco');
  if (!card || !qEl || !oEl) return;
  const Q = CONFIG.quiz, KEYS = ['A', 'B', 'C', 'D'];
  let cur = 0, score = 0, missed = false, locked = false;

  deco.innerHTML = Array.from({ length: 12 }, (_, i) =>
    `<i style="left:${(i * 8.3 + Math.random() * 5) | 0}%;animation-delay:${-i * 1.1}s;font-size:${12 + Math.random() * 16 | 0}px">${['🤍', '💗', '✨', '🌸'][i % 4]}</i>`).join('');

  const hearts = done => { pEl.innerHTML = Q.map((_, i) => `<span class="${done || i < cur ? 'done' : i === cur ? 'now' : ''}">♥</span>`).join(''); };
  function pop(btn) {
    const c = card.getBoundingClientRect(), b = btn.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const s = document.createElement('span'); s.className = 'quiz-pop'; s.textContent = ['💖', '✨', '💗'][i % 3];
      s.style.cssText = `left:${b.left - c.left + b.width * (.1 + Math.random() * .8)}px;top:${b.top - c.top + b.height / 2}px;--dx:${(Math.random() - .5) * 90}px`;
      card.appendChild(s); setTimeout(() => s.remove(), 1100);
    }
  }
  function show() {
    locked = false; missed = false; fEl.textContent = ''; fEl.className = 'quiz-feedback'; hearts();
    const q = Q[cur];
    qEl.innerHTML = `<small class="quiz-step">Question ${cur + 1} of ${Q.length}</small><span>${q.question}</span>`;
    oEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'quiz-btn';
      b.innerHTML = `<em>${KEYS[i]}</em><span>${opt}</span><b aria-hidden="true"></b>`;
      b.addEventListener('click', () => answer(b, i)); oEl.appendChild(b);
    });
    card.classList.remove('flip'); void card.offsetWidth; card.classList.add('flip');
  }
  function answer(b, i) {
    if (locked) return; const q = Q[cur];
    if (i === q.correct) {
      locked = true; if (!missed) score++;
      b.classList.add('correct'); b.lastChild.textContent = '💖'; fEl.textContent = q.feedback; fEl.className = 'quiz-feedback good';
      pop(b); setTimeout(() => { cur++; cur < Q.length ? show() : result(); }, 1900);
    } else {
      missed = true; b.classList.add('wrong'); b.disabled = true; b.lastChild.textContent = '💔';
      fEl.textContent = 'Oops! Try again sweetheart 🤍'; fEl.className = 'quiz-feedback bad';
    }
  }
  function result() {
    hearts(true);
    const pct = score / Q.length * 100, msg = pct === 100 ? 'Perfect! You know us by heart 💞' : pct >= 50 ? 'So close, you really know us 🤍' : 'Let us make more memories together 🌸';
    qEl.innerHTML = `<small class="quiz-step">Quiz complete</small><span>You got ${score} of ${Q.length} on the first try!</span>`;
    oEl.innerHTML = `<div class="quiz-ring" style="--p:${pct}"><b>${score}/${Q.length}</b></div><p class="quiz-verdict">${msg}</p><button type="button" class="quiz-again">Play again 💞</button>`;
    oEl.querySelector('.quiz-again').addEventListener('click', () => { cur = 0; score = 0; show(); });
    fEl.textContent = ''; card.classList.remove('flip'); void card.offsetWidth; card.classList.add('flip');
  }
  show();
}

/* ==========================================================================
   GALAXY SKY: twinkling stars + falling stars on a canvas (runs only when visible)
   ========================================================================== */
function makeSky(canvas, host, density = 5200) {
  if (!canvas || !host) return;
  const ctx = canvas.getContext('2d'), TINT = ['255,255,255', '255,214,235', '200,220,255'];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, dpr = 1, stars = [], shots = [], vis = false;
  function size() {
    const r = host.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    stars = Array.from({ length: Math.round(w * h / density) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.3 + .25, p: Math.random() * 6.3, s: Math.random() * 1.6 + .4, c: TINT[Math.random() * 3 | 0] }));
  }
  function frame(now) {
    if (!vis) return; if (!reduceMotion) requestAnimationFrame(frame);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    stars.forEach(s => { ctx.fillStyle = `rgba(${s.c},${reduceMotion ? .5 : .25 + .65 * Math.abs(Math.sin(now / 900 * s.s + s.p))})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.3); ctx.fill(); });
    if (!reduceMotion && Math.random() < .018 && shots.length < 4) shots.push({ x: Math.random() * w * 1.2, y: -20, vx: -(3 + Math.random() * 3), vy: 4 + Math.random() * 3.5, l: 1 });
    shots = shots.filter(s => s.l > 0 && s.y < h + 40);
    shots.forEach(s => {
      s.x += s.vx; s.y += s.vy; s.l -= .004;
      const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 9, s.y - s.vy * 9); g.addColorStop(0, `rgba(255,255,255,${s.l})`); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 9, s.y - s.vy * 9); ctx.stroke();
      ctx.fillStyle = `rgba(255,255,255,${s.l})`; ctx.beginPath(); ctx.arc(s.x, s.y, 1.8, 0, 6.3); ctx.fill();
    });
  }
  size(); addEventListener('resize', size, { passive: true });
  new IntersectionObserver(e => { const v = e[0].isIntersecting; if (v && !vis) { vis = true; size(); requestAnimationFrame(frame); } else if (!v) vis = false; }).observe(host);
}
function initSkies() { makeSky($('songSky'), document.querySelector('#featuredMusicSection .galaxy-layer')); }

/* ==========================================================================
   3D MEMORY GALAXY: CSS-3D scene, orbit / zoom / glide, photos always face you
   ========================================================================== */
function initMemoryGalaxy() {
  const stage = $('g3dStage'), world = $('g3dWorld'), enter = $('g3dEnter');
  if (!stage || !world) return;
  makeSky($('g3dSky'), stage, 4200);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v)), HOME = { rx: -18, ry: 0, px: 0, py: 0, zz: -760 };
  const add = (cls, style, html = '') => {
    const e = document.createElement(cls === 'g3d-card' ? 'button' : 'div');
    e.className = cls + ' g3d-bb'; if (cls === 'g3d-card') e.type = 'button';
    e.style.cssText = style; e.innerHTML = html; world.appendChild(e); return e;
  };

  world.appendChild(Object.assign(document.createElement('div'), { className: 'g3d-disc' }));
  add('g3d-core', '--x:0px;--y:0px;--z:0px', '🤍');
  for (let i = 0; i < 40; i++) {                       // drifting star orbs
    const a = Math.random() * 6.28, b = Math.acos(2 * Math.random() - 1), r = 500 + Math.random() * 700, s = 3 + Math.random() * 5;
    add('g3d-orb', `--x:${r * Math.sin(b) * Math.cos(a) | 0}px;--y:${r * Math.cos(b) * .6 | 0}px;--z:${r * Math.sin(b) * Math.sin(a) | 0}px;width:${s}px;height:${s}px`);
  }
    const photos = (CONFIG.galaxyPhotos && CONFIG.galaxyPhotos.length) ? CONFIG.galaxyPhotos : memoryPhotos();
  photos.forEach((p, i) => {                           // spiral-arm placement
    const t = i / photos.length, th = t * 5.4 + (i % 3) * 2.0944, r = 170 + t * 620;
    const el = add('g3d-card', `--x:${Math.cos(th) * r | 0}px;--y:${(Math.random() - .5) * 260 * (.35 + t) | 0}px;--z:${Math.sin(th) * r | 0}px`);
    const img = new Image(); img.src = p.src; img.alt = p.title; img.draggable = false; img.loading = 'lazy'; photoFallback(img, i); el.appendChild(img); el._p = p;
  });

  let rx = HOME.rx, ry = HOME.ry, px = HOME.px, py = HOME.py, zz = HOME.zz, vx = 0, vy = 0;
  let active = false, vis = false, dragging = false, moved = 0, tapCard = null;
  const ptrs = new Map();
  const apply = () => {
    world.style.setProperty('--rx', rx + 'deg'); world.style.setProperty('--ry', ry + 'deg');
    world.style.transform = `translate3d(${px}px,${py}px,${zz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const zoom = d => { zz = clamp(zz + d, -1800, 520); };
  const pan = (dx, dy) => { px = clamp(px + dx, -700, 700); py = clamp(py + dy, -500, 500); };
  const reset = () => { ({ rx, ry, px, py, zz } = HOME); vx = vy = 0; };
  const setActive = on => { active = on; stage.classList.toggle('active', on); };

  function frame() {
    if (!vis) return; requestAnimationFrame(frame);
    if (!dragging) { ry += vy + (active ? .015 : .07); rx = clamp(rx + vx, -85, 85); vx *= .94; vy *= .94; }
    apply();
  }
  const dist = () => { const [a, b] = [...ptrs.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
  stage.addEventListener('pointerdown', e => {
    if (!active) return;
    stage.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragging = true; moved = 0; vx = vy = 0; tapCard = e.target.closest('.g3d-card');
  });
  stage.addEventListener('pointermove', e => {
    const p = ptrs.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; moved += Math.abs(dx) + Math.abs(dy);
    if (ptrs.size === 2) {
      const before = dist(); p.x = e.clientX; p.y = e.clientY; zoom((dist() - before) * 2.6); pan(dx / 2, dy / 2);
    } else if (e.buttons & 2 || e.shiftKey) { p.x = e.clientX; p.y = e.clientY; pan(dx, dy); }
    else { p.x = e.clientX; p.y = e.clientY; ry += dx * .28; rx = clamp(rx - dy * .28, -85, 85); vy = dx * .17; vx = -dy * .17; }
  });
  const release = e => {
    if (!ptrs.delete(e.pointerId)) return;
    if (!ptrs.size) { dragging = false; if (moved < 8 && tapCard && e.type === 'pointerup') MemoryViewer.open(tapCard, tapCard._p); tapCard = null; }
  };
  stage.addEventListener('pointerup', release); stage.addEventListener('pointercancel', release);
  stage.addEventListener('wheel', e => { if (!active) return; e.preventDefault(); zoom(-e.deltaY * 1.1); }, { passive: false });
  stage.addEventListener('contextmenu', e => { if (active) e.preventDefault(); });
  addEventListener('keydown', e => {
    if (!active || MemoryViewer.isOpen()) return;
    const k = e.key.toLowerCase(), map = { arrowleft: () => pan(40, 0), arrowright: () => pan(-40, 0), arrowup: () => pan(0, 40), arrowdown: () => pan(0, -40), w: () => zoom(80), s: () => zoom(-80), '+': () => zoom(80), '-': () => zoom(-80), escape: () => setActive(false) };
    if (map[k]) { e.preventDefault(); map[k](); }
  });
  enter.addEventListener('click', () => setActive(true));
  $('g3dExit').addEventListener('click', () => setActive(false));
  $('g3dIn').addEventListener('click', () => zoom(160));
  $('g3dOut').addEventListener('click', () => zoom(-160));
  $('g3dReset').addEventListener('click', reset);
  new IntersectionObserver(e => { const v = e[0].isIntersecting; if (v && !vis) { vis = true; requestAnimationFrame(frame); } else if (!v) { vis = false; setActive(false); } }, { threshold: .05 }).observe(stage);
}

/* ==========================================================================
   INFINITY LOOP: memories fall into a figure-eight and flow around it forever
   ========================================================================== */
function initInfinityLoop() {
  const stage = $('infStage'), holder = $('infCards'), glow = $('infGlow'), core = $('infCore'), svg = $('infSvg');
  if (!stage || !holder) return;
  const TAU = Math.PI * 2, BASE = TAU / 38000, photos = memoryPhotos().slice(0, 12);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const cards = photos.map((p, i) => {
    const el = document.createElement('button'); el.type = 'button'; el.className = 'inf-card';
    const img = new Image(); img.src = p.src; img.alt = p.title; img.draggable = false; img.loading = 'lazy'; photoFallback(img, i); el.appendChild(img);
    el.addEventListener('click', () => MemoryViewer.open(el, p)); holder.appendChild(el);
    return { el, i, intro: 0 };
  });
  let w = 0, h = 0, a = 0, ky = 1, vertical = false, ang = 0, speed = BASE, target = BASE, last = 0, vis = false, started = false;

  const pos = t => {                                  // lemniscate of Bernoulli (vertical on portrait screens)
    const d = 1 + Math.sin(t) ** 2, u = a * Math.cos(t) / d, v = a * ky * Math.sin(t) * Math.cos(t) / d;
    return vertical ? { x: w / 2 + v, y: h / 2 + u } : { x: w / 2 + u, y: h / 2 + v };
  };
  function size() {
    const r = stage.getBoundingClientRect(); w = r.width; h = r.height; vertical = h > w;
    const cw = cards[0].el.offsetWidth * 1.25, ch = cards[0].el.offsetHeight * 1.25;      // card size at its largest scale
    const along = vertical ? h / 2 - ch / 2 - 10 : w / 2 - cw / 2 - 10, across = vertical ? w / 2 - cw / 2 - 10 : h / 2 - ch / 2 - 10;
    a = Math.max(along, 40); ky = Math.min(1.9, Math.max(across, 20) / (a * .3535));
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    let dpath = ''; for (let i = 0; i <= 160; i++) { const q = pos(i / 160 * TAU); dpath += (i ? 'L' : 'M') + q.x.toFixed(1) + ' ' + q.y.toFixed(1); }
    glow.setAttribute('d', dpath + 'Z'); core.setAttribute('d', dpath + 'Z');
  }
  function frame(now) {
    if (!vis) return; requestAnimationFrame(frame);
    const dt = Math.min(now - last, 64); last = now;
    speed += (target - speed) * .08; ang += dt * speed;
    cards.forEach(c => {
      c.intro += dt; const k = clamp(c.intro / 1100), fall = (1 - k) * (1 - k) * -h * .8;     // cards drop into the loop
      const t = ang + c.i / cards.length * TAU, p = pos(t), s = Math.sin(t);
      c.el.style.transform = `translate3d(${p.x}px,${p.y + fall}px,0) translate(-50%,-50%) rotate(${Math.cos(t) * 5}deg) scale(${1 + .24 * s})`;
      c.el.style.zIndex = Math.round(100 + s * 50); c.el.style.opacity = k * (.78 + .22 * (s + 1) / 2);
    });
  }
  holder.addEventListener('pointerover', e => { target = e.target.closest('.inf-card') ? BASE * .12 : BASE; });
  holder.addEventListener('pointerleave', () => { target = BASE; });
  size(); addEventListener('resize', size, { passive: true });
  new IntersectionObserver(e => {
    const v = e[0].isIntersecting;
    if (v && !vis) { vis = true; if (!started) { started = true; cards.forEach(c => c.intro = -c.i * 130); } last = performance.now(); size(); requestAnimationFrame(frame); }
    else if (!v) vis = false;
  }, { threshold: .1 }).observe(stage);
}

/* ==========================================================================
   PERSONAL NOTE: saved only when the button is pressed
   ========================================================================== */
function initPersonalNote() {
  const ta = $('personalNote'), status = $('saveStatus'), btn = $('saveNoteBtn'), card = $('savedNote');
  if (!ta || !btn) return;
  const KEY = 'kashshaf_note_v2';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } };
  const paint = n => {
    card.hidden = !n; if (!n) return;
    $('savedNoteText').textContent = n.text; $('savedNoteDate').textContent = 'Saved ' + new Date(n.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  };
  const saved = read(); if (saved) { ta.value = saved.text; paint(saved); }

  ta.addEventListener('input', () => { status.textContent = 'Not saved yet. Press the button 💌'; });
  btn.addEventListener('click', () => {
    const text = ta.value.trim();
    if (!text) { status.textContent = 'Write something first 🤍'; return; }
    const note = { text, date: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(note)); } catch (e) { status.textContent = 'Could not save on this browser.'; return; }
    paint(note); status.textContent = 'Saved 🤍'; btn.classList.remove('saved'); void btn.offsetWidth; btn.classList.add('saved');
    if (CONFIG.noteEndpoint) fetch(CONFIG.noteEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ note: text, date: new Date(note.date).toISOString() }) }).catch(() => {});
  });
}

/* ==========================================================================
   CURSOR PARTICLE ENGINE
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 3 + 1,
        alpha: 1
      });
    }
  });

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 107, 129, ${Math.max(0, p.alpha)})`;
      ctx.fill();

      if (p.alpha <= 0) particles.splice(idx, 1);
    });

    requestAnimationFrame(loop);
  }

  loop();
}

/* ==========================================================================
   GSAP SCROLLTRIGGER REVEALS
   ========================================================================== */

const $=id=>document.getElementById(id);

/* LOCK SCREEN: glass dial pad, auto-unlock, hello intro */
function initLockScreen(){
  const lock=$('lock-screen'),pad=$('dialpad'),disp=$('pinDisplay'),err=$('errorMsg');
  const code='x'.repeat(CONFIG.passLen);let val='',busy=false;
  document.documentElement.classList.add('is-locked');setTimeout(()=>{if(!lock.classList.contains('unlocked'))return;document.documentElement.classList.remove('is-locked')},30000);
  const src=CONFIG.lockPhoto||CONFIG.sectionBackgrounds[0];
  $('lockPhoto').src=src;
  disp.innerHTML=[...code].map(()=>'<i class="pin-dot"></i>').join('');
  const dots=[...disp.children],paint=()=>dots.forEach((d,i)=>d.classList.toggle('on',i<val.length));
  [1,2,3,4,5,6,7,8,9,'',0,'⌫'].forEach(k=>{const b=document.createElement('button');b.type='button';b.className='key'+(k===''?' ghost':'')+(k==='⌫'?' del':'');b.textContent=k;b.dataset.k=k;if(k==='')b.tabIndex=-1;pad.appendChild(b)});
  pad.addEventListener('click',e=>{const b=e.target.closest('.key');if(b)press(b.dataset.k)});
  document.addEventListener('keydown',e=>{if(lock.classList.contains('unlocked'))return;if(/^\d$/.test(e.key))press(e.key);else if(e.key==='Backspace')press('⌫')});
  function press(k){
    if(busy||k==='')return;
    if(k==='⌫')val=val.slice(0,-1);else if(val.length<code.length)val+=k;
    paint();err.style.display='none';
    if(val.length===code.length)check();   // auto-unlock: no Enter needed
  }
  function check(){
    busy=true;
    if(fnv(val)===CONFIG.passHash){
      disp.classList.add('ok');
      setTimeout(()=>{lock.classList.add('unlocked'); window.runHello();},380);
    }else{
      disp.classList.add('shake');err.style.display='block';
      setTimeout(()=>{disp.classList.remove('shake');val='';paint();busy=false},520);
    }
  }
}

/* MEMORY VIEWER: image grows out of its thumbnail, message slides in on the right */
const MemoryViewer = (() => {
  let box = null, srcEl = null;
  const target = () => {
    const w = innerWidth, h = innerHeight;
    if (w < 800) { const bw = Math.min(w * .86, 400), bh = Math.min(h * .46, bw * 1.3); return { left: (w - bw) / 2, top: Math.max(56, h * .07), width: bw, height: bh }; }
    const bh = Math.min(h * .84, 780), bw = Math.min(w * .5, bh * .8);
    return { left: w * .04 + (w * .56 - bw) / 2, top: (h - bh) / 2, width: bw, height: bh };
  };
  const place = (el, r, radius) => Object.assign(el.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', borderRadius: radius });
  function open(el, d) {
    if (box) return;
    const v = $('memViewer'), r = el.getBoundingClientRect(); srcEl = el;
    box = document.createElement('div'); box.className = 'viewer-img';
    const img = new Image(); img.src = d.src; img.alt = d.title; box.appendChild(img);
    place(box, r, getComputedStyle(el).borderRadius || '24px'); v.appendChild(box);
    $('viewerTitle').textContent = d.title; $('viewerMsg').textContent = d.msg;
    v.classList.add('open'); el.classList.add('is-hidden-src');
    void box.offsetWidth;
    requestAnimationFrame(() => { place(box, target(), '28px'); $('viewerPanel').classList.add('show'); });
  }
  function close() {
    if (!box) return;
    const b = box, s = srcEl; box = null;
    $('viewerPanel').classList.remove('show');
    if (s.isConnected) place(b, s.getBoundingClientRect(), getComputedStyle(s).borderRadius); else b.style.opacity = 0;
    $('memViewer').classList.remove('open');
    setTimeout(() => { b.remove(); s.classList.remove('is-hidden-src'); }, 750);
  }
  const isOpen = () => !!box;
  document.addEventListener('DOMContentLoaded', () => {
    $('viewerClose').addEventListener('click', close);
    $('memViewer').addEventListener('click', e => { if (e.target.id === 'memViewer') close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    addEventListener('resize', () => { if (box) place(box, target(), '28px'); });
  });
  return { open, close, isOpen };
})();

/* Portrait photo list shared by the 3D galaxy and the infinity loop */
function memoryPhotos() {
  if (CONFIG.memoryPhotos && CONFIG.memoryPhotos.length) return CONFIG.memoryPhotos;
  const portrait = u => /unsplash/.test(u) ? u.replace(/\?.*$/, '') + '?w=520&h=720&fit=crop&auto=format' : u;
  return Array.from({ length: 24 }, (_, i) => {
    const it = CONFIG.roadmapItems[i % CONFIG.roadmapItems.length];
    return { src: portrait(it.image), title: it.title.replace(/^\d+\.\s*/, ''), msg: it.message };
  });
}
const photoFallback = (img, i) => { img.onerror = () => { img.onerror = null; img.src = CONFIG.roadmapItems[i % 4].image; }; };

/* ROADMAP: 3D carousel, click the centre photo to open it */
function initRoadmapCarousel() {
  const track = $('carouselTrack'), car = $('roadmapCarousel'), items = CONFIG.roadmapItems;
  if (!track || !items.length) return;
  const prev = $('prevSlideBtn'), next = $('nextSlideBtn'), tt = $('currentSlideTitle'), td = $('currentSlideDesc'), fill = $('progressFill'), n = items.length;
  track.innerHTML = '';
  const slides = items.map((it, i) => {
    const s = document.createElement('div'); s.className = 'slide';
    const img = new Image(); img.src = it.image; img.alt = it.title; img.draggable = false; photoFallback(img, i);
    s.appendChild(img); track.appendChild(s); return s;
  });
  let idx = 0, timer = 0, paused = false, x0 = null, dragged = false;
  function layout() {
    slides.forEach((s, i) => {
      let d = i - idx; if (d > n / 2) d -= n; if (d < -n / 2) d += n; const a = Math.abs(d);
      s.style.transform = `translate(-50%,-50%) translate3d(${d * 62}%,0,${-a * 220}px) rotateY(${-d * 42}deg) scale(${1 - a * .06})`;
      s.style.opacity = a > 2 ? 0 : 1 - a * .3; s.style.zIndex = 10 - a; s.style.pointerEvents = a > 2 ? 'none' : 'auto';
    });
    tt.innerText = items[idx].title; td.innerText = items[idx].caption; fill.style.width = ((idx + 1) / n * 100) + '%';
  }
  const go = i => { idx = (i + n) % n; layout(); };
  const start = () => { clearInterval(timer); timer = setInterval(() => { if (!document.hidden && !paused && !MemoryViewer.isOpen()) go(idx + 1); }, 4500); };
  prev.onclick = () => { go(idx - 1); start(); };
  next.onclick = () => { go(idx + 1); start(); };
  slides.forEach((s, i) => s.addEventListener('click', () => {
    if (dragged) return;
    if (i !== idx) { go(i); start(); return; }
    MemoryViewer.open(s, { src: items[i].image, title: items[i].title.replace(/^\d+\.\s*/, ''), msg: items[i].message });
  }));
  car.addEventListener('pointerdown', e => { x0 = e.clientX; dragged = false; });
  addEventListener('pointerup', e => {
    if (x0 === null) return; const dx = e.clientX - x0; x0 = null;
    dragged = Math.abs(dx) > 8;
    if (Math.abs(dx) > 45) { go(idx + (dx < 0 ? 1 : -1)); start(); }
  });
  car.addEventListener('pointerenter', () => paused = true); car.addEventListener('pointerleave', () => paused = false);
  layout(); start();
}

/* Dreamy image carousel: all imagery is sourced from existing project assets. */
function initDreamyMemoryCarousel(){
  const track=$('dreamyCarouselTrack'), windowEl=$('dreamyCarouselWindow'), prev=$('dreamyPrev'), next=$('dreamyNext'), dots=$('dreamyCarouselDots'), count=$('dreamyCarouselCount');
  if(!track||!windowEl||!prev||!next||!dots)return;
  const cards=[...track.querySelectorAll('.dreamy-memory-card')]; if(!cards.length)return;
  let index=0, startX=null;
  dots.innerHTML=cards.map((_,i)=>`<button type="button" class="dreamy-dot${i===0?' is-active':''}" aria-label="Show memory ${i+1}" aria-current="${i===0?'true':'false'}"></button>`).join('');
  const dotButtons=[...dots.querySelectorAll('button')];
  const show=(nextIndex)=>{
    index=(nextIndex+cards.length)%cards.length;
    cards.forEach((card,i)=>{card.classList.toggle('is-active',i===index);card.setAttribute('aria-hidden',i===index?'false':'true');});
    dotButtons.forEach((dot,i)=>{dot.classList.toggle('is-active',i===index);dot.setAttribute('aria-current',i===index?'true':'false');});
    if(count)count.textContent=`${String(index+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
    track.style.transform=`translateX(-${index*100}%)`;
  };
  prev.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1));
  dotButtons.forEach((dot,i)=>dot.addEventListener('click',()=>show(i)));
  windowEl.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){show(index+1);next.focus();}if(e.key==='ArrowLeft'){show(index-1);prev.focus();}});
  windowEl.addEventListener('pointerdown',e=>{startX=e.clientX;});
  windowEl.addEventListener('pointerup',e=>{if(startX===null)return;const dx=e.clientX-startX;startX=null;if(Math.abs(dx)>45)show(index+(dx<0?1:-1));});
  show(0);
}

/* SPECIAL SONG: user-controlled audio with timestamp-driven lyrics when supplied. */
function initFeaturedMusic() {
  const audio = $('featuredSongAudio'), btn = $('featuredPlayBtn'), fill = $('featuredProgressFill'), bar = $('songProgressBar'), set = $('vinylSet'), song = CONFIG.featuredMusic;
  if (!audio || !btn) return;
  $('featuredSongTitle').textContent = song.title;
  $('featuredSongArtist').textContent = song.artist;
  audio.src = song.src;
  const sleeve = $('sleeveImg');
  if (sleeve) sleeve.src = song.cover || CONFIG.roadmapItems[0].image;
  const note = $('songNoteText'); if (note) note.textContent = song.note || 'A melody for the moments that feel like us. 🤍';
  const current = $('songCurrentTime'), duration = $('songDuration');
  const lyrics = Array.isArray(CONFIG.featuredLyrics) ? [...CONFIG.featuredLyrics].filter(x => x && Number.isFinite(Number(x.time)) && typeof x.text === 'string').sort((a,b)=>Number(a.time)-Number(b.time)) : [];
  const lyricsScroll = $('lyricsScroll'), lyricsEmpty = $('lyricsEmpty'), lyricsNote = $('lyricsTimingNote');
  const fmt = n => { if (!Number.isFinite(n)) return '0:00'; const m=Math.floor(n/60), s=Math.floor(n%60); return `${m}:${String(s).padStart(2,'0')}`; };
  let activeLyric = -1;
  if (lyrics.length && lyricsScroll) {
    lyricsScroll.hidden = false;
    if (lyricsEmpty) lyricsEmpty.hidden = true;
    if (lyricsNote) lyricsNote.textContent = 'Lyrics timing is based on the timestamps in CONFIG.featuredLyrics.';
    lyricsScroll.innerHTML = lyrics.map((line,i)=>`<p class="lyric-line" data-lyric-index="${i}">${line.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>`).join('');
  }
  const syncLyrics = () => {
    if (!lyrics.length || !lyricsScroll) return;
    let next = -1;
    for (let i=0;i<lyrics.length;i++) { if (Number(lyrics[i].time) <= audio.currentTime) next=i; else break; }
    if (next === activeLyric) return;
    activeLyric = next;
    lyricsScroll.querySelectorAll('.lyric-line').forEach((line,i)=>{
      line.classList.toggle('is-current', i===activeLyric);
      line.classList.toggle('is-past', i<activeLyric);
    });
    const currentLine = lyricsScroll.querySelector('.lyric-line.is-current');
    if (currentLine) currentLine.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  };
  const sync = () => {
    if (audio.duration && fill) fill.style.width = `${Math.min(100, audio.currentTime/audio.duration*100)}%`;
    if (current) current.textContent = fmt(audio.currentTime);
    if (duration) duration.textContent = fmt(audio.duration);
    syncLyrics();
  };
  const setPlaying = playing => { set.classList.toggle('playing', playing); btn.textContent = playing ? 'Ⅱ' : '▶'; btn.setAttribute('aria-label', playing ? 'Pause song' : 'Play song'); };
  btn.addEventListener('click', () => {
    if (audio.paused) audio.play().catch(() => { const hint=$('songPlaybackHint'); if(hint) hint.textContent='Tap play again if your browser blocked audio.'; });
    else audio.pause();
  });
  audio.addEventListener('play', () => { const bg=$('bgMusic'); if(bg) bg.pause(); setPlaying(true); });
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('ended', () => { setPlaying(false); audio.currentTime=0; sync(); });
  ['timeupdate','loadedmetadata','durationchange','seeked'].forEach(ev => audio.addEventListener(ev, sync));
  if (bar) {
    bar.setAttribute('role','slider'); bar.setAttribute('tabindex','0'); bar.setAttribute('aria-valuemin','0');
    const seekAt = x => { if (!audio.duration) return; const r=bar.getBoundingClientRect(); audio.currentTime=Math.max(0,Math.min(1,(x-r.left)/r.width))*audio.duration; sync(); };
    bar.addEventListener('click', e => seekAt(e.clientX));
    bar.addEventListener('keydown', e => { if(!audio.duration) return; if(e.key==='ArrowRight'){audio.currentTime=Math.min(audio.duration,audio.currentTime+5);e.preventDefault();sync();} if(e.key==='ArrowLeft'){audio.currentTime=Math.max(0,audio.currentTime-5);e.preventDefault();sync();} });
  }
  sync();
}


/* LOVE TREES: arrow -> bloom -> tree moves left -> falling leaf grows a 2nd tree -> neon rope
   -> letter-carrying birds (waves) -> roots join and write FOREVER */
function initBloomingTree() {
  const canvas = $('tree-canvas'), btn = $('shootArrowBtn'), sec = $('tree-section');
  const hint = $('treeHint'), modal = $('birdModal');
  if (!canvas || !btn) return;

  const ctx = canvas.getContext('2d'), H = 640, GY = 596;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WAVES = CONFIG.birdWaves, LETTERS = CONFIG.birdLetters, TOTAL = WAVES.reduce((a, b) => a + b, 0);
  const COLS = ['#ff4d6d', '#ff6b81', '#ff8fa3', '#ee5253', '#ffb3c1', '#ff758f'];
  const BIRDS = [['#ffffff', '#ffd6e0'], ['#ffd1dc', '#ff9fb6'], ['#ffe9a8', '#ffcf5a'], ['#bfe3ff', '#7db8ff'], ['#e6c9ff', '#b98cf0']];
  const ORDER = ['idle', 'nock', 'fly', 'burst', 'seed', 'grow', 'bloom', 'shift', 'leaf', 'grow2', 'bloom2', 'rope', 'birds', 'roots', 'end'];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const eio = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const back = t => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);
  const lerp = (a, b, t) => a + (b - a) * t;
  const HEART = { x: 400, y: 170, s: 34 }, FROM = { x: 70, y: 540 }, CTRL = { x: 260, y: 200 };

  let W = 800, dpr = 1, sc = 1, ox = 0, oy = 0, vis = false, last = 0, L = {};
  let st, ts, T1, T2, fall, parts, petals, birds, waveIdx, nextWave, pending, opened, letterIdx, roots;
  const flies = Array.from({ length: 28 }, () => ({ x: Math.random() * 800, y: Math.random() * H, r: Math.random() * 1.8 + .6, p: Math.random() * 6.3, s: Math.random() * 1.4 + .5 }));

  const at = s => ORDER.indexOf(st) >= ORDER.indexOf(s);
  const go = (s, now = performance.now()) => { st = s; ts = now; };
  const setHint = t => { hint.textContent = t; hint.classList.toggle('show', !!t); };
  function reset() {
    st = 'idle'; ts = 0; T1 = T2 = fall = pending = roots = null;
    parts = []; petals = []; birds = []; waveIdx = 0; nextWave = 0; opened = 0; letterIdx = 0; setHint('');
  }

  /* ---------- layout (portrait phones use a narrower logical canvas) ---------- */
  function setup() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
    W = r.width / r.height < .85 ? 520 : 800;
    sc = Math.min(r.width / W, r.height / H); ox = (r.width - W * sc) / 2; oy = (r.height - H * sc) / 2;
    const narrow = W < 600;
    L = { cx: W / 2, k: narrow ? .5 : .62, c1: W * .24, c2: W * .76, bs: narrow ? 1.5 : 1.15 };
    HEART.x = W / 2; CTRL.x = W * .325; FROM.x = W * .09;
    [T1, T2].forEach(t => { if (t) t.oc = null; });
  }

  /* ---------- drawing helpers ---------- */
  const heart = (x, y, s, c, a = 1, r = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.globalAlpha = a; ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(0, s * .5); ctx.bezierCurveTo(-s * 1.1, -s * .1, -s * .55, -s * .9, 0, -s * .35); ctx.bezierCurveTo(s * .55, -s * .9, s * 1.1, -s * .1, 0, s * .5); ctx.fill(); ctx.restore(); };
  function arrow(x, y, ang, a) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.globalAlpha = a; ctx.lineCap = 'round';
    ctx.strokeStyle = '#f6dcae'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-72, 0); ctx.lineTo(0, 0); ctx.stroke();
    ctx.strokeStyle = '#ff8fa3'; ctx.lineWidth = 2.5;
    [-1, 1].forEach(k => { ctx.beginPath(); ctx.moveTo(-72, 0); ctx.lineTo(-84, 9 * k); ctx.moveTo(-62, 0); ctx.lineTo(-74, 9 * k); ctx.stroke(); });
    ctx.fillStyle = '#ff4757'; ctx.beginPath(); ctx.moveTo(8, 0); ctx.lineTo(-8, -7); ctx.lineTo(-8, 7); ctx.fill(); ctx.restore();
  }
  const bez = s => { const m = 1 - s; return { x: m * m * FROM.x + 2 * m * s * CTRL.x + s * s * HEART.x, y: m * m * FROM.y + 2 * m * s * CTRL.y + s * s * HEART.y }; };
  const tf = (c, cx, k) => { c.translate(cx, GY); c.scale(k, k); c.translate(-400, -GY); };   // tree-local -> canvas

  /* ---------- tree model ---------- */
  function makeTree() {
    const o = { br: [], tips: [], leaves: [], end: 0, oc: null, t0: 0 };
    const grow = (x, y, ang, len, w, d, start) => {
      const bend = (Math.random() - .5) * .5, x1 = x + Math.cos(ang) * len, y1 = y + Math.sin(ang) * len;
      const cx = (x + x1) / 2 + Math.cos(ang + 1.5708) * len * bend, cy = (y + y1) / 2 + Math.sin(ang + 1.5708) * len * bend;
      const dur = d === 5 ? 1200 : 450 + len * 2.5;
      o.br.push({ x, y, x1, y1, cx, cy, w, start, dur, d }); o.end = Math.max(o.end, start + dur);
      if (d > 0) {
        const n = d > 3 ? 2 : (Math.random() < .5 ? 2 : 3);
        for (let i = 0; i < n; i++) grow(x1, y1, ang + (i - (n - 1) / 2) * .62 + (Math.random() - .5) * .25, len * (.74 + Math.random() * .08), w * .66, d - 1, start + dur * .82);
      } else o.tips.push({ x: x1, y: y1 });
      if (d === 1 || d === 2) o.tips.push({ x: x1, y: y1 });
    };
    grow(400, GY, -Math.PI / 2, 128, 16, 5, 0); o.end += 250;
    return o;
  }
  function makeLeaves(o, now) {
    o.t0 = now; o.leaves = [];
    o.tips.forEach(t => { for (let i = 0; i < 6; i++) {
      const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * 40, x = t.x + Math.cos(a) * r, y = t.y + Math.sin(a) * r * .85;
      o.leaves.push({ x, y, s: 7 + Math.random() * 7, c: COLS[Math.random() * COLS.length | 0], rot: (Math.random() - .5) * .9, ph: Math.random() * 6.3, d: (GY - y) / 420 * 1400 + Math.random() * 700 });
    } });
    o.leaves.sort((a, b) => a.y - b.y);
  }
  function drawBranch(c, b, t) {
    const p = clamp((t - b.start) / b.dur); if (p <= 0) return;
    const e = eio(p); c.lineCap = 'round'; let px = b.x, py = b.y;
    for (let i = 1; i <= 8; i++) {
      const s = e * i / 8, m = 1 - s, x = m * m * b.x + 2 * m * s * b.cx + s * s * b.x1, y = m * m * b.y + 2 * m * s * b.cy + s * s * b.y1;
      c.strokeStyle = b.d > 1 ? '#5a3a22' : '#80573a'; c.lineWidth = Math.max(1.3, b.w * (1 - .32 * i / 8));
      c.beginPath(); c.moveTo(px, py); c.lineTo(x, y); c.stroke(); px = x; py = y;
    }
  }
  function cacheTree(o) {            // branches pre-rendered once (centre position, full size)
    o.oc = document.createElement('canvas'); o.oc.width = canvas.width; o.oc.height = canvas.height;
    const c = o.oc.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.translate(ox, oy); c.scale(sc, sc);
    tf(c, L.cx, 1); o.br.forEach(b => drawBranch(c, b, 1e9));
  }
  function drawTree(o, cx, k, now) {
    if (!o.oc || o.oc.width !== canvas.width) cacheTree(o);
    const bx = (ox + L.cx * sc) * dpr, by = (oy + GY * sc) * dpr, tx = (ox + cx * sc) * dpr;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.translate(tx, by); ctx.scale(k, k); ctx.translate(-bx, -by); ctx.drawImage(o.oc, 0, 0); ctx.restore();
    ctx.save(); tf(ctx, cx, k);
    o.leaves.forEach(l => {
      const q = clamp((now - o.t0 - l.d) / 700); if (q <= 0) return;
      heart(l.x, l.y + Math.sin(now / 1300 + l.ph) * 1.3, l.s * back(q), l.c, Math.min(1, q * 1.6), l.rot + Math.sin(now / 900 + l.ph) * .12);
    });
    ctx.restore();
  }

  /* ---------- neon rope ---------- */
  const ropeG = () => { const ax = L.c1 + 4, ay = GY - 230 * L.k, bx = L.c2 - 4, len = bx - ax; return { ax, ay, bx, cx: (ax + bx) / 2, cy: ay + len * .24 }; };
  const rp = (g, u) => { const m = 1 - u; return { x: m * m * g.ax + 2 * m * u * g.cx + u * u * g.bx, y: m * m * g.ay + 2 * m * u * g.cy + u * u * g.ay }; };
  function drawRope(g, p) {
    const pts = []; for (let i = 0; i <= 40; i++) pts.push(rp(g, i / 40 * p));
    [[11, .13, '#ff4d9d'], [5, .35, '#ff7ab8'], [2, 1, '#fff0f6']].forEach(([w, a, col]) => {
      ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath();
      pts.forEach((q, i) => i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y)); ctx.stroke();
    });
    ctx.globalAlpha = 1; ctx.fillStyle = '#fff'; [rp(g, 0), pts[pts.length - 1]].forEach(q => { ctx.beginPath(); ctx.arc(q.x, q.y, 4, 0, 6.3); ctx.fill(); });
  }

  /* ---------- birds carrying letters ---------- */
  function spawnWave(now) {
    const n = WAVES[waveIdx], slots = Array.from({ length: n }, (_, i) => .13 + .74 * (i + .5) / n).sort(() => Math.random() - .5);
    slots.forEach((u, i) => {
      const side = Math.random() < .5 ? -1 : 1;
      birds.push({ u, mode: 'in', t0: now + i * 450, sx: side < 0 ? -60 : W + 60, sy: 30 + Math.random() * 120, dir: side < 0 ? 1 : -1, letter: letterIdx++, col: BIRDS[Math.random() * BIRDS.length | 0], ph: Math.random() * 6.3, x: -999, y: 0 });
    });
    setHint(`Tap a bird to open its letter 💌 · ${TOTAL - opened} left`);
  }
  function drawBird(b, x, y, flap, sw) {
    const [body, wing] = b.col;
    ctx.save(); ctx.translate(x, y); ctx.scale(b.dir * L.bs, L.bs);
    ctx.save(); ctx.rotate(sw);                                           // hanging letter
    ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = .9; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 8); ctx.stroke();
    ctx.fillStyle = b.opened ? '#e7d9c3' : '#fff7e8'; ctx.strokeStyle = '#ff6b81'; ctx.lineWidth = 1;
    ctx.fillRect(-8, 8, 16, 11); ctx.strokeRect(-8, 8, 16, 11);
    ctx.beginPath(); ctx.moveTo(-8, 8); ctx.lineTo(0, 15); ctx.lineTo(8, 8); ctx.stroke();
    if (!b.opened) { ctx.fillStyle = '#ff4757'; ctx.beginPath(); ctx.arc(0, 15, 2, 0, 6.3); ctx.fill(); }
    ctx.restore();
    ctx.strokeStyle = '#d99a56'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(-3, -5); ctx.lineTo(-3, 0); ctx.moveTo(3, -5); ctx.lineTo(3, 0); ctx.stroke();
    ctx.fillStyle = wing; ctx.beginPath(); ctx.moveTo(-9, -12); ctx.lineTo(-22, -17); ctx.lineTo(-20, -8); ctx.fill();
    ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(0, -11, 12, 7.5, 0, 0, 6.3); ctx.fill();
    ctx.beginPath(); ctx.arc(10, -18, 5.6, 0, 6.3); ctx.fill();
    ctx.fillStyle = '#ffb347'; ctx.beginPath(); ctx.moveTo(15, -19); ctx.lineTo(21, -17); ctx.lineTo(15, -15.5); ctx.fill();
    ctx.fillStyle = '#2b2b2b'; ctx.beginPath(); ctx.arc(11.5, -19, 1.1, 0, 6.3); ctx.fill();
    ctx.fillStyle = wing; ctx.beginPath(); ctx.moveTo(4, -14); ctx.quadraticCurveTo(-4, -18 - 14 * flap, -14, -12 - 16 * flap); ctx.quadraticCurveTo(-6, -9, -5, -7); ctx.fill();
    ctx.restore();
  }
  function stepBird(b, g, now) {
    const p = rp(g, b.u); let x = p.x, y = p.y, flap = -.15, sw = Math.sin(now / 650 + b.ph) * .1;
    if (b.mode === 'in') {
      if (now < b.t0) return;
      const t = clamp((now - b.t0) / 1800), e = eio(t);
      x = lerp(b.sx, p.x, e); y = lerp(b.sy, p.y, e) - Math.sin(e * Math.PI) * 34;
      flap = Math.sin(now / 55 + b.ph); sw = Math.sin(now / 180) * .25 * (1 - e);
      if (t >= 1) b.mode = 'sit';
    } else if (b.mode === 'out') {
      const t = clamp((now - b.t0) / 2000);
      if (now >= b.t0) { x = lerp(p.x, b.dir > 0 ? W + 90 : -90, eio(t)); y = lerp(p.y, -100, t * t); flap = Math.sin(now / 55 + b.ph); }
      sw = Math.sin(now / 200) * .2; if (t >= 1) b.gone = true;
    }
    b.x = x; b.y = y; drawBird(b, x, y, flap, sw);
  }
  function pickBird(e) {
    const r = canvas.getBoundingClientRect(), px = (e.clientX - r.left - ox) / sc, py = (e.clientY - r.top - oy) / sc;
    let best = null, bd = 1e9;
    birds.forEach(b => { if (b.mode !== 'sit' || b.opened) return; const d = Math.hypot(px - b.x, py - (b.y + 2 * L.bs)); if (d < 34 * L.bs && d < bd) { bd = d; best = b; } });
    return best;
  }
  function openLetter(b) {
    const l = LETTERS[b.letter % LETTERS.length];
    $('birdModalTitle').textContent = l.title; $('birdModalBody').textContent = l.text;
    b.opened = true; pending = b; opened++; modal.classList.add('active');
    setHint(opened >= TOTAL ? 'Every letter is read 🤍' : `Tap a bird to open its letter 💌 · ${TOTAL - opened} left`);
  }
  function closeLetter() {
    modal.classList.remove('active');
    if (pending) { pending.dir = pending.u < .5 ? -1 : 1; pending.mode = 'out'; pending.t0 = performance.now() + 250; pending = null; }
  }

  /* ---------- roots + FOREVER ---------- */
  function makeRoots() {
    const mid = W / 2, main = x0 => Array.from({ length: 27 }, (_, i) => { const u = i / 26; return { x: lerp(x0, mid, u), y: GY + 4 + Math.sin(u * 10 + x0) * 4 * (.3 + u) * (1 - u ** 3) + 4 * u }; });
    roots = { mains: [main(L.c1), main(L.c2)], lets: [] };
    roots.mains.forEach(pts => { for (let j = 3; j < 24; j += 4) roots.lets.push({ x: pts[j].x, y: pts[j].y, dx: (j % 8 === 3 ? 1 : -1) * (8 + Math.random() * 10), dy: 14 + Math.random() * 16, at: j / 26 }); });
  }
  function drawRoots(el) {
    const p = clamp(el / 2200);
    ctx.lineCap = 'round';
    roots.mains.forEach(pts => {
      const n = Math.floor(p * 26);
      [['#6b4128', 1], ['#a06a45', .45]].forEach(([col, wk]) => {
        ctx.strokeStyle = col; ctx.beginPath();
        for (let i = 0; i <= n; i++) { ctx.lineWidth = (5 - 3 * i / 26) * wk + .8; i ? ctx.lineTo(pts[i].x, pts[i].y) : ctx.moveTo(pts[i].x, pts[i].y); }
        ctx.stroke();
      });
    });
    ctx.strokeStyle = '#7a4a2c'; ctx.lineWidth = 1.6;
    roots.lets.forEach(r => { const q = clamp((p - r.at) * 3); if (q <= 0) return; ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.quadraticCurveTo(r.x + r.dx * .2, r.y + r.dy * .8 * q, r.x + r.dx * q, r.y + r.dy * q); ctx.stroke(); });
    if (el < 1800) return;
    const tp = clamp((el - 1800) / 3200), word = 'FOREVER', cy = GY - 66;
    ctx.save(); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
    ctx.font = "700 100px 'Cormorant Garamond', serif";
    const fs = Math.min(100 * (L.c2 - L.c1) * .78 / ctx.measureText(word).width, 96);
    ctx.font = `700 ${fs}px 'Cormorant Garamond', serif`;
    ctx.setLineDash([500, 500]); ctx.lineDashOffset = 500 * (1 - tp); ctx.lineWidth = 2.4; ctx.strokeStyle = '#e0b08a'; ctx.strokeText(word, W / 2, cy);
    ctx.setLineDash([]); ctx.globalAlpha = clamp((tp - .65) / .35);
    const gr = ctx.createLinearGradient(W / 2 - 150, 0, W / 2 + 150, 0); gr.addColorStop(0, '#ff9fb4'); gr.addColorStop(1, '#ffe3ea');
    ctx.fillStyle = gr; ctx.shadowColor = 'rgba(255,107,129,.9)'; ctx.shadowBlur = 18; ctx.fillText(word, W / 2, cy);
    ctx.restore();
  }

  /* ---------- main loop ---------- */
  function early(now, el, dt) {
    if (st === 'idle') heart(HEART.x, HEART.y, HEART.s * (1 + Math.sin(now / 280) * .08), '#ff4757');
    else if (st === 'nock') { heart(HEART.x, HEART.y, HEART.s, '#ff4757'); const p = clamp(el / 800); arrow(FROM.x + (1 - p) * -30, FROM.y, -.62, eio(p)); if (p >= 1) go('fly', now); }
    else if (st === 'fly') {
      heart(HEART.x, HEART.y, HEART.s, '#ff4757');
      const s = eio(clamp(el / 900)), q = bez(s), m = 1 - s;
      const ang = Math.atan2(2 * m * (CTRL.y - FROM.y) + 2 * s * (HEART.y - CTRL.y), 2 * m * (CTRL.x - FROM.x) + 2 * s * (HEART.x - CTRL.x));
      for (let k = 1; k < 7; k++) { const b = bez(Math.max(0, s - k * .03)); ctx.globalAlpha = .5 - k * .07; ctx.fillStyle = '#ffd0da'; ctx.beginPath(); ctx.arc(b.x, b.y, 3.2 - k * .3, 0, 6.3); ctx.fill(); }
      arrow(q.x, q.y, ang, 1);
      if (s >= 1) {
        for (let i = 0; i < 70; i++) { const a = Math.random() * 6.28, v = Math.random() * 6 + 1.5; parts.push({ x: HEART.x, y: HEART.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1, s: Math.random() * 9 + 4, c: COLS[Math.random() * 6 | 0], l: 1 }); }
        sec.classList.add('blast'); setTimeout(() => sec.classList.add('bloom-bg'), 350); go('burst', now);
      }
    } else if (st === 'burst') {
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += .06 * dt; p.vx *= .985; p.l -= .011 * dt; if (p.l > 0) heart(p.x, p.y, p.s, p.c, p.l, p.x * .02); });
      if (el > 1500) { fall = { y: HEART.y, v: 0 }; go('seed', now); }
    } else if (st === 'seed') {
      fall.v += .5 * dt; fall.y += fall.v * dt;
      ctx.globalAlpha = .4; ctx.fillStyle = '#ff9fb4'; ctx.beginPath(); ctx.arc(HEART.x, fall.y, 16, 0, 6.3); ctx.fill(); heart(HEART.x, fall.y, 12, '#ff4757');
      if (fall.y >= GY - 6) { fall = null; T1 = makeTree(); go('grow', now); }
    } else if (st === 'grow') {
      if (el < 800) ripple(L.cx, el);
      ctx.save(); tf(ctx, L.cx, 1); T1.br.forEach(b => drawBranch(ctx, b, el)); ctx.restore();
      if (el > T1.end) {
        makeLeaves(T1, now);
        petals = Array.from({ length: 14 }, () => ({ x: W / 2 - 150 + Math.random() * 300, y: 150 + Math.random() * 200, s: 5 + Math.random() * 4, v: .25 + Math.random() * .35, ph: Math.random() * 6.3, c: COLS[Math.random() * 6 | 0] }));
        go('bloom', now);
      }
    }
  }
  function ripple(x, el) { ctx.globalAlpha = 1 - el / 800; ctx.strokeStyle = '#ff8fa3'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(x, GY, 10 + el * .12, 3 + el * .03, 0, 0, 6.3); ctx.stroke(); ctx.globalAlpha = 1; }

  function late(now, el, dt) {
    const s1 = st === 'shift' ? eio(clamp(el / 1800)) : at('leaf') ? 1 : 0;
    drawTree(T1, lerp(L.cx, L.c1, s1), lerp(1, L.k, s1), now);

    if (st === 'bloom') {
      if (el > 2600) petals.forEach(p => { p.y += p.v * dt; p.x += Math.sin(now / 700 + p.ph) * .4 * dt; if (p.y > GY) { p.y = 160 + Math.random() * 120; p.x = W / 2 - 150 + Math.random() * 300; } heart(p.x, p.y, p.s, p.c, .8, Math.sin(now / 500 + p.ph) * .6); });
      if (el > 3500) go('shift', now);
    } else if (st === 'shift' && s1 >= 1) {
      const pool = T1.leaves.filter(l => l.y < GY - 170).sort((a, b) => b.x - a.x).slice(0, 10), l = pool[Math.random() * pool.length | 0] || T1.leaves[0];
      T1.leaves.splice(T1.leaves.indexOf(l), 1);
      fall = { x0: L.c1 + (l.x - 400) * L.k, y0: GY + (l.y - GY) * L.k, s: l.s * L.k, c: l.c }; go('leaf', now);
    } else if (st === 'leaf') {
      const s = clamp(el / 2800), x = lerp(fall.x0, L.c2, eio(s)) + Math.sin(s * 14) * 18 * (1 - s);
      heart(x, lerp(fall.y0, GY - 6, s), fall.s * (1 + s * .6), fall.c, 1, Math.sin(s * 14) * .8);
      if (s >= 1) { fall = null; T2 = makeTree(); go('grow2', now); }
    } else if (st === 'grow2') {
      if (el < 800) ripple(L.c2, el);
      ctx.save(); tf(ctx, L.c2, L.k); T2.br.forEach(b => drawBranch(ctx, b, el)); ctx.restore();
      if (el > T2.end) { makeLeaves(T2, now); go('bloom2', now); }
    }
    if (!at('bloom2')) return;
    drawTree(T2, L.c2, L.k, now);
    if (st === 'bloom2' && el > 2400) go('rope', now);
    if (!at('rope')) return;

    const g = ropeG(), p = st === 'rope' ? eio(clamp(el / 1500)) : 1;
    drawRope(g, p);
    if (st === 'rope' && p >= 1) { go('birds', now); nextWave = now + 600; }
    if (st === 'birds') {
      if (!birds.length && nextWave && now >= nextWave) {
        nextWave = 0;
        if (waveIdx < WAVES.length) spawnWave(now); else { makeRoots(); setHint('Our roots are finding each other… 🌱'); go('roots', now); }
      }
      birds.forEach(b => stepBird(b, g, now));
      const n = birds.length; birds = birds.filter(b => !b.gone);
      if (n && !birds.length) { waveIdx++; nextWave = now + 900; }
    }
    if (at('roots')) {
      drawRoots(st === 'roots' ? el : 1e9);
      if (st === 'roots' && el > 6200) { go('end', now); setHint('Forever, Kashshaf 🤍'); btn.textContent = '🌱 Grow Again ✨'; btn.classList.add('at-top'); btn.style.display = ''; }
    }
  }

  function frame(now) {
    if (!vis) return; requestAnimationFrame(frame);
    const dt = clamp((now - last) / 16.7, 0, 3); last = now; const el = now - ts;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.translate(ox, oy); ctx.scale(sc, sc);
    ctx.save(); ctx.translate(W / 2, GY); ctx.scale(1, .13);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, W * .42); g.addColorStop(0, 'rgba(255,130,170,.35)'); g.addColorStop(1, 'rgba(255,130,170,0)');
    ctx.fillStyle = g; ctx.fillRect(-W * .42, -W * .42, W * .84, W * .84); ctx.restore();
    flies.forEach(f => { ctx.globalAlpha = .3 + .4 * Math.sin(now / 1000 * f.s + f.p); ctx.fillStyle = '#ffe9a8'; ctx.beginPath(); ctx.arc(f.x * W / 800, f.y + Math.sin(now / 1700 + f.p) * 6, f.r, 0, 6.3); ctx.fill(); });
    ctx.globalAlpha = 1;
    if (at('bloom')) late(now, el, dt); else early(now, el, dt);
  }

  /* ---------- wiring ---------- */
  reset(); setup(); addEventListener('resize', setup, { passive: true });
  new IntersectionObserver(e => { const v = e[0].isIntersecting; if (v && !vis) { vis = true; requestAnimationFrame(frame); } else if (!v) vis = false; }, { threshold: .05 }).observe(sec);
  canvas.addEventListener('click', e => { const b = pickBird(e); if (b) openLetter(b); });
  canvas.addEventListener('pointermove', e => { canvas.style.cursor = pickBird(e) ? 'pointer' : ''; });
  $('birdModalClose').addEventListener('click', closeLetter);
  modal.addEventListener('click', e => { if (e.target === modal) closeLetter(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeLetter(); });
  btn.addEventListener('click', () => {
    if (st === 'end') { reset(); btn.classList.remove('at-top'); sec.classList.remove('blast', 'bloom-bg'); btn.textContent = '🏹 Shoot Arrow & Bloom Tree ✨'; }
    btn.style.display = 'none';
    if (reduce) { const now = performance.now(); T1 = makeTree(); makeLeaves(T1, now - 1e5); sec.classList.add('bloom-bg'); go('bloom', now); return; }
    AudioHooks.playBowArrowSound(); go('nock');
  });
}

/* FOREVER: love notes typed one by one */
function initLoveNotes(){
  const sec=$('grandFireworkSection'),box=$('loveNote');if(!sec||!box)return;
  let run=0;const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  async function play(id){
    let i=0;
    while(run===id){
      box.classList.remove('fade');box.innerHTML='<span></span><i class="caret"></i>';const sp=box.firstChild;
      for(const ch of CONFIG.foreverNotes[i%CONFIG.foreverNotes.length]){if(run!==id)return;sp.textContent+=ch;await sleep(42)}
      await sleep(2400);box.classList.add('fade');await sleep(800);i++;
    }
  }
  new MutationObserver(()=>{
    if(sec.classList.contains('exploded')){if(!run){run=Date.now();play(run)}}
    else{run=0;box.innerHTML=''}
  }).observe(sec,{attributes:true,attributeFilter:['class']});
}

/* SCROLL REVEAL (lightweight, no scroll-linked JS) */
function initGSAPScroll(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px'});
  document.querySelectorAll('.milestone').forEach(m=>io.observe(m));
}


/* ==========================================================================
   NEW CONFIG: carousel slides + red-envelope letter (edit freely)
   ========================================================================== */
CONFIG.vibeSlides = [
  { src: "images/bg-2.jpg",  title: "Marigold Mornings", desc: "Warm light, quiet steps, and a smile I'd recognise anywhere." },
  { src: "images/bg-1.jpg", title: "Lavender Evenings", desc: "Sparkle in your eyes and the whole room softly glowing." },
  { src: "images/vibe-3.jpg", title: "Quiet Together", desc: "Some of my favourite moments never needed words." },
  { src: "images/vibe-4.jpg", title: "Our Little Adventures", desc: "Wherever we go, you make it feel like home." },
  { src: "images/vibe-5.jpg", title: "Always With You", desc: "Every chapter is better with you in it." }
];
CONFIG.galaxyPhotos = [
  { src: "images/galaxy/g-1.JPG", title: "A little moment", msg: "Some memories feel special even when there is nothing grand about them." },
  { src: "images/galaxy/g-2.JPG", title: "Your kind of magic", msg: "A small reminder of the warmth you bring into my days." },
  { src: "images/galaxy/g-3.JPG", title: "A smile to keep", msg: "If I could save a feeling for later, it would be this kind of happiness." },
  { src: "images/galaxy/g-4.jpg", title: "Soft little memories", msg: "Not every beautiful thing needs a perfect caption." },
  { src: "images/galaxy/g-5.jpg", title: "A favourite feeling", msg: "The ordinary moments become the ones the heart remembers." },
  { src: "images/galaxy/g-6.jpg", title: "Just us", msg: "No performance, no perfect timing — just a moment worth keeping." },
  { src: "images/galaxy/g-7.jpg", title: "The little things", msg: "Sometimes the smallest details stay with us the longest." },
  { src: "images/galaxy/g-8.jpg", title: "A page to revisit", msg: "A quiet reminder that there is still so much story left to write." },
  { src: "images/galaxy/g-9.jpg", title: "Warmth, remembered", msg: "Some memories feel like a soft light you can return to." },
  { src: "images/galaxy/g-10.jpg", title: "A moment in time", msg: "The best parts of a story are often the ones that happen naturally." },
  { src: "images/galaxy/g-11.jpg", title: "Something to smile at", msg: "A little pocket of happiness, kept here for another day." },
  { src: "images/galaxy/g-12.jpeg", title: "More chapters ahead", msg: "There are still new places, new laughs, and new memories waiting for us." }
];
CONFIG.envLetter = {
  to: "My dearest Kashshaf,",
  paras: [
    "If you are reading this, it means I finally found the courage to put my heart on paper.",
    "You turned ordinary days into my favourite memories, and you made love feel gentle, safe and wonderfully easy.",
    "Whatever the future holds, I hope it holds you beside me. I will choose you, again and again."
  ],
  sign: "Forever yours",
  from: "With all my love"
};

/* ==========================================================================
   Shared animated background: two photos crossfade through hero, vault, jar
   ========================================================================== */
function initBgZone() {
  const z = $('bgZone'); if (!z) return;
  const b2 = z.querySelector('.bgz-2'); let t = 0;
  const upd = () => {
    t = 0;
    const r = z.getBoundingClientRect(), total = r.height - innerHeight;
    const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    const s = Math.min(1, Math.max(0, (p - .25) / .5));
    b2.style.opacity = (s * s * (3 - 2 * s)).toFixed(3);
  };
  addEventListener('scroll', () => { if (!t) t = requestAnimationFrame(upd); }, { passive: true });
  addEventListener('resize', upd); upd();
}

/* ==========================================================================
   Memory Vault: line drawn by scrolling, ending in a heart
   ========================================================================== */
function initVaultHeart() {
  const wrap = $('vaultSvgWrap'), svg = $('vaultSvg'), path = $('gold-path'), fill = $('heart-fill'), tip = $('vault-tip'), sec = $('vault-section');
  if (!wrap || !svg || !path) return;
  let L = 0, ticking = false;
  function build() {
    const W = wrap.clientWidth || 200, H = wrap.clientHeight; if (H < 300) return;
    svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const k = Math.min(150, W * .78) / 108, cx = W / 2, top = H - 66 * k - 8, ox = cx - 50 * k, oy = top - 30 * k;
    const P = (x, y) => `${(ox + x * k).toFixed(1)} ${(oy + y * k).toFixed(1)}`;
    const heart = `C ${P(50,12)}, ${P(28,0)}, ${P(12,8)} C ${P(-4,17)}, ${P(-4,42)}, ${P(12,60)} C ${P(26,76)}, ${P(42,86)}, ${P(50,96)} C ${P(58,86)}, ${P(74,76)}, ${P(88,60)} C ${P(104,42)}, ${P(104,17)}, ${P(88,8)} C ${P(72,0)}, ${P(50,12)}, ${P(50,30)}`;
    const n = Math.max(2, Math.round((top - 10) / 150)), dy = (top - 10) / n, amp = Math.min(46, W * .23);
    let d = `M ${cx} 10`;
    for (let i = 0; i < n; i++) d += ` Q ${cx + (i % 2 ? -amp : amp)} ${10 + dy * i + dy / 2}, ${cx} ${10 + dy * (i + 1)}`;
    path.setAttribute('d', `${d} ${heart}`);
    fill.setAttribute('d', `M ${P(50,30)} ${heart} Z`);
    L = path.getTotalLength(); path.style.strokeDasharray = L; update();
  }
  function update() {
    ticking = false; if (!L) return;
    const wr = wrap.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .62 - wr.top) / wr.height));
    path.style.strokeDashoffset = L * (1 - p);
    const pt = path.getPointAtLength(L * p);
    tip.setAttribute('cx', pt.x); tip.setAttribute('cy', pt.y); tip.style.opacity = p > 0 && p < .995 ? 1 : 0;
    fill.classList.toggle('on', p >= .985);
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', build); addEventListener('load', build);
  if (window.ResizeObserver) new ResizeObserver(build).observe(sec);
  build();
}

/* ==========================================================================
   NEW: carousel whose section background follows the active slide
   ========================================================================== */
function initVibeCarousel() {
  const car = $('vibeCarousel'); if (!car) return;
  const S = CONFIG.vibeSlides, n = S.length, bgs = [...document.querySelectorAll('#vibe-section .vb')];
  const info = document.querySelector('.vibe-info'), dots = $('vibeDots');
  let cur = 0, front = 1, startX = null, moved = false, lastWheel = 0;
  car.innerHTML = S.map((s, i) => `<figure class="vc" role="group" aria-label="${i + 1} of ${n}"><img src="${s.src}" alt="${s.title}" draggable="false"></figure>`).join('');
  const cards = [...car.children];
  cards.forEach((c, i) => c.firstChild.onerror = function () { this.onerror = null; this.src = S[i % 2].src; });
  dots.innerHTML = S.map((s, i) => `<button type="button" aria-label="Go to ${s.title}"></button>`).join('');
  [...dots.children].forEach((b, i) => b.addEventListener('click', () => go(i)));

  function layout() {
    const gap = Math.min(car.clientWidth * .3, 230);
    cards.forEach((c, i) => {
      const d = ((i - cur + n + Math.floor(n / 2)) % n) - Math.floor(n / 2), a = Math.abs(d);
      c.style.transform = `translate(-50%,-50%) translateX(${d * gap}px) translateZ(${-a * 140}px) rotateY(${-d * 16}deg) scale(${d === 0 ? 1.08 : .88})`;
      c.style.opacity = a > 2 ? 0 : 1 - a * .25; c.style.zIndex = 10 - a;
      c.style.filter = d === 0 ? 'none' : 'brightness(.6)'; c.style.pointerEvents = a > 2 ? 'none' : 'auto';
      c.classList.toggle('active', d === 0); c.setAttribute('aria-hidden', d !== 0);
    });
    [...dots.children].forEach((b, i) => b.classList.toggle('on', i === cur));
  }
  function background() {
    const next = bgs[front]; front = 1 - front;
    next.style.backgroundImage = `url("${S[cur].src}")`;
    bgs[front].classList.remove('on'); next.classList.add('on');
  }
  function go(i) {
    i = (i + n) % n; if (i === cur && bgs[0].style.backgroundImage) return;
    cur = i; layout(); background();
    $('vibeTitle').textContent = S[cur].title; $('vibeDesc').textContent = S[cur].desc;
    info.classList.remove('swap'); void info.offsetWidth; info.classList.add('swap');
  }
  cards.forEach((c, i) => c.addEventListener('click', () => { if (!moved) go(i); }));
  $('vibePrev').addEventListener('click', () => go(cur - 1));
  $('vibeNext').addEventListener('click', () => go(cur + 1));
  car.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') go(cur - 1); if (e.key === 'ArrowRight') go(cur + 1); });
  car.addEventListener('pointerdown', e => { startX = e.clientX; moved = false; });
  car.addEventListener('pointermove', e => {
    if (startX === null) return; const dx = e.clientX - startX;
    if (Math.abs(dx) > 55) { moved = true; go(cur + (dx < 0 ? 1 : -1)); startX = e.clientX; }
  });
  const end = () => { startX = null; setTimeout(() => moved = false, 60); };
  car.addEventListener('pointerup', end); car.addEventListener('pointercancel', end); car.addEventListener('pointerleave', end);
  car.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 18) {
      e.preventDefault(); const now = Date.now(); if (now - lastWheel > 450) { lastWheel = now; go(cur + (e.deltaX > 0 ? 1 : -1)); }
    }
  }, { passive: false });
  addEventListener('resize', layout);
  go(0);
}

/* ==========================================================================
   A Letter, Just For You: tap the envelope, the note slides up, then the scene
   swaps to the stamped letter. Plain CSS transitions, no GSAP needed.
   ========================================================================== */
function initEnvelopeLetter() {
  const section = $('env-section'), scene = $('envScene'), openBtn = $('envWrap'),
        letter = $('envLetter'), stage = $('ltStage'), body = $('envLetterBody'),
        closeBtn = $('envClose'), hint = $('envHint');
  if (!section || !scene || !openBtn || !letter || !body) return;

  const E = CONFIG.envLetter;
  const HINT_CLOSED = 'Tap the envelope to open it', HINT_OPEN = 'A little something I wrote for you';
  const REVEAL_MS = 1350;                                    // paper rise + scene fade, see style.css
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  body.innerHTML =
    `<p class="lt-to">${E.to}</p>` +
    E.paras.map(p => `<p>${p}</p>`).join('') +
    `<p class="lt-sign">${E.sign} <span class="lt-heart" aria-hidden="true">&#9829;</span></p>` +
    `<p class="lt-from">${E.from}</p>`;

  let state = 'closed', timer = 0;                           // closed | opening | open

  function open() {
    if (state !== 'closed') return;
    state = 'opening';
    openBtn.setAttribute('aria-expanded', 'true');
    section.classList.add('is-opening');
    timer = setTimeout(reveal, reduceMotion() ? 0 : REVEAL_MS);
  }
  function reveal() {
    state = 'open';
    scene.hidden = true;
    letter.hidden = false;
    hint.textContent = HINT_OPEN;
    stage.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
    closeBtn.focus({ preventScroll: true });
  }
  function close() {
    if (state !== 'open') return;
    state = 'closing';
    const t = reduceMotion() ? 0 : 1;
    letter.classList.add('is-folding');                       // paper folds up
    timer = setTimeout(() => {
      letter.hidden = true; letter.classList.remove('is-folding');
      scene.hidden = false; section.classList.add('is-returning');   // envelope comes back, paper still raised
      hint.textContent = HINT_CLOSED;
      scene.scrollIntoView({ behavior: t ? 'smooth' : 'auto', block: 'center' });
      timer = setTimeout(() => {
        section.classList.remove('is-opening', 'is-returning'); // paper slides back in
        openBtn.setAttribute('aria-expanded', 'false');
        timer = setTimeout(() => { state = 'closed'; openBtn.focus({ preventScroll: true }); }, 900 * t);
      }, 450 * t);
    }, 800 * t);
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


/* Welcome: "hello Kashshaf" is written across the screen, then the site opens. */
function initHello() {
  const screen = $('hello-screen'), word = $('helloWord');
  if (!screen || !word) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  word.textContent = `${CONFIG.greeting.hello} ${CONFIG.greeting.name}`;
  window.runHello = () => {
    screen.setAttribute('aria-hidden', 'false');
    screen.classList.add('show');
    setTimeout(() => {
      screen.classList.add('leaving');
      document.body.classList.add('site-ready');
      document.documentElement.classList.remove('is-locked');
      setTimeout(() => screen.remove(), 1000);
    }, reduce ? 800 : 4300);
  };
}

/* Illustrative Lalbagh → Skyfall date route and replay controls. */
function initRouteMap(){
  const section=$('route-map-section');if(!section)return;const route=section.querySelector('.route-dash');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(route&&!reduce&&'IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){route.classList.add('route-draw');obs.disconnect();}},{threshold:.2});obs.observe(section);}else if(route)route.classList.add('route-draw');
  const replay=$('routeReplayBtn');if(replay&&route)replay.addEventListener('click',()=>{route.classList.remove('route-draw');void route.getBoundingClientRect();route.classList.add('route-draw');});
}

/* Scroll-driven cinematic flight. GSAP is optional: a graceful static scene remains if CDN is blocked. */
function initCinematicFlight(){
  const scene=$('flight-transition'),plane=$('flightPlaneModel'),portal=$('flightWindowPortal'),cabin=$('flightCabin'),pass=$('cabinPass'),copy=$('flightCopy');
  if(!scene||scene.dataset.flightInit==='1')return;scene.dataset.flightInit='1';
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!window.gsap||!window.ScrollTrigger||reduce){scene.classList.add('flight-static-mode');return;}
  try{
    gsap.registerPlugin(ScrollTrigger);
    const tl=gsap.timeline({scrollTrigger:{trigger:scene,start:'top top',end:()=>`+=${Math.round(window.innerHeight*(window.innerWidth<700?1.9:2.4))}`,scrub:0.75,pin:true,anticipatePin:1,invalidateOnRefresh:true}});
    tl.set(scene,{ '--flight-progress':0 },0)
      .fromTo(scene.querySelector('.flight-sky-glow'),{scale:1.15,opacity:.45},{scale:1,opacity:1,duration:.7},0)
      .fromTo(scene.querySelectorAll('.cloud-layer-back'),{xPercent:-8,yPercent:8,scale:1.15},{xPercent:8,yPercent:-8,scale:1.35,duration:1.8},0)
      .fromTo(scene.querySelectorAll('.cloud-layer-mid'),{xPercent:12,yPercent:12,scale:1.05},{xPercent:-15,yPercent:-10,scale:1.45,duration:1.8},0)
      .fromTo(plane,{x:'-45vw',y:'12vh',scale:.24,rotation:-7,opacity:0},{x:'6vw',y:'-1vh',scale:.9,rotation:0,opacity:1,duration:1,ease:'power2.out'},.15)
      .to(plane,{x:'12vw',y:'-2vh',scale:1.45,opacity:1,duration:.5,ease:'power1.inOut'},1.05)
      .fromTo(portal,{scale:.08,opacity:0,borderRadius:'50%'},{scale:1,opacity:1,borderRadius:'48% 48% 42% 42%',duration:.45,ease:'power2.out'},1.1)
      .to(plane,{scale:3.2,opacity:0,duration:.42,ease:'power2.in'},1.22)
      .to(portal,{scale:9,opacity:0,duration:.82,ease:'power2.inOut'},1.4)
      .fromTo(cabin,{opacity:0,scale:1.10},{opacity:1,scale:1,duration:.62,ease:'power2.out'},1.48)
      .fromTo(cabin.querySelectorAll('.cabin-window-row i'),{opacity:0,y:16},{opacity:1,y:0,stagger:.05,duration:.25},1.62)
      .fromTo(cabin.querySelectorAll('.cabin-seat'),{y:70,opacity:0},{y:0,opacity:1,stagger:.08,duration:.38,ease:'power3.out'},1.68)
      .set(pass,{xPercent:-50,yPercent:-50},0)
      .fromTo(pass,{y:-160,rotation:6,opacity:0,scale:.82},{y:0,rotation:0,opacity:1,scale:1,duration:.7,ease:'power3.out'},1.9)
      .to(copy,{y:-25,opacity:0,duration:.25},1.85)
      .to({},{duration:1.2},2.6); // hold: the pass stays pinned while you scratch it
    ScrollTrigger.refresh();
  }catch(e){scene.classList.add('flight-static-mode');}
}

/* Performance helpers: defer non-critical images and pause offscreen videos. */
function initLazyAssets(){
  document.querySelectorAll('img').forEach(img=>{
    if(img.id==='lockPhoto') { img.fetchPriority='high'; return; }
    if(!img.hasAttribute('loading')) img.loading='lazy';
    if(!img.hasAttribute('decoding')) img.decoding='async';
  });
  if('IntersectionObserver' in window){
    const videos=[...document.querySelectorAll('video')];
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting && !entry.target.paused) entry.target.pause();}),{threshold:.05,rootMargin:'100px'});
    videos.forEach(v=>{v.preload='metadata';observer.observe(v);});
  }
}


/* ==========================================================================
   Small promises, scroll progress / back-to-top, media fallbacks
   ========================================================================== */
CONFIG.greeting = { hello: 'hello', name: 'Kashshaf' };
CONFIG.storyStart = '2026-01-26T00:00:00+06:00';
CONFIG.promises = [
  'I will listen first, and answer second.',
  'I will keep making time for the small walks, like Dhanmondi Lake at golden hour.',
  'I will say sorry quickly and mean it.',
  'I will be proud of you out loud, not just in my head.',
  'I will keep our plans, even the silly ones.',
  'I will choose you on the easy days and on the loud ones.'
];
document.addEventListener('DOMContentLoaded', () => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const list = $('promiseList');
  if (list) {
    list.innerHTML = CONFIG.promises.map((p, i) => `<li style="--i:${i}"><span>${String(i + 1).padStart(2, '0')}</span><p>${p}</p></li>`).join('');
    const items = list.querySelectorAll('li');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } }), { threshold: .15 });
      items.forEach(li => io.observe(li));
    } else items.forEach(li => li.classList.add('in-view'));
  }
  const bar = $('scrollProgress'), top = $('toTop');
  let queued = false;
  const update = () => {
    queued = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${(max > 0 ? scrollY / max : 0).toFixed(4)})`;
    if (top) top.classList.toggle('show', scrollY > innerHeight * 1.2);
  };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  if (top) top.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  update();
});
document.addEventListener('error', e => {
  const t = e.target;
  if (!t || !t.id) return;
  if (t.id === 'featuredSongAudio' && $('songPlaybackHint')) $('songPlaybackHint').textContent = 'This song could not load. Set your own file in CONFIG.featuredMusic.src.';
  if (t.id === 'bgMusic' && $('audioStatus')) $('audioStatus').textContent = '🎵 Music unavailable right now';
}, true);
