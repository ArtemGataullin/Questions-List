import { cn } from "@/shared/lib/cn";
import styles from "./questionDetailsNavigation.module.css";

interface QuestionDetailsNavigationProps {
  className: string
}

export function QuestionDetailsNavigation ({className}: QuestionDetailsNavigationProps) {
  return (
    <div className={cn(`${styles.container}`, className)}>
      <button></button>
      <button></button>
    </div>
  )
}