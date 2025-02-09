
import { memo} from "react";
function Product_list() {
    return (
        <>
        
            <div className="p-16 font-Roboto">
                <div className="font-Roboto font-bold text-dark_green text-xl pl-10">
                    SẢN PHẨM
                </div>
                {/**endrow1 */}
                <div className="pt-10 flex">
                    <div className="pl-10 flex flex-col space-y-4">
                        <p className=" text-dark_green font-Roboto font-semibold text-lg pb-3">
                            Phân loại
                        </p>
                        <button className="p-2 border rounded-sm w-36 hover:bg-slate-100  hover:scale-105">
                            Băng keo giấy
                        </button>
                        <button className="p-2 border rounded-sm w-36 hover:bg-slate-100  hover:scale-105">
                            Băng keo màu
                        </button>
                        <button className="p-2 border rounded-sm w-36 hover:bg-slate-100  hover:scale-105">
                            Băng keo hai mặt
                        </button>
                        <p className=" text-dark_green font-Roboto font-semibold text-lg pb-3 pt-3">
                            Giá
                        </p>
                        <button className="p-2 border rounded-sm w-36 hover:bg-slate-100  hover:scale-105">
                            Thấp - cao
                        </button>
                        <button className="p-2 border rounded-sm w-36 hover:bg-slate-100  hover:scale-105">
                            Cao - thấp
                        </button>
                    </div>
                    {/**end col1*/}
                    <div className="flex flex-1 justify-center">
                        <div className="px-32 grid grid-cols-3 gap-14">
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 2--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                            {/**------------------------------------item 1--------------------------- */}
                            <ul className="w-[210px] h-[350px]">
                                <li>
                                    <img
                                        className="w-[210px] h-[210px]"
                                        src="/img/item.png"
                                    ></img>
                                </li>
                                <li>
                                    <p className="font-semibold">Băng keo trong</p>
                                </li>
                                <li className="text-sm pt-2">50,000 VNĐ</li>
                                <li className="pt-3 flex justify-center">
                                    <button className="button_use w-28">Mua ngay</button>
                                </li>
                            </ul>
                        </div>
                        {/**end col2*/}
                    </div>
                </div>
                {/* endrow2 */}
            </div>

  
        </>
    );
}
export default memo(Product_list);
