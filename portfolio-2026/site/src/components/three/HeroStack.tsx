import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type LayerKind = 'surface' | 'structure' | 'system' | 'signal';

const LAYERS: { kind: LayerKind; label: string; number: string }[] = [
  { kind: 'surface', label: 'Interface', number: '01' },
  { kind: 'structure', label: 'Structure', number: '02' },
  { kind: 'system', label: 'System', number: '03' },
  { kind: 'signal', label: 'Signal', number: '04' },
];

const PAPER = '#fbf8f1';
const INK = '#101010';
const COBALT = '#2547ff';
const ACID = '#d8ff4f';
const GRAPHITE = '#5c5a54';
const LINE = 'rgba(16,16,16,0.14)';

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function label(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size = 15,
  color = GRAPHITE,
  weight = 500,
) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px "Helvetica Neue", Arial, sans-serif`;
  ctx.fillText(text, x, y);
}

function makeTexture(kind: LayerKind): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, 1024, 640);

  // Shared paper grain: a few faint fibres.
  ctx.strokeStyle = 'rgba(16,16,16,0.012)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 46; i += 1) {
    const y = (i * 83) % 640;
    ctx.beginPath();
    ctx.moveTo((i * 137) % 1024, y);
    ctx.lineTo(((i * 137) % 1024) + 120, y + 3);
    ctx.stroke();
  }

  if (kind === 'surface') {
    ctx.fillStyle = COBALT;
    ctx.fillRect(0, 0, 1024, 98);
    ctx.fillStyle = '#fff';
    ctx.font = '600 21px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('GOOD MORNING, ARJUN', 52, 42);
    ctx.font = '400 16px "Helvetica Neue", Arial, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.fillText('Your loyalty home · Points', 52, 70);
    ctx.beginPath();
    ctx.arc(956, 49, 20, 0, Math.PI * 2);
    ctx.fillStyle = ACID;
    ctx.fill();

    label(ctx, 'YOUR BALANCE', 52, 160, 16, GRAPHITE, 600);
    ctx.fillStyle = INK;
    ctx.font = '400 96px Georgia, "Times New Roman", serif';
    ctx.fillText('2,480 pts', 48, 250);
    ctx.font = '500 24px "Helvetica Neue", Arial, sans-serif';
    ctx.fillStyle = GRAPHITE;
    ctx.fillText('≈ ₹620 in rewards', 54, 286);

    const tiles = ['Redeem', 'Earn', 'Challenges', 'History'];
    tiles.forEach((tile, i) => {
      const x = 52 + i * 160;
      roundRect(ctx, x, 326, 140, 132, 10);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = LINE;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + 34, 364, 13, 0, Math.PI * 2);
      ctx.strokeStyle = COBALT;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.lineWidth = 1;
      label(ctx, tile, x + 14, 430, 15, INK, 500);
    });

    roundRect(ctx, 52, 486, 920, 110, 12);
    ctx.fillStyle = INK;
    ctx.fill();
    ctx.fillStyle = ACID;
    ctx.font = '400 54px Georgia, "Times New Roman", serif';
    ctx.fillText('3.2×', 78, 555);
    label(ctx, 'WEEKEND MULTIPLIER', 230, 522, 14, 'rgba(251,248,241,0.55)', 600);
    label(ctx, 'Redeem before Sunday, 11:59 pm', 230, 551, 18, '#fbf8f1', 400);

    for (let i = 0; i < 4; i += 1) {
      ctx.beginPath();
      ctx.arc(420 + i * 62, 622, 5, 0, Math.PI * 2);
      ctx.fillStyle = i === 0 ? INK : 'rgba(16,16,16,0.2)';
      ctx.fill();
    }
  }

  if (kind === 'structure') {
    ctx.strokeStyle = 'rgba(16,16,16,0.07)';
    for (let x = 0; x <= 1024; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 640);
      ctx.stroke();
    }
    for (let y = 0; y <= 640; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    label(ctx, 'FLOW / HIERARCHY', 52, 58, 15, GRAPHITE, 700);
    ctx.fillStyle = INK;
    ctx.font = '400 34px Georgia, "Times New Roman", serif';
    ctx.fillText('The page is an order of decisions.', 50, 108);

    ctx.setLineDash([9, 7]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(37,71,255,0.5)';
    roundRect(ctx, 52, 140, 920, 140, 6);
    ctx.stroke();
    ctx.setLineDash([]);
    label(ctx, 'HERO — the strongest signal', 72, 176, 15, COBALT, 700);

    const mods = [
      { x: 52, y: 312, w: 286, title: 'BALANCE' },
      { x: 368, y: 312, w: 286, title: 'PROGRESS' },
      { x: 684, y: 312, w: 288, title: 'REWARDS' },
    ];
    mods.forEach((m) => {
      ctx.setLineDash([7, 6]);
      ctx.strokeStyle = 'rgba(16,16,16,0.28)';
      roundRect(ctx, m.x, m.y, m.w, 156, 6);
      ctx.stroke();
      ctx.setLineDash([]);
      label(ctx, m.title, m.x + 16, m.y + 28, 13, GRAPHITE, 700);
      for (let i = 0; i < 3; i += 1) {
        ctx.fillStyle = 'rgba(16,16,16,0.08)';
        ctx.fillRect(m.x + 16, m.y + 46 + i * 24, m.w - 32 - i * 22, 9);
      }
    });

    ctx.strokeStyle = 'rgba(16,16,16,0.3)';
    ctx.beginPath();
    ctx.moveTo(512, 280);
    ctx.lineTo(512, 312);
    ctx.stroke();

    label(ctx, 'STATES', 52, 524, 13, GRAPHITE, 700);
    ['EMPTY', 'LOADING', 'ERROR', 'SUCCESS', 'EDGE'].forEach((s, i) => {
      roundRect(ctx, 52 + i * 130, 542, 112, 38, 19);
      ctx.fillStyle = i === 4 ? ACID : '#fff';
      ctx.fill();
      ctx.strokeStyle = LINE;
      ctx.stroke();
      label(ctx, s, 52 + i * 130 + 22, 567, 12, INK, 600);
    });
  }

  if (kind === 'system') {
    label(ctx, 'TOKENS / COMPONENTS / RULES', 52, 56, 15, GRAPHITE, 700);
    ctx.fillStyle = INK;
    ctx.font = '400 34px Georgia, "Times New Roman", serif';
    ctx.fillText('One library, many surfaces.', 50, 106);

    const colours = [
      { c: INK, n: 'ink' },
      { c: COBALT, n: 'cobalt' },
      { c: ACID, n: 'acid' },
      { c: '#e9e5db', n: 'paper' },
    ];
    colours.forEach((swatch, i) => {
      const x = 52 + i * 128;
      roundRect(ctx, x, 148, 104, 104, 6);
      ctx.fillStyle = swatch.c;
      ctx.fill();
      ctx.strokeStyle = LINE;
      ctx.stroke();
      label(ctx, swatch.n, x, 278, 13, GRAPHITE, 500);
    });

    ctx.strokeStyle = LINE;
    ctx.beginPath();
    ctx.moveTo(52, 310);
    ctx.lineTo(972, 310);
    ctx.stroke();

    const comps = ['Button', 'Card', 'Chip', 'Stat', 'Empty state'];
    comps.forEach((comp, i) => {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const x = 52 + col * 208;
      const y = 344 + row * 92;
      roundRect(ctx, x, y, 184, 64, 5);
      ctx.fillStyle = i === 1 ? INK : '#fff';
      ctx.fill();
      ctx.strokeStyle = i === 1 ? INK : LINE;
      ctx.stroke();
      label(ctx, comp, x + 16, y + 38, 15, i === 1 ? '#fbf8f1' : INK, 500);
    });

    ctx.fillStyle = 'rgba(16,16,16,0.08)';
    ctx.fillRect(52, 548, 920, 1);
    label(ctx, 'TYPE SCALE', 52, 584, 12, GRAPHITE, 700);
    ctx.fillStyle = INK;
    ctx.font = '400 34px Georgia, "Times New Roman", serif';
    ctx.fillText('Display', 160, 597);
    ctx.font = '400 20px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('Text 17 / 1.6', 330, 595);
    ctx.font = '500 13px "Helvetica Neue", Arial, sans-serif';
    ctx.fillStyle = GRAPHITE;
    ctx.fillText('MONO 12 / 0.08', 520, 594);
  }

  if (kind === 'signal') {
    label(ctx, 'RESEARCH / OUTCOME', 52, 56, 15, GRAPHITE, 700);
    ctx.fillStyle = INK;
    ctx.font = '400 40px Georgia, "Times New Roman", serif';
    ctx.fillText('What changed.', 50, 108);

    ctx.fillStyle = INK;
    ctx.font = '400 120px Georgia, "Times New Roman", serif';
    ctx.fillText('+42%', 46, 246);
    label(ctx, 'AVG. DAILY ACTIVE SESSIONS / USER', 56, 282, 14, GRAPHITE, 600);
    label(ctx, 'Aggregate across 8 clients · 6 months', 56, 306, 14, GRAPHITE, 400);

    const bars = [0.28, 0.44, 0.38, 0.66, 0.88, 0.72];
    bars.forEach((bar, i) => {
      const h = 190 * bar;
      ctx.fillStyle = i === 4 ? ACID : i === 5 ? COBALT : 'rgba(37,71,255,0.22)';
      ctx.fillRect(552 + i * 68, 430 - h, 40, h);
      if (i === 4) {
        ctx.strokeStyle = 'rgba(16,16,16,0.25)';
        ctx.strokeRect(552 + i * 68, 430 - h, 40, h);
      }
    });
    ctx.strokeStyle = 'rgba(16,16,16,0.2)';
    ctx.beginPath();
    ctx.moveTo(540, 430);
    ctx.lineTo(980, 430);
    ctx.stroke();

    label(ctx, 'BEFORE', 552, 458, 11, GRAPHITE, 600);
    label(ctx, 'AFTER', 864, 458, 11, COBALT, 700);

    ctx.fillStyle = 'rgba(16,16,16,0.08)';
    ctx.fillRect(52, 492, 920, 1);

    const metrics = [
      ['+67%', 'POINTS REDEEMED'],
      ['+31%', 'CAMPAIGN PARTICIPATION'],
      ['3.2×', 'REWARD REDEMPTION'],
    ];
    metrics.forEach((m, i) => {
      const x = 52 + i * 312;
      ctx.fillStyle = INK;
      ctx.font = '400 34px Georgia, "Times New Roman", serif';
      ctx.fillText(m[0], x, 552);
      label(ctx, m[1], x, 578, 11, GRAPHITE, 600);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

function Scene({
  progress,
  active,
}: {
  progress: React.MutableRefObject<number>;
  active: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const current = useRef(0);
  const textures = useMemo(() => LAYERS.map((layer) => makeTexture(layer.kind)), []);
  const materials = useMemo(() => {
    // Box faces: +x, -x, +y, -y, +z, -z. Only the front face carries artwork;
    // the edges stay plain paper so no texture band leaks onto the rims.
    return textures.map((texture) => {
      const face = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.94, metalness: 0 });
      const edge = new THREE.MeshStandardMaterial({ color: PAPER, roughness: 0.96, metalness: 0 });
      return [edge, edge, edge, edge, face, edge];
    });
  }, [textures]);

  useEffect(() => {
    return () => {
      textures.forEach((texture) => texture.dispose());
      materials.forEach((set) => set.forEach((material) => material.dispose()));
    };
  }, [textures, materials]);

  useFrame((state, delta) => {
    const target = active ? progress.current : progress.current;
    current.current = THREE.MathUtils.damp(current.current, target, 4, Math.min(delta, 0.1));
    const p = current.current;
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = 0.22 + p * 0.12 + Math.sin(t * 0.26) * 0.012;
      group.current.rotation.x = -0.055 - p * 0.055;
      group.current.position.y = Math.sin(t * 0.42) * 0.018;
      group.current.scale.setScalar(1 - p * 0.16);
    }

    meshes.current.forEach((mesh, i) => {
      if (!mesh) return;
      const base = 1.5 - i;
      const delay = i * 0.055;
      const local = THREE.MathUtils.clamp((p - delay) / Math.max(1 - delay, 0.001), 0, 1);
      const eased = 1 - Math.pow(1 - local, 3);
      mesh.position.y = base * (0.075 + eased * 0.6);
      mesh.position.x = (i - 1.5) * 0.19 * eased;
      mesh.position.z = -i * 0.008 - i * 0.1 * eased;
      mesh.rotation.z = (i - 1.5) * 0.014 * eased;
      mesh.rotation.x = -0.012 * base * eased;
    });
  });

  return (
    <group ref={group}>
      {LAYERS.map((layer, i) => (
        <mesh
          key={layer.kind}
          position={[0, (1.5 - i) * 0.075, -i * 0.008]}
          material={materials[i]}
          ref={(el: THREE.Mesh | null) => {
            meshes.current[i] = el;
          }}
        >
          <boxGeometry args={[2.62, 1.66, 0.016]} />
        </mesh>
      ))}
    </group>
  );
}

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

export default function HeroStack() {
  const rootRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const decide = () => {
      const saveData =
        'connection' in navigator &&
        Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
      const narrow = window.matchMedia('(max-width: 899px)').matches;
      const next = !narrow && !motionIsReduced() && !saveData && hasWebGL2();
      setEnabled(next);
      if (!next) {
        rootRef.current?.closest('[data-hero-stage]')?.classList.remove('is-live');
      }
    };

    decide();
    const onMotion = () => decide();
    const onResize = () => decide();
    window.addEventListener('mc:motion', onMotion);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('mc:motion', onMotion);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const trigger = rootRef.current?.closest('[data-hero]') as HTMLElement | null;
    const stage = rootRef.current?.closest('[data-hero-stage]') as HTMLElement | null;
    if (!trigger) return;

    const st = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progress.current = self.progress;
      },
      onRefresh: (self) => {
        progress.current = self.progress;
      },
    });

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '80px' },
    );
    if (stage) observer.observe(stage);

    let frame = 0;
    let last = -1;
    const paintLegend = () => {
      const p = progress.current;
      if (Math.abs(p - last) > 0.004 && legendRef.current) {
        last = p;
        const items = legendRef.current.querySelectorAll<HTMLElement>('.legend__item');
        items.forEach((item, index) => {
          const local = Math.min(Math.max((p - index * 0.05) / 0.62, 0), 1);
          item.classList.toggle('is-on', local > 0.4);
          item.style.opacity = String(0.28 + local * 0.72);
        });
      }
      frame = window.requestAnimationFrame(paintLegend);
    };
    frame = window.requestAnimationFrame(paintLegend);

    ScrollTrigger.refresh();

    return () => {
      st.kill();
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
      {enabled && (
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0, 0, 7.45], fov: 30, near: 0.1, far: 30 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          frameloop={active ? 'always' : 'never'}
          onCreated={({ gl }) => {
            gl.setClearAlpha(0);
            rootRef.current?.closest('[data-hero-stage]')?.classList.add('is-live');
          }}
        >
          <ambientLight intensity={1.55} />
          <directionalLight position={[4, 5, 6]} intensity={2.1} color="#fff2df" />
          <directionalLight position={[-5, 1, 4]} intensity={1.05} color="#dbe4ff" />
          <Scene progress={progress} active={active} />
        </Canvas>
      )}

      <div className="legend" ref={legendRef}>
        {LAYERS.map((layer) => (
          <span className="legend__item" key={layer.kind}>
            {layer.number} {layer.label}
          </span>
        ))}
      </div>
    </div>
  );
}
