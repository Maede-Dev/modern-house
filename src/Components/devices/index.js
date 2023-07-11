import React from "react";
import s from "./devices.module.scss";
import HomePartBox from "./HomePartBox";
import Products from "./products";
const DevicesView = () => {
  return (
    <div className={s.device_container}>
      <div className={s.header}>
        <div className={s.titleBox}>
          <h1 className={s.title}>devices</h1>
          <div className={s.subTitle}>
            you can controll all your smart devices
          </div>
        </div>
        <img src={"/Images/plus-icon.png"} alt="Logo" className={s.icon} />
      </div>
      <HomePartBox />
      <Products />
    </div>
  );
};

export default DevicesView;
