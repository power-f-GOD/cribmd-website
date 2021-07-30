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

export const benefitsData: {
  svgName: string;
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
