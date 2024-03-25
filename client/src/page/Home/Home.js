import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";
import bg from "../../assets/images/bgdep.png";
import logo from "../../assets/images/Watch Hshop.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Feedback from "./FeedBack/FeedBack";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);
const bannerHome = [
  {
    image: images.banner1,
    title: "LOVE GIFT MONTH FOR EVERY CUSTOMER",
    titleVn: "MÓN QUÀ CHO SỨC KHỎE CỦA MỌI NGƯỜI ",
    desc: "10% OFF ",
    text: " ANY TWO PRODUCTS",
    textVn: "VỚI 2 SẢN PHẨM BẤT KÌ",
  }, 
  {
    image: images.banner3
  },
  
];
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <Categories />
      <Products />
      <div className={cx("banner")}>
        <div className={cx("banner-title")}>
          <h1>
            {i18n.language === "vn" ? (
              <span>NHỮNG SẢN PHẨM</span>
            ) : (
              <span>SQUADRO</span>
            )}
          </h1>
          <h2>
            {i18n.language === "vn" ? (
              <span>MỚI NHẤT</span>
            ) : (
              <span>STUDIO</span>
            )}
          </h2>
          <span>
            <p>
              {i18n.language === "vn" ? (
                <span>Trái cây nhập khẩu chất lượng cao</span>
              ) : (
                <span>SQUARE DIAL WATCH COLLECTION COLLECTION</span>
              )}
            </p>
            <p className={cx("p1")}>
              {i18n.language === "vn" ? (
                <span>Được lấy từ những nguồn an toàn nhất</span>
              ) : (
                <span>INSPIRATION OF THE '70s</span>
              )}
            </p>
          </span>
        </div>
      </div>
      <Feedback />
      <ScrollToTop />
    </div>
  );
};
export default Home;
