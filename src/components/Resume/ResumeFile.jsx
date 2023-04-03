import { ImageList, ImageListItem, Icon } from '@mui/material';
import { Download } from '@mui/icons-material';
import resume from '../../assets/resumeRedacted.pdf';
import resumeScreenshot from '../../assets/resumeScreenshot.png';

const ResumeFile = () => {
  return (
    <>
      <a href={resume} download='MyResume'>
        <Icon>
          <Download />
        </Icon>
      </a>
      <ImageList>
        <ImageListItem>
          <img
            src={resumeScreenshot}
            alt="Cornelius Davis's Resume"
            sx={{ minWidth: 400 }}
          ></img>
        </ImageListItem>
      </ImageList>
    </>
  );
};

export default ResumeFile;
