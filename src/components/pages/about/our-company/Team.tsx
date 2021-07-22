import { SVG, Box, Img } from 'src/components';
import styles from 'src/styles/pages/about/our-company/index.module.scss';
import { SyntheticEvent, useCallback } from 'react';
import TeamModal from './Modal';
const Team = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  const teamData: {
    id: number;
    order: string;
    role: string;
    name: string;
    profileLink: string;
    skill: string;
    contentFirst: string;
    contentSecond: string;
    orderLg: string;
    imagePath: string;
  }[] = [
    {
      id: 1,
      order: '1',
      role: 'Co-Founder & CTO',
      name: 'Ngiri Michael U.',
      profileLink: 'https://www.linkedin.com/in/ngiriuchechukwu',
      skill: 'Software Engineer, business development',
      contentFirst: `A devoted Technology expert who over the years has channelled his energy into 
      developing working systems to help businesses, organisations and corporations manage 
      their infrastructure and some cases develop a new and more efficient infrastructure
       to make for a smooth running of their organisations.`,
      contentSecond: `His goal is to enhance the adoption of new technologies in Africa and beyond`,
      orderLg: '0',
      imagePath: '/img/team/mike_cto.jpg'
    },
    {
      id: 2,
      order: '0',
      role: 'Co-Founder & CEO',
      name: 'Ossai XCI',
      profileLink: 'https://www.linkedin.com/in/ifeanyi-ossai-0a0496192/',
      skill: ' Product Vision, Architecture, Business development',
      contentFirst: `Ossai, 91st of his name, is the founder, CEO, 
      and chairman of WeCare A global operations leader with multi-site 
      and P&L experience. He has a strong 
      track record of success aligning enterprise functions towards meeting goals,
       exceeding financial commitments and establishing customer enthusiasm and relationships.`,
      contentSecond: `As an international business leader and innovator who cultivates relationships 
      with key partners to speed products to market, Ossai has championed supply chain operations and distribution,
       business diversification and growth strategies focused on additive manufacturing 
       across the telecom, aerospace and defense, and medical electronic equipment industries`,
      orderLg: '1',
      imagePath: '/img/team/ossai_ceo.jpg'
    },
    {
      id: 4,
      order: '2',
      role: 'Co-Founder & President',
      name: 'Lorna .M Johnson',
      profileLink: 'https://lmjglobalenterprises.com/about',
      skill: 'Health Care Expert, Business Management',
      contentFirst: `A nurse practitioner and midwife, founded and runs the Advanced Family Care Medical Group East and South Central Los Angeles,
       California The Honorable Lorna Johnson MSN, NM, NP is an accomplished business leader, philanthropist,
       health care professional and community advocate. 
       A proud American citizen of Jamaican-Cuban heritage, Ms. Johnson is not content to rest on her success.`,
      contentSecond: `She strives to help people envision better lives for themselves and encourages 
      them to utilize available resources to accomplish that goal. 
      Johnson proudly shared her diverse knowledge about healthcare as a 
      committee member on President Obama’s National Health Care Advisory Committee. `,
      orderLg: '2',
      imagePath: '/img/team/lorna_cfo.png'
    },
    {
      id: 5,
      order: '3',
      role: 'Chief Medical Officer',
      name: 'Adedapo Adesanya',
      profileLink: 'https://www.linkedin.com/in/adedapo-adesanya-a485aa179',
      skill: 'Medical Professional, Product foresight',
      contentFirst: `Experienced Medical Doctor with a demonstrated history of working in the Medical Practice industry.
       Skilled in Regional Anesthesia, Prevention, Healthcare, Medical Office, Patient Safety, Customer Service and Public Relations.`,
      contentSecond: `Strong healthcare services professional with a Bachelor of Medicine, Bachelor of Surgery - MBBS focused in Medicine and Surgery. 
      (MB;BS) from College of medicine; University of Lagos. ACLS and BLS Certified by the American Heart Association.`,
      orderLg: '3',
      imagePath: '/img/team/adedapo.png'
    },
    {
      id: 6,
      order: '4',
      role: 'Chief Creative Office',
      name: 'Jon Benton MacKinder',
      profileLink: 'https://www.linkedin.com/in/jbm/',
      skill: ' Filmmaker, Producer',
      contentFirst: `Jon began design and building websites in the pioneer days of the Internet for the Netscape 1.0 browser, late 1994. 
      He is seasoned a filmmaker and a multiple award winning recording artist, performer and music producer.`,
      contentSecond: `Prior to this he was a marketing major in Southern California where he created and scaled small businesses and sold them as a young entrepreneur.`,
      orderLg: '4',
      imagePath: '/img/team/jon.png'
    },
    {
      id: 7,
      order: '5',
      role: 'VP of Program Development',
      name: 'Mollie Epstein',
      profileLink: 'https://www.linkedin.com/in/mollieepstein/',
      skill: 'Epidemiologist, Data Scientist',
      contentFirst: `Mollie is a seasoned research designer, experienced in primary and secondary data analysis, and clear presentation of results.`,
      contentSecond: `Significant experience with grant-writing, project development, coordination and management,
       as well as database creation, management and analysis. Proficient with STATA, R, and SAS.`,
      orderLg: '5',
      imagePath: '/img/team/mollie.png'
    }
  ];
  const advisorsData: {
    id: string;
    imageUrl: string;
    name: string;
  }[] = [
    { id: '1', imageUrl: '/img/team/advisors/1.jpeg', name: 'Lwazi Wali' },
    { id: '2', imageUrl: '/img/team/advisors/2.png', name: 'Dr Mina Mortezai' },
    { id: '3', imageUrl: '/img/team/advisors/3.jpg', name: 'Dr Kara Lee Pool' },
    { id: '4', imageUrl: '/img/team/advisors/4.jpeg', name: 'Dr Seeiso Koali' },
    { id: '5', imageUrl: '/img/team/advisors/5.jpeg', name: 'Cherry Miyake' },
    { id: '6', imageUrl: '/img/team/advisors/6.jpeg', name: 'Nnena Nkongho' },
    { id: '7', imageUrl: '/img/team/advisors/7.jpeg', name: 'Binyha Kesselly' },
    { id: '8', imageUrl: '/img/team/advisors/8.jpeg', name: 'Makeshoane Seeiso' },
    { id: '9', imageUrl: '/img/team/advisors/9.jpg', name: 'Sudesh Arora Adediwura' },
    { id: '10', imageUrl: '/img/team/advisors/10.png', name: 'Sen. ObieOmo-Agege' },
    { id: '11', imageUrl: '/img/team/advisors/11.jpeg', name: 'deoloye Olanrewaju' },
    { id: '12', imageUrl: '/img/team/advisors/12.jpg', name: 'Moses Awolowo' }
  ];
  const otherTeamMembers: {
    id: string;
    imageUrl: string;
    name: string;
    role: string;
  }[] = [
    {
      id: '1',
      imageUrl: '/img/team/other-team-members/fortunate.png',
      name: 'Fortunate Adediwura',
      role: 'UI/UX Designer'
    },
    {
      id: '2',
      imageUrl: '/img/team/other-team-members/seven.jpg',
      name: 'Ani Emmanuel',
      role: 'Mobile App Dev'
    },
    {
      id: '3',
      imageUrl: '/img/team/other-team-members/vitalis.jpeg',
      name: 'Ogbonna Vitalis',
      role: 'Software Engineer'
    },
    {
      id: '4',
      imageUrl: '/img/team/other-team-members/nicholas.png',
      name: 'Mawuli King',
      role: 'Software Engineer'
    },
    {
      id: '5',
      imageUrl: '/img/team/other-team-members/ikechukwu.png',
      name: 'Apeh Ikechukwu',
      role: 'Software Engineer'
    },
    {
      id: '6',
      imageUrl: '/img/team/other-team-members/feyisewa.jpeg',
      name: 'Awotedu Feyisewa',
      role: 'Software Engineer'
    },
    {
      id: '7',
      imageUrl: '/img/team/other-team-members/moses.jpeg',
      name: 'Ezechukwu Chibuike',
      role: 'UI/UX Designer'
    },
    {
      id: '8',
      imageUrl: '/img/team/other-team-members/valentine.png',
      name: 'Ofoegbu Valentine',
      role: 'Mobile App Dev'
    },
    {
      id: '9',
      imageUrl: '/img/team/other-team-members/kingsley.jpeg',
      name: 'Eze Ikechukwu',
      role: 'Software Engineer'
    },
    {
      id: '10',
      imageUrl: '/img/team/other-team-members/onyedika.jpg',
      name: 'Edewor Onyedika',
      role: 'Software Engineer'
    },
    {
      id: '11',
      imageUrl: '/img/team/other-team-members/peter.png',
      name: 'Ugwu Peter',
      role: 'QA Tester'
    }
  ];

  const renderTeam = (): JSX.Element => {
    return (
      <Box className="row justify-content-center align-self-center">
        {teamData.map((team) => (
          <Box
            key={team.id}
            className={`col-6 col-sm-6 col-md-6 col-lg-4 my-4 order-${team.order} order-lg-${team.orderLg} `}>
            <Box className={`${styles.ourTeam}`}>
              <TeamModal content={team} />
              <Img
                srcSet={`${team.imagePath}, ${team.imagePath}`}
                alt="team image"
                onError={handleImgError}
              />
              <Box className={styles.ourTeamContent}>
                <Box as="h6" className="mt-3">
                  {team.name}
                </Box>
                <Box as="span" className="tertiary-content">
                  {team.role}{' '}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  const renderTeamMembers = (): JSX.Element => {
    return (
      <Box className="row justify-content-center align-self-center">
        {otherTeamMembers.map((team) => (
          <Box key={team.id} className="col-6 col-sm-6 col-md-6 col-lg-2 my-4">
            <Box className={`${styles.teamMembersContent}`}>
              <Img
                srcSet={`${team.imageUrl}, ${team.imageUrl}`}
                alt="team member image"
                onError={handleImgError}
              />
              <Box className={styles.ourTeamContent}>
                <Box as="h6">{team.name}</Box>
                <Box as="span" className="tertiary-content">
                  {team.role}{' '}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };
  const renderAdvisors = (): JSX.Element => {
    return (
      <Box className="row justify-content-center align-self-center">
        {advisorsData.map((advisor) => (
          <Box key={advisor.id} className="col-6 col-sm-6 col-md-6 col-lg-2 my-4">
            <Box className={`${styles.teamMembersContent}`}>
              <Img
                srcSet={`${advisor.imageUrl}, ${advisor.imageUrl}`}
                alt="team member image"
                onError={handleImgError}
              />
              <Box className={styles.ourTeamContent}>
                <Box as="h6">{advisor.name}</Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box as="section" className={styles.ourTeamLayout}>
      <SVG
        className={`${styles.rect} ${styles.positionRight} ${styles.outerRect} d-none d-sm-block `}
        width="186"
        height="338"
        viewBox="0 0 186 338"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
          <rect
            width="395.348"
            height="173.11"
            rx="20"
            transform="matrix(-0.618451 -0.785823 0.981062 -0.193696 236.504 341)"
            fill="url(#paint0_linear)"
            fillOpacity="0.6"
          />
          <rect
            x="0.543916"
            y="-1.46928"
            width="392.348"
            height="170.11"
            rx="18.5"
            transform="matrix(-0.618451 -0.785823 0.981062 -0.193696 238.826 339.674)"
            stroke="url(#paint1_linear)"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="-213.207"
            y="-213.805"
            width="824.75"
            height="765.405"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="107" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="347.206"
            y1="86.5552"
            x2="21.1533"
            y2="86.5552"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#A880FF" stopOpacity="0.14" />
            <stop offset="1" stopColor="#BDACE6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="447.137"
            y1="126.371"
            x2="290.814"
            y2="-138.257"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </SVG>
      <SVG
        className={`${styles.rect} ${styles.positionRight} ${styles.innerRect}  d-none d-sm-block`}
        width="46"
        height="338"
        viewBox="0 0 46 338"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
          <rect
            width="395.348"
            height="173.11"
            rx="20"
            transform="matrix(-0.618451 -0.785823 0.981062 -0.193696 236.504 341)"
            fill="url(#paint0_linear)"
            fillOpacity="0.6"
          />
          <rect
            x="0.543916"
            y="-1.46928"
            width="392.348"
            height="170.11"
            rx="18.5"
            transform="matrix(-0.618451 -0.785823 0.981062 -0.193696 238.826 339.674)"
            stroke="url(#paint1_linear)"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="-213.207"
            y="-213.805"
            width="824.75"
            height="765.405"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="107" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="347.206"
            y1="86.5552"
            x2="21.1533"
            y2="86.5552"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#A880FF" stopOpacity="0.14" />
            <stop offset="1" stopColor="#BDACE6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="447.137"
            y1="126.371"
            x2="290.814"
            y2="-138.257"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </SVG>
      <SVG
        className={`${styles.rect} ${styles.positionLeft} ${styles.outerRect} d-none d-sm-block`}
        width="186"
        height="338"
        viewBox="0 0 186 338"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
          <rect
            width="395.348"
            height="173.11"
            rx="20"
            transform="matrix(0.618451 -0.785823 -0.981062 -0.193696 -50.5039 341.205)"
            fill="url(#paint0_linear)"
            fillOpacity="0.6"
          />
          <rect
            x="-0.543916"
            y="-1.46928"
            width="392.348"
            height="170.11"
            rx="18.5"
            transform="matrix(0.618451 -0.785823 -0.981062 -0.193696 -52.1529 339.023)"
            stroke="url(#paint1_linear)"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="-425.543"
            y="-213.6"
            width="824.75"
            height="765.405"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="107" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="347.206"
            y1="86.5552"
            x2="21.1533"
            y2="86.5552"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#A880FF" stopOpacity="0.14" />
            <stop offset="1" stopColor="#BDACE6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="447.137"
            y1="126.371"
            x2="290.814"
            y2="-138.257"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </SVG>
      <SVG
        className={`${styles.rect} ${styles.positionLeft} ${styles.innerRect} d-none d-sm-block`}
        width="46"
        height="338"
        viewBox="0 0 46 338"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
          <rect
            width="395.348"
            height="173.11"
            rx="20"
            transform="matrix(0.618451 -0.785823 -0.981062 -0.193696 -190.504 341.205)"
            fill="url(#paint0_linear)"
            fillOpacity="0.6"
          />
          <rect
            x="-0.543916"
            y="-1.46928"
            width="392.348"
            height="170.11"
            rx="18.5"
            transform="matrix(0.618451 -0.785823 -0.981062 -0.193696 -192.153 339.023)"
            stroke="url(#paint1_linear)"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_b"
            x="-565.543"
            y="-213.6"
            width="824.75"
            height="765.405"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="107" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="347.206"
            y1="86.5552"
            x2="21.1533"
            y2="86.5552"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#A880FF" stopOpacity="0.14" />
            <stop offset="1" stopColor="#BDACE6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="447.137"
            y1="126.371"
            x2="290.814"
            y2="-138.257"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </SVG>
      <SVG
        className={`${styles.rect} ${styles.positionBottom}  d-none d-sm-block`}
        width="1940"
        height="90"
        viewBox="0 0 1940 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0H1440V27.9248C1440 27.9248 1325.5 62.9558 1164.5 59.3354C1077.76 57.385 1019.5 40.1124 901.5 40.1124C783.5 40.1124 683.5 70 562.5 70C460.5 70 357 43.6551 236.5 43.6551C116 43.6551 0 51.5203 0 51.5203V0Z"
          fill="#F8F5FF"
        />
      </SVG>
      <SVG
        className={`${styles.rect} ${styles.positionBottom} d-block d-sm-none`}
        width="375"
        height="81"
        viewBox="0 0 375 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-1 0.580566H375V28.5053C375 28.5053 345.103 63.5364 303.064 59.916C280.416 57.9656 265.203 40.6929 234.392 40.6929C203.581 40.6929 177.469 70.5806 145.875 70.5806C119.242 70.5806 92.2167 44.2357 60.7528 44.2357C29.2889 44.2357 -1 52.1008 -1 52.1008V0.580566Z"
          fill="#F8F5FF"
        />
      </SVG>
      <Box className="container">
        <Box className="row justify-content-md-center text-md-center">
          <Box className="col-12 col-md-8">
            <Box as="h2" className="mt-3">
              Meet Our Team
            </Box>
            <Box as="p" className="secondary-content d-none d-sm-block">
              Meet the team whose inspiration brings health care to your doorstep.
            </Box>
            <Box className="d-block d-sm-none secondary-content">
              Don’t risk your health by relying on self-medication or amateur advice. Get access to
              highly qualified doctors on CribMD!
            </Box>
          </Box>
        </Box>
        {renderTeam()}
        <Box as="h4" className="mt-md-5">
          Other Team Members
        </Box>
        {renderTeamMembers()}
        <Box as="h4" className="mt-md-5">
          Meet Our Advisors
        </Box>
        {renderAdvisors()}
      </Box>
    </Box>
  );
};
export default Team;
