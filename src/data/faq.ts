import { FAQDataProps } from 'src/types';

export const FAQs: FAQDataProps = {
  generalInfo: [
    {
      question: 'What is CribMD?',
      answer: {
        paragraphs: [
          'CribMD is a digital Doctor on Demand platform whose goal is to provide medical care at a very affordable rate for the rich and the poor alike. Our platform makes it possible for anyone anywhere to access medical care at any time without a barrier of distance. You can either request for a home visit from a doctor or consult a Doctor through our online HD video calling services.'
        ]
      }
    },
    {
      question: 'How does CribMD Work?',
      answer: {
        paragraphs: [
          'CribMD makes it possible for a patient to choose from a list of doctors registered with CribMD and then choose whether to request a house visit or a video call with the doctor.',
          'Patients make payment for services on a subscription basis; the patients pay a fixed amount of money in a month and they are covered for every doctor visit for the month.',
          'Doctors on the other hand get paid for the number of patients they attend to.'
        ],
        orderedList1Title: 'Non Urgent Request:',
        orderedList1: [
          'The doctor logs into his dashboard on CribMD to schedule the times that he is available during the week.',
          'The patient comes to CribMD to book a doctor',
          'We show the patients a list of available doctors',
          'Patient schedules appointment with any available doctor',
          'Doctor sees the patient at their Crib/Home or through telemedicine',
          'Doctor writes your prescription and sends it to a pharmacy if there is a prescription.',
          'Patient rates the service received from the doctor.',
          'Care team and doctor perform follow up as needed'
        ],
        orderedList2Title: 'Urgent/Emergency Request:',
        orderedList2: [
          'The patient logs into their CribMD account to book a doctor.',
          'The patient specifies that he/she needs a doctor urgently.',
          'We send messages to every available doctor in the system.',
          'The first doctor to accept the request attends to the patient and the request is cancelled for every other doctor.',
          'Doctor writes your prescription and sends it to a pharmacy if there is a prescription.',
          'Patient rates the service received from the doctor.',
          'Care team and doctor perform follow up as needed'
        ]
      }
    },
    {
      question: 'How does Telemedicine work?',
      answer: {
        paragraphs: [
          'Telemedicine is essentially an innovative, online approach to helping individuals manage their well-being both proactively and preventatively. Not only do telemedicine service providers help drive the cost of maintaining a healthy workforce down, they offer a faster, more convenient patient experience that keeps employees happier, fitter, and performing at their best. Telemedicine makes it easier for you to get the care you need from the comfort of your own home or office. You can also have nearly anything -- prescriptions'
        ]
      }
    },
    {
      question: 'Will I pay separately for Telemedicine and home visit?',
      answer: {
        paragraphs: [
          'No. Once you pay the subscription fee of $50, you have access to all our services for one month!'
        ]
      }
    },
    {
      question: 'How do I access CribMD services?',
      answer: {
        orderedList1: [
          'visit app.cribmd.com and create an account',
          'Pay the subscription fee',
          'Download our app',
          'Book a consultation on the website or on the app'
        ]
      }
    },
    {
      question: 'Is cribMD services available during covid-19?',
      answer: {
        paragraphs: ['Yes! CribMD is available to provide with medical care to you at anytime.']
      }
    },
    {
      question: 'What is the use of a referral link on my dashboard?',
      answer: {
        paragraphs: [
          'You can earn on CribMD by referring users to the platform',
          'To be part of our ongoing referral program, you can share with them your referral link or code which they can use to register on CribMD.com.',
          'Your referral link takes this format; https://cribmd.com/signup?ref=****** where asterisks denote alphanumerics known as a user’s referral code.',
          'Once they register through your link, you will earn money.',
          'Earnings are as follows:',
          '$5 for each doctor referred and 40% of the package subscribed in the case of patients.'
        ]
      }
    },
    {
      question: 'I am having troubles uploading my profile pictures',
      answer: {
        paragraphs: [
          '​​Please ensure that your document complies with our file limit of 2MB and file formats of JPG or PNG, also if your network is poor, you may experience challenges uploading.',
          'Ensure that:'
        ],
        orderedList1: [
          'You have a good network',
          'The files are not big, typically in the range of 0 to 2 Megabytes. NB: the lesser the file size, the better'
        ]
      }
    }
  ],
  pricingAndPlans: [
    {
      question: 'How can I subscribe on the platform and book a doctor?',
      answer: {
        orderedList1: [
          'Log in to your DASHBOARD',
          'Click on SUBSCRIPTION',
          'Select the plan from the list of available health packages (NB: Each health plan has a list of packages attached to it. see more from our Pricing page)',
          'Click on SUBSCRIBE button',
          'In the next page, Input your valid credit card details',
          'Click on MAKE PAYMENT button',
          "Once it's successful, you will have access to all our services depending on the plan you subscribed for"
        ]
      }
    },
    {
      question: 'What is the CribMD health plan about?',
      answer: {
        paragraphs: [
          "CribMD has various healthcare coverage options and benefits for both 'individuals' and 'corporate organizations'. You can choose between the Basic, Premium, or Family Plan as an Individual subscriber or between the Classic and Executive Plan as a Corporate subscriber. All plans are focused on delivering a remarkable healthcare experience."
        ]
      }
    },
    {
      question: 'What benefit does registering as a doctor offer?',
      answer: {
        paragraphs: [
          'After being approved as a doctor, you will join the elite team of doctors at CribmD.You will be attending to our numerous patients from the comfort of your home or via doctor home visits and getting paid for it. Also, you are qualified to be part of our referral program.'
        ]
      }
    }
  ],
  privacyAndSecurity: [
    {
      question: 'Would my details be made private and secure?',
      answer: {
        paragraphs: [
          "Yes, it would. CribMD uses the latest and secure cloud-based data management system to protect all patient's privacy. We are HIPPA compliant and we make sure that all our user’s data is secure and doesn’t fall into the wrong hands."
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'Can I use your services during weekends and holidays?',
      answer: {
        paragraphs: [
          'CribMD is available 24/7 throughout the year.',
          'Occasionally, your preferred doctor may be on holiday and is temporarily unavailable. In that case, you can choose any of the available doctors on our platform for your consultation.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    }
  ],
  platformUsage: [
    {
      question: 'Can I get a prescription after a telemedicine visit?',
      answer: {
        paragraphs: [
          'The answer is yes. After your telemedicine visit, your doctor can make prescriptions for your drugs when needed.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question:
        'If I subscribed for a family plan or a corporate executive beneficiary, How do I add a dependent?',
      answer: {
        paragraphs: [
          'Prior to adding a dependent, ensure you are subscribed to the individual family plan or corporate executive plan. These are the CribMD plans that allow you to add dependents either below or above 16.',
          'Once you are subscribed to the family plan, log in to your account, and you will find the "dependents" button at the lower-left corner of your dashboard. Click on the button, and a new page will pop with the "add new dependent" button.',
          '|Dependent below the age of 16:|',
          'Click on the "add new dependent" button, fill in all necessary information about your dependent, and submit. You will get another pop-up message telling you that your request has been received and you need to authorize the action in your email.',
          'An authorization message would be waiting in your inbox to complete this process. As soon as you authorize this action in your mail, you will be returned to the CribMD page, where you will get a message that says, "Dependent added successfully."',
          '|Dependent above the age of 16:|',
          'Click on the "add new dependent" button, fill in all necessary information about your dependent, including their email address, and submit. You will receive a pop-up message saying your "dependent has been successfully invited."',
          'Your dependent will then receive a mail to register on CribMD and accept the offer of being a dependent. Once your dependent accepts this offer, they will be automatically added to your plan.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'What will I need for the telemedicine visit?',
      answer: {
        paragraphs: [
          'All you need to connect with a doctor is a smartphone, computer, or tablet with an excellent internet connection.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'How do I get a gym and spa membership?',
      answer: {
        paragraphs: [
          'To be eligible for the gym and spa membership, you need to be a Premium or Family subscriber on the Individual Plan or a Corporate Plan subscriber with an active plan of at least six months on the CribMD platform.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'How much are your plans?',
      answer: {
        paragraphs: [
          'Each of the CribMD plans are available to suit different budgets. ',
          'As an individual, you could get a Basic plan for as low as 3,000naira, a Premium plan for 5,000naira, and a Family plan for as low as 19,000naira monthly. However, as a corporate organization, our plans are 5,000naira and 19,000naira monthly for classic and executive plans respectively.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'Can I still have access to CribMD when I am traveling for business or vacation?',
      answer: {
        paragraphs: [
          'CribMD is available for use anywhere in Nigeria with licensed physicians available to practice in any state you are located within the country.'
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'How do I register as a doctor?',
      answer: {
        paragraphs: [
          'Visit the CribMD homepage and click the signup button. Then select the signup as a doctor option and enter your appropriate details.',
          "When you're done with the signup process, you would be added to our doctor waitlist for verification. Once the CribMD verification team completes your verification, you will be automatically added to the CribMD platform as a doctor."
        ],
        orderedList1Title: '',
        orderedList1: [],
        orderedList2Title: '',
        orderedList2: []
      }
    },
    {
      question: 'How do I get the CribMD App?',
      answer: {
        paragraphs: ['You can get the CribMD App in 3 easy steps:'],
        orderedList1Title: '',
        orderedList1: [
          'Visit Playstore on an Android device or AppStore on an Apple device.',
          'Type in CribMD on the search bar and tap the download button.',
          'Signup or sign in to access the app right away!'
        ],
        orderedList2Title: '',
        orderedList2: []
      }
    }
  ]
};
