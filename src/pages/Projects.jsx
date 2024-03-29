import { Box } from '@mui/system';
import {
  Button,
  ButtonGroup,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Tooltip,
} from '@mui/material';
import './styles/Projects.css'

function Projects(props) {
  return (
    <Card sx={{ width: 450 }} className='projectCard'>
      <CardContent>
          <Typography variant='h6' component={'div'}>
            {props.title}
          </Typography>
      </CardContent>
        <Tooltip title={props.about} placement='bottom-end'>
      <CardMedia
        component='img'
        height='240'
        image={props.photo}
        />
        </Tooltip>
      <CardActions>
        <Box>
          <ButtonGroup variant='text'>
            <Button size='small' href={props.repo} variant='black'>
              Repo
            </Button>
            <Button size='small' href={props.site} variant='black'>
              Website
            </Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}

export default Projects;
