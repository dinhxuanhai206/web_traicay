import React from "react";
import classNames from "classnames/bind";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);
const mainNav = [
  {
    display: "Home",
    displayVn: "Trang Chủ",
    path: "/",
  },
  {
    display: "Introduce",
    displayVn: "Giới Thiệu",
    path: "/introduce",
  },
  {
    display: "Contact",
    displayVn: "Liên Hệ",
    path: "/contact",
  },
];
const aboutNav = [
  {
    display: "About Us",
    displayVn: "Về Chúng Tôi",
    path: "/",
  },
  {
    display: "Privacy Policy",
    displayVn: "Chính Sách Bảo Vệ",
    path: "/shop",
  },
  {
    display: "Terms & Conditions",
    displayVn: "Điều Khoản & Điều Kiện",
    path: "/blog",
  },
  {
    display: "Shipment Details",
    displayVn: "Chi Tiết Thanh Toán",
    path: "/contact",
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <div className={cx("footer-bottom")}>
        <div className={cx("container")}>
          <div className={cx("bottom")}>
            <div className={cx("about")}>
              <div className={cx("title")}> {i18n.language === "vn" ? (
                  <span>chính sách</span>
                ) : (
                  <span>about</span>
                )}</div>{" "}
              <div className={cx("nav")}>
                {aboutNav.map((item, index) => (
                  <div key={index} className={cx("")}>
                    <Link to={item.path}>
                      <span className={cx("menu-link")}>
                        {i18n.language === "vn" ? item.displayVn : item.display}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("menu")}>
              <div className={cx("title")}> {i18n.language === "vn" ? (
                  <span>danh sách</span>
                ) : (
                  <span>menu</span>
                )}</div>{" "}
              <div className={cx("nav")}>
                {mainNav.map((item, index) => (
                  <div key={index} className={cx("")}>
                    <Link to={item.path}>
                      <span className={cx("menu-link")}>
                        {i18n.language === "vn" ? item.displayVn : item.display}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("contact")}>
              <div className={cx("title")}>
                {i18n.language === "vn" ? (
                  <span>liên hệ</span>
                ) : (
                  <span>contact</span>
                )}
              </div>
              <div className={cx("desc")}>
                {i18n.language === "vn" ? (
                  <span>
                    Đồng hồ titan là địa chỉ bán đồng hồ uy tín và chất lượng,
                    tiêu chí của chúng tôi là bán hàng tốt giá tốt, mang đến sự
                    an tâm tuyệt đối cho khách hàng.
                  </span>
                ) : (
                  <span>
                    Titanium watch is a reputable and quality watch sales
                    address, our criteria is to sell good products at good
                    prices, bringing absolute peace of mind to customers.
                  </span>
                )}
              </div>
              <div className={cx("location")}>
                <MdLocationOn /> A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội
              </div>
              <div className={cx("phone")}>
                <BsFillTelephoneFill style={{ fontSize: "12px" }} /> +84 353 432
                512
              </div>
              <div className={cx("phone")}>
                <AiFillMail style={{ fontSize: "14px" }} />{" "}
                dinhxuanhai206@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("copy")}>
        © Copyright 2021-2022 Hshop. Design Group14
      </div>
    </footer>
  );
};
export default Footer;
