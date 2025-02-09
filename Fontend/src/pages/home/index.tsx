import { memo} from "react";
import Banner from "./Banner";
import Category from "./Category";
function Home() {
  return (
    <>
      <div className="font-Roboto">
        <Banner />
        <div>Sản phẩm</div>
        <Category/>
      </div>
    </>
  );
}
export default memo(Home);
