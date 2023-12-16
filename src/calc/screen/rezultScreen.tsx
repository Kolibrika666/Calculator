import React from "react";
import s from "./screen.module.scss";

const Rezult = ({ textRezult }: { textRezult: string }) => {
  return <div className={s.rezult}>{textRezult}</div>;
};

export default Rezult;
