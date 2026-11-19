import { merchantWalletStudy } from './case-studies/merchant-wallet';

export const site = {
  name: 'Monalisha Chatterjee',
  shortName: 'Monalisha',
  role: 'Product Designer',
  location: 'India',
  resume: '/monalisha-chatterjee-resume.pdf',
  email: 'mona.chatterjee25@gmail.com',
  linkedin: 'https://www.linkedin.com/in/monalishachatterjee/',
  behance: 'https://www.behance.net/monalishachatterjee',
  title: 'Monalisha Chatterjee, Product Designer',
  description:
    'Product designer with 5+ years across loyalty, CRM, commerce and fintech. Currently at Perx Technologies; previously Jabu (YC S21).',
};

export const projects = [
  {
    slug: 'designing-for-engagement',
    index: '01',
    title: 'Designing for engagement',
    subtitle:
      'Two games inside a loyalty platform that already had a hundred things competing for attention.',
    card:
      'Claw Machine and Bubble Pop, taking two engagement games from early requirements to designed, buildable product.',
    client: 'Perx Technologies',
    year: '2024/25',
    role: 'User Experience Designer',
    domain: 'Loyalty & engagement',
    platform: 'White-label mobile web',
    cover: '/img/engagement.png',
    coverAlt:
      'Cover of the Designing for Engagement case study, showing the Claw Machine and Bubble Pop game interfaces.',
    behance: 'https://www.behance.net/gallery/255795573/Designing-for-Engagement',
    brief: [
      `Loyalty platforms live or die on return visits. Perx runs customer engagement and loyalty programs for brands across Asia, and the team wanted to test a fairly simple hypothesis: could a game bring people back more often than another points email?`,
      `I worked with the PMs on the first designed versions of two games, Claw Machine and Bubble Pop, starting from product requirements and early research, and turning them into mechanics, screens and reward moments that could sit naturally inside an existing product.`,
    ],
    did: [
      'Turned early requirements and research into playable mechanics, then into interface flows.',
      'Designed the game screens, result and reward states, and the edge cases in between.',
      'Kept both games inside Perx’s existing visual system so they read as part of the platform, not a bolt-on.',
      'Worked with engineering through handoff and build review.',
    ],
    outcome: `The first designed versions of both games were delivered into the product. They sit alongside the wider redesign of Perx’s core white-label microsite platform, the base product clients use to run their own engagement and loyalty programs.`,
    note: 'Client work is under NDA. The screens here are the versions shared publicly in my Behance case study.',
    next: 'merchant-wallet',
    study: null,
    hidden: true,
  },
  {
    slug: 'merchant-wallet',
    index: '02',
    title: 'Revolutionizing the merchant’s financial behavior',
    subtitle:
      'A wallet for merchants whose relationship with money is cash-first, where trust is earned in the first thirty seconds.',
    card:
      'Leading the end-to-end design of a new fintech wallet, from ambassador research and flows to the MVP that shipped across merchant, agent and admin surfaces.',
    client: 'JABU (YC S21)',
    year: '2022/23',
    role: 'Product Designer II',
    domain: 'Fintech',
    platform: 'Mobile web + desktop admin',
    cover: '/img/work/merchant-wallet/cover.jpg',
    coverAlt:
      'Three JWallet screens fanned across a lime panel: the wallet home with balance and quick actions, a payment receipt, and the savings list.',
    behance: 'https://www.behance.net/gallery/193015809/Revolutionizing-merchants-financial-behaviour',
    brief: [
      `Jabu builds financial tools for merchants in markets where cash is still the default. The brief was a wallet, but the actual problem was trust: convincing someone whose money has always been physical to hand a balance to a screen.`,
      `I led the design end to end, running user research, mapping flows, and building the interactive prototypes that gave the team an MVP worth building.`,
    ],
    did: [
      'Ran research and interviews to understand how merchants actually moved money day to day.',
      'Mapped end-to-end flows, then built interactive prototypes to test the shape of the MVP.',
      'Worked with PMs and operations leads on scope, strategy and feature priority.',
      'Paired with engineers through implementation to protect design fidelity.',
    ],
    outcome: `The wallet moved from research to a defined, prototyped product experience, with flows and decisions documented for the team to build against. The way we ran research and handoff here became the pattern for later Jabu products.`,
    note: '',
    next: 'agent-dashboard',
    study: merchantWalletStudy,
    hidden: false,
  },
  {
    slug: 'agent-dashboard',
    index: '03',
    title: 'Re-designing the agent’s dashboard',
    subtitle:
      'An operations tool for people whose day is a queue of customers, not a list of features.',
    card:
      'Designing a CRM from scratch for agents working across calls, records and follow-ups, while helping build Jabu’s design system.',
    client: 'JABU (YC S21)',
    year: '2022/23',
    role: 'Product Designer I',
    domain: 'CRM & operations',
    platform: 'Desktop web',
    cover: '/img/dashboard.png',
    coverAlt:
      'Cover of the agent dashboard case study, showing the CRM interface and its data views.',
    behance: 'https://www.behance.net/gallery/184598561/Re-designing-agents-dashboard',
    brief: [
      `Jabu’s agents worked across spreadsheets, phone calls and a legacy tool. The CRM was being built from scratch, and the dashboard had to hold a lot at once: customer records, transactions, follow-ups, and the judgement calls that happen between them.`,
      `I designed it end to end, wireframes through high-fidelity UI, while contributing to the company’s shared design system at the same time.`,
    ],
    did: [
      'Ran usability testing and user interviews to pressure-test the structure before it was built.',
      'Moved from wireframes to high-fidelity UI, covering the states and edge cases agents actually hit.',
      'Defined interaction patterns with PMs, then documented decisions so the team stayed aligned.',
      'Contributed components and rules to Jabu’s design system and UI library.',
    ],
    outcome: `The CRM shipped as a working web application for agents, and the components built for it fed straight into Jabu’s design system. Running design QA alongside development became part of how the team shipped.`,
    note: '',
    next: 'nursery-commerce',
    study: null,
    hidden: true,
  },
  {
    slug: 'nursery-commerce',
    index: '04',
    title: 'A nursery store for first-time parents',
    subtitle:
      'An e-commerce concept built around a very specific anxiety: buying for a baby you haven’t met yet.',
    card:
      'A self-initiated commerce concept, research, information architecture, flows and a full interface for first-time parents.',
    client: 'Self-initiated',
    year: '2021',
    role: 'Product Designer',
    domain: 'E-commerce',
    platform: 'Mobile app',
    cover: '/img/nursery.png',
    coverAlt: 'Cover of the nursery e-commerce case study, showing product and browse screens.',
    behance:
      'https://www.behance.net/gallery/141566623/Nursery-e-commerce-app-UXUI-case-study',
    brief: [
      `New parents shop differently. They research more, they buy in bursts, and they rarely know exactly what they need, which makes the usual browse-and-filter model a poor fit.`,
      `This was a self-initiated project, so I set the brief myself and designed the whole thing: research, information architecture, flows, and a full interface.`,
    ],
    did: [
      'Researched how first-time parents describe what they need, and where existing stores lose them.',
      'Restructured the catalog around occasions and stages rather than categories alone.',
      'Designed the end-to-end flows and a complete mobile interface.',
      'Published it as a case study on Behance.',
    ],
    outcome: `Published as a self-initiated case study on Behance. It is the project I use to test ideas about commerce, trust and first-time users without a client brief attached to them.`,
    note: 'Self-initiated concept project, not client work.',
    next: 'designing-for-engagement',
    study: null,
    hidden: true,
  },
];

