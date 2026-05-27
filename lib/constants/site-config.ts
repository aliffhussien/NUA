export const SITE_CONFIG = {
  name: 'N.U.A OS',
  fullName: 'Neo Urgent Assist Operating System',
  tagline: 'Real-time monitoring. Instant alerts. For every resident, every clinic, every life.',
  description:
    'N.U.A OS is a healthcare operating system for Malaysia — built to make proactive, real-time health monitoring accessible to every layer of society.',

  hero: {
    headline: 'The Healthcare OS for Every Malaysian',
    tagline: 'Real-time monitoring. Instant alerts. For every resident, every clinic, every life.',
    cta: 'Join the Waitlist',
  },

  problem: {
    headline: 'Healthcare is reactive. N.U.A changes that.',
    stats: [
      { value: 67, suffix: '%', label: 'of elderly health emergencies are detected too late' },
      { value: 3, suffix: 'x', label: 'more hospital readmissions from missed early warning signs' },
      { value: 2.4, suffix: 'B', prefix: 'RM', label: 'annual cost of preventable elderly care incidents' },
    ],
  },

  solution: {
    headline: 'One loop. Every life protected.',
    pillars: [
      {
        icon: '📡',
        title: 'Real-Time Vital Monitoring',
        description:
          'Continuous capture of heart rate, SpO₂, blood pressure, and temperature for every resident.',
        span: 'wide',
      },
      {
        icon: '🏥',
        title: 'FHIR-Aligned Records',
        description:
          'All patient data maps to HL7 FHIR — future-proof integration with hospitals, MOH, and wearables.',
        span: 'normal',
      },
      {
        icon: '🚨',
        title: 'Instant Smart Alerts',
        description:
          'Abnormal reading detected → caretaker and doctor notified in real-time. Seconds, not hours.',
        span: 'normal',
      },
      {
        icon: '📊',
        title: 'Clinical Dashboard',
        description:
          'All residents at a glance. Drill into any resident. Act on alerts. Log everything.',
        span: 'normal',
      },
    ],
  },

  howItWorks: {
    steps: [
      {
        number: '01',
        title: 'Vitals Captured',
        description: 'Caretaker logs vitals or wearable streams data directly into N.U.A OS.',
      },
      {
        number: '02',
        title: 'N.U.A Evaluates',
        description: 'Every reading is checked against age-adjusted normal ranges in real time.',
      },
      {
        number: '03',
        title: 'Alert Triggered',
        description: 'Abnormal? Staff and doctor receive an instant alert with full context.',
      },
      {
        number: '04',
        title: 'Action Logged',
        description: 'Every response is documented — creating a complete care audit trail.',
      },
    ],
  },

  pilot: {
    headline: 'Proving it first. Scaling from there.',
    description:
      'N.U.A OS is currently piloting at Rumah Orang Tua with 100+ residents — collecting real data, real feedback, and real results before scaling nationally.',
    stats: [
      { value: '100+', label: 'Residents' },
      { value: '1', label: 'Facility' },
      { value: '24/7', label: 'Monitoring' },
    ],
    facility: 'Rumah Orang Tua, Malaysia',
  },

  team: {
    aliff: {
      name: 'Aliff Hussein',
      role: 'Co-founder · Tech & Product',
      bio: 'Building the technology that brings proactive healthcare to every Malaysian. Focused on elegant systems that scale.',
    },
    abang: {
      name: 'Dr. Abang',
      role: 'Co-founder · Medical Director',
      bio: 'Head of Klinik Kesihatan Tampoi. Bringing 15+ years of frontline clinical expertise to validate every decision N.U.A makes.',
    },
  },

  pitchDeck: {
    status: 'coming_soon' as 'coming_soon' | 'live',
    url: '',
  },
} as const;
