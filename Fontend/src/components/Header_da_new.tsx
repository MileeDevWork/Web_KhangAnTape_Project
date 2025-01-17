function Header() {
  return (
    <>
      <div className="bg-white text-white font-Roboto h-14 pl-10 flex flex-row items-center">
        <div className="w-1/2">
          <img src="/img/Logo_xanh.png" alt="Logo" className="object-contain" />
        </div>
        <div className="w-1/2 flex justify-end items-center pr-6 space-x-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="#000000"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="#000000"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-green h-14 shadow-2xl flex items-center justify-center text-white">
        <ul className="flex space-x-6 sm:space-x-10 md:space-x-20 font-Roboto font-medium test-sm">
          <li className="text_hover_header">SẢN PHẨM</li>
          <li className="text_hover_header">TIN TỨC</li>
          <li className="text_hover_header">GIỚI THIỆU</li>
          <li className="text_hover_header">LIÊN HỆ</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
