import { Box, Img } from 'src/components/shared';
import styles from 'src/styles/pages/about/our-company/index.module.scss';
import { SyntheticEvent, useCallback } from 'react';

const Doctor = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);
  const doctorsData: {
    id: number;
    name: string;
    role: string;
    occupation: string;
    content: string;
    backgroundColor: string;
    imageUrl: string;
  }[] = [
    {
      id: 1,
      name: 'Dr. Johnson Oladele',
      role: 'In-house Doctor',
      occupation: 'Consultant Nephrologist',
      content: `A specialist in normal kidney operations and kidney diseases.
       The loss of one of his relatives to kidney 
      failure inspired Johnson in becoming a Doctor. 
      Johnson's colleagues describe him as a trailblazer and a friendly but no-nonsense medical practitioner.`,
      backgroundColor: 'Green',
      imageUrl: '/img/doctors/doc5.png'
    },
    {
      id: 2,
      name: 'Dr. Tammy Maduabuchi',
      role: 'Consultant',
      occupation: 'Dentist',
      content: `Tammy is specialized in dental care and surgery. With over 8 years of practice under his belt, he has honed his skills and expertise in his niche.
       When he isn't attending to patients, he spends time with family, listening to country music and watching soccer.`,
      backgroundColor: 'Purple',
      imageUrl: '/img/doctors/doc2.png'
    },
    {
      id: 3,
      name: 'Dr. Ifeoluwa Badmus',
      role: 'In-house Doctor',
      occupation: 'Physiotherapist',
      content: `A specialist in the treatment of injury, disease and disorders through physical methods such as exercise, massage, manipulation. 
      She has over 5years experience in practice. She describes herself as having gifted hands with which she uses to move her patients from pain to comfort.`,
      backgroundColor: 'Blue',
      imageUrl: '/img/doctors/doc3.png'
    },
    {
      id: 4,
      name: 'Dr. Adamu Mohammed',
      role: 'In-house Doctor',
      occupation: 'Consultant Nephrologist',
      content: `Adamu is a specialist in heart-related illnesses and their treatment, graduated top of his class, bagging 12 out of 15 awards, then went on a scholarship to the USA, bagging a Masters in Public Health. His practice in Nigeria spans over a period of 10years.
       He is on course to becoming a Fellow at the West African College of Surgeons. He plans to one day set up an NGO to cater for children with heart diseases.`,
      backgroundColor: 'Yellow',
      imageUrl: '/img/doctors/doc4.png'
    }
  ];
  const renderDoctor = () => {
    return (
      <Box className="row justify-content-center align-self-center">
        <Box className="col-12 col-md-6">
          <Box as="h2" className="mt-md-5 pt-md-3">
            Meet Our Doctors
          </Box>
          <Box as="p" className="mb-3 secondary-content">
            Meet the team whose dedication and professionalism brings health care to your doorstep.
          </Box>
          {doctorsData.slice(0, 2).map((doctor) => (
            <Box
              key={doctor.id}
              className={`${styles.doctorContainer} ${styles['bg' + doctor.backgroundColor]}`}>
              <Box className="d-flex justify-content-between">
                <Img
                  srcSet={`${doctor.imageUrl}, ${doctor.imageUrl}`}
                  alt="doctor image"
                  onError={handleImgError}
                />
                <Box as="p" className={`${styles.role}`}>
                  {doctor.role}
                </Box>
              </Box>
              <Box className="mb-3">
                <Box as="h6">{doctor.name}</Box>
                <Box as="span" className="tertiary-content">
                  {doctor.occupation}
                </Box>
              </Box>
              <Box className="secondary-content">
                <p>{doctor.content}</p>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="col-12 col-md-6">
          {doctorsData.slice(2).map((doctor) => (
            <Box
              key={doctor.id}
              className={`${styles.doctorContainer} ${styles['bg' + doctor.backgroundColor]}`}>
              <Box className="d-flex justify-content-between">
                <Img
                  srcSet={`${doctor.imageUrl}, ${doctor.imageUrl}`}
                  alt="doctor image"
                  onError={handleImgError}
                />
                <Box as="p" className={`${styles.role}`}>
                  {doctor.role}
                </Box>
              </Box>
              <Box className="mb-3">
                <Box as="h6">{doctor.name}</Box>
                <Box as="span" className="tertiary-content">
                  {doctor.occupation}
                </Box>
              </Box>
              <Box className="secondary-content">
                <p>{doctor.content}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  return (
    <Box as="section" className={`${styles.doctorsContainer} container`}>
      {renderDoctor()}
    </Box>
  );
};

export default Doctor;
