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
        <div className="pl-20">
            <p className="font-bold text-green" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}>Sản phẩm nổi bật</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
