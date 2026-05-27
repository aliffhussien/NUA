export const content = {
  bm: {
    nav: {
      links: [
        { href: '#problem', label: 'Masalah' },
        { href: '#solution', label: 'Penyelesaian' },
        { href: '#preview', label: 'Demo' },
        { href: '#pilot', label: 'Pilot' },
        { href: '#team', label: 'Pasukan' },
      ],
      cta: 'Daftar Sekarang',
    },

    hero: {
      badge: 'Sedang diuji secara langsung di Malaysia',
      headline: 'Pantau orang yang kita sayang,',
      headlineAccent: 'setiap masa.',
      tagline:
        'N.U.A OS bagi amaran awal bila sesuatu tak kena — supaya kau boleh bertindak sebelum terlambat.',
      cta: 'Daftar Sekarang',
      ctaSecondary: 'Tengok cara ia bekerja →',
    },

    problem: {
      badge: 'Masalah sebenar',
      headline: 'Kita selalu tahu selepas ia berlaku.',
      headlineAccent: 'Bukan sebelum.',
      story:
        'Bayangkan ibu kau duduk di rumah jagaan. Tekanan darah naik tengah malam. Tiada siapa tahu sampai pagi. N.U.A OS hadir untuk ubah kisah itu.',
      stats: [
        {
          value: 67,
          suffix: '%',
          label: 'kecemasan kesihatan warga tua dikesan terlambat',
        },
        {
          value: 3,
          suffix: 'x',
          label: 'lebih banyak kemasukan hospital semula dari tanda amaran yang terlepas',
        },
        {
          value: 2.4,
          suffix: 'B',
          prefix: 'RM',
          label: 'kos tahunan insiden penjagaan warga tua yang boleh dicegah',
        },
      ],
      reactiveTitle: 'Penjagaan Reaktif',
      reactiveItems: [
        'Masalah dikesan selepas kecemasan berlaku',
        'Rekod kertas dan pemeriksaan manual',
        'Doktor dihubungi selepas keadaan parah',
        'Data tersimpan berasingan — tidak pernah berhubung',
      ],
      proactiveTitle: 'Gelung Proaktif N.U.A',
      proactiveItems: [
        'Tanda vital dipantau tanpa henti, 24/7',
        'Amaran segera bila bacaan luar biasa',
        'Doktor dan jururawat dimaklumkan dalam beberapa saat',
        'Semua data sejajar FHIR dan boleh dikongsi serta-merta',
      ],
    },

    solution: {
      badge: 'Cara kami selesaikan',
      headline: 'Satu sistem.',
      headlineAccent: 'Empat penjaga setia.',
      pillars: [
        {
          icon: '💓',
          title: 'Pantauan Tanda Vital Masa Nyata',
          description:
            'Kadar jantung, SpO₂, tekanan darah dan suhu badan — setiap penghuni, setiap masa, tiada henti.',
        },
        {
          icon: '🏥',
          title: 'Rekod Perubatan Selaras FHIR',
          description:
            'Data pesakit diselaraskan dengan HL7 FHIR — sedia untuk diintegrasikan dengan hospital, KKM dan peranti boleh pakai.',
        },
        {
          icon: '🚨',
          title: 'Amaran Pintar Seketika',
          description:
            'Bacaan luar biasa dikesan → jururawat dan doktor dimaklumkan dalam masa nyata. Saat, bukan jam.',
        },
        {
          icon: '📊',
          title: 'Papan Pemuka Klinikal',
          description:
            'Semua penghuni dalam satu pandangan. Masuk ke mana-mana penghuni. Bertindak atas amaran. Rekod semua perkara.',
        },
      ],
      vitalLabels: ['DJ', 'SpO₂', 'TD', 'Suhu'],
      dashboardItems: ['Semua Penghuni', 'Amaran Aktif', 'Sejarah Vital', 'Ubat-ubatan'],
    },

    howItWorks: {
      badge: 'Macam mana ia berfungsi',
      headline: 'Empat langkah.',
      headlineAccent: 'Satu kitaran. Tiada henti.',
      steps: [
        {
          number: '01',
          title: 'Tanda Vital Direkod',
          description:
            'Jururawat merekod tanda vital atau alat boleh pakai menghantar data terus ke N.U.A OS.',
        },
        {
          number: '02',
          title: 'N.U.A Menilai',
          description:
            'Setiap bacaan disemak berbanding julat normal yang disesuaikan mengikut usia — dalam masa nyata.',
        },
        {
          number: '03',
          title: 'Amaran Dihantar',
          description:
            'Ada yang tak kena? Kakitangan dan doktor terima amaran segera dengan konteks penuh.',
        },
        {
          number: '04',
          title: 'Tindakan Direkod',
          description:
            'Setiap tindak balas didokumentasikan — mencipta rekod audit penjagaan yang lengkap.',
        },
      ],
      loopNote: 'Kitaran ini tak pernah berhenti — ia berjalan 24/7 untuk setiap penghuni.',
      loopSub: 'Dari seorang penghuni hingga 100+, sistem ini skala tanpa perubahan.',
    },

    livePreview: {
      badge: 'Cuba sendiri',
      headline: 'Ini yang kami bina',
      sub: 'Data sampel sebenar. Klik mana-mana penghuni untuk tengok tanda vitalnya.',
      demoLabel: 'Demo Interaktif — Data Sampel',
      demoHint: 'Klik penghuni untuk lihat tanda vital',
    },

    pilot: {
      badge: 'Pilot berjalan',
      headline: 'Buktikan dulu.',
      headlineAccent: 'Scale kemudian.',
      description:
        'N.U.A OS sedang diuji di Rumah Orang Tua dengan lebih 100 penghuni — mengumpul data sebenar, maklum balas sebenar, dan keputusan sebenar sebelum berkembang ke peringkat nasional.',
      stats: [
        { value: '100+', label: 'Penghuni' },
        { value: '1', label: 'Fasiliti' },
        { value: '24/7', label: 'Pantauan' },
      ],
      facility: 'Rumah Orang Tua, Malaysia',
      facilityTitle: 'Fasiliti Pilot Aktif',
      checkmarks: [
        'Tanda vital sebenar direkod setiap hari bagi 100+ penghuni',
        'Pengesahan perubatan oleh Ketua Klinik Kesihatan Tampoi',
        'Data dikumpul → testimoni → kitaran pembangunan produk',
        'Membina asas bukti untuk pengembangan nasional',
      ],
    },

    team: {
      badge: 'Siapa kami',
      headline: 'Dibina oleh orang yang',
      headlineAccent: 'peduli.',
      sub: 'Seorang bina teknologinya. Seorang lagi sahkan secara klinikal.',
      aliff: {
        name: 'Aliff Hussein',
        role: 'Co-founder · Teknologi & Produk',
        bio: 'Saya bina N.U.A sebab saya percaya setiap nyawa patut dijaga dengan sepenuh hati. Fokus pada sistem yang elegan dan boleh skala.',
      },
      abang: {
        name: 'Dr. Abang',
        role: 'Co-founder · Pengarah Perubatan',
        bio: 'Ketua Klinik Kesihatan Tampoi. Membawa 15+ tahun kepakaran klinikal barisan hadapan untuk mengesahkan setiap keputusan yang N.U.A buat.',
      },
    },

    pitchDeck: {
      badge: 'Untuk Pelabur',
      headline: 'Pembentangan',
      headlineAccent: 'Pelaburan',
      comingSoonTitle: 'Akan Datang',
      comingSoonDesc:
        'Dek akan diterbitkan selepas data pilot dikumpul. Kami bina dengan bukti, bukan janji.',
      comingSoonBadge: 'Tersedia selepas pilot',
      liveTitle: 'Pembentangan Sedia',
      liveDesc: 'Dek penuh dengan data pilot, analisis pasaran, dan peta jalan.',
      liveBtn: 'Lihat Pembentangan →',
    },

    waitlist: {
      badge: 'Sertai kami',
      headline: 'Jadilah sebahagian',
      headlineAccent: 'daripada perubahan ini.',
      sub: 'Dapatkan akses awal. Bentuk produk ini. Bantu kami buktikan penjagaan proaktif menyelamatkan nyawa.',
      successTitle: 'Kau dah dalam senarai.',
      successSub:
        'Kami akan hubungi bila gelombang seterusnya dibuka. Terima kasih kerana percaya.',
      emailLabel: 'Alamat e-mel',
      emailPlaceholder: 'kau@contoh.com',
      nameLabel: 'Nama kau (pilihan)',
      namePlaceholder: 'Ahmad Aliff',
      roleLabel: 'Saya adalah...',
      rolePlaceholder: 'Pilih peranan kau',
      roles: [
        { value: 'caregiver', label: 'Jururawat / Pengasuh' },
        { value: 'clinician', label: 'Doktor / Klinisian' },
        { value: 'hospital_admin', label: 'Pentadbir Hospital / Fasiliti' },
        { value: 'investor', label: 'Pelabur' },
        { value: 'other', label: 'Lain-lain' },
      ],
      submitIdle: 'Daftar Sekarang',
      submitLoading: 'Sedang mendaftar...',
      noSpam: 'Tiada spam. Tiada basa-basi. Hanya kemas kini bila ia penting.',
    },

    footer: {
      tagline: 'Pantauan kesihatan masa nyata untuk Malaysia.',
      copyright: '© 2026 N.U.A OS. Hak cipta terpelihara.',
    },
  },

  en: {
    nav: {
      links: [
        { href: '#problem', label: 'Problem' },
        { href: '#solution', label: 'Solution' },
        { href: '#preview', label: 'Preview' },
        { href: '#pilot', label: 'Pilot' },
        { href: '#team', label: 'Team' },
      ],
      cta: 'Join Waitlist',
    },

    hero: {
      badge: 'Now piloting in Malaysia',
      headline: 'Monitor the people you love,',
      headlineAccent: 'every moment.',
      tagline:
        "N.U.A OS catches warning signs early — so you can act before it's too late.",
      cta: 'Join the Waitlist',
      ctaSecondary: 'See it in action →',
    },

    problem: {
      badge: 'The real problem',
      headline: 'We always find out after it happens.',
      headlineAccent: 'Not before.',
      story:
        "Imagine your mother at a care home. Her blood pressure spikes at midnight. Nobody knows until morning. N.U.A OS is here to change that story.",
      stats: [
        {
          value: 67,
          suffix: '%',
          label: 'of elderly health emergencies are detected too late',
        },
        {
          value: 3,
          suffix: 'x',
          label: 'more hospital readmissions from missed early warning signs',
        },
        {
          value: 2.4,
          suffix: 'B',
          prefix: 'RM',
          label: 'annual cost of preventable elderly care incidents',
        },
      ],
      reactiveTitle: 'Reactive Care',
      reactiveItems: [
        'Problems found after emergencies happen',
        'Paper charts and manual checks',
        'Doctors notified after the crisis',
        'Data lives in silos — never connected',
      ],
      proactiveTitle: 'N.U.A Proactive Loop',
      proactiveItems: [
        'Vitals monitored continuously, 24/7',
        'Instant alerts the moment readings deviate',
        'Doctor and caretaker notified in seconds',
        'All data FHIR-aligned and instantly shareable',
      ],
    },

    solution: {
      badge: 'How we solve it',
      headline: 'One system.',
      headlineAccent: 'Four loyal guardians.',
      pillars: [
        {
          icon: '💓',
          title: 'Real-Time Vital Monitoring',
          description:
            'Heart rate, SpO₂, blood pressure, temperature — every resident, every moment, without pause.',
        },
        {
          icon: '🏥',
          title: 'FHIR-Aligned Records',
          description:
            'All patient data maps to HL7 FHIR — future-proof integration with hospitals, MOH, and wearables.',
        },
        {
          icon: '🚨',
          title: 'Instant Smart Alerts',
          description:
            'Abnormal reading detected → staff and doctor notified in real-time. Seconds, not hours.',
        },
        {
          icon: '📊',
          title: 'Clinical Dashboard',
          description:
            'All residents at a glance. Drill into any resident. Act on alerts. Log everything.',
        },
      ],
      vitalLabels: ['HR', 'SpO₂', 'BP', 'Temp'],
      dashboardItems: ['All Residents', 'Active Alerts', 'Vitals History', 'Medications'],
    },

    howItWorks: {
      badge: 'How it works',
      headline: 'Four steps.',
      headlineAccent: 'One loop. Forever.',
      steps: [
        {
          number: '01',
          title: 'Vitals Captured',
          description: 'Caretaker logs vitals or a wearable streams data directly into N.U.A OS.',
        },
        {
          number: '02',
          title: 'N.U.A Evaluates',
          description: 'Every reading is checked against age-adjusted normal ranges in real time.',
        },
        {
          number: '03',
          title: 'Alert Triggered',
          description:
            'Something off? Staff and doctor receive an instant alert with full context.',
        },
        {
          number: '04',
          title: 'Action Logged',
          description:
            'Every response is documented — creating a complete care audit trail.',
        },
      ],
      loopNote: 'This loop never stops — it runs 24/7 for every resident.',
      loopSub: 'From a single resident to 100+, the architecture scales without change.',
    },

    livePreview: {
      badge: 'Try it yourself',
      headline: 'This is what we built',
      sub: 'Real sample data. Click any resident to see their live vitals.',
      demoLabel: 'Interactive Preview — Sample Data',
      demoHint: 'Click a resident to see their vitals',
    },

    pilot: {
      badge: 'Live pilot',
      headline: 'Prove it first.',
      headlineAccent: 'Scale from there.',
      description:
        "N.U.A OS is currently piloting at a Rumah Orang Tua with 100+ residents — collecting real data, real feedback, and real results before scaling nationally.",
      stats: [
        { value: '100+', label: 'Residents' },
        { value: '1', label: 'Facility' },
        { value: '24/7', label: 'Monitoring' },
      ],
      facility: 'Rumah Orang Tua, Malaysia',
      facilityTitle: 'Active Pilot Facility',
      checkmarks: [
        'Real vitals captured daily across 100+ residents',
        'Medical validation by Head of Klinik Kesihatan Tampoi',
        'Data collected → testimonials → product iteration cycle',
        'Building the evidence base for national scale',
      ],
    },

    team: {
      badge: 'Who we are',
      headline: 'Built by people who',
      headlineAccent: 'genuinely care.',
      sub: 'One founder builds the technology. One validates it clinically.',
      aliff: {
        name: 'Aliff Hussein',
        role: 'Co-founder · Tech & Product',
        bio: "I built N.U.A because I believe every life deserves to be watched over with care. Focused on elegant systems that scale.",
      },
      abang: {
        name: 'Dr. Abang',
        role: 'Co-founder · Medical Director',
        bio: "Head of Klinik Kesihatan Tampoi. Bringing 15+ years of frontline clinical expertise to validate every decision N.U.A makes.",
      },
    },

    pitchDeck: {
      badge: 'For Investors',
      headline: 'The',
      headlineAccent: 'Pitch Deck',
      comingSoonTitle: 'Coming Soon',
      comingSoonDesc:
        'The deck will be published after pilot data is collected. We build with proof, not promises.',
      comingSoonBadge: 'Available after pilot',
      liveTitle: 'Pitch Deck Available',
      liveDesc: 'Full deck with pilot data, market analysis, and roadmap.',
      liveBtn: 'View Deck →',
    },

    waitlist: {
      badge: 'Join us',
      headline: 'Be part of',
      headlineAccent: 'this change.',
      sub: 'Get early access. Shape the product. Help us prove proactive care saves lives.',
      successTitle: "You're on the list.",
      successSub:
        "We'll reach out as we onboard the next wave. Thank you for believing in this.",
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      nameLabel: 'Your name (optional)',
      namePlaceholder: 'Ahmad Aliff',
      roleLabel: 'I am a...',
      rolePlaceholder: 'Select your role',
      roles: [
        { value: 'caregiver', label: 'Caregiver / Nurse' },
        { value: 'clinician', label: 'Doctor / Clinician' },
        { value: 'hospital_admin', label: 'Hospital / Facility Admin' },
        { value: 'investor', label: 'Investor' },
        { value: 'other', label: 'Other' },
      ],
      submitIdle: 'Join the Waitlist',
      submitLoading: 'Joining...',
      noSpam: 'No spam. No fluff. Just updates when it matters.',
    },

    footer: {
      tagline: 'Real-time health monitoring for Malaysia.',
      copyright: '© 2026 N.U.A OS. All rights reserved.',
    },
  },
} as const;

export type Lang = keyof typeof content;
export type SiteContent = typeof content.bm;
