import { SVGIconName } from 'src/types';

export const individualProcessData: {
  heading: string;
  p1?: string;
  list?: string[];
  p2?: string;
  p3?: string;
  p4?: string;
  buttonText?: string;
  buttonURL?: string;
  imageName: string;
}[] = [
  {
    heading: 'Create Your CribMD Personal Profile',
    p1: "If you don't already have an account with CribMD, then the first step is to:",
    list: [
      'Sign up to create an account',
      'Next, click the verify button in the alert card displayed at the top of your dashboard to verify your account.',
      'Afterwards, update your profile with the required basic information.'
    ],
    imageName: 'create-account'
  },
  {
    heading: 'Update your profile with the required details',
    list: [
      'Next, click the subscribe button to select any monthly plan of your choice - Basic, Premium, or Family.',
      'Add your payment information',
      'Finally, subscribe to CribMD for a month, or pre-pay for up to a year!'
    ],
    p2: 'Once all that is done, you will have full access to hundreds of qualified doctors to attend to your requests on the CribMD platform.',
    p3: 'If you choose the family plan, you will be able to add up to 10 family members to your plan.',
    imageName: 'plans'
  },
  {
    heading: 'Start enjoying your plan, and better health!',
    p1: "Book an appointment or urgent request with a doctor at your leisure and enjoy all the benefits of CribMD's services in your own home.",
    p4: 'CribMD has made it super easy for you to go to hospitals to receive care and submit your bills to request reimbursement for expenses incurred.',
    imageName: 'features',
    buttonURL: 'https://app.cribmd.com/signup?rURL=patient/subscribe',
    buttonText: 'Get Started'
  }
];

export const individualMoreBenefitsData: {
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
export const individualBenefitsData: {
  header: string;
  list: {
    content?: string | boolean;
    header?: string;
  }[];
  list1: string;
  footer: string;
  price?: string;
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
      { header: 'Preventive Care' },
      { content: 'checked', header: 'Outpatient Care' },
      { header: 'Advanced diagnostics' },
      { content: 'checked', header: 'Inpatient Hospital Care' },
      { header: 'Fertility' },
      { header: 'Maternity' },
      { content: 'checked', header: 'Emergency and Urgent / Clinic Care' },
      { content: 'checked', header: 'Prescription drugs' },
      { header: 'Dental Care' },
      { header: 'Eye Care' }
    ],

    list1: '1 person, 1 visit',

    footer: 'SUBSCRIBE Now',
    price: '₦3,000'
  },
  {
    header: 'Premium',
    list: [
      { content: 'checked', header: 'Preventive Care' },
      { content: 'checked', header: 'Outpatient Care' },
      { content: 'checked', header: 'Advanced diagnostics' },
      { content: 'checked', header: 'Inpatient Hospital Care' },
      { header: 'Fertility' },
      { header: 'Maternity' },
      { content: 'checked', header: 'Emergency and Urgent / Clinic Care' },
      { content: 'checked', header: 'Prescription drugs' },
      { content: 'checked', header: 'Dental Care' },
      { content: 'checked', header: 'Eye Care' }
    ],

    list1: '1 person, UNLIMITED visits',

    footer: 'SUBSCRIBE Now',
    price: '₦5,000'
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
    price: '₦19,000'
  }
];
