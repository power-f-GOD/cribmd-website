import { SVGIconName } from 'src/types';

export const processData: {
  heading: string;
  p1?: string;
  list1?: string;
  list2?: string;
  list3?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  buttonText?: string;
  buttonUrl?: string;
  pcImageName: string;
  mobileImageName: string;
  imageOrder: string;
  contentOrder: string;
}[] = [
  {
    heading: 'Create Your CribMD Personal Profile',
    p1: "If you don't already have an account with CribMD, then the first step is to:",
    list1: 'Sign up to create an account',
    list2:
      'Next, click the verify button in the alert card displayed at the top of your dashboard to verify your account.',
    list3: 'Afterwards, update your profile with the required basic information.',
    pcImageName: 'doctor-with-child',
    mobileImageName: 'doctor-with-child',
    contentOrder: '0',
    imageOrder: '1'
  },
  {
    heading: 'Update your profile with the required details',
    list1:
      'Next, click the subscribe button to select any monthly plan of your choice - Basic, Premium, or Family.',
    list2: 'Add your payment information',
    list3: 'Finally, subscribe to CribMD for a month, or pre-pay for up to a year!',
    p2: 'Once all that is done, you will have full access to hundreds of qualified doctors to attend to your requests on the CribMD platform.',
    p3: 'If you choose the family plan, you will be able to add up to 10 family members to your plan.',
    pcImageName: 'doctor-with-child',
    mobileImageName: 'doctor-with-child',
    contentOrder: '1',
    imageOrder: '0'
  },
  {
    heading: 'Start enjoying your plan, and better health!',
    p1: "Book an appointment or urgent request with a doctor at your leisure and enjoy all the benefits of CribMD's services in your own home.",
    p4: 'CribMD has made it super easy for you to go to hospitals to receive care and submit your bills to request reimbursement for expenses incurred.',
    pcImageName: 'doctor-with-child',
    mobileImageName: 'doctor-with-child',
    buttonUrl: '',
    buttonText: 'Get started',
    contentOrder: '0',
    imageOrder: '1'
  }
];

export const moreBenefitsData: {
  svgName: SVGIconName;
  heading: string;
  content: string;
}[] = [
  {
    svgName: 'activity-green',
    heading: 'Easy to Use',
    content:
      'Our plans are simple to use, and you can find and book all kinds of care on our site or app.'
  },
  {
    svgName: 'activity-wine',
    heading: 'Wide Network',
    content:
      'Our network of hospitals, clinics, and other preferred providers is widespread across the nation.'
  },
  {
    svgName: 'activity-beige',
    heading: '24/7 Care',
    content:
      'Our doctors are available 24/7, for in-person appointments,  telemedicine and chat sessions.'
  }
];
export const benefitsData: {
  header: string;
  list: {
    content?: string;
    header?: string;
  }[];
  list1: string;
  footer: string;
  fee?: string;
}[] = [
  {
    header: 'Benefits',
    list: [
      { content: 'Preventive Care' },
      { content: 'Outpatient Care' },
      { content: 'Advanced diagnostics' },
      { content: 'Inpatient Hospital Care' },
      { content: 'Fertility' },
      { content: 'Maternity' },
      { content: 'Emergency and Urgent / Clinic Care' },
      { content: 'Prescription drugs' },
      { content: 'Dental Care' },
      { content: 'Eye Care' }
    ],
    list1: 'Care through CribMD',

    footer: 'Download full coverage document'
  },
  {
    header: 'Basic',
    list: [
      { content: '', header: 'Preventive Care' },
      { content: 'checked', header: 'Outpatient Care' },
      { content: '', header: 'Advanced diagnostics' },
      { content: 'checked', header: 'Inpatient Hospital Care' },
      { content: '', header: 'Fertility' },
      { content: '', header: 'Maternity' },
      { content: 'checked', header: 'Emergency and Urgent / Clinic Care' },
      { content: 'checked', header: 'Prescription drugs' },
      { content: '', header: 'Dental Care' },
      { content: '', header: 'Eye Care' }
    ],

    list1: '1 person, 1 visit',

    footer: 'SUBSCRIBE Now',
    fee: '₦3,000'
  },
  {
    header: 'Premium',
    list: [
      { content: 'checked', header: 'Preventive Care' },
      { content: 'checked', header: 'Outpatient Care' },
      { content: 'checked', header: 'Advanced diagnostics' },
      { content: 'checked', header: 'Inpatient Hospital Care' },
      { content: '', header: 'Fertility' },
      { content: '', header: 'Maternity' },
      { content: 'checked', header: 'Emergency and Urgent / Clinic Care' },
      { content: 'checked', header: 'Prescription drugs' },
      { content: 'checked', header: 'Dental Care' },
      { content: 'checked', header: 'Eye Care' }
    ],

    list1: '1 person, UNLIMITED visits',

    footer: 'SUBSCRIBE Now',
    fee: '₦5,000'
  },
  {
    header: 'Family',
    list: [
      { content: 'checked', header: 'Preventive Care' },
      { content: 'checked', header: 'Outpatient Care' },
      { content: 'checked', header: 'Advanced diagnostics' },
      { content: 'checked', header: 'Inpatient Hospital Care' },
      { content: 'checked', header: 'Fertility' },
      { content: 'checked', header: 'Maternity' },
      { content: 'checked', header: 'Emergency and Urgent / Clinic Care' },
      { content: 'checked', header: 'Prescription drugs' },
      { content: 'checked', header: 'Dental Care' },
      { content: 'checked', header: 'Eye Care' }
    ],
    list1: '6 people, unlimited visits',
    footer: 'SUBSCRIBE Now',
    fee: '₦19,000'
  }
];
