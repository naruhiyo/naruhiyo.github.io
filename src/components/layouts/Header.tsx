import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ColorThemeContext, ColorThemeContextSchema } from '@src/context/ColorThemeContext';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

type HeaderSchema = {
  title: string;
  logo: string;
};

const Header = () => {
  const { t } = useTranslation();
  const colorContext: ColorThemeContextSchema = useContext(ColorThemeContext);

  const header: HeaderSchema = t('header') as HeaderSchema;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {header.title}
          </Typography>

          <IconButton color="inherit" onClick={colorContext.toggleColorTheme}>
            <InvertColorsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
