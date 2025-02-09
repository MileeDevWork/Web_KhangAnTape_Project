// import { useState } from "react";

// function Header() {
//     // State để quản lý trạng thái hiển thị của popup menu
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Hàm bật/tắt menu
//     const toggleMenu = () => {
//         setIsMenuOpen((prev) => !prev);
//     };

//     return (
//         <>
//             {/* Fixed Header */}
//             <div className="w-full bg-green text-white font-Roboto h-16 flex flex-row pl-10 items-center fixed z-30">
//                 <div className="w-2/12">
//                     <img src="/img/Logo.png" alt="Logo" className="object-contain" />
//                 </div>
                
//                 {/* Menu items on larger screens */}
//                 <div className="w-7/12 hidden md:flex justify-center items-center">
//                     <ul className="flex flex-row font-Roboto space-x-10 pl-6 text-sm">
//                         <li className="text_hover_header">SẢN PHẨM</li>
//                         <li className="text_hover_header">TIN TỨC</li>
//                         <li className="text_hover_header">GIỚI THIỆU</li>
//                         <li className="text_hover_header">LIÊN HỆ</li>
//                     </ul>
//                 </div>
                
//                     <div className="md:flex hidden w-3/12 space-x-3 items-center justify-center pr-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                         </svg>
//                         <button type="button" className="button_header">Đăng ký</button>
//                         <button type="button" className="button_header">Đăng nhập</button>
//                     </div>

//                 {/* Icon Menu xuất hiện khi màn hình bé hơn lg (màn hình tablet và phone) */}
//                 <div className="md:hidden flex w-full justify-end items-center pr-6 space-x-6">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                     </svg>
//                     <button onClick={toggleMenu} className="focus:outline-none">
//                         <svg xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             className="w-6 h-6">
//                             <path strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Popup Menu for smaller screens */}
//             {/* {isMenuOpen && (
//             <div className="w-44 mt-16 fixed top-0 right-0 z-20">
//             <div className="flex flex-col items-center">
//                 <div className="bg-nen_popup hover:bg-xanh_ma w-full text-center py-4 border rounded">
//                     <a href="#" className="font-Roboto font-medium text-sm">SẢN PHẨM</a>
//                 </div>
//                 <div className="bg-nen_popup hover:bg-xanh_ma w-full text-center py-4 border rounded">
//                     <a href="#" className="font-Roboto font-medium text-sm">GIỚI THIỆU</a>
//                 </div>
//                 <div className="bg-nen_popup hover:bg-xanh_ma w-full text-center py-4 border rounded">
//                     <a href="#" className="font-Roboto font-medium text-sm">LIÊN HỆ</a>
//                 </div>
//                 <div className="bg-nen_popup hover:bg-xanh_ma w-full text-center py-4 border rounded">
//                     <a href="#" className="font-Roboto font-medium text-sm">TIN TỨC</a>
//                 </div>
//             </div>
//         </div>
        
//             )} */}
//             {isMenuOpen && (
//                 <div className="bg-white/30 h-80 mt-16 fixed inset-0 z-20">
//                     <div className="py-10 pl-6 flex flex-col space-y-5">
//                         <a href="#" className="font-Roboto font-semibold text-sm">SẢN PHẨM</a>
//                         <a href="#" className="font-Roboto font-semibold text-sm">TIN TỨC</a>
//                         <a href="#" className="font-Roboto font-semibold text-sm">GIỚI THIỆU</a>
//                         <a href="#" className="font-Roboto font-semibold text-sm">LIÊN HỆ</a>
//                         <div className="flex space-x-3">
//                             <button type="button" className="button_header">Đăng ký</button>
//                             <button type="button" className="button_header">Đăng nhập</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </>
//     );
// }

// export default Header;
