import React from "react";

export const buttonContent: string[] = [
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
] as const;

export type ButtonProps = {
  textContent: string;
  onClick: () => void;
  className?: string;
};

export function ButtonTemp(
  { onClick }: ButtonProps,
  { textContent }: ButtonProps
) {
  return <button onClick={onClick}>{textContent}</button>;
}
