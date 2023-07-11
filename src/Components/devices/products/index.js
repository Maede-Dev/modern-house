import React, { useState } from "react";
import s from "./products.module.scss";
import ReactModal from "react-modal";
const Products = () => {
  const productsList = [
    {
      id: 1,
      title: "Bulb",
      href: "/images/bulb.png",
      description: "Ring LED smart",
      tips: "8h",
    },
    {
      id: 2,
      title: "Vacuum",
      href: "/images/vacuum.png",
      description: "Mi robot vacuum",
      tips: "OFF",
    },
    {
      id: 3,
      title: "Router",
      href: "/images/router.png",
      description: "MI AXX3600",
      tips: "2.53 Mbps",
    },
    {
      id: 4,
      title: "Tv",
      href: "/images/tv.png",
      description: "CH3",
      tips: "8h",
    },
  ];

  return (
    <>
      <div className={s.devicesBox_container}>
        {productsList?.map((item) => (
          <div className={s.devicesBoxItem} key={item?.id}>
            <img src={item.href} alt="icon" className={s.img} />
            <div className={s.title}>{item.title}</div>
            <div className={s.description}>{item.description}</div>
            <div className={s.tips}>{item.tips}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
