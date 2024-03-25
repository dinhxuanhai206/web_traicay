import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/cartSlice";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { toast, ToastContainer } from "react-toastify";
import Comment from "./Comment/Comment";
import { useTranslation } from "react-i18next";
import c1 from "../../assets/images/chanh.png";

const cx = classNames.bind(styles);


const Product = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [active, setActive] = useState(0);
  const id = location.pathname.split("/")[2];
  const [cartQuantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addCard = () => {
    dispatch(add({ ...product, cartQuantity }));
    toast("add to cart");
  };
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") {
      cartQuantity > 1 && setQuantity(cartQuantity - 1);
    } else {
      setQuantity(cartQuantity + 1);
    }
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className={cx("container")}>
      <div
        className={cx("block-top")}
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className={cx("image")}>
          <div className={cx("info-produce")}>Thông tin sản phẩm</div>
          <img src={c1} alt="" className={cx("img")} />
        </div>
        <div className={cx("right")}>
          <div className={cx("block-name")}>
            <div className={cx("name")}>Chanh đào không hạt</div>
            <div className={cx("price")}>
              {i18n.language === "vn" ? (
                <span>
                  {(2 * 23000).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              ) : (
                <span>${2}</span>
              )}
            </div>
          </div>
          <div className={cx("quantity")}>
            <span className={cx("title")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>SÓ LƯỢNG:</span>
              ) : (
                <span>QUANTITY:</span>
              )}
            </span>
            <div className={cx("count")}>{cartQuantity}</div>
          </div>
          <div>
            <button className={cx("btn-add")} onClick={addCard}>
              {i18n.language === "vn" ? (
                <span>Thêm vào cart</span>
              ) : (
                <span>add to cart</span>
              )}
            </button>
          </div>
          <div className={cx("des")}>
            <p className={cx("p")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>Miễn phí vận chuyển</span>
              ) : (
                <span>FreeShip</span>
              )}
            </p>
            <p className={cx("p")}>
              {i18n.language === "vn" ? (
                <span>
                  Các loại thuế và phí hải quan sẽ được áp dụng khi giao hàng
                  theo quy định của Hải quan Việt Nam
                </span>
              ) : (
                <span>
                  {" "}
                  Customs taxes and fees will be applied upon delivery in
                  accordance with Vietnam Customs regulations
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className={cx("productTab")}>
        <Comment />
      </div>
      <ToastContainer />
    </div>
  );
};
export default Product;
