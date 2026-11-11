import { useState } from "react";
import type { QuestionProps } from "../model/type";
import { Button } from "@/shared/ui/Button";
import ChevroneDown from "@assets/Chevrone_Down.svg?react";
import styles from "./questionsCard.module.css";
import { RichContent } from "@/shared/ui/richContent/RichContent";
import { NavLink } from "react-router";
import ArrowRight from "@assets/ArrowRight.svg?react";
import { ROUTES_CONFIG } from "@/shared/config/routes/routesConfig";

export const QuestionsCard = ({
  title,
  rate,
  complexity,
  img = "",
  shortAnswer,
  slug,
}: QuestionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleBlock}>
          <span className={styles.marker}></span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <Button
          variant="whiteBgButton"
          size="S"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
        >
          <ChevroneDown
            className={`${styles.toggleIcon} ${open ? styles.toggleIconActive : ""}`}
          />
        </Button>
      </div>

      {open && (
        <div className={styles.cardBody}>
          <div className={styles.metrics}>
            <div className={styles.metricItem}>
              Рейтинг: <p className={styles.metricValue}>{rate}</p>
            </div>
            <div className={styles.metricItem}>
              Сложность: <p className={styles.metricValue}>{complexity}</p>
            </div>
          </div>

          {img && <img src={img} alt="question-image" />}

          <RichContent content={shortAnswer} />

          <Button
            variant="whiteBgButton"
            size="L"
            type="button"
            className={styles.detailsButton}
            iconRight={<ArrowRight />}
          >
            <NavLink to={ROUTES_CONFIG.Question}>Подробнее</NavLink>
          </Button>
        </div>
      )}
    </li>
  );
};
