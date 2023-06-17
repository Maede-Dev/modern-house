import React from "react";
import s from "./HomePartBox.module.scss";
const HomePartBox = () => {
  const boxList = [
    {
      id: 1,
      title: "Living",
      href: "/images/living-room.png",
      className: s.f01,
      width: "200px",
      height: "200px",
    },
    {
      id: 2,
      title: "Kitchen",
      href: "/images/refrigerator.png",
      className: s.f01,
      width: "200px",
      height: "200px",
    },
    {
      id: 3,
      title: "Bedroom",
      href: "/images/bedroom.png",
      className: s.f01,
      width: "200px",
      height: "200px",
    },
    {
      id: 4,
      title: "bathroom",
      href: "/images/washing-machine.png",
      className: s.f01,
      width: "200px",
      height: "200px",
    },
  ];
  return (
    <div className={s.HomePartBox_container}>
      {boxList?.map((item) => (
        <div className={s.HomePartBox_Item} key={item?.id}>
          <img src={item.href} alt="icon" className={s.img} />
          <div className={s.title}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePartBox;
