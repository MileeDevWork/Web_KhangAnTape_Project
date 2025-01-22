import React from "react";
import Header from "../../components/header_logout";
import Footer from "../../components/footer";
import BannerSlide from "../../components/banner";

function Home() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <BannerSlide />
        <div className="flex justify-center pt-2">
            <button className="button_use">Liên hệ ngay</button>
        </div>
        <div>
            Sản phẩm nổi bật
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
