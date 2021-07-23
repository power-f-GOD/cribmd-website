import { SVGIconName } from 'src/types';

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
