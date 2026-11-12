import { type ButtonsProps } from "./types";
import styles from "./button.module.css";
export function Button({
  onClick,
  variant,
  size,
  type = "button",
  className,
  children,
  iconLeft,
  iconRight,
  disabled
}: ButtonsProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
      disabled={disabled}
    >
      {iconLeft && <span className="button__icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="button__icon">{iconRight}</span>}
    </button>
  );
}
