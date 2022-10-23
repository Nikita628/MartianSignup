import css from "./Promo.module.css";
import mars from "../../../assets/mars.png";
import { IPromoProps } from "./types";
import { combine } from "../../../utils/string";

export function Promo(props: IPromoProps) {
  const { className } = props;

  return (
    <div className={combine(css.container, className)}>
      <img src={mars} alt="planet mars" />
      <h1>MARTIAN</h1>
    </div>
  );
}
