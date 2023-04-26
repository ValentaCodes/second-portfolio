import '../components/PortContain/Home.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import photo from '../assets/photoCutout.png';
import { ImageList, ImageListItem } from '@mui/material';
import TimeLine from '../components/Timeline/Timeline';
import ContactForm from '../components/ContactForm/ContactForm';
import Skills from '../components/Skills/Skills';
function Home() {
  return (
    <>
      <Stack
        direction={'row'}
        sx={{ alignItems: 'center', bgcolor: 'black' }}
        className={'home-stack'}
      >
        <Typography
          className='welcome-text'
          padding={3}
          variant='h6'
          component='p'
          sx={{
            fontFamily: 'Oswald',
            color: 'white',
          }}
        >
          Welcome to my portfolio!
          <br />
          My name is Cornelius, I'm a solutions-driven software engineer that's
          curiously creating.
        </Typography>
        <ImageList
          sx={{ height: 550 }}
          cols={1}
          rowHeight={900}
          className={'image'}
        >
          <ImageListItem sx={{ position: 'absolute' }}>
            <img
              src={photo}
              alt='Cornelius Davis with blue t-shirt and black tie'
              loading='lazy'
            />
          </ImageListItem>
        </ImageList>
      </Stack>
      <TimeLine />
      <Skills />
      <ContactForm />
    </>
  );
}

export default Home;
