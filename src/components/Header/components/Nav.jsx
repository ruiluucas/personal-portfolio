import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { MenuOpenOutlined } from '@mui/icons-material';

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
        <MenuItem style={{ fontFamily: '"Instrument Serif", sans-serif' }} onClick={handleClose}>
          <a className=' text-white font-bold text-xl' href="#contact">Contato</a>
        </MenuItem>
        <MenuItem style={{ fontFamily: '"Instrument Serif", sans-serif' }} onClick={handleClose}>
          <a className=' text-white font-bold text-xl' href="#about">Sobre</a>
        </MenuItem>
        <MenuItem style={{ fontFamily: '"Instrument Serif", sans-serif' }} onClick={handleClose}>
          <a className=' text-white font-bold text-xl' href="#jobs">Trabalhos</a>
        </MenuItem>
        <MenuItem style={{ fontFamily: '"Instrument Serif", sans-serif' }} onClick={handleClose}>
          <a className=' text-white font-bold text-xl' href="#benefits">Benefícios</a>
        </MenuItem>
      </Menu>
    </>
  );
}