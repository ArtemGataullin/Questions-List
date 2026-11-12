import { cn } from "@/shared/lib/cn";
import styles from "./QuestionDetailsAnswer.module.css";

interface QuestionDetailsAnswerProps {
  title?: string
  content?: string
  className?: string
  collapsible?:boolean
}

export function QuestionDetailsAnswer ({title, content, className, collapsible}: QuestionDetailsAnswerProps) {
  return (
    <div className={cn(`${styles.container}`, className)}>
      <button></button>
      <button></button>
    </div>
  )
}