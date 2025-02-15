import { memo, useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { LiaFacebookMessenger,LiaFacebookSquare } from "react-icons/lia";
import { SiZalo } from "react-icons/si";
import { Link } from "react-router-dom";
import 'animate.css';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: any) => {
    if (index !== activeIndex)
      setActiveIndex(index === activeIndex ? 0 : index);
  };

  const [isSticky, setIsSticky] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setIsSticky(false);
      } else {

        setIsSticky(true);
      }
      setLastScroll(currentScroll); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll]);

  const [menu] = useState([
    {
      name: "Trang Chủ",
      path: "/",
    },
    {
      name: "Giới Thiệu",
      path: "/about",
    },
    {
      name: "Sản Phẩm",
      path: "/product_list",
      isShowSubmenu: false,
      child: [
        {
          name: "Băng keo trong",
          path: "",
        },
        {
          name: "Băng keo cuộn",
          path: "",
        },
        {
          name: "Băng keo màu",
          path: "",
        },
      ],
    },
    {
      name: "Liên Hệ",
      path: "/contact",
    },
  ]);
  return (
    <>
      {/* {Header-top BEGIN} */}
        <div className="header_top bg-headbg">
        <div className="container max-w-[1200px] m-auto ">
          <div className="header_row flex flex-wrap items-center">
            <div className="basis-1/2">
              <ul className="flex justify-self-start items-center list-none gap-x-2 py-2">
                <li
                  className="text-xs flex items-center relative
                after:content-[''] after:absolute after:-right-1 after:top-1/2 
                after:h-5 after:w-[1px] after:bg-black after:opacity-10 
                after:-translate-y-1/2"
                >
                  <AiOutlineMail />: hieu.duongk22bk@hcmut.edu.vn
                </li>
                <li className="text-xs flex items-center">
                  <AiOutlinePhone />: 0869611401
                </li>
              </ul>
            </div>
            <div className="basis-1/2">
              <ul className="flex justify-end items-center gap-x-6 ">    
                <Link to={""}>
                  <li className="fb text-xl">
                    <LiaFacebookSquare />
                  </li>
                </Link>
                <Link to={""}>
                  <li className="ins text-xl">
                    <LiaFacebookMessenger />
                  </li>
                </Link>
                <Link to={""}>
                  <li className="zalo text-xl">
                    <SiZalo />
                  </li>
                </Link>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* {Header-top END} */}
      {/* {Header-bottom BEGIN} */}
      <div className={`header_bottom font-Montserrat  bg-white ${isSticky? 'sticky animate__animated animate__fadeInDown animate__fast' :''} top-0 z-50  `}>
        <div className="container max-w-[1200px] m-auto  ">
          <div className="header_row flex flex-wrap items-center">
            {/* {Header-bottom logo BEGIN} */}
            <div className="basis-1/4">
              <Link
                onClick={() => {
                  handleClick(0);
                  window.scrollTo({top:0})
                }}
                to="/"
              >
                <div className="header_logo flex items-center pl-1.5 py-2">
                  <img
                    className="w-20 h-auto "
                    src={
                      import.meta.env.VITE_PUBLIC_URL + `/img/logokhangan.png`
                    }
                    alt="logo-khang-an"
                  />

                  <div className="text-container">
                    <h1 className="text-lg font-semibold text-normal ">
                      KHANG AN TAPE
                    </h1>
                    <h2 className="text-sm  font-light text-main">
                      "Dán Dính Hoàn Hảo"
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            {/* {Header-bottom Logo END} */}
            {/* // */}
            {/* {Header-bottom Menu BEGIN} */}
            <div className="basis-1/2">
              <div className="header_menu">
                <ul className="flex justify-between list-none">
                  {menu?.map((name, index) => (
                    <li
                      onClick={() => {
                        handleClick(index);
                        window.scrollTo({top:0})
                      }}
                      className={`${
                        activeIndex === index
                          ? "text-main relative group px-4"
                          : "relative group px-4"
                      }`}
                      key={index}
                    >
                      <Link
                        className={`no-underline text-sm uppercase font-medium text-normal block py-1.5  tracking-widest leading-10
                        before:content-[''] before:w-0 before:h-1.5 before:bg-main before:absolute
                        before:top-[60px] before:left-0 before:duration-300  hover:text-main
                        ${
                          activeIndex === index
                            ? "before:w-full"
                            : "hover:before:w-6/12 hover:before:translate-x-full"
                        }
                      `}
                        to={name?.path}
                      >
                        {name?.name}
                      </Link>
                      {name?.child && (
                        <ul className="header_menu_dropdown bg-white absolute w-44 top-[60px] left-[0px] z-50 transition-all duration-500 opacity-0 invisible block space-y-3 group-hover:opacity-100 group-hover:visible">
                          {name.child.map((nameChild, indexChild) => (
                            <li key={`${index}-${indexChild}`}>
                              <Link
                                className=" font-normal text-base pl-3.5 hover:text-main  "
                                to={nameChild.path}
                              >
                                {nameChild.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* {Header-bottom Menu END} */}
            {/* {Header-bottom SubMenu BEGIN} */}
            <div className="basis-1/4 bg-green-500">
              <div className="header_icon flex justify-center py-6">
                <div className="header_find">
                  <ul>
                    <li>
                      <Link to="#" className="text-2xl hover:text-main">
                        <BsSearch />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* {Header-bottom SubMenu END} */}
          </div>
        </div>
      </div>
      {/* {Header-bottom BEGIN} */}
    </>
  );
}

export default memo(Header);
