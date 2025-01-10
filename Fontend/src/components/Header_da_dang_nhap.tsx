import { useState } from "react";

function Header() {
    // State để quản lý trạng thái hiển thị của popup menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hàm bật/tắt menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Fixed Header */}
            <div className="w-full bg-green text-white font-Roboto h-16 flex flex-row pl-10 items-center fixed z-30">
                <div className="w-2/12">
                    <img src="/img/Logo.png" alt="Logo" className="object-contain" />
                </div>
                
                {/* Menu items on larger screens */}
                <div className="w-7/12 hidden md:flex justify-center items-center">
                    <ul className="flex flex-row font-Roboto space-x-10 pl-6 text-sm">
                        <li className="text_hover_header">SẢN PHẨM</li>
                        <li className="text_hover_header">TIN TỨC</li>
                        <li className="text_hover_header">GIỚI THIỆU</li>
                        <li className="text_hover_header">LIÊN HỆ</li>
                    </ul>
                </div>
                
                    <div className="md:flex hidden w-3/12 space-x-3 items-center justify-end pr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>

                {/* Icon Menu xuất hiện khi màn hình bé hơn lg (màn hình tablet và phone) */}
                <div className="md:hidden flex w-full justify-end items-center pr-6 space-x-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Popup Menu for smaller screens */}
            {isMenuOpen && (
                // <div className="bg-white/30 backdrop-blur h-60 mt-16 fixed z-20">
                //     <div className="py-10 pl-6 flex flex-col space-y-5">
                //         <a href="#" className="font-Roboto font-semibold text-sm">SẢN PHẨM</a>
                //         <a href="#" className="font-Roboto font-semibold text-sm">TIN TỨC</a>
                //         <a href="#" className="font-Roboto font-semibold text-sm">GIỚI THIỆU</a>
                //         <a href="#" className="font-Roboto font-semibold text-sm">LIÊN HỆ</a>
                //     </div>  
                //     <div className="bg-slate-400 h-64 w-64 border">
                //         <div><img src="img/ava_popup.png" alt="avarta" className=""></img></div>

                //     </div>
                // </div>
                
                <div className="bg-white/30 backdrop-blur h-60 mt-16 fixed z-20">
        <div className="flex flex-col space-y-5">
        <a href="/product_list" className="font-bold text-lg">SẢN PHẨM</a>
        <a href="/sale_off" className="font-bold text-lg">SALE-OFF</a>
        <a href="/news" className="font-bold text-lg">TIN TỨC</a>
        <a href="/introduce" className="font-bold text-lg">GIỚI THIỆU</a>
        </div>
        <div className="border rounded-md p-4 shadow-md flex space-x-4 bg-white">
            <div><img src="img/prd_list_ava_popup.png" alt="avarta"></img></div>
            <div>
                <p className="font-medium">HỌ VÀ TÊN</p>
                <a href="#" className=" text-gray-500 hover:text-gray-700">Xem hồ sơ</a>
            </div>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
                <a href="/cart" className="border rounded-md p-4 shadow-md flex w-1/2 bg-white hover:bg-Cam_Ananas hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p className="pl-3">Giỏ hàng</p>
                </a>
                <a href="#" className="border rounded-md p-4 shadow-md flex w-1/2 bg-white hover:bg-Cam_Ananas hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p className="pl-3">Yêu thích</p>                     
                </a>
            </div>
            <div className="flex space-x-3">
                <a href="#" className="border rounded-md p-4 shadow-md flex w-1/2 bg-white hover:bg-Cam_Ananas hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>                      
                    <p className="pl-3">Tra cứu đơn hàng</p>
                </a>
                <a href="#" className="border rounded-md p-4 shadow-md flex w-1/2 bg-white hover:bg-Cam_Ananas hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="pl-3">Hệ thống cửa hàng</p>                    
                </a>
            </div>
        </div>

    </div>
                
            )}
        </>
    );
}

export default Header;
