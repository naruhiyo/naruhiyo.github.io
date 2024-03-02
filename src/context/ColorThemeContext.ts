import { ColorThemeContextSchema } from '@src/types/Color';
import { createContext } from 'react';

export const ColorThemeContext = createContext<ColorThemeContextSchema>({} as ColorThemeContextSchema);
