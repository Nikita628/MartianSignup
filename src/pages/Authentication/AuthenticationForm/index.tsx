import { combine } from "../../../utils/string";
import { IAuthenticationFormProps } from "./types";
import css from "./AuthenticationForm.module.css";
import Input from "../../../components/ui-kit/Input";
import { Button } from "../../../components/ui-kit/Button";
import { useRef } from "react";
import * as validators from "../../../utils/validators";
import { useValidation } from "../../../hooks/useValidation";
import { Link } from "../../../components/ui-kit/Link";

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

export function AuthenticationForm({ className }: IAuthenticationFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailValidation = useValidation(emailRef, emailValidators);
  const passwordValidation = useValidation(passwordRef, passwordValidators);

  function onSignupClick() {
    if (emailRef.current) {
      emailValidation.validate(emailRef.current.value);
    }

    if (passwordRef.current) {
      passwordValidation.validate(passwordRef.current.value);
    }
  }

  function onEmailChange() {
    if (emailValidation.touched && emailRef.current) {
      emailValidation.validate(emailRef.current.value);
    }
  }

  function onPasswordChange() {
    if (passwordValidation.touched && passwordRef.current) {
      passwordValidation.validate(passwordRef.current.value);
    }
  }

  return (
    <div className={combine(css.form, className)}>
      <form>
        <Input
          ref={emailRef}
          name="email"
          className={css.input}
          type="text"
          placeholder="Email"
          error={emailValidation.error}
          onChange={onEmailChange}
        />
        <Input
          ref={passwordRef}
          name="password"
          className={css.input}
          type="password"
          placeholder="Password"
          error={passwordValidation.error}
          onChange={onPasswordChange}
        />
        <Button type="button" onClick={onSignupClick}>
          Sign Up
        </Button>
      </form>
      <Link className={css.forgot}>Forgot Password?</Link>
    </div>
  );
}
