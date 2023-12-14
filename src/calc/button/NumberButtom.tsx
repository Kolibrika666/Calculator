import React, { MouseEventHandler } from "react";

const numbersOfButton: string[] = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

function ButtonNumber(onClick: MouseEventHandler<HTMLElement>) {
  const numberButtonList = numbersOfButton.map((item) => (
    <button value={item} onClick={onClick}>
      {item}
    </button>
  ));

  return <div>{numberButtonList}</div>;
}

export default ButtonNumber;
