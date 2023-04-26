import { Box, Icon, Stack, Typography } from '@mui/material';
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiCss3,
  SiHtml5,
  SiExpress,
  SiMysql,
  SiGithub,
  SiMui,
  SiRailway,
  SiJavascript,
} from 'react-icons/si';
import './Skills.css';
import React from 'react';

const Skills = () => {
  return (
    <>
      <Stack className='icons'>
        <Typography variant='h4'>My Skills</Typography>
        <Box>
          <Typography variant='h5'>Front-end Tech</Typography>
          <ul>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiReact />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiJavascript />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiCss3 />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiHtml5 />
            </Icon>
          </ul>
        </Box>
        <Box>
          <Typography variant='h5'>Back-end Tech</Typography>
          <ul>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiNodedotjs />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiMongodb />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiMysql />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiGraphql />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiExpress />
            </Icon>
          </ul>
        </Box>
        <Box>
          <Typography variant='h5'>Extra</Typography>
          <ul>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiGithub />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiMui />
            </Icon>
            <Icon sx={{ fontSize: '6rem' }}>
              <SiRailway />
            </Icon>
          </ul>
        </Box>
      </Stack>
    </>
  );
};

export default Skills;
