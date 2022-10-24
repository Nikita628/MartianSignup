import css from "./Authentication.module.css";
import { AuthenticationForm } from "./AuthenticationForm";
import { Promo } from "./Promo";

export function Authentication() {
  return (
    <div className={css.page}>
      <div className={css.panel}>
        <Promo className={css.promo} />
        <AuthenticationForm className={css.form} />
      </div>
    </div>
  );
}