/**
 * Projects shown on the public site. Hidden studies stay in `projects`
 * with all their content, so they can be brought back by removing the
 * `hidden` flag.
 */
export const visibleProjects = projects.filter((p: any) => !p.hidden);

export const chapters = [
  {
    period: '2024 to now',
    org: 'Perx Technologies',
    link: '',
    role: 'User Experience Designer',
    text: `Working end to end on a B2B loyalty platform with PMs and developers. I look after the customer-facing microsite experience and the dashboard business teams run their programs from, plus a pair of engagement games and a FlutterFlow component library that lets client apps ship faster. Lately, most of that time goes to a no-code microsite builder that lets business users assemble, preview and publish branded pages from a template, a blank canvas, or components.`,
    tags: ['No-code builder', 'Loyalty platform', 'FlutterFlow'],
    promo: false,
  },
  {
    period: '2023 to 2024',
    org: 'JABU (YC S21)',
    link: '',
    role: 'Product Designer II',
    text: `Promoted to lead the wallet MVP end to end: research, flows, prototypes, testing, and the decisions in between. I brought design QA into the development workflow and started peer critique sessions, because a good design rarely survives the handoff without a feedback loop.`,
    tags: ['Fintech', 'Research to ship', 'Design QA'],
    promo: true,
  },
  {
    period: '2022 to 2023',
    org: 'JABU (YC S21)',
    link: '',
    role: 'Product Designer I',
    text: `Designed the company’s agent CRM from scratch, wireframes through high-fidelity UI, alongside an e-commerce product and the design system that would eventually hold everything together.`,
    tags: ['CRM', '0 → 1', 'Design systems'],
    promo: false,
  },
  {
    period: '2021',
    org: 'Mentorskool',
    link: '',
    role: 'Design intern, then Product Designer',
    text: `Started on logos, brochures and a marketing website, then moved into product within months. Before long I was designing a multi-sided B2B learning platform end to end, creator, client and learner experiences running on one system.`,
    tags: ['B2B SaaS', 'Platform design', 'Brand'],
    promo: false,
  },
  {
    period: '2016 to 2021',
    org: 'Finance & banking',
    link: '',
    role: 'The start, and the pivot',
    text: `I studied finance and spent my first working years as a personal banker. It was stable and it wasn’t for me. I kept finding the problem-solving more interesting than the paperwork, and I kept coming back to design. Eventually I committed to the switch and never looked back.`,
    tags: ['Finance', 'Banking', 'The pivot'],
    promo: false,
  },
];

