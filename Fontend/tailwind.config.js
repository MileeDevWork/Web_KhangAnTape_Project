/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Thêm các tệp trong thư mục src
    "./public/index.html",             // Tệp HTML chính trong React
  ],
  theme: {
    extend: {
      fontFamily: {
        // BeVietnam: ['Be Vietnam Pro', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        green: '#156B14',
        xanh_ma: '#F9FDE7',
        nen_popup: '#F4F5EF',
      },
      boxShadow: {
        'bong': '0px 4px 6px 0px #789A3D', // Định nghĩa shadow tùy chỉnh
      },
    },
  },
  plugins: [],
}

