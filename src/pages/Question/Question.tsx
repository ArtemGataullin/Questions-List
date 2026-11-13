import { useGetQuestionsBySlugQuery } from "@/entities/QuestionsCard/api/QuestionsList";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router";
import QuestionHeader from "./ui/header/QuestionHeader";
import { useState } from "react";
import styles from "./question.module.css";
import { QuestionDetailsSidebar } from "./ui/sidebar/QuestionDetailsSidebar";
import { QuestionDetailsNavigation } from "./ui/navigate/QuestionDetailsNavigation";
import { BackButton } from "@/shared/ui/backButton/BackButton";
import { QuestionDetailsAnswer } from "./ui/answer/QuestionDetailsAnswer";

export default function Question() {
  const { slug } = useParams();
  const { data: questionData } = useGetQuestionsBySlugQuery(slug ?? skipToken);
  // const navigation = useQuestionNavigation()
  

  const [lastQuestion, setLastQuestion] = useState(questionData);
  if (questionData && questionData !== lastQuestion) {
    setLastQuestion(questionData);
  }
  const shownQuestion = questionData ?? lastQuestion;

  console.log(shownQuestion);

  return (
    <div className={styles.container}>
      <BackButton className={styles.BackBtn}/>
      <section className={styles.containerMain}>
        <QuestionHeader
          title={shownQuestion?.title}
          description={shownQuestion?.description}
          imageSrc={shownQuestion?.imageSrc}
          className={styles.containerHeader}
        />
        <QuestionDetailsNavigation className={styles.containerNavigate}/>
        <QuestionDetailsAnswer className={styles.content} title='Краткий ответ' content={shownQuestion?.shortAnswer }/>
        <QuestionDetailsAnswer className={styles.content} title='Развернутый ответ' content={shownQuestion?.longAnswer} collapsible/>
      </section>

      <QuestionDetailsSidebar
        className={styles.containerSidebar}
        rate={shownQuestion?.rate}
        complexity={shownQuestion?.complexity}
        questionSkills={shownQuestion?.questionSkills}
        keywords={shownQuestion?.keywords}
        authorUsername={shownQuestion?.createdBy?.username}
      />
    </div>
  );
}
