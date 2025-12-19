import Box from '@mui/material/Box';
import {
  Timeline,
  TimelineOppositeContent,
  TimelineConnector,
  TimelineDot,
  TimelineSeparator,
  TimelineContent,
  TimelineItem,
} from '@mui/lab';
import {
  SchoolSharp,
  SearchSharp, WorkTwoTone,
} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function TimeLine() {
  return (
    <>
      <Stack my={4} justifyContent={'center'} textAlign={'center'}>
        <Typography variant='h4' component={'p'}>
          My Tech Journey
        </Typography>
        <Box>
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  B.S Computer Science
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='primary'>
                  <SchoolSharp />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'success.main' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  University of Utah
                </Typography>
                <Typography> Pursing </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  Software Engineer Intern
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='success'>
                  <WorkTwoTone />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'success.main' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  Ancestry.com
                </Typography>
                <Typography>May 2023 - September 2023</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  GIS Software Engineer Intern
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='filled' color='success'>
                  <WorkTwoTone />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                    variant='h6'
                    component={'span'}
                    sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  University of Utah
                </Typography>
                <Typography> April 2025 - December 2025</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  variant='h6'
                  component={'span'}
                  sx={{ fontFamily: 'Oswald', color: 'black' }}
                >
                  Seeking Opportunities
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='grey'>
                  <SearchSharp />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Stack>
    </>
  );
}
