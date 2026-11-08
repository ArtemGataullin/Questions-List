import { type ButtonsProps } from "./types";
import styles from "./button.module.css";
export function Button({
  text,
  onClick,
  variant,
  size,
  type = "button",
  className,
}: ButtonsProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
    >
      {text}
    </button>
  );
}
