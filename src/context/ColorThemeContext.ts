import { createContext } from 'react';

export type ColorThemeContextSchema = {
  toggleColorTheme: () => void;
};

export const ColorThemeContext = createContext<ColorThemeContextSchema>({} as ColorThemeContextSchema);
