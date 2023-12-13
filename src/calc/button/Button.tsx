import React from "react";
import s from "./Button.module.scss";

function Button() {
  return (
    <section className={s.button__container}>
      <button>C</button>
      <button>/</button>
      <button>*</button>
      <button>ce</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className={s.equals}>=</button>
      <button>%</button>
      <button>0</button>
      <button>.</button>
    </section>
  );
}

export default Button;
