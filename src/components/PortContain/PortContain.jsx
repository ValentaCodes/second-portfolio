import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../../pages/AboutMe';
import Projects from '../../pages/Projects';
import Home from '../../pages/Home';
import flickPick from '../../assets/flickpick.png';
import moodLens from '../../assets/moodlens.png';
import { Stack } from '@mui/material';

const content = [
  {
    photo: moodLens,
    title: 'MoodLens',
    repo: 'https://github.com/ValentaCodes/MoodLens',
    site: 'https://mood-lens.vercel.app/',
    about:
      'MoodLens leverages advanced artificial intelligence to analyze and rank the mood of your journal entries',
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
    if (currentPage === 'Projects') {
      return (
        <>
          <Stack
            direction={{ sm: 'column', lg: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            my={4}
            mx={4}
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
