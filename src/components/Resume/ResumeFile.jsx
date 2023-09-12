import { Icon, Stack } from '@mui/material';
import { Download } from '@mui/icons-material';
import resume from '../../assets/resume.pdf';
import resumeScreenshot from '../../assets/resume-screenshot.png';
import './Resume.css'
const ResumeFile = () => {
  return (
    <Stack sx={{justifyContent: 'center'}}>
      <a href={resume} download='CorneliusDavis-Resume'>
        <Icon>
          <Download />
        </Icon>
      </a>
          <img
            src={resumeScreenshot}
            alt="Cornelius Davis's Resume"
          ></img>
    </Stack>
  );
};

export default ResumeFile;
