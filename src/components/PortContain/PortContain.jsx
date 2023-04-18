import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Resume from '../../pages/Resume';
import AboutMe from '../../pages/AboutMe';
import Projects from '../../pages/Projects';
import Home from '../../pages/Home';
import diveIn from '../../assets/divein.png';
import flickPick from '../../assets/flickpick.png';
import logicLounge from '../../assets/logicLounge.png';
import { Stack } from '@mui/material';
// import Footer from '../Footer/Footer';

const content = [
  {
    photo: logicLounge,
    title: 'Logic Lounge',
    repo: 'https://github.com/kfarshchian/Logic-Lounge',
    site: 'https://logic-lounge-production.up.railway.app/',
    about: 'A technical learning platform',
  },
  {
    photo: diveIn,
    title: 'DiveIn Boat Rentals',
    repo: 'https://github.com/ValentaCodes/DiveIn',
    site: 'https://divein-production.up.railway.app/',
    about: 'Boat rentals, simplified.',
  },
  {
    photo: flickPick,
    title: 'Flick Picker',
    repo: 'https://github.com/ValentaCodes/flick-picker',
    site: 'https://loquacious-florentine-c87ce2.netlify.app/',
    about: 'Get ultra quick movie ratings and suggestions with Flick Picker',
  },
];

function PortContain() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return (
        <>
          <Stack
            direction={'column-reverse'}
            justifyContent='center'
            alignItems='center'
            my={4}
          >
            <Resume />
          </Stack>
        </>
      );
    }
    if (currentPage === 'Projects') {
      return (
        <>
          <Stack
            direction={{ sm: 'column', lg: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            my={4}
            justifyContent='center'
            alignItems='center'
          >
            {content.map((project) => (
              <Projects
                repo={project.repo}
                photo={project.photo}
                site={project.site}
                title={project.title}
                about={project.about}
              />
            ))}
          </Stack>
        </>
      );
    } else {
      return <Home />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default PortContain;
