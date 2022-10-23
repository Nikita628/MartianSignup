import { IInputProps } from "./types";
import css from "./Input.module.css";
import { combine } from "../../../utils/string";
import { InputError } from "../InputError";
import React from "react";

function Input(props: IInputProps, ref: React.LegacyRef<HTMLInputElement>) {
  const { className, error, ...inputProps } = props;

  return (
    <div className={combine(css.container, className)}>
      <input
        ref={ref}
        className={combine(css.input)}
        {...inputProps}
      />
      {error && <InputError className={css.inputError} message={error} />}
    </div>
  );
}

export default React.forwardRef(Input);