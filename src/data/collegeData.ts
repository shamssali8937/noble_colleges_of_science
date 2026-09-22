export interface AcademicProgram {
  id: string
  code: string
  title: string
  fullName: string
  level: string
  board: string
  summary: string
  curriculumNote: string
}

export interface Facility {
  id: string
  name: string
  category: string
  description: string
  specifications: string[]
}

export interface AdmissionStep {
  stepNumber: string
  title: string
  summary: string
  detail: string
}

export const COLLEGE_DATA = {
  name: 'Noble Science College',
  campusLocation: 'Wan Bhachran',
  fullName: 'Noble Science College, Wan Bhachran',
  urduName: 'نوبل سائنس کالج واں بھچراں',
  tagline: 'A Heaven of Knowledge',
  establishmentYear: 2009,
  affiliation: 'Sargodha Board (BISE Sargodha)',
  classesOffered: 'Nursery to Class 12',
  principal: {
    name: 'Ehsanullah Malik',
    title: 'Principal & Founder',
    photoUrl: '/images/principal-ehsanullah-malik.jpg',
    background:
      'Principal Ehsanullah Malik founded Noble Science College in 2009. While working as a government employee, he held a strong personal ambition to establish his own college. He deliberately chose to build the institution in the underprivileged area of Wan Bhachran, aiming to transform the lives of ordinary students by providing them with quality education.',
    visionQuote:
      'To make Noble Science College a "heaven of knowledge" — an institution that goes beyond ordinary coursework to build students\' confidence, develop their public speaking ability, and shape them into good human beings.',
  },
  mission:
    'To provide quality education to ordinary students and give them the opportunity to excel academically, regardless of their background.',
  vision:
    'To make Noble Science College a "heaven of knowledge" — an institution that goes beyond ordinary coursework to build students\' confidence, develop their public speaking ability, and shape them into good human beings.',
  foundingStory: {
    year: '2009',
    founder: 'Principal Ehsanullah Malik',
    context:
      'Established in 2009 by Principal Ehsanullah Malik. At the time, he was working as a government employee, but held a strong personal ambition to run his own college. He chose to build his institution in the underprivileged area of Wan Bhachran, aiming to transform the lives of ordinary students by providing them with quality education.',
  },
  academics: {
    range: 'Nursery to Class 12',
    board: 'Sargodha Board',
    facultyQualification:
      "The college is staffed by a highly qualified faculty, including MPhil and Bachelor's degree holders, who provide exceptional education to students.",
    programs: [
      {
        id: 'fsc',
        code: 'F.Sc',
        title: 'Faculty of Science',
        fullName: 'Intermediate in Science (Pre-Medical & Pre-Engineering)',
        level: 'Higher Secondary (Classes 11–12)',
        board: 'Sargodha Board',
        summary:
          'Rigorous scientific education structured according to standard course requirements for intermediate pre-medical and pre-engineering disciplines.',
        curriculumNote: 'Subjects: As per standard course requirements for each group.',
      },
      {
        id: 'ics',
        code: 'ICS',
        title: 'Intermediate in Computer Science',
        fullName: 'Intermediate in Computer Science',
        level: 'Higher Secondary (Classes 11–12)',
        board: 'Sargodha Board',
        summary:
          'Comprehensive foundations in computer science alongside core intermediate subjects designed to build strong computational readiness.',
        curriculumNote: 'Subjects: As per standard course requirements for each group.',
      },
      {
        id: 'icom',
        code: 'I.Com',
        title: 'Intermediate in Commerce',
        fullName: 'Intermediate in Commerce',
        level: 'Higher Secondary (Classes 11–12)',
        board: 'Sargodha Board',
        summary:
          'Foundational education in business, accounting, and commercial sciences as prescribed by the Sargodha Board intermediate curriculum.',
        curriculumNote: 'Subjects: As per standard course requirements for each group.',
      },
      {
        id: 'arts',
        code: 'Arts',
        title: 'Humanities & Arts',
        fullName: 'Intermediate in Arts (Humanities)',
        level: 'Higher Secondary (Classes 11–12)',
        board: 'Sargodha Board',
        summary:
          'A broad humanities curriculum fostering analytical reading, language proficiency, and civic awareness in accordance with board standards.',
        curriculumNote: 'Subjects: As per standard course requirements for each group.',
      },
    ] as AcademicProgram[],
  },
  facilities: [
    {
      id: 'laboratories',
      name: 'Laboratories',
      category: 'Scientific & Practical Learning',
      description:
        'Dedicated laboratory facilities equipped for student experiments, scientific observation, and practical curriculum coursework.',
      specifications: [
        'Dedicated experimental work areas',
        'Practical curriculum alignment',
        'Standard safety measures',
      ],
    },
    {
      id: 'library',
      name: 'Library',
      category: 'Academic Reference & Study',
      description:
        'A quiet institutional reading space providing reference books, syllabus texts, and academic literature for student study.',
      specifications: [
        'Curriculum reference collections',
        'Silent individual study environment',
        'Support for student reading habits',
      ],
    },
    {
      id: 'sports-grounds',
      name: 'Sports Grounds',
      category: 'Athletics & Physical Well-being',
      description:
        'Open outdoor campus grounds designated for sports, athletics, physical fitness, and student recreation.',
      specifications: [
        'Outdoor sports and recreation area',
        'Promotes student physical health',
        'Space for co-curricular activities',
      ],
    },
    {
      id: 'security',
      name: 'Security',
      category: 'Campus Safety & Vigilance',
      description:
        'Trained campus security personnel and gated safety protocols maintaining a safe, disciplined educational environment.',
      specifications: [
        'Controlled campus entry point',
        'Protected learning environment',
        'Dedicated security personnel',
      ],
    },
  ] as Facility[],
  admissions: {
    procedureOverview:
      'Interested students and parents contact the college via phone or Facebook. They then visit the college in person, where they are given complete information about the institution and its facilities.',
    principalAccess:
      'Parents and students get the opportunity to meet the Principal directly to discuss all aspects of the college.',
    eligibility:
      'None specific — open to all students wishing to begin their education at Noble Science College.',
    requiredDocuments: 'None required for admission.',
    admissionForm:
      'Not required — students enroll simply by submitting the applicable fee, after which their name is entered into the college record.',
    entryTest:
      'None — instead, an interview with the Principal is conducted to understand the student’s mindset and readiness.',
    scholarships: 'Available for needy and academically brilliant students.',
    steps: [
      {
        stepNumber: '01',
        title: 'Initial Contact',
        summary: 'Call or message the college',
        detail:
          'Interested students or parents reach out via phone/WhatsApp at 0333-6831370 or through the official Facebook page.',
      },
      {
        stepNumber: '02',
        title: 'Campus Visit',
        summary: 'Tour facilities and grounds',
        detail:
          'Visit the college in person near Old Musa Khel Road to explore the classrooms, laboratories, library, and sports grounds.',
      },
      {
        stepNumber: '03',
        title: 'Principal Meeting & Interview',
        summary: 'Direct discussion with Principal Ehsanullah Malik',
        detail:
          'Meet the Principal directly for an informal interview designed to understand the student’s mindset, readiness, and personal goals. No entry test is conducted.',
      },
      {
        stepNumber: '04',
        title: 'Enrollment & Scholarships',
        summary: 'Simple registration and merit/need aid',
        detail:
          'No complex admission form or documents needed. Enrollment is finalized by submitting the applicable fee, entering the student into the college record. Scholarships are available for needy and academically brilliant students.',
      },
    ] as AdmissionStep[],
  },
  contact: {
    address: 'Near Old Musa Khel Road, Wan Bhachran',
    phone: '0333-6831370',
    phoneDisplay: '0333-6831370',
    facebookName: 'نوبل سائنس کالج واں بھچراں (Noble Science College Wan Bhachran)',
    facebookUrl: 'https://www.facebook.com',
  },
  galleryCategories: [
    'College Building',
    'Classrooms',
    'Laboratories',
    'Library',
    'Events & Student Activities',
    'Awards & Achievements',
  ],
}
