import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    link: {
      active: string;
      main: string;
      background: string;
    };
  }
  interface PaletteOptions {
    link: {
      active?: string;
      main?: string;
      background?: string;
    };
  }
}

export default function createPalette(palette: PaletteOptions): Palette;
