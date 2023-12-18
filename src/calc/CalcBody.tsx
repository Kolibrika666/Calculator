import { useState } from "react";
import s from "./Calc.module.scss";

function CalcBody() {
  const expContainer = document.getElementById("exp");
  const rezContainer = document.getElementById("rez");
  const buttonContent: string[] = [
    "C",
    "/",
    "*",
    "ce",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "%",
    "0",
    ".",
  ];
  const [number, setNumber] = useState("");
  const [exp, setExp] = useState("");

  return (
    <main>
      <div className={s.screen__container}>
        <div className={s.expression} id="exp">
          {exp}
        </div>
        <div className={s.rezult} id="rez">
          {number}
        </div>
      </div>
      <div className={s.white__container}></div>

      <section className={s.button__container}>
        <button
          onClick={() => {
            setNumber("");
            setExp("");
          }}
        >
          {buttonContent[0]}
        </button>
        <button
          onClick={() => {
            setExp(exp + number + buttonContent[1]);
            setNumber("");
          }}
        >
          {buttonContent[1]}
        </button>
        <button
          onClick={() => {
            setExp(exp + number + buttonContent[2]);
            setNumber("");
          }}
        >
          {buttonContent[2]}
        </button>
        <button
          onClick={() => {
            setExp(exp + number + buttonContent[3]);
            setNumber("");
          }}
        >
          {buttonContent[3]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[4]);
          }}
        >
          {buttonContent[4]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[5]);
          }}
        >
          {buttonContent[5]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[6]);
          }}
        >
          {buttonContent[6]}
        </button>
        <button
          onClick={() => {
            setExp(exp + number + buttonContent[7]);
            setNumber("");
          }}
        >
          {buttonContent[7]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[8]);
          }}
        >
          {buttonContent[8]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[9]);
          }}
        >
          {buttonContent[9]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[10]);
          }}
        >
          {buttonContent[10]}
        </button>
        <button
          onClick={() => {
            setExp(exp + number + buttonContent[11]);
            setNumber("");
          }}
        >
          {buttonContent[11]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[12]);
          }}
        >
          {buttonContent[12]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[13]);
          }}
        >
          {buttonContent[13]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[14]);
          }}
        >
          {buttonContent[14]}
        </button>
        <button
          className={s.equals}
          onClick={() => {
            let rez = expContainer.innerText + rezContainer.innerText;
            setExp("");
            setNumber(eval(rez));
          }}
        >
          {buttonContent[15]}
        </button>
        <button
          onClick={() => {
            let rez = expContainer.innerText + rezContainer.innerText;
            setExp("");
            setNumber(eval("(" + rez + ") / 100"));
          }}
        >
          {buttonContent[16]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[17]);
          }}
        >
          {buttonContent[17]}
        </button>
        <button
          onClick={() => {
            setNumber(number + buttonContent[18]);
          }}
        >
          {buttonContent[18]}
        </button>
      </section>
    </main>
  );
}

export default CalcBody;
