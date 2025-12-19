import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

function Navbar({ currentPage, handlePageChange }) {
  const pages = ['Home', 'Projects'];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'black'}}>
      <Container maxWidth='xxl' sx={{ padding: '0 8px 0 8px'}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size='large'
              aria-label='Navbar'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexDirection: "column",
              justifyContent:"center",
            }}
          >
            Cornelius Davis
          </Typography>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block', lg: "block" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => [handlePageChange(page), handleCloseNavMenu()]}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cornelius Davis
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none' } }}>
            {pages.map((page) => (
              <Button
                href={`#${page}`}
                key={page}
                onClick={() => handlePageChange(page)}
                className={
                  currentPage === page ? 'nav-link active' : 'nav-link'
                }
                sx={{ my: 3, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton
              aria-label='Linkedin'
              aria-controls='LinkedIn-appbar'
              href={'https://www.linkedin.com/in/cornelius-davis-701b00251/'}
              color='inherit'
            >
              <Tooltip title='LinkedIn' arrow sx={{ fontSize: 35 }}>
                <LinkedIn />
              </Tooltip>
            </IconButton>
            <IconButton
              aria-label='Github'
              aria-controls='Github-appbar'
              href={'https://github.com/ValentaCodes'}
              color='inherit'
            >
              <Tooltip title='Github' arrow sx={{ fontSize: 35 }}>
                <GitHub />
              </Tooltip>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
