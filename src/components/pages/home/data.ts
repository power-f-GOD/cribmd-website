import { SVGIconName } from 'src/types';

export const servicesIllustrations: {
  heading: string;
  rider: string;
  p1: string;
  p2?: string;
  p3?: string;
  buttonText: string;
  buttonUrl: string;
  imageName: string;
}[] = [
  {
    heading: 'HOME VISITS',
    rider: 'Get a doctor to come to your home',
    p1: 'Don’t stress over transportation or traffic, we will always come to you!',
    p2: 'We ensure you and your loved ones are properly cared for by designing our house call services to suit your needs. Book your appointment today.',
    p3: 'Our doctors understand the dangers of the pandemic and are well equipped to visit you while taking all the required preventive measures pre, during, and post-visit.',
    buttonText: 'Get Started',
    buttonUrl: '',
    imageName: 'doctor-with-child'
  },
  {
    heading: 'TELEMEDICINE',
    rider: 'Call or chat verified doctors',
    p1: 'The Wait for Quality Healthcare is Over!',
    p2: 'With CribMD, you can now talk to a licensed doctor online, through chat, audio call, or video conference and get instant feedback and prescriptions on the go with your mobile phone.',
    buttonText: 'Talk to a Doctor now',
    buttonUrl: '',
    imageName: 'doctor-patient-video-call'
  },
  {
    heading: 'ONLINE PHARMACY',
    rider: 'Prescriptions on the go',
    p1: 'Get accurate and legal prescriptions from medical experts with an accurate track record of your past prescriptions and sound analysis of your current health.',
    buttonText: 'Get Prescriptions',
    buttonUrl: '',
    imageName: 'doctor-patient-chat'
  }
];

export const ourServices: { icon: SVGIconName; name: string; description: string }[] = [
  {
    icon: 'home',
    name: 'Doctor Home Visit',
    description:
      'Stay on top of your health by letting us bring our verified doctor(s) to you in-person.'
  },
  {
    icon: 'mobile',
    name: 'Telemedicine',
    description:
      'Video call or chat with a doctor from your phone, tablet, or computer until you’re satisfied.'
  },
  {
    icon: 'drug-container',
    name: 'Online Pharmacy',
    description:
      'Take control of your health and time by simply ordering your medications from our mobile App.'
  },
  {
    icon: 'shield',
    name: 'CribMD Health Plan',
    description:
      'Get access to an affordable selection of health plans for yourself, your family, or employees.'
  }
];

export const specializations: { icon: SVGIconName; specialization: string }[] = [
  {
    icon: 'wave',
    specialization: 'Dermatology'
  },
  {
    icon: 'smiley',
    specialization: 'Pediatricis'
  },
  {
    icon: 'cross',
    specialization: 'General Practice'
  },
  {
    icon: 'girl',
    specialization: 'Gynecology'
  },
  {
    icon: 'eye',
    specialization: 'Optometry'
  },
  {
    icon: 'users',
    specialization: 'Family Medicine'
  },
  {
    icon: 'blood',
    specialization: 'Endocrinology'
  },
  {
    icon: 'heart',
    specialization: 'Cardiology'
  }
];
