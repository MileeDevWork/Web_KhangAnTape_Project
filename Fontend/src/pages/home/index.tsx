import { memo} from "react";
import Banner from "./Banner";
import Category from "./Category";
import Service from "./Service";
import img1 from "../../../public/img/img1.png"
function Home() {
  return (
    <>
      <div className="font-Montserrat">
        <Banner />
        <Service/>
        <div className="container max-w-[1200px] m-auto pt-[80px]">
            <img src={img1} alt="" />
        </div>
        <div className="container max-w-[1200px] mx-auto mt-[50px] text-4xl text-[#2c2c2c] font-semibold py-11 relative
        after:content-[''] after:w-[100px] after:h-[2px] after:bg-main after:absolute after:left-0 after:bottom-[30px]
        ">Sản phẩm</div>
        <Category/>
      </div>
    </>
  );
}
export default memo(Home);
