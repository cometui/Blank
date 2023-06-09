const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F6F8',
          100: '#EDEDF1',
          200: '#DCDAE2',
          300: '#CAC8D4',
          400: '#B2AEBF',
          500: '#7A7493',
          600: '#4F4770',
          700: '#3F395A',
          800: '#342F4D',
          900: '#2F2B43',
          DEFAULT: '#7A7493',
        },
        info: {
          50: '#F4F7FE',
          100: '#E9EFFD',
          200: '#C8D8FA',
          300: '#92B1F5',
          400: '#5C8AF0',
          500: '#2563EB',
          600: '#1F54C8',
          700: '#1943A0',
          800: '#10327E',
          900: '#0B265F',
          DEFAULT: '#2563EB',
        },
        success: {
          50: '#EFFDF6',
          100: '#D9F9E6',
          200: '#B8F1D2',
          300: '#8EE4BA',
          400: '#6AD09D',
          500: '#53B483',
          600: '#2F9461',
          700: '#2F7657',
          800: '#255E46',
          900: '#1E4D3A',
          DEFAULT: '#53B483',
        },
        alert: {
          50: '#FEFAF5',
          100: '#FBF2CB',
          200: '#FDE57E',
          300: '#FFD16A',
          400: '#FBBC55',
          500: '#E9A23B',
          600: '#C8811A',
          700: '#A35C00',
          800: '#8B4400',
          900: '#78310B',
          DEFAULT: '#E9A23B',
        },
        destructive: {
          50: '#FEF2F2',
          100: '#FDE9E9',
          200: '#FAC7C7',
          300: '#F7A1A1',
          400: '#F37373',
          500: '#F34141',
          600: '#CD3636',
          700: '#A32E2E',
          800: '#7C2323',
          900: '#601B1B',
          DEFAULT: '#F34141',
        },
        alphaDark: {
          50: 'rgba(47, 43, 67, 0.05)',
          100: 'rgba(47, 43, 67, 0.1)',
          200: 'rgba(47, 43, 67, 0.2)',
          300: 'rgba(47, 43, 67, 0.3)',
          400: 'rgba(47, 43, 67, 0.4)',
          500: 'rgba(47, 43, 67, 0.5)',
          600: 'rgba(47, 43, 67, 0.6)',
          700: 'rgba(47, 43, 67, 0.7)',
          800: 'rgba(47, 43, 67, 0.8)',
          900: 'rgba(47, 43, 67, 0.9)',
        },
        alphaLight: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        Display: ['96px', { lineHeight: '100px' }],
        h1: ['72px', { lineHeight: '78px' }],
        h2: ['64px', { lineHeight: '68px' }],
        h3: ['48px', { lineHeight: '54px' }],
        h4: ['36px', { lineHeight: '42px' }],
        h5: ['30px', { lineHeight: '36px' }],
        h6: ['24px', { lineHeight: '32px' }],
        Subheadline: ['20px', { lineHeight: '28px' }],
        Body1: ['18px', { lineHeight: '26px' }],
        Body2: ['16px', { lineHeight: '24px' }],
        Caption1: ['14px', { lineHeight: '20px' }],
        Caption2: ['12px', { lineHeight: '16px' }],
      },
      boxShadow: {
        DEFAULT: '0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)',
        1: '0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)',
        2: '0px 4px 8px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)',
        3: '0px 6px 12px rgba(47, 43, 67, 0.1)',
        4: '0px 8px 24px rgba(47, 43, 67, 0.1)',
        5: '0px 12px 36px rgba(47, 43, 67, 0.12)',
        focus: '0px 0px 0px 3px rgba(132, 66, 211, 0.48)',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.h1'),
        },
        h2: {
          fontSize: theme('fontSize.h2'),
        },
        h3: {
          fontSize: theme('fontSize.h3'),
        },
        h4: {
          fontSize: theme('fontSize.h4'),
        },
        h5: {
          fontSize: theme('fontSize.h5'),
        },
        h6: {
          fontSize: theme('fontSize.h6'),
        },
        p: {
          fontSize: theme('fontSize.Body1'),
        },
        a: {
          'color': theme('colors.primary'),
          'textDecoration': 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      })
    }),
  ],
}
