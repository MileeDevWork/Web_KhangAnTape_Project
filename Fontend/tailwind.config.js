/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // BeVietnam: ['Be Vietnam Pro', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Godtham: ["Gotham book", 'sans-serif']
      },
      colors: {
        green: '#156B14',
        dark_green: '#185A3B',
        xanh_nhat: '#789A3D',
        xanh_ma: '#F9FDE7',
        nen_popup: '#F4F5EF',
        main:'#008874',
        normal: '#1c1c1c',
        bgr:'#F3F6FA',
        headbg:'#F5F5F5',
      },
      boxShadow: {
        'bong': '0px 4px 6px 0px #789A3D', // Định nghĩa shadow tùy chỉnh
      },
      letterSpacing:{
        header_menu:'0.138rem',
      }
    },
  },
  plugins: [],
}

