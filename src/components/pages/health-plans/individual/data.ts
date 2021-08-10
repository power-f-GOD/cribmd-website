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
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  list5: string;
  list6: string;
  list7: string;
  list8: string;
  list9: string;
  list10: string;
  list11: string;
  footer: string;
  fee?: string;
}[] = [
  {
    header: 'Benefits',
    list1: 'Care through CribMD',
    list2: 'Preventive Care',
    list3: 'Outpatient Care',
    list4: 'Advanced diagnostics',
    list5: 'Inpatient Hospital Care',
    list6: 'Fertility',
    list7: 'Maternity',
    list8: 'Emergency and Urgent / Clinic Care',
    list9: 'Prescription drugs',
    list10: 'Dental Care',
    list11: 'Eye Care',
    footer: 'Download full coverage document'
  },
  {
    header: 'Basic',
    list1: '1 person, 1 visit',
    list2: '',
    list3: 'checked',
    list4: '',
    list5: 'checked',
    list6: '',
    list7: '',
    list8: '',
    list9: 'checked',
    list10: 'checked',
    list11: '',
    footer: 'SUBSCRIBE Now',
    fee: '₦3,000'
  },
  {
    header: 'Premium',
    list1: '1 person, UNLIMITED visits',
    list2: 'checked',
    list3: 'checked',
    list4: 'checked',
    list5: 'checked',
    list6: '',
    list7: 'checked',
    list8: 'checked',
    list9: 'checked',
    list10: 'checked',
    list11: 'checked',
    footer: 'SUBSCRIBE Now',
    fee: '₦5,000'
  },
  {
    header: 'Family',
    list1: '6 people, unlimited visits',
    list2: 'checked',
    list3: 'checked',
    list4: 'checked',
    list5: 'checked',
    list6: 'checked',
    list7: 'checked',
    list8: 'checked',
    list9: 'checked',
    list10: 'checked',
    list11: 'checked',
    footer: 'SUBSCRIBE Now',
    fee: '₦19,000'
  }
];
