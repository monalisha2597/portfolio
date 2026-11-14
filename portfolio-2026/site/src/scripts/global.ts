const root = document.documentElement;
const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Header state */
const header = document.querySelector<HTMLElement>('[data-header]');
let lastY = -1;

function onScroll() {
  const y = window.scrollY;
  if (y !== lastY && header) {
    header.classList.toggle('is-scrolled', y > 8);
    lastY = y;
  }
}

/* Mobile menu */
const menu = document.querySelector<HTMLElement>('[data-menu]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
let lastFocus: HTMLElement | null = null;

function focusable(): HTMLElement[] {
  if (!menu) return [];
  return Array.from(
    menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
  ).filter((el) => el.offsetParent !== null);
}

function openMenu() {
  if (!menu) return;
  lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  menu.removeAttribute('inert');
  menu.setAttribute('aria-hidden', 'false');
  menu.classList.add('is-open');
  document.body.classList.add('menu-open');
  openBtn?.setAttribute('aria-expanded', 'true');
  window.requestAnimationFrame(() => closeBtn?.focus({ preventScroll: true }));
}

function closeMenu(restore = true) {
  if (!menu) return;
  menu.setAttribute('inert', '');
  menu.setAttribute('aria-hidden', 'true');
  menu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  openBtn?.setAttribute('aria-expanded', 'false');
  if (restore) lastFocus?.focus({ preventScroll: true });
}

openBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', () => closeMenu());
menu?.querySelectorAll('[data-menu-link]').forEach((link) => {
  link.addEventListener('click', () => closeMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (!menu?.classList.contains('is-open')) return;
  if (event.key === 'Escape') {
    closeMenu();
    return;
  }
  if (event.key === 'Tab') {
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menu?.classList.contains('is-open')) closeMenu(false);
});

/* Reveal on scroll */
const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
const reduced = root.classList.contains('reduce-motion') || reduceQuery.matches;

if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

/* Reading progress */
const progressBar = document.querySelector<HTMLElement>('[data-read-progress]');
const caseBody = document.querySelector<HTMLElement>('[data-cs-body]');
let progressFrame = 0;

function updateProgress() {
  progressFrame = 0;
  if (!progressBar || !caseBody) return;
  const rect = caseBody.getBoundingClientRect();
  const distance = rect.height - window.innerHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(distance, 0));
  const pct = distance > 0 ? (scrolled / distance) * 100 : 0;
  progressBar.style.width = `${pct}%`;
}

function requestProgress() {
  if (progressFrame) return;
  progressFrame = window.requestAnimationFrame(updateProgress);
}

/* Local time */
const timeEls = document.querySelectorAll<HTMLElement>('[data-local-time]');
const timeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function updateTime() {
  const value = `${timeFormat.format(new Date())} IST`;
  timeEls.forEach((el) => {
    el.textContent = value;
  });
}

/* Motion toggle */
const motionBtn = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
let motionStored = '';
try {
  motionStored = localStorage.getItem('mc-motion') || '';
} catch {
  motionStored = '';
}
let motionReduced = motionStored === 'reduce' || (!motionStored && reduceQuery.matches);

function paintMotionButton() {
  if (!motionBtn) return;
  motionBtn.setAttribute('aria-pressed', String(motionReduced));
  motionBtn.textContent = motionReduced ? 'Enable motion' : 'Reduce motion';
}

if (motionReduced) root.classList.add('reduce-motion');
paintMotionButton();

motionBtn?.addEventListener('click', () => {
  motionReduced = !motionReduced;
  root.classList.toggle('reduce-motion', motionReduced);
  try {
    localStorage.setItem('mc-motion', motionReduced ? 'reduce' : 'full');
  } catch {
    /* storage can be unavailable */
  }
  paintMotionButton();
  window.dispatchEvent(
    new CustomEvent('mc:motion', { detail: { reduced: motionReduced } }),
  );
});

/* Listeners */
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('scroll', requestProgress, { passive: true });
window.addEventListener('resize', requestProgress, { passive: true });
onScroll();
updateProgress();
updateTime();
window.setInterval(updateTime, 30000);
