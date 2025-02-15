import { memo } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";

function Service() {
  return (
    <div className="container max-w-[1200px] m-auto pt-[80px]">
      <div className="wrap flex flex-wrap items-center ">
        <div className="basis-1/4 flex  items-center justify-center">
          <div className="img group min-w-[80px] h-[80px] rounded-[50%] bg-bgr text-[50px] flex items-center justify-center hover:bg-main">
            <div className="transition-transform duration-300 group-hover:scale-75">
              <TbTruckDelivery />
            </div>
          </div>

          <div className="block pl-4">
            <h3 className="text-[18px] mb-1 font-normal">Giao hàng</h3>
            <p className="text-[14px] text-[#6a6a6a]">
              Giao hàng nhanh chóng - tiết kiệm
            </p>
          </div>
        </div>
        <div className="basis-1/4 flex  items-center justify-center">
        <div className="img group min-w-[80px] h-[80px] rounded-[50%] bg-bgr text-[50px] flex items-center justify-center hover:bg-main">
            <div className="transition-transform duration-300 group-hover:scale-75">
            <Ri24HoursLine />
            </div>
          </div>

          <div className="block pl-4">
            <h3 className="text-[18px] mb-1 font-normal">Hỗ trợ</h3>
            <p className="text-[14px] text-[#6a6a6a]">
              Hỗ trợ liên tục 24/7
            </p>
          </div>
        </div>
        <div className="basis-1/4">item1</div>
        <div className="basis-1/4">item1</div>
      </div>
    </div>
  );
}

export default Service;