export const steps = [
  {
    num: '01',
    title: 'Interrogate the brief',
    text: 'Before screens: what does the business actually need, what can engineering actually ship, and what are people doing today instead?',
  },
  {
    num: '02',
    title: 'Make the flow visible',
    text: 'Journey maps and flows before pixels. Most problems are structural, and structural problems are cheaper to find on a whiteboard.',
  },
  {
    num: '03',
    title: 'Design the system, not the screen',
    text: 'Components, states, edge cases, tokens. If it only works on the happy path, it does not work.',
  },
  {
    num: '04',
    title: 'Stay until it ships',
    text: 'Handoff, build review, design QA. The version that ships is the only version that counts.',
  },
];

export const testimonials = {
  lead: {
    quote: `Somehow, she manages to juggle multiple tasks without breaking a sweat. When it comes to speed, Monalisha is fast and precise, never missing a beat. If you are after a designer with the perfect mix of organization, speed, heart and team spirit, she is your go-to.`,
    name: 'Marie Sahakian',
    title: 'DesOps, Senior Product Designer',
    relation: 'Managed Monalisha directly',
    photo: '/img/people/marie-sahakian.jpg',
    initials: 'MS',
  },
  rest: [
    {
      quote: `I have seen Monalisha work wonders as a Product Designer. She listens carefully to what customers need and turns those ideas into designs that really hit the mark.`,
      name: 'Kevin Hassan',
      title: 'Co-founder, JABU (YC S21)',
      relation: 'Worked alongside',
      photo: '/img/people/kevin-hassan.jpg',
      initials: 'KH',
    },
    {
      quote: `An outstanding UX/UI designer. A great sparring partner at all times, brainstorming ideas and clarifying open questions until the user journey was truly understood.`,
      name: 'Charlotte Cranz',
      title: 'Senior Product Manager, IDToday',
      relation: 'Worked alongside at Jabu',
      photo: '/img/people/charlotte-cranz.jpg',
      initials: 'CC',
    },
    {
      quote: `She respects every deadline and delivers every time, while handling multiple projects at once. A great team player who is always ready to help.`,
      name: 'Rohan Kalra',
      title: 'Product & Interaction Designer',
      relation: 'Worked on the same team',
      photo: '/img/people/rohan-kalra.jpg',
      initials: 'RK',
    },
    {
      quote: `A highly skilled product designer who pays attention to detail. She was good at collaborating with me and everyone else in the company.`,
      name: 'Choolwe Hamududu',
      title: 'Business Development Specialist',
      relation: 'Worked on the same team',
      photo: '/img/people/choolwe-hamududu.jpg',
      initials: 'CH',
    },
  ],
};

export const certifications = [
  { name: 'UX design foundations', meta: 'Coursera, 2021 · 4 courses' },
];

export const skills = [
  'Product design',
  'User research',
  'User flows',
  'Interaction design',
  'Design systems',
  'Prototyping',
  'Usability testing',
  'Design QA',
  'Accessibility',
  'Brand & campaign',
  'Figma',
  'Figma AI',
  'FlutterFlow',
];

export const practice = [
  { name: 'IRCTC Rail Connect, app redesign', meta: '2021' },
  { name: 'Rabit, habit tracker', meta: '2021' },
  { name: 'Grab, food ordering concept', meta: '2021' },
  { name: 'Birdie, mascot reactions', meta: '2021' },
];