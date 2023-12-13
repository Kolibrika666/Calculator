import React from "react";
import Rezult from "./rezultScreen";
import ExpressionScreen from "./ExpressionScreen";
import s from "./screen.module.scss";
const CalcScreen = () => {
  return (
    <div className={s.screen__container}>
      <ExpressionScreen />
      <Rezult />
    </div>
  );
};

export default CalcScreen;
