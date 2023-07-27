/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'login-pattern': "url('../../public/home-pattern.svg')",
          'home-pattern': "url('../../public/home-pattern-phone.png')",
      },
    },
  },
  daisyui:{
    themes:[
      {
        defaultTheme:{
                    'primary':'#D21312',
                    'secondary':'#ED2B2A',
                    'accent':'#F15A59',
                    'neutral':'#3A3D42',
                    'info':'#070A52',
                    'success':'#3A3D42',
                    'error':'#D21312',
                    'snow': '#E5E5E5'
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}
