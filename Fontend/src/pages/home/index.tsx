import React from "react";
import Header from "../../components/header_logout";
import Footer from "../../components/footer";
import BannerSlide from "../../components/banner";

function Home() {
  return (
    <>
      <div className="w-screen font-Roboto">
        <Header />
        <BannerSlide />
        <div className="flex justify-center pt-2">
          <button className="button_use">Liên hệ ngay</button>
        </div>
        <div className="pl-28 pt-10">
          <p
            className="font-bold text-green"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
          >
            Sản phẩm nổi bật
          </p>
        </div>
        <div className="p-5">
          <ul className="flex space-x-9 justify-center">
            <li className="w-[280px] h-[400px] flex flex-col items-center bg-nen_popup shadow-lg">
              <img src="/img/item.png" alt="item" />
              <p className="pt-4 pb-3">Băng keo trong</p>
              <button className="button_use w-32">Chi tiết</button>
            </li>
            <li className="w-[280px] h-[400px] flex flex-col items-center bg-nen_popup shadow-lg">
              <img src="/img/item.png" alt="item" />
              <p className="pt-4 pb-3">Băng keo trong</p>
              <button className="button_use w-32">Chi tiết</button>
            </li>
            <li className="w-[280px] h-[400px] flex flex-col items-center bg-nen_popup shadow-lg">
              <img src="/img/item.png" alt="item" />
              <p className="pt-4 pb-3">Băng keo trong</p>
              <button className="button_use w-32">Chi tiết</button>
            </li>
            <li className="w-[280px] h-[400px] flex flex-col items-center bg-nen_popup shadow-lg">
              <img src="/img/item.png" alt="item" />
              <p className="pt-4 pb-3">Băng keo trong</p>
              <button className="button_use w-32">Chi tiết</button>
            </li>
          </ul>
        </div>
        <div className="pl-28 pt-10 flex space-x-96">
          <p
            className="font-bold text-green"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
          >
            Tin tức
          </p>
          {/* <button className="bg-gray-100 p-2 rounded-md hover:bg-slate-200">Xem tất cả</button> */}
        </div>
        <div className="flex p-5">
          <div className=" bg-slate-100 w-[600px] h-[350px]">col1</div>
          <div className="flex flex-col pl-5 space-y-7">
            <div className="bg-red-100 w-72 h-40">hang1</div>
            <div className="bg-yellow-100 w-72 h-40">hang2</div>
          </div>
          <div className="flex flex-col pl-5 space-y-7">
            <div className="bg-red-100 w-72 h-40">hang1</div>
            <div className="bg-yellow-100 w-72 h-40">hang2</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
