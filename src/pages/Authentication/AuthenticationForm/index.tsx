import { combine } from "../../../utils/string";
import { IAuthenticationFormProps } from "./types";
import css from "./AuthenticationForm.module.css";
import Input from "../../../components/ui-kit/Input";
import { Button } from "../../../components/ui-kit/Button";
import { useRef } from "react";
import * as validators from "../../../utils/validators";
import { useValidation } from "../../../hooks/useValidation";

const emailValidators = [
  validators.required("Required"),
  validators.email("Please enter a valid email"),
];

const passwordValidators = [
  validators.required("Required"),
  validators.minLength(6, "Minimum length is 6 symbols"),
  validators.maxLength(10, "Maximum length is 10 symbols"),
  validators.containsDigit("Has to contain a digit"),
  validators.containsAlpha("Has to contain an alphabet character"),
  validators.containsSpecial("Has to contain a special *,.!"),
];

export function AuthenticationForm({
  className,
  ...formProps
}: IAuthenticationFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {
    value: email,
    error: emailError,
    validate: validateEmail,
  } = useValidation(emailRef, emailValidators);

  const {
    value: password,
    error: passwordError,
    validate: validatePassword,
  } = useValidation(passwordRef, passwordValidators);

  function onSignupClick() {
    validateEmail(email);
    validatePassword(password);
  }

  return (
    <form className={combine(css.form, className)} {...formProps}>
      <Input
        ref={emailRef}
        name="email"
        className={css.input}
        type="text"
        placeholder="Email"
        value={email}
        error={emailError}
      />
      <Input
        ref={passwordRef}
        name="password"
        className={css.input}
        type="password"
        placeholder="Password"
        value={password}
        error={passwordError}
      />
      <Button type="button" onClick={onSignupClick}>
        Sign Up
      </Button>
    </form>
  );
}
