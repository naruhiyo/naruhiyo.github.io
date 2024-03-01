import { InvertColors } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ColorThemeContext, ColorThemeContextSchema } from '@src/context/ColorThemeContext';
import { HeaderSchema } from '@src/types/Header';
import React, { useContext } from 'react';

const Header = () => {
  const colorContext: ColorThemeContextSchema = useContext(ColorThemeContext);

  const header: HeaderSchema = {
    title: 'NaruHiyo Pages',
    logo: 'images/brand-logo.png'
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {header.title}
          </Typography>

          <IconButton color="inherit" onClick={colorContext.toggleColorTheme} aria-label="toggle-btn">
            <InvertColors />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
