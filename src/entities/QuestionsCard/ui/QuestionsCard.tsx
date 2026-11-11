import { useState } from "react"
import type { QuestionProps } from "../model/type"
import { Button } from "@/shared/ui/Button"
import ChevroneDown from "@assets/Chevrone_Down.svg?react";
import styles from "./questionsCard.module.css";
import { RichContent } from "@/shared/ui/richContent/RichContent";
import { NavLink } from "react-router";
import ArrowRight from "@assets/ArrowRight.svg?react"

export const QuestionsCard = ({title, rate, complexity, img = '', shortAnswer, slug}: QuestionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <li className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerLeft}>
          <span className={styles.customMarker}></span> 
          <h2 className={styles.title}>{title}</h2>
        </div>
        <Button variant='whiteBgButton' size="S" type="button" onClick={() => setOpen(prev => !prev)}>
          <ChevroneDown className={`${styles.icon} ${open ? styles.isOpenIcon: ''}`}/>
        </Button>
      </div>
        {open && 
          <div className={styles.containerBody}>
            <div className={styles.scoreContainer}>
              <div className={styles.score}>
                Рейтинг: 
                <p className={styles.scoreCounter}>{rate}</p>
              </div>
              <div className={styles.score}>
                Сложность: 
                <p className={styles.scoreCounter}>{complexity}</p>
              </div>
            </div>
            {img && <img src={img} alt="quest"/>}
            <RichContent content={shortAnswer} />
            <Button variant='whiteBgButton' size="L" type="button" className={styles.button} iconRight={<ArrowRight />}>
              <NavLink to={'/'}>Подробнее</NavLink>
            </Button>
          </div>
        }
    </li>
  )
}