import { Icon, Stack } from '@mui/material';
import { Download } from '@mui/icons-material';
import resume from '../../assets/resumeRedacted.pdf';
import resumeScreenshot from '../../assets/resumeScreenshot.png';
import './Resume.css'
const ResumeFile = () => {
  return (
    <Stack sx={{justifyContent: 'center'}}>
      <a href={resume} download='MyResume'>
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
