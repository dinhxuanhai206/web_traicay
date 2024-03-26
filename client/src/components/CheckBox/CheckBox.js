import React from "react";
import classNames from "classnames/bind";
import styles from "./CheckBox.module.scss";

const cx = classNames.bind(styles);

const Checkbox = ({ id, type, handleClick, isChecked }) => {
    return (
        <div className={cx("check-box")}>
            <input id={id} type={type} onChange={handleClick} checked={isChecked} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Checkbox