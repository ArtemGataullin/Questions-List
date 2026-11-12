import pic from "@assets/pic.png";
import { cn } from "@/shared/lib/cn";
import styles from "./questionHeader.module.css";

interface QuestionHeaderProps {
  imageSrc?: string
  title?: string
  description?: string
  className?: string
}

export default function QuestionHeader({imageSrc = pic, title, description, className}: QuestionHeaderProps) {
  return (
    <div className={cn(className)}>
      <div className={styles.imgContainer}>
        <img src={imageSrc} loading='lazy' className={styles.img}/>
      </div>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}