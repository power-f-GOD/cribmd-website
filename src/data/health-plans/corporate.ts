import { SVGIconName } from 'src/types';

export const corporateProcessData: {
  heading: string;
  p1?: string;
  list1?: string;
  list2?: string;
  p2?: string;
  list?: string[];
  buttonText?: string;
  buttonUrl?: string;
  imageName: string;
  contentOrder: string;
}[] = [
  {
    heading: 'Create an organizational account for your business ',
    p1: 'Register your company with CribMD For Business',
    list: [
      'Create an account using the name of your company and relevant details.',
      'You will automatically become the Administrator of the organization. You will be able to designate new administrators later.'
    ],
    p2: 'If you already have an account with CribMD, you can do bla bla bla',
    imageName: 'create-org',
    contentOrder: '0'
  },
  {
    heading: 'Purchase memberships for your employees',
    list: [
      'Choose your preferred plan(s): purchase Corporate Classic and Corporate Executive plans for employees',
      'Assign memberships to employees and invite them to CribMD. '
    ],
    p2: 'You can have the two plans within your organisation, depending on how you want to attribute it to your team members.',
    imageName: 'credit-card',
    contentOrder: '1'
  },
  {
    heading: 'Add Members to start using the Plan',
    p1: 'Add the team members that you want to enjoy your Corporate Plan to the purchased slots and voila! You’re good to start enjoying all the benefits of their plans. Once members have accepted your invitation to CribMD, you can add them as administrators.',
    imageName: 'org-members',
    buttonUrl: '',
    buttonText: 'Get started',
    contentOrder: '0'
  }
];

export const corporateMoreBenefitsData: {
  svgName: SVGIconName;
  heading: string;
  content: string;
}[] = [
  {
    svgName: 'mobile-phone',
    heading: 'Easy to Use',
    content:
      'Our plans are simple to use, and you can find and book all kinds of care on our site or app.'
  },
  {
    svgName: 'web',
    heading: 'Wide Network',
    content:
      'Our network of hospitals, clinics, and other preferred providers is widespread across the nation.'
  },
  {
    svgName: 'clock',
    heading: '24/7 Care',
    content:
      'Our doctors are available 24/7, for in-person appointments,  telemedicine and chat sessions.'
  }
];

export const corporateBenefitsData: {
  header: string;
  list?: {
    title: string;
    content?: string;
    header?: string;
    headerContent?: string;
  }[];
  list1: string;
  footer: string;
  monthlyFee?: string;
  yearlyfee?: string;
}[] = [
  {
    header: 'Benefits',
    list: [
      {
        title: 'Preventive Care',
        content: 'In Patient and Out Patient Care, General and Specialist Consultation'
      },
      { title: 'Treatment of Basic Medical and Surgical Cases' },
      {
        title: 'Chat with Doctors',
        content: 'Free chat for medical information and consultations.'
      },
      { title: 'Admission, Accommodation & Feeding', content: 'Hospital Ward Care' },
      { title: 'Obstetrics Care', content: 'Ante-Natal Care and Delivery' }
    ],
    list1: 'Countries of Coverage',
    footer: 'Download full coverage document'
  },
  {
    header: 'Classic',
    list1: 'country',
    list: [
      {
        title: 'checked',
        content: 'Outpatients and Inpatients',
        header: 'Consultations',
        headerContent: 'In Patient and Out Patient Care, General and Specialist Consultation'
      },
      {
        title: 'checked',
        content: 'Up to ₦200,000 after 6 months wait period.',
        header: 'Treatment of Basic Medical and Surgical Cases'
      },
      {
        title: 'checked',
        header: 'Chat with Doctors',
        headerContent: 'Free chat for medical information and consultations.'
      },
      {
        title: 'checked',
        header: 'Admission, Accommodation & Feeding',
        headerContent: 'Hospital Ward Care'
      },
      { title: '', headerContent: 'Up to 1 family member', header: 'Obstetrics Care' }
    ],
    footer: 'SUBSCRIBE Now',
    monthlyFee: '₦5,000',
    yearlyfee: '₦55,000'
  },
  {
    header: 'Executive',
    list: [
      {
        title: 'checked',
        content: 'Outpatients and Inpatients',
        header: 'Consultations',
        headerContent: 'In Patient and Out Patient Care, General and Specialist Consultation'
      },
      {
        title: 'checked',
        content: 'Up to ₦500,000 after 6 months wait period.',
        header: 'Treatment of Basic Medical and Surgical Cases'
      },
      {
        title: 'checked',
        header: 'Chat with Doctors',
        headerContent: 'Free chat for medical information and consultations.'
      },
      {
        title: 'checked',
        header: 'Admission, Accommodation & Feeding',
        headerContent: 'Hospital Ward Care'
      },
      { title: 'checked', headerContent: 'Ante-Natal Care and Delivery', header: 'Obstetrics Care' }
    ],
    list1: 'country',
    footer: 'SUBSCRIBE Now',
    monthlyFee: '₦19,000',
    yearlyfee: '₦209,000'
  }
];
