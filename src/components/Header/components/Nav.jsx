import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion'

import { MenuOpenOutlined } from '@mui/icons-material';

const menuItems = [
  { label: 'Contato', href: '#contact', duration: 0.8 },
  { label: 'Sobre', href: '#about', duration: 1 },
  { label: 'Trabalhos', href: '#jobs', duration: 1.2 },
  { label: 'Trajetória', href: '#experience', duration: 1.3 },
  { label: 'Extras', href: '#extras', duration: 1.35 },
  { label: 'Benefícios', href: '#benefits', duration: 1.4 },
];

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, background: 'white', color: 'black', borderRadius: '0.375rem' }}><MenuOpenOutlined /></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.href}
            style={{ fontFamily: '"Instrument Serif", sans-serif' }}
            onClick={handleClose}
          >
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: item.duration, ease: 'circInOut' }}
              className=" text-white font-bold text-xl"
              href={item.href}
            >
              {item.label}
            </motion.a>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}