public/
|-- img/  #hình ảnh dùng chung

src/
├── assets/          # chứa các file tĩnh như hình ảnh, font, css
│   ├── css/
│       └── input.css #dung de cau hinh them cac thanh phan css dung lai
├── components/      # các thành phần giao diện dùng lại
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── features/        # tổ chức theo tính năng chính
│   ├── auth/        # các file liên quan đến xác thực (login, signup)
│       ├── Login.jsx
│       ├── Signup.jsx
│   ├── products/    # các file liên quan đến sản phẩm
│       ├── ProductList.jsx
│       ├── ProductDetail.jsx
│   └── ...
├── pages/           # các trang trong ứng dụng
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── ...
├── hooks/           # custom hooks
│   ├── useFetch.js
│   └── useAuth.js
├── contexts/        # các context (context api)
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── App.jsx          # component gốc
├── main.jsx         # điểm vào của ứng dụng
