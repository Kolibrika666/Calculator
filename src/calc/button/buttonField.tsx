import React from "react";
import s from "./Button.module.scss";
import Button from "./button";

function ButtonField(
  numberClick: React.MouseEventHandler,
  operationClick: React.MouseEventHandler
) {
  return (
    <section className={s.button__container}>
      <Button textContent="C" onClick={operationClick} />
      <Button textContent="/" onClick={operationClick} />
      <Button textContent="*" onClick={operationClick} />
      <Button textContent="ce" onClick={operationClick} />
      <Button textContent="7" onClick={numberClick} />
      <Button textContent="8" onClick={numberClick} />
      <Button textContent="9" onClick={numberClick} />
      <Button textContent="-" onClick={operationClick} />
      <Button textContent="4" onClick={numberClick} />
      <Button textContent="5" onClick={numberClick} />
      <Button textContent="6" onClick={numberClick} />
      <Button textContent="+" onClick={operationClick} />
      <Button textContent="1" onClick={numberClick} />
      <Button textContent="2" onClick={numberClick} />
      <Button textContent="3" onClick={numberClick} />
      <button className={s.equals}>=</button>
      <Button textContent="%" onClick={operationClick} />
      <Button textContent="0" onClick={numberClick} />
      <Button textContent="." onClick={operationClick} />
    </section>
  );
}

export default ButtonField;
