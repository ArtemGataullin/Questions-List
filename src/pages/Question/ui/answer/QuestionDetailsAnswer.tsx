import { cn } from "@/shared/lib/cn";
import styles from "./QuestionDetailsAnswer.module.css";
import { RichContent } from "@/shared/ui/richContent/RichContent";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/Button";
import ChevroneDown from "@assets/ArrowUp.svg?react";

interface QuestionDetailsAnswerProps {
  title?: string
  content?: string
  className?: string
  collapsible?:boolean
}

export function QuestionDetailsAnswer ({title, content, className, collapsible}: QuestionDetailsAnswerProps) {
  const [expanded, setExpanded] = useState(!collapsible)
  const [overflowing, setOverflowing] = useState(false)
  const collapseRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!collapsible || expanded || !collapseRef.current) return
    const el = collapseRef.current
    const measure = () => setOverflowing(el.scrollHeight > el.clientHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [content, expanded, collapsible])

  return (
    <div className={cn(`${styles.container}`, className)}>
      <h2 className={styles.title}>{title}</h2>
      <div
        ref={collapseRef}
        className={cn(`${styles.questionAnswerCollapse}`, collapsible && !expanded && `${styles.questionAnswerCollapseCollapsed}`)}
      >
        <RichContent
          className={styles.questionAnswerContent}
          content={content}
        />
      </div>
      {collapsible && overflowing && (
        <Button
          className={cn(`${styles.questionAnswerToggle}`, expanded && `${styles.questionAnswerToggleExpanded}`)}
          variant='whiteBgButton'
          type='button'
          size='M'
          iconRight={<ChevroneDown />}
          aria-expanded={expanded}
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? 'Свернуть' : 'Развернуть'}
        </Button>
      )}
    </div>
  )
}