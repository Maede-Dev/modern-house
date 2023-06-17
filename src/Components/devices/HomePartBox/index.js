import React, { useState } from "react";
import s from "./HomePartBox.module.scss";
import ReactModal from "react-modal";
const HomePartBox = () => {
  const boxList = [
    {
      id: 1,
      title: "Living",
      href: "/images/living-room.png",
    },
    {
      id: 2,
      title: "Kitchen",
      href: "/images/refrigerator.png",
    },
    {
      id: 3,
      title: "Bedroom",
      href: "/images/bedroom.png",
    },
    {
      id: 4,
      title: "bathroom",
      href: "/images/washing-machine.png",
    },
  ];

  return (
    <>
      <div className={s.HomePartBox_container}>
        {boxList?.map((item) => (
          <div className={s.HomePartBoxItem} key={item?.id}>
            <img src={item.href} alt="icon" className={s.img} />
            <div className={s.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePartBox;
