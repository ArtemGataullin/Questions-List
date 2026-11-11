import { QuestionsCard } from '@/entities/QuestionsCard/ui/QuestionsCard'
import styles from './listQuestions.module.css'
import { useGetQuestionsQuery } from '@/entities/QuestionsCard/api/QuestionsList'
export default function ListQuestionsPages() {
    const { currentData: questions} = useGetQuestionsQuery({})
    return (
        <div className={styles.container}>
            <section className={styles.listContainer}>
                <h1 className={styles.title}>Вопросы React, JavaScript</h1>
                <ul className={styles.list}>
                    {questions?.data?.map((question) => (
                        <QuestionsCard key={question.id} title={question.title} rate={question.rate} complexity={question.complexity} shortAnswer={question.shortAnswer} slug=''/>
                    ))}
                </ul>
            </section>
            <aside>
                <input type="text" />
                <div>
                    <h2>Специализация</h2>
                    <ul></ul>
                    <button></button>
                </div>
                <div>
                    <h2>Навыки</h2>
                    <ul></ul>
                    <button></button>
                </div>
                <div>
                    <h2>Уровень сложности</h2>
                    <ul></ul>
                </div>
                <div>
                    <h2>Рейтинг</h2>
                    <ul></ul>
                </div>
            </aside>
        </div>
    )
}