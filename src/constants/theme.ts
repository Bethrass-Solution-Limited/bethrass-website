export const COLORS = {
  background: '#0A0A0A',
  surface: '#111111',
  card: '#171717',
  accent: '#D4AF37',
  text: '#FFFFFF',
  textSecondary: '#BDBDBD',
} as const;

export type Colors = typeof COLORS;

export const TOKEN = {
  radius: '0.5rem',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
} as const;

export type Token = typeof TOKEN;

export default COLORS;
