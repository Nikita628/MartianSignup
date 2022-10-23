import { Link } from "../../components/ui-kit/Link";
import css from "./Authentication.module.css";
import { AuthenticationForm } from "./AuthenticationForm";
import { Promo } from "./Promo";

export function Authentication() {
  return (
    <div className={css.page}>
      <div className={css.panel}>
        <Promo className={css.promo} />

        <div className={css.form}>
          <AuthenticationForm />
          <Link className={css.forgot}>Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}
