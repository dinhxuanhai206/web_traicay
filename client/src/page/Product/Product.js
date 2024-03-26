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
  const [cartQuantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(0)

  const id = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const addCard = () => {
    dispatch(add({ ...product, cartQuantity }));
    toast("add to cart");
  };

  const handelActive = (id) => {
    setIsActive(id)
  }

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

  const arrBtn = [
    {
      id: 0,
      kilo: "100g"
    },
    {
      id: 1,
      kilo: "1kg"
    },
    {
      id: 2,
      kilo: "2kg"
    },
    {
      id: 3,
      kilo: "5kg"
    },
  ]

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
                <span>SỐ LƯỢNG:</span>
              ) : (
                <span>QUANTITY:</span>
              )}
            </span>
            <div className={cx("count")}>{cartQuantity}</div>
          </div>
          <div className={cx("quantity")}>
            <span className={cx("title")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>Trái chanh không hạt với hương vị ngon nhất từ trước tới nay</span>
              ) : (
                <span>Lemon without seeds that tastes better than ever</span>
              )}
            </span>
          </div>
          <div className={cx("quantity")}>
            <span className={cx("title")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>Trọng Lượng</span>
              ) : (
                <span>Trọng Lượng</span>
              )}
              <div className={cx("arr_btn")}>
                {arrBtn.map((item) => (
                  <button key={item.id} className={isActive === item.id ? cx("btn_weight", "active") : cx("btn_weight")} onClick={() => handelActive(item.id)}>{item.kilo}</button>
                ))}
              </div>
            </span>
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
        </div>
      </div>
      {/* <div className={cx("productTab")}>
        <Comment />
      </div> */}
      <ToastContainer />
    </div>
  );
};
export default Product;
