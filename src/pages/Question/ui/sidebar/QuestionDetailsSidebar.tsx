import { cn } from "@/shared/lib/cn";
import styles from "./questionDetailsSidebar.module.css";
import type { QuestionSkills } from "@/entities/QuestionsCard/model/type";
import { Link } from "react-router";

interface QuestionDetailsSidebarProps {
  className?: string;
  rate?: number;
  complexity?: number;
  questionSkills?: QuestionSkills[];
  keywords?: string[];
  authorUsername?: string;
}

export function QuestionDetailsSidebar({
  className,
  rate = 0,
  complexity = 0,
  questionSkills,
  keywords = [],
  authorUsername,
}: QuestionDetailsSidebarProps) {

  const linkFor = (keyword: string) => {

  }

  return (
    <aside className={cn(`${styles.container}`, className)}>
        <div className={styles.category}>
          <h3 className={styles.title}>Уровень</h3>
          <div className={styles.metrics}>
            <div className={styles.metricItem}>
              Сложность: <p className={styles.metricValue}>{complexity}</p>
            </div>
            <div className={styles.metricItem}>
              Рейтинг: <p className={styles.metricValue}>{rate}</p>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h3 className={styles.title}>Навыки:</h3>
          <ul className={styles.list}>
            {questionSkills?.map((skill) => (
              <li key={skill.id} className={styles.listItem}>
                <img src={skill.imageSrc} className={styles.listItemImg}/>
                <p>{skill.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.category}>
          <h3 className={styles.title}>Ключевые слова</h3>
          <ul className={styles.list}>
            {keywords.map((keyword) => (
              <Link to={'/'} key={keyword} className={styles.link}>#{keyword}</Link>
            ))}
          </ul>
        </div>
        <div className={styles.categoryAuthor}>
          <span>Автор:</span>
          <p className={styles.authorUsername}>{authorUsername}</p>
        </div>
    </aside>
  );
}
