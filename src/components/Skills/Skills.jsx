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
  SiGit,
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
            <Icon className='icon'>
              <SiReact />
            </Icon>
            <Icon className='icon'>
              <SiJavascript />
            </Icon>
            <Icon className='icon'>
              <SiCss3 />
            </Icon>
            <Icon className='icon'>
              <SiHtml5 />
            </Icon>
          </ul>
        </Box>
        <Box>
          <Typography variant='h5'>Back-end Tech</Typography>
          <ul>
            <Icon className='icon'>
              <SiNodedotjs />
            </Icon>
            <Icon className='icon'>
              <SiMongodb />
            </Icon>
            <Icon className='icon'>
              <SiMysql />
            </Icon>
            <Icon className='icon'>
              <SiGraphql />
            </Icon>
            <Icon className='icon'>
              <SiExpress />
            </Icon>
          </ul>
        </Box>
        <Box>
          <Typography variant='h5'>Extra</Typography>
          <ul>
            <Icon className='icon'>
              <SiGit />
            </Icon>
            <Icon className='icon'>
              <SiMui />
            </Icon>
            <Icon className='icon'>
              <SiRailway />
            </Icon>
          </ul>
        </Box>
      </Stack>
    </>
  );
};

export default Skills;
