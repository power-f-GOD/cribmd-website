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

export const benefitsData: {
  svgName: string;
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
