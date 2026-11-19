/**
 * Deep case study content for JWallet (merchant wallet).
 * Sourced from the Figma case-study presentation shared by Monalisha.
 * Only claims that appear in the source material are made here; no
 * commercial metrics are invented.
 */
export const merchantWalletStudy = {
  kicker: 'Shipped MVP · NDA',
  lede: 'JWallet was a wallet for shopkeepers whose money had always been cash. I led the design from ambassador research to a build-ready MVP across three surfaces: the merchant app, the agent app and the admin console.',

  resultLabel: 'What changed',
  result:
    'A merchant can now hold, send, receive and save money where they used to keep cash, and Jabu can collect digitally without counting notes at the end of a route.',
  facts: [
    { value: '3', label: 'surfaces shipped' },
    { value: '5', label: 'core money flows' },
    { value: '4', label: 'ways to cash in' },
  ],

  meta: [
    { label: 'Client', value: 'JABU (YC S21)' },
    { label: 'Year', value: '2022/23' },
    { label: 'Role', value: 'Product Designer II · design lead' },
    { label: 'Platform', value: 'Mobile web + desktop admin' },
    { label: 'Team', value: 'PM, engineering, operations' },
    { label: 'Duration', value: 'Research through MVP' },
    { label: 'Scope', value: 'Wallet, agent app, admin, UI kit' },
    { label: 'Constraint', value: 'No bank account required' },
  ],

  showcase: {
    title: 'The wallet, in three moments',
    copy: 'Balance first, then the two loops that mattered: moving money, and putting it aside.',
    screens: [
      {
        src: '/img/work/merchant-wallet/hero-home.png',
        width: 414,
        height: 884,
        alt: 'JWallet home screen showing a balance of N$1,484.25, shortcuts for send, request, cash in and cash out, an accounts row and a savings prompt.',
        label: 'Home',
        note: 'Balance, four actions, savings. Everything else is one tap deeper.',
      },
      {
        src: '/img/work/merchant-wallet/hero-success.png',
        width: 360,
        height: 760,
        alt: 'Payment successful screen showing N$227.50 sent to Amale Dawson, the remaining balance, a transaction ID and a share button.',
        label: 'Receipt',
        note: 'A receipt the merchant can share, with the number that proves it.',
      },
      {
        src: '/img/work/merchant-wallet/hero-savings.png',
        width: 402,
        height: 872,
        alt: 'Savings home showing a total balance, interest earned, and 32, 48 and 72-day cash-out accounts with their interest rates.',
        label: 'Savings',
        note: 'Term-based goals instead of a vague invest button.',
      },
    ],
  },

  setup: {
    prose: [
      `Jabu is a B2B, last-mile distributor in FMCG. Small shops order stock through Jabu, agents deliver it, and cash is collected at the door. JWallet was a by-product of that business: a wallet for the same merchants, so a shop could hold, send, receive and save money without a bank account.`,
      `At the time, roughly two-thirds of people in Sub-Saharan Africa were unbanked, and cash was how business got done. Merchants kept money in the shop or used informal savings methods. Jabu counted cash by hand at the end of every route. The brief was a wallet. The real problem was trust: getting someone whose money had always been physical to leave a balance on a screen.`,
    ],
    cards: [
      {
        title: 'For the merchant',
        text: 'Cash could be stolen, a trip to a distant bank cost a day, and saving meant hiding money rather than earning on it.',
        accent: 'var(--blue)',
      },
      {
        title: 'For Jabu',
        text: 'Collections ended with hand-counted cash. Payment delays held up orders and capped how much stock a shop could carry.',
        accent: 'var(--pink)',
      },
      {
        title: 'The ask',
        text: 'A wallet that works without a bank account, on the phones merchants already own, and gives Jabu a digital collection rail.',
        accent: 'var(--yellow)',
      },
    ],
  },

  bet: {
    quote: `The bet: JWallet would not win by having the most features. It would win if the first top-up took less effort than putting cash in a drawer, and the merchant could see, immediately, that the money was still theirs.`,
    principles: [
      {
        num: '01',
        title: 'Trust before features',
        text: 'Identity verification and a visible badge were in the MVP, not a later phase. Locked features explained why they were locked instead of failing silently.',
        accent: 'var(--blue)',
      },
      {
        num: '02',
        title: 'Meet cash where it is',
        text: 'Agent, kiosk, bank deposit, card and mobile money. The product copied existing habits instead of asking merchants to build new ones.',
        accent: 'var(--lime)',
      },
      {
        num: '03',
        title: 'One wallet, three surfaces',
        text: 'The merchant app, the agent app and the admin console shared one balance and one set of rules. The agent is the adoption channel, not a fallback.',
        accent: 'var(--pink)',
      },
      {
        num: '04',
        title: 'Design for a bad connection',
        text: 'Small screens, low bandwidth, mobile web inside the commerce app merchants already used. Every flow had to work on the phone they had.',
        accent: 'var(--yellow)',
      },
    ],
    success: `We would know it worked if a merchant completed a first top-up without an agent talking them through it, balance questions fell, and an agent could fund a wallet in minutes rather than in a queue.`,
  },

  research: {
    intro: `Research ran through an ambassador program: existing Jabu customers were onboarded as participants, not just interviewees. They shaped the questions, tested the prototype, and stayed involved across four stages.`,
    stages: [
      {
        num: '01',
        title: 'Kickoff',
        text: 'Aligned on the goals for the MVP, the ambassador role, and how feedback would be collected and used.',
      },
      {
        num: '02',
        title: 'Persona interviews',
        text: 'Collected demographics, business context, common characteristics and the pain points shared across shops.',
      },
      {
        num: '03',
        title: 'User interviews',
        text: 'Went deep on technology comfort, financial history, trust, security and what made a transaction feel safe.',
      },
      {
        num: '04',
        title: 'Prototype testing',
        text: 'Put the MVP in front of ambassadors, tested tasks, watched what they did as well as what they said, then iterated.',
      },
    ],
    artefact: {
      src: '/img/work/merchant-wallet/research-artefacts.jpg',
      width: 2176,
      height: 894,
      alt: 'Collage of JWallet research documents: the ambassador program brief, a customer research plan and the interview question set covering technology, banking and security.',
      caption:
        'Working artefacts from the ambassador program: the program brief, the research plan and the interview script.',
    },
    insights: [
      {
        num: '01',
        title: 'Trust was about time, not technology',
        text: 'Merchants already used phones. Their worry was how long a transfer would take and whether an agent would be available when they needed one.',
        move: 'Put balance, status and a shareable receipt on the first screen.',
      },
      {
        num: '02',
        title: 'Digital confidence was uneven',
        text: 'Some merchants had never used mobile banking. Agents used mobile money every day. A single self-serve onboarding would have lost the least confident users.',
        move: 'Make the agent-assisted path first-class, and teach inside the task.',
      },
      {
        num: '03',
        title: 'Cash habits are social',
        text: 'Agents already visit shops. Adoption would travel through that relationship, not through a banner in an app.',
        move: 'Give agents the tools to onboard, fund and explain in one visit.',
      },
    ],
  },

  personas: [
    {
      name: 'Entrepreneurial Daniel',
      role: 'Merchant · 32 · Windhoek, Namibia',
      photo: '/img/work/merchant-wallet/persona-daniel.jpg',
      photoAlt: 'Portrait used for the merchant persona, a shop owner in a white cap standing in front of stocked shelves.',
      goals: [
        'Become the most-visited store in the community',
        'Open new stores and start selling online',
      ],
      pains: [
        'Cannot afford the expensive stock customers ask for',
        'Rarely uses mobile banking; a bank trip costs a day',
        'Worries about how long a digital payment takes',
      ],
      habit: 'Banks with FNB but mostly in branch. Wants real-time updates and biometric security.',
    },
    {
      name: 'Agent Amanda',
      role: 'Jabu agent · 26 · Windhoek, Namibia',
      photo: '/img/work/merchant-wallet/persona-amanda.jpg',
      photoAlt: 'Portrait used for the agent persona, a young Jabu agent photographed indoors.',
      goals: [
        'Teach merchants to use JWallet in their business',
        'Earn commission by onboarding merchants',
      ],
      pains: [
        'Manages many merchants with different needs',
        'Training is hard where digital literacy is low',
      ],
      habit: 'Experienced with mobile money and financial apps. The bridge between the product and the shop.',
    },
    {
      name: 'Admin Francisco',
      role: 'Jabu administrator · 40',
      photo: '/img/work/merchant-wallet/persona-francisco.jpg',
      photoAlt: 'Portrait used for the administrator persona, a Jabu staff member photographed outdoors.',
      goals: [
        'Run JWallet operations and manage users',
        'Keep offers and programs moving for engagement',
      ],
      pains: [
        'Has to watch a wide spread of user activity',
        'Top-up, withdrawal and KYC requests all need a fast response',
      ],
      habit: 'Works with sensitive financial data daily. Needs density, filters and an audit trail.',
    },
  ],

  system: {
    intro: `Before screens, we mapped the product. The wallet was never one app: it was a merchant product, an agent tool and an operations console sharing one balance.`,
    hint: 'Pick a surface to open its map.',
    sitemaps: [
      {
        key: 'merchant',
        label: 'Merchant app',
        src: '/img/work/merchant-wallet/sitemap-merchant.jpg',
        width: 2220,
        height: 1421,
        alt: 'Sitemap of the merchant platform, branching from onboarding, home, profile, send, request, cash in and cash out into their sub-screens.',
        caption:
          'Merchant platform sitemap. Drawing it exposed the scope: seven branches, not a single wallet screen.',
      },
      {
        key: 'agent',
        label: 'Agent app',
        src: '/img/work/merchant-wallet/sitemap-agent.jpg',
        width: 2220,
        height: 982,
        alt: 'Sitemap of the agent platform, branching from onboarding, home, profile, cash in, cash out and verify into their sub-screens.',
        caption:
          'Agent platform sitemap. The same wallet, seen from the person who funds it.',
      },
      {
        key: 'admin',
        label: 'Admin console',
        src: '/img/work/merchant-wallet/sitemap-admin.jpg',
        width: 2220,
        height: 927,
        alt: 'Sitemap of the admin console, branching from users, setup, wallet top up, savings, withdrawals and referrals into their sub-screens.',
        caption:
          'Admin platform sitemap. Operations, not customers: users, setup, top-ups, savings, withdrawals and referrals.',
      },
    ],
    surfaces: [
      {
        map: 'merchant',
        title: 'Merchant',
        text: 'Onboard, check balance, send, request, cash in and out, save, get help.',
      },
      {
        map: 'agent',
        title: 'Agent',
        text: 'Find a merchant, fund a wallet, verify identity, resolve a problem, earn commission.',
      },
      {
        map: 'admin',
        title: 'Admin',
        text: 'Users and roles, top-ups, savings, withdrawals, referrals and KYC.',
      },
    ],
  },

  design: {
    intro: `The deck had roughly sixty screens. These are the ones that carried the decisions: the first top-up, the trust moment, the money loop, the edge cases and the savings model.`,
    plates: [
      {
        id: 'onboarding',
        kicker: 'Onboarding',
        title: 'One button, not a new login',
        copy: 'The wallet lived inside the commerce app merchants already used for stock, so onboarding started by linking the Jabu account they had. The referral code and PIN came after the value was clear.',
        screens: [
          {
            src: '/img/work/merchant-wallet/onboarding-link.png',
            width: 394,
            height: 832,
            alt: 'Onboarding screen asking the merchant to link their existing Jabu account to JWallet.',
            label: 'Link Jabu',
            note: 'No second account to remember.',
          },
          {
            src: '/img/work/merchant-wallet/onboarding-referral.png',
            width: 392,
            height: 832,
            alt: 'Referral code screen with an optional code field, a confirm button and a skip link.',
            label: 'Referral code',
            note: 'Optional, skippable, framed as a reward.',
          },
          {
            src: '/img/work/merchant-wallet/onboarding-pin.png',
            width: 392,
            height: 832,
            alt: 'Create PIN screen with a four-digit keypad, re-enter PIN field and confirm action.',
            label: 'Create PIN',
            note: 'A four-digit PIN merchants know from mobile money.',
          },
        ],
      },
      {
        id: 'identity',
        kicker: 'Identity',
        title: 'The trust moment gets a badge',
        copy: 'Verification was not a compliance afterthought bolted onto settings. It was introduced before the first locked feature, with a badge at the end, so the merchant could see what the effort bought them.',
        screens: [
          {
            src: '/img/work/merchant-wallet/identity-start.png',
            width: 362,
            height: 756,
            alt: 'Identity verification intro screen with the heading Let us verify your identity and a Get started button.',
            label: 'Start',
            note: 'Explains what verification unlocks before the camera opens.',
          },
          {
            src: '/img/work/merchant-wallet/identity-residency.png',
            width: 358,
            height: 756,
            alt: 'Proof of residency screen showing a Namibian ID number, issue date and document options.',
            label: 'Proof of residency',
            note: 'Document types named in plain language, not codes.',
          },
          {
            src: '/img/work/merchant-wallet/identity-photo-id.png',
            width: 356,
            height: 756,
            alt: 'Photo ID capture screen with a camera frame, retake button and next action.',
            label: 'Photo ID',
            note: 'Camera capture with retake, no gallery upload.',
          },
          {
            src: '/img/work/merchant-wallet/identity-profile.png',
            width: 357,
            height: 756,
            alt: 'Profile screen showing a verified badge beside the merchant name, with personal info, security, invite friends and support options.',
            label: 'Verified profile',
            note: 'The badge sits next to the name. Locked features open the same nudge.',
          },
        ],
      },
      {
        id: 'send',
        kicker: 'Send money',
        title: 'Three ways in, one confirmation',
        copy: 'Merchants already move money by scanning, by contact and by phone number. The flow accepts all three, then slows down at exactly one point: the review screen before the PIN.',
        screens: [
          {
            src: '/img/work/merchant-wallet/send-choose.png',
            width: 360,
            height: 762,
            alt: 'Send money screen offering a QR scan or sending to a phone number.',
            label: 'Choose a method',
            note: 'Scan, contact or number, because all three are normal.',
          },
          {
            src: '/img/work/merchant-wallet/send-contacts.png',
            width: 360,
            height: 762,
            alt: 'Send money contact list with recent recipients, search field and a phone number entry row.',
            label: 'Pick a recipient',
            note: 'Recent recipients first; search beats scrolling for regulars.',
          },
          {
            src: '/img/work/merchant-wallet/send-review.png',
            width: 360,
            height: 762,
            alt: 'Review summary before sending N$225 to Amale Dawson, showing the amount, fee and total.',
            label: 'Review',
            note: 'Amount, fee and total together. No surprise deductions.',
          },
          {
            src: '/img/work/merchant-wallet/send-error.png',
            width: 360,
            height: 762,
            alt: 'Send money screen with an insufficient balance error and a link to cash in.',
            label: 'Insufficient balance',
            note: 'The error names the gap and routes to cash in instead of failing.',
          },
          {
            src: '/img/work/merchant-wallet/send-success.png',
            width: 360,
            height: 760,
            alt: 'Successful payment receipt for N$227.50 with balance, transaction ID and share action.',
            label: 'Receipt',
            note: 'A shareable proof of payment, not a dead-end success screen.',
          },
        ],
      },
      {
        id: 'request',
        kicker: 'Request money',
        title: 'A request that travels',
        copy: 'A request had to work even when the other person did not have JWallet yet. The sender can share payment details, and the recipient gets a pop-up, an in-app notification and an SMS.',
        screens: [
          {
            src: '/img/work/merchant-wallet/request-amount.png',
            width: 374,
            height: 792,
            alt: 'Request money screen with an amount field and a request action.',
            label: 'Set the amount',
            note: 'One amount field, no fee logic for the requester to decode.',
          },
          {
            src: '/img/work/merchant-wallet/request-success.png',
            width: 354,
            height: 748,
            alt: 'Request sent confirmation screen with an option to share payment information.',
            label: 'Share the request',
            note: 'The request is a link the merchant can forward.',
          },
        ],
      },
      {
        id: 'cash-in',
        kicker: 'Cash in',
        title: 'Four doors for physical money',
        copy: 'Cash-in was the adoption test. Every route mirrors something a merchant already does: hand cash to an agent, deposit at a bank, use a card, or send mobile money.',
        screens: [
          {
            src: '/img/work/merchant-wallet/cashin-agent.png',
            width: 372,
            height: 788,
            alt: 'Cash in with agent screen listing nearby agents with their distance and phone number.',
            label: 'With an agent',
            note: 'Distance and a phone number. Choose a person, not a branch.',
          },
          {
            src: '/img/work/merchant-wallet/cashin-deposit.png',
            width: 372,
            height: 788,
            alt: 'Bank deposit flow showing deposit details, a reference number and a pending status.',
            label: 'Bank deposit',
            note: 'A reference number ties the deposit to the wallet before it lands.',
          },
          {
            src: '/img/work/merchant-wallet/cashin-card.png',
            width: 372,
            height: 788,
            alt: 'Bank card top-up screen with card details, amount and a payment confirmation.',
            label: 'Bank card',
            note: 'Card details captured once, then verified with a PIN.',
          },
          {
            src: '/img/work/merchant-wallet/cashin-mobile.png',
            width: 372,
            height: 788,
            alt: 'Mobile money top-up screen with provider selection, amount entry and a confirmation.',
            label: 'Mobile money',
            note: 'The dominant regional rail, with the fee shown before commitment.',
          },
        ],
      },
      {
        id: 'savings',
        kicker: 'Savings',
        title: 'Saving, without a bank',
        copy: 'Savings was framed as a fixed-term goal, not a generic investment product. The merchant picks a 32, 48 or 72-day account, sees the rate and the estimated return, then deposits toward a target.',
        screens: [
          {
            src: '/img/work/merchant-wallet/savings-start.png',
            width: 402,
            height: 882,
            alt: 'Savings onboarding screen explaining locked funds, easy monitoring and security.',
            label: 'Start saving',
            note: 'Explain the lock, the monitoring and the security first.',
          },
          {
            src: '/img/work/merchant-wallet/savings-list.png',
            width: 402,
            height: 872,
            alt: 'Savings home listing 32, 48 and 72-day cash-out accounts with their interest rates and save actions.',
            label: 'Choose a term',
            note: 'The rate is on the card, before the tap.',
          },
          {
            src: '/img/work/merchant-wallet/savings-detail.png',
            width: 402,
            height: 872,
            alt: 'Active 32-day savings account showing balance, interest earned, recent transactions and plan details.',
            label: 'Track a goal',
            note: 'Balance, interest and history in one view.',
          },
        ],
      },
    ],
  },

  build: {
    prose: [
      `The merchant app set the tokens: color ramps, a type scale, inputs, buttons and icons. The agent app and the admin console were built on the same kit, at different densities. That mattered for support: an admin looking at a stuck top-up was reading the same labels the merchant saw on their phone.`,
      `I stayed through implementation: reviewing builds against the flow, writing the error copy, and keeping the edge states in the handoff so engineering had a spec rather than a picture. The agent kiosks were installed across town to make cash-in work for people without a bank; that is an operations decision as much as an interface one, and the design had to make the handoff between the two legible.`,
    ],
    styleguide: {
      src: '/img/work/merchant-wallet/styleguide.jpg',
      width: 2236,
      height: 1050,
      alt: 'JWallet style guide showing color ramps, the Inter type scale, button states, input fields, icons and component variants.',
      caption:
        'The UI kit: color ramps, a type scale, input states and the button matrix the three surfaces shared.',
    },
    qa: [
      'Wrong recipient: confirmation and a shareable receipt, not a dead end.',
      'Unregistered number: still send, and invite them to earn on the first transaction.',
      'Insufficient balance: inline error with a route into cash-in.',
      'KYC pending: a clear status and a verified badge only when verification lands.',
      'Slow or dropped connection: no flow depended on a spinner finishing before the next step.',
    ],
    admin: {
      title: 'The console behind the wallet',
      copy: 'Ten admin screens covered sign-in, roles and permissions, users, top-ups, withdrawals, referrals and savings. Same tokens as the merchant app, but built for scanning and support.',
      screens: [
        {
          src: '/img/work/merchant-wallet/admin-users.png',
          width: 1168,
          height: 686,
          alt: 'Admin console user list with roles, creation dates and a permissions panel for a selected role.',
          label: 'Users and roles',
          note: 'Roles are permission sets, not job titles. The panel shows exactly what a role can touch.',
        },
        {
          src: '/img/work/merchant-wallet/admin-role.png',
          width: 1168,
          height: 684,
          alt: 'Admin savings detail for a merchant showing investment amount, maturity date, interest accrued and transaction history.',
          label: 'Savings detail',
          note: 'Support can see the money trail without opening four tools.',
        },
      ],
    },
    reflection: `What I would do differently: instrument the first top-up before launch. We shipped with qualitative signals and no funnel, which made the next iteration slower to prioritize than it should have been.`,
  },

  outcome: {
    summary:
      'JWallet shipped as a working MVP: a merchant wallet, an agent app and an admin console. The research and handoff pattern, ambassadors, staged interviews and prototype testing, became the template for later Jabu products.',
    shipped: [
      'Onboarding inside the existing Jabu commerce app, with referral code and PIN.',
      'Identity verification and a verified badge that unlocked wallet features.',
      'Send and request money, including receipts and an invite path for unregistered numbers.',
      'Four cash-in routes: agent, bank deposit, bank card and mobile money.',
      'Fixed-term savings accounts with visible rates and goals.',
      'An admin console for users, roles, top-ups, withdrawals, referrals and savings.',
      'A shared style guide and UI kit across all three surfaces.',
    ],
    changed: [
      'Cash collection moved from an end-of-route count to a wallet balance.',
      'Agents could fund a merchant without sending them to a bank branch.',
      'Merchants could save inside the same app they used to order stock.',
    ],
    honesty: `Jabu did not share commercial metrics with the design team, so I am not going to invent a percentage. The directional result is real: the wallet went from research to a defined, buildable MVP, and the operating model around it changed.`,
    next: [
      'Measure time-to-first-top-up, KYC drop-off and support contacts per 100 top-ups.',
      'Shorten the verification path for returning merchants.',
      'Add statements and a transaction export for shops that keep books.',
      'Test whether savings education (not just rates) improves repeat deposits.',
    ],
  },

  appendix: {
    title: 'The original presentation',
    copy: 'The long-form deck holds the full screen inventory, personas, research documents and admin walkthrough.',
    href: 'https://www.behance.net/gallery/193015809/Revolutionizing-merchants-financial-behaviour',
    linkLabel: 'Open the archive on Behance',
  },
};
