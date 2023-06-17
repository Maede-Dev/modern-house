import React, { useState } from "react";
import s from "./HomePartBox.module.scss";
import ReactModal from "react-modal";
const HomePartBox = () => {
  const [visible, setVisible] = useState(false);
  const boxList = [
    {
      id: 1,
      title: "Living",
      href: "/images/living-room.png",
      className: s.Living,
      width: "200px",
      height: "200px",
    },
    {
      id: 2,
      title: "Kitchen",
      href: "/images/refrigerator.png",
      className: s.Kitchen,
      width: "200px",
      height: "200px",
    },
    {
      id: 3,
      title: "Bedroom",
      href: "/images/bedroom.png",
      className: s.Bedroom,
      width: "200px",
      height: "200px",
    },
    {
      id: 4,
      title: "bathroom",
      href: "/images/washing-machine.png",
      className: s.bathroom,
      width: "200px",
      height: "200px",
    },
  ];

  return (
    <>
      <div className={s.HomePartBox_container}>
        {boxList?.map((item) => (
          <div className={s.HomePartBox_Item} key={item?.id}>
            <img src={item.href} alt="icon" className={s.img} />
            <div className={s.title}>{item.title}</div>
          </div>
        ))}
      </div>
      <ReactModal
        ariaHideApp={false}
        className={`${s.modal} ${s.modalBody}`}
        overlayClassName={s.overlay}
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        htmlOpenClassName={s.modalBox}
      >
        <div className={s.title}>bulb</div>
      </ReactModal>
    </>
  );
};

export default HomePartBox;
