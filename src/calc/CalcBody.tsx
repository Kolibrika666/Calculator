import React from "react";
import s from "./Calc.module.scss";
import CalcScreen from "./screen/screen";
import ButtonNumber from "./button/NumberButtom";
import ExpressionScreen from "./ExpressionScreen";
import c from "./screen/screen.module.scss";

function CalcBody() {
  const heandler = () => {};
  return (
    <main>
      <div className={c.screen__container}>
        <div className={s.expression}>1234 - 24</div>;
        <div id="rezult" className={s.rezult}></div>
      </div>
      <div className={s.white__container}></div>
      <ButtonNumber onClick={heandler} />
    </main>
  );
}

export default CalcBody;
