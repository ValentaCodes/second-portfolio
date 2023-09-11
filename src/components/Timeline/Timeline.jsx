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
  QuestionMarkOutlined,
  ComputerTwoTone,
  SchoolTwoTone,
  Work,
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
                  Student
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='success'>
                  <SchoolTwoTone />
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
                <Typography> Graduated April 2023</Typography>
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
                  <Work />
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
                  Actively Applying
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='primary'>
                  <ComputerTwoTone />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='grey'>
                  <QuestionMarkOutlined />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Stack>
    </>
  );
}
