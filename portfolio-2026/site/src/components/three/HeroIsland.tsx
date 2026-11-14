import { lazy, Suspense, useEffect, useState } from 'react';

const HeroStack = lazy(() => import('./HeroStack'));

function motionIsReduced() {
  let stored = '';
  try {
    stored = localStorage.getItem('mc-motion') || '';
  } catch {
    stored = '';
  }
  if (stored === 'reduce') return true;
  if (stored === 'full') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function hasWebGL2() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}

function canLoad() {
  const narrow = window.matchMedia('(max-width: 899px)').matches;
  const saveData =
    'connection' in navigator &&
    Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData,
    );
  return !narrow && !saveData && !motionIsReduced() && hasWebGL2();
}

/**
 * Defers the three.js bundle until the browser is idle and the device can
 * actually render the scene. The CSS poster stays as the LCP-safe fallback.
 */
export default function HeroIsland() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let ready = false;
    let timer = 0;

    const activate = () => {
      if (ready) return;
      if (!canLoad()) return;
      ready = true;
      setReady(true);
    };

    if (canLoad()) {
      // Let the poster and the hero copy paint first. The scene is an
      // enhancement, not the LCP element.
      timer = window.setTimeout(activate, 1500);
    }

    const onMotion = () => {
      window.clearTimeout(timer);
      activate();
    };
    window.addEventListener('mc:motion', onMotion);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mc:motion', onMotion);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <HeroStack />
    </Suspense>
  );
}
