import { ILinkProps } from "./types";
import css from "./Link.module.css";
import { combine } from "../../../utils/string";

export function Link(props: ILinkProps) {
  const { className, children, ...linkProps } = props;

  return (
    <a className={combine(css.link, className)} {...linkProps}>
      {children}
    </a>
  );
}
