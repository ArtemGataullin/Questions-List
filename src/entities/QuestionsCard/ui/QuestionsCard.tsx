import { useState } from "react";
import type { QuestionProps } from "../model/type";
import { Button } from "@/shared/ui/Button";
import ChevroneDown from "@assets/ArrowUp.svg?react";
import styles from "./questionsCard.module.css";
import { RichContent } from "@/shared/ui/richContent/RichContent";
import { Link, useLocation, } from "react-router";
import ArrowRight from "@assets/ArrowRightLine.svg?react";
import { ROUTES_CONFIG } from "@/shared/config/routes/routesConfig";

export const QuestionsCard = ({
  title,
  rate,
  complexity,
  img = "",
  shortAnswer,
  slug,
}: QuestionProps) => {
  const { search } = useLocation()
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
          <Link rel="stylesheet" to={{ pathname: `${ROUTES_CONFIG.listQuestions}/${slug}`, search}} >
            <Button
              variant="whiteBgButton"
              size="L"
              type="button"
              className={styles.detailsButton}
              iconRight={<ArrowRight />}
            >
            Подробнее
            </Button>
          </Link>
        </div>
      )}
    </li>
  );
};
