import { IInputErrorProps } from "./types";
import css from "./InputError.module.css";
import { combine } from "../../../utils/string";

export function InputError({ message, className }: IInputErrorProps) {
  return <span className={combine(css.container, className)}>{message}</span>;
}
