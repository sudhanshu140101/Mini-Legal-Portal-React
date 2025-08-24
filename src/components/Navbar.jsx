import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#2563eb' }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
        >
          ⚖️ LegAssist
        </Typography>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {user ? (
              <>
                <Button color="inherit" component={Link} to="/dashboard">
                  Dashboard
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  Logout ({user.name})
                </Button>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/auth">
                Login
              </Button>
            )}
          </Box>
        ) : (
          /* Mobile Menu */
          <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuOpen}
              open={Boolean(menuOpen)}
              onClose={handleMenuClose}
            >
              {user ? [
                <MenuItem key="dashboard" onClick={() => { navigate('/dashboard'); handleMenuClose(); }}>
                  Dashboard
                </MenuItem>,
                <MenuItem key="logout" onClick={handleLogout}>
                  Logout ({user.name})
                </MenuItem>
              ] : (
                <MenuItem onClick={() => { navigate('/auth'); handleMenuClose(); }}>
                  Login
                </MenuItem>
              )}
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

