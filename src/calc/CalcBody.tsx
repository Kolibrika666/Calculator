import { useState } from "react";
import s from "./Calc.module.scss";
import ButtonField from "./button/buttonField";
import CalcScreen from "./screen/screen";

function CalcBody() {
  const [number, setNumber] = useState("");

  const numberClick = () => {
    setNumber + number;
  };

  const operationClick = () => {};

  return (
    <main>
      <CalcScreen textRezult={setNumber} />
      <div className={s.white__container}></div>
      <ButtonField numberClick={numberClick} operationClick={operationClick} />
    </main>
  );
}

export default CalcBody;
