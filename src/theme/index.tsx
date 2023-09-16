const theme = {
  colors: {
    'green-300': '#04D361',
    'green-500': '#00B37E',
    'green-700': '#00875F',
    'primary-700': '#996DFF',
    'secondary-700': '#FBA94C',
    'gray-700': '#121214',
    'gray-600': '#202024',
    'gray-500': '#29292E',
    'gray-400': '#323238',
    'gray-300': '#7C7C8A',
    'gray-200': '#C4C4CC',
    'gray-100': '#E1E1E6',
    'red-700': '#FC2234',
    'red-500': '#F75A68',
    white: '#FFFFFF',
  },
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
  },
  lineHeight: {
    base: 1.6,
  },
  fontFamily: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold',
  },
} as const

export { theme }
