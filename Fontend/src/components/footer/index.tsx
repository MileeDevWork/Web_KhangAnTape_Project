import { memo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { LiaFacebookMessenger, LiaFacebookSquare } from "react-icons/lia";

function Footer() {
  return (
    <footer className="footer bg-bgr">
      <div className="container max-w-[1200px] m-auto  ">
        <div className="row flex flex-wrap ">
          <div className="basis-1/4">
            <img
              className="py-3 w-28 "
              src={import.meta.env.VITE_PUBLIC_URL + `/img/logokhangan.png`}
              alt="logo-khang-an"
            />
            <ul className="text-sm leading-6 font-normal  ">
              <li>Address: Biên Hoà,Đồng Nai</li>
              <li>Phone: 0869611401</li>
              <li>Email: hieu.duongk22bk@hcmut.edu.vn</li>
            </ul>
          </div>
          <div className="basis-1/2">
            <div className=" overflow-hidden">
              <h6 className="text-main pt-[30px] text-base font-bold">
                Cửa hàng
              </h6>
              <ul className="float-left w-1/2">
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Thông tin về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Sản phẩm kinh doanh
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Thông tin tài khoản
                  </Link>
                </li>
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Giỏ hàng
                  </Link>
                </li>
                <li>
                  <Link className="text-main text-base leading-7" to="">
                    Danh sách ưa thích
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="  overflow-hidden">
              <h6 className="text-main pt-[30px] text-base font-bold">
                Khuyến mãi & ưu đãi
              </h6>
              <p className="text-base pt-[10px] text-normal mb-2">
                Đăng ký nhận thông tin tại đây
              </p>
              <form action="#">
                <div className="submit-container flex items-center mb-8 ">
                  <input
                    className="w-full text-base pl-4 text-normal h-11 border-[1px] divide-solid  border-[#ededed] placeholder:italic placeholder:text-slate-400"
                    type="text"
                    placeholder="Nhập Email"
                  />
                  <button
                    className="h-11 text-sm font-bold uppercase inline-block text-white px-4 min-w-max bg-main hover:text-amber-300"
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </div>
                <div className="flex items-center pb-[30px] gap-x-3">
                  <div className="cursor-pointer text-xl p-2  text-[#404040] border-[1px] divide-solid border-[#ededed] rounded-[50%] transition-all duration-300 bg-white hover:bg-main hover:text-white hover:border-white ">
                    <a
                      href="https://www.facebook.com/DHAndy.204/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiaFacebookSquare />
                    </a>
                  </div>
                  <div className="cursor-pointer text-xl p-2 text-[#404040] border-[1px] divide-solid border-[#ededed] rounded-[50%] transition-all duration-300 bg-white hover:bg-main hover:text-white hover:border-white ">
                    <LiaFacebookMessenger />
                  </div>
                  <div className="cursor-pointer text-xl p-2 text-[#404040] border-[1px] divide-solid border-[#ededed] rounded-[50%] transition-all duration-300 bg-white hover:bg-main hover:text-white hover:border-white ">
                    <SiZalo />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
