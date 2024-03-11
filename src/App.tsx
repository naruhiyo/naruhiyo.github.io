import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '@src/components/layouts/Footer';
import Header from '@src/components/layouts/Header';
import { ColorThemeContext } from '@src/context/ColorThemeContext';
import { Top } from '@src/pages/Top';
import { ColorTheme } from '@src/types/Color';
import React, { useState } from 'react';

function App() {
  // テーマカラーの動的変更設定
  const [mode, setMode] = useState<ColorTheme>('light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  return (
    <React.Fragment>
      {/* CSSリセット */}
      <CssBaseline />
      {/* カラーテーマの変更に必要なロジックをグローバル化させる */}
      <ColorThemeContext.Provider value={colorMode}>
        {/* カラーテーマ */}
        <ThemeProvider theme={theme}>
          {/* レイアウト */}
          <Box
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary'
            }}
          >
            <Header />
            <Top />
            <Footer />
          </Box>
        </ThemeProvider>
      </ColorThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
