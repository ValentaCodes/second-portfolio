import React, { useRef, useState } from 'react';
import { Box, Container, Input, TextField, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/validateEmail';

const ContactForm = () => {
  const form = useRef();
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'from_email') {
      setEmail(inputValue);
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Must enter valid email');
      return;
    }
    try {
      emailjs
        .sendForm(
          'service_pvl7hfo',
          'template_rw5llmp',
          form.current,
          '9K8ci3t-pdNAW58Y1'
        )
        .then((result) => {
          console.info(result.text);
          document.location.reload();
        });
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container sx={{ marginBottom: '5rem' }}>
        <Typography variant='h6'>Contact Me</Typography>
        <Box
          component={'form'}
          ref={form}
          // onSubmit={sendEmail}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            sx={{ width: '20rem' }}
            id='name-contact'
            label='Name'
            margin='normal'
            name='from_name'
          />
          <TextField
            sx={{ width: '20rem' }}
            id='email-contact'
            name='from_email'
            label='Email'
            margin='normal'
            value={email}
            onChange={handleInputChange}
            required
          />
          <TextField
            sx={{ width: '20rem' }}
            id='phone-contact'
            label='Phone'
            name='phone'
            margin='normal'
          />
          <TextField
            required
            id='message-contact'
            name='message'
            label='Message'
            margin='normal'
            multiline
            rows={4}
            sx={{ width: '30rem' }}
          />
          <Input
            variant='filled'
            id='submit-contact'
            type='submit'
            value='Send'
            onClick={sendEmail}
          />
          <Typography variant='h7'>
            {' '}
            or email directly at ValentaCodes@gmail.com
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ContactForm;
