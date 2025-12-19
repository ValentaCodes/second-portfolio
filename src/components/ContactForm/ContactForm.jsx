import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <>
      <Container sx={{ marginBottom: '5rem', paddingTop: '12px', fontSize: '20px' }}>
        <Typography variant='h7' sx={{ margin: '8px 0px 8px 0px' }}>
          Contact directly at ValentaCodes@gmail.com
        </Typography>
      </Container>
    </>
  );
};

export default ContactForm;
