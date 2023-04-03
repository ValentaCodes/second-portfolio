import React from 'react';
import Container from '@mui/material/Container';
// import { ImageList, ImageListItem } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import {
  SchoolTwoTone,
  ComputerTwoTone,
  QuestionMarkOutlined,
} from '@mui/icons-material';
const AboutMe = () => {
  return (
    <div>
      <Container maxWidth={'xl'}>
        <Stack direction={'row'}>
          <Box >
            <Timeline position='left'>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography
                    variant='h6'
                    component={'span'}
                    sx={{ fontFamily: 'Roboto' }}
                  >
                    Student
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color='success'>
                    <SchoolTwoTone />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant='h6'
                    component={'span'}
                    sx={{ fontFamily: 'Roboto' }}
                  >
                    University of Utah
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography
                    variant='h6'
                    component={'span'}
                    sx={{ fontFamily: 'Roboto' }}
                  >
                    Software Engineer Intern
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='primary'>
                    <ComputerTwoTone />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant='h6'
                    component={'span'}
                    sx={{ fontFamily: 'Roboto' }}
                  >
                    Ancestry.com
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='grey'>
                    <QuestionMarkOutlined />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
          <Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
export default AboutMe;