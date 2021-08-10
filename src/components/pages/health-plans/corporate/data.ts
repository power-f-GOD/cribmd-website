import { SVGIconName } from 'src/types';

export const processData: {
  heading: string;
  p1?: string;
  list1?: string;
  list2?: string;
  p2?: string;
  buttonText?: string;
  buttonUrl?: string;
  pcImageName: string;
  mobileImageName: string;
  imageOrder: string;
  contentOrder: string;
}[] = [
  {
    heading: 'Create an organizational account for your business ',
    p1: 'Register your company with CribMD For Business',
    list1: 'Create an account using the name of your company and relevant details.',
    list2:
      'You will automatically become the Administrator of the organization. You will be able to designate new administrators later.',
    p2: 'If you already have an account with CribMD, you can do bla bla bla',
    pcImageName: 'doctor-with-child',
    mobileImageName: 'doctor-with-child',
    contentOrder: '0',
    imageOrder: '1'
  },
  {
    heading: 'Purchase memberships for your employees',
    list1:
      'Choose your preferred plan(s): purchase Corporate Classic and Corporate Executive plans for employees',
    list2: 'Assign memberships to employees and invite them to CribMD. ',
    p2: 'You can have the two plans within your organisation, depending on how you want to attribute it to your team members.',
    pcImageName: 'doctor-with-child',
    mobileImageName: 'doctor-with-child',
    contentOrder: '1',
    imageOrder: '0'
  },
  {
    heading: 'Add Members to start using the Plan',
    p1: 'Add the team members that you want to enjoy your Corporate Plan to the purchased slots and voila! You’re good to start enjoying all the benefits of their plans. Once members have accepted your invitation to CribMD, you can add them as administrators.',
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

export const benefitsData: {
  header: string;
  list1: string;
  list2Title: string;
  list2Content: string;
  list3Title: string;
  list3Content?: string;
  list4Title: string;
  list4Content?: string;
  list5Title: string;
  list5Content?: string;
  list6Title: string;
  list6Content?: string;
  list7Title: string;
  list7Content?: string;
  footer: string;
  monthlyFee?: string;
  yearlyfee?: string;
}[] = [
  {
    header: 'Benefits',
    list1: 'Countries of Coverage',
    list2Title: 'Preventive Care',
    list2Content: 'In Patient and Out Patient Care, General and Specialist Consultation',
    list3Title: 'Treatment of Basic Medical and Surgical Cases',
    list4Title: 'Chat with Doctors',
    list4Content: 'Free chat for medical information and consultations.',
    list5Title: 'Admission, Accommodation & Feeding',
    list5Content: 'Hospital Ward Care',
    list6Title: 'Obstetrics Care',
    list6Content: 'Ante-Natal Care and Delivery',
    list7Title: 'Family Plan',
    footer: 'Download full coverage document'
  },
  {
    header: 'Classic',
    list1: 'country',
    list2Title: 'checked',
    list2Content: 'Outpatients and Inpatients',
    list3Title: 'checked',
    list3Content: 'Up to ₦200,000 after 6 months wait period.',
    list4Title: 'checked',
    list5Title: 'checked',
    list6Title: '',
    list7Title: 'checked',
    list7Content: 'Up to 1 family member',
    footer: 'SUBSCRIBE Now',
    monthlyFee: '₦5,000',
    yearlyfee: '₦55,000'
  },
  {
    header: 'Executive',
    list1: 'country',
    list2Title: 'checked',
    list2Content: 'Outpatients and Inpatients',
    list3Title: 'checked',
    list3Content: 'Up to ₦500,000 after 6 months wait period.',
    list4Title: 'checked',
    list5Title: 'checked',
    list6Title: 'checked',
    list7Title: 'checked',
    list7Content: 'Up to 6 family member',
    footer: 'SUBSCRIBE Now',
    monthlyFee: '₦19,000',
    yearlyfee: '₦209,000'
  }
];
