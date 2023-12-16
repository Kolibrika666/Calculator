import React from "react";
import Rezult from "./rezultScreen";
import ExpressionScreen from "./expressionScreen";
import s from "./screen.module.scss";
const CalcScreen = (textRezult: string) => {
  return (
    <div className={s.screen__container}>
      <ExpressionScreen />
      <Rezult textRezult={textRezult} />
    </div>
  );
};

export default CalcScreen;
