import { InvertColors } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { ColorThemeContext } from '@src/context/ColorThemeContext';
import { ColorThemeContextSchema } from '@src/types/Color';
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
      <AppBar elevation={0} position="static" color="inherit">
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
