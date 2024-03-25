import React, { useContext, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import { Link } from "react-router-dom";
import catoimg from "../../assets/images/all.jpg";
import catoimg1 from "../../assets/images/man.jpg";
import catoimg2 from "../../assets/images/women.jpg";
import catoimg3 from "../../assets/images/colection.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const fillterButton = [
  {
    display: "All",
    displayVn: "Tất Cả",
    cat: "all",
    img: catoimg,
  },
  {
    display: "Men's Watch",
    displayVn: "Thanh Long",
    cat: "fruit",
    img: catoimg1,
  },
  {
    display: "Ladies Watches",
    displayVn: "Mận",
    cat: "food",
    img: catoimg2,
  },
  {
    display: "Collection",
    displayVn: "Cam",
    cat: "fruitbowl",
    img: catoimg3,
  },
  {
    display: "Men's Watch",
    displayVn: "Táo",
    cat: "men",
    img: catoimg1,
  },
  {
    display: "Ladies Watches",
    displayVn: "Ổi",
    cat: "women",
    img: catoimg2,
  },
  {
    display: "Collection",
    displayVn: "Bộ Sưu Tập",
    cat: "collection",
    img: catoimg3,
  }
];

const fillterButtonMobile = [
  {
    display: "All",
    displayVn: "Tất Cả",
    cat: "all"
  },
  {
    display: "Men's Watch",
    displayVn: "Thanh Long",
    cat: "men"
  },
  {
    display: "Ladies Watches",
    displayVn: "Đồng Hồ Nữ",
    cat: "women"
  },
  {
    display: "Collection",
    displayVn: "Bộ Sưu Tập",
    cat: "collection"
  },
  {
    display: "Men's Watch",
    displayVn: "Đồng Hồ Nam",
    cat: "men"
  },
  {
    display: "Ladies Watches",
    displayVn: "Đồng Hồ Nữ",
    cat: "women"
  },
  {
    display: "Collection",
    displayVn: "Bộ Sưu Tập",
    cat: "collection"
  }
];



const Categories = () => {
  const breakpoint = useContext(MediaQueryContext);
  const swiperRef = useRef();
  const { t, i18n } = useTranslation();

  return (
    <div className={cx("container")}>
      {breakpoint.mobile ? (
        <div className={cx("wrapper")}>
          {fillterButtonMobile.map((item, index) => (
            <Link
              to={`/product/${item.cat}`}
              className={cx("link-item")}
              key={index}
            >
              <div className={cx("link-img")}>
                <img src={item.img} alt="" className={cx("image")} />
                <div className={cx("link-title")}>
                  <div className={cx("title")}>{i18n.language === "vn" ? item.displayVn : item.display}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={cx("wrapper-per")}>
          <button onClick={() => swiperRef.current.swiper.slidePrev()} className={cx("btn-custom")}>
            <FaChevronLeft />
          </button>
          <Swiper
            spaceBetween={30}
            speed={1000}
            cssMode={true}
            modules={[Pagination, Autoplay]}
            className={cx("swiper")}
            slidesPerView={6}
            ref={swiperRef}
          >
            {fillterButton.map((item, index) => (
              <SwiperSlide key={index} className={cx("swiper-slide")}>
                <Link
                  to={`/product/${item.cat}`}
                  className={cx("link-per")}
                  key={index}
                >
                  <div className={cx("link-img-per")}>
                    <div className={cx("link-img")}><img src={item.img} alt="" className={cx("image-per")} /></div>
                    <div className={cx("title-per")}>{i18n.language === "vn" ? item.displayVn : item.display}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => swiperRef.current.swiper.slideNext()} className={cx("btn-custom")}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};
export default Categories;
