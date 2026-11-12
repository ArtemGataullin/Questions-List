import { cn } from "@/shared/lib/cn";
import styles from "./questionDetailsNavigation.module.css";
import { Button } from "@/shared/ui/Button";
import ArrowLeft from "@assets/ArrowLeftBlack.svg?react";
import ArrowRight from "@assets/ArrowRightBlack.svg?react";

interface QuestionDetailsNavigationProps {
  className: string
}

export function QuestionDetailsNavigation ({className}: QuestionDetailsNavigationProps) {
  return (
    <div className={cn(`${styles.container}`, className)}>
      <Button
        variant='whiteBgButton'
        size='M'
        type='button'
        iconLeft={<ArrowLeft/>}
        className={styles.btn}
      >Предыдущий</Button>
      <Button
        variant='whiteBgButton'
        size='M'
        type='button'
        iconRight={<ArrowRight/>}
        className={styles.btn}
      >Следующий</Button>
    </div>
  )
}