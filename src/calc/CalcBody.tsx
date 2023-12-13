import React from "react";
import s from "./Calc.module.scss";
import Button from "./button/Button";
import CalcScreen from "./screen/screen";

function CalcBody() {
  return (
    <main>
      <CalcScreen />
      <div className={s.white__container}></div>
      <Button />
    </main>
  );
}

export default CalcBody;
