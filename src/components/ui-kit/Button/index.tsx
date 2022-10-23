import { IButtonProps } from "./types";
import css from "./Button.module.css";
import { combine } from "../../../utils/string";

export function Button(props: IButtonProps) {
  const { className, ...buttonProps } = props;

  return <button className={combine(css.button, className)} {...buttonProps} />;
}
