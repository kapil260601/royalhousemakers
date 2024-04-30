import { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';


import styles from './apk.css'; // Adjust CSS import based on your setup

const pages = ['Home', 'About US', 'Contact Us', 'WhatsApp', 'Login'];

export default function ResponsiveAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            edge="start"
            onClick={handleToggleDrawer}
            color="inherit"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img className={`${styles['me-lg-5']} ${styles['ms-sm-5']} ${styles['image-size']}`} loading="lazy" alt="" src="/777.png" width="310px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page === "WhatsApp" ? (
                <Button key={page} sx={{ mx: 1, color: 'black' }} href='https://wa.link/pfwjp2'>
                  {page}
                </Button>
              ) : (
                <Link sx={{color: 'black' }} key={page} href={'/' + page.toLowerCase()}>
                  <Button sx={{ mx: 1, color: 'black' }}>
                    {page}
                  </Button>
                </Link>
              )
            ))}
          </Box>

          <Tooltip title="Open settings">
            <IconButton onClick={handleToggleDrawer} sx={{ ml: 2, display: { xs: 'none', md: 'block' } }}>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={handleCloseDrawer}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { background: 'white', color: '#fff' } }}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleCloseDrawer}
              onKeyDown={handleCloseDrawer}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton>
                  <h3 style={{fontWeight:"700"}}>Close X</h3>
                </IconButton>
              </Box>
              {pages.map((page) => (
                page === "WhatsApp" ? (
                  <Button key={page} sx={{ mx: 1, color: 'black'}} href='https://wa.link/pfwjp2'>
                    {page}
                  </Button>
                ) : (
                  <Link key={page} href={'/' + page.toLowerCase()}>
                    <Button sx={{ display: "flex", mx: 1, justifyContent: 'flex-start', color: 'black' }}>
                      {page}
                    </Button>
                  </Link>
                )
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
