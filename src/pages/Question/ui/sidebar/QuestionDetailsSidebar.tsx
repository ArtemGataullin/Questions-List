import { cn } from "@/shared/lib/cn";
import styles from "./questionDetailsSidebar.module.css";

interface QuestionDetailsSidebarProps {
  className: string
}

export function QuestionDetailsSidebar ({className}: QuestionDetailsSidebarProps) {
  return (
    <aside className={cn(`${styles.container}`, className)}>
        <div></div>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Руслан Куянец</p>
              <p>Python Guru</p>
            </div>
          </div>
          <p>Guru – это эксперты YeaHub, которые помогают развивать комьюнити.</p>
          <ul>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        </div>
      </aside>
  )
}