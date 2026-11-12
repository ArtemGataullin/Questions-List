import { QuestionsCard } from '@/entities/QuestionsCard/ui/QuestionsCard'
import styles from './listQuestions.module.css'
import { useGetQuestionsQuery } from '@/entities/QuestionsCard/api/QuestionsList'
import { Pagination } from '@/features/pagination/ui/pagination'
import { useSearchParams } from 'react-router'

const PER_PAGE = 10

export default function ListQuestionsPages() {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Math.max(1, Number(searchParams.get('page')) || 1)
    
    const { currentData: questions, isFetching, error} = useGetQuestionsQuery({page, limit: PER_PAGE })
    const totalPages = Math.ceil((questions?.total ?? 0) / PER_PAGE)
    
    
    const resetFilters = () => {
        setSearchParams('')
    }
    
    if (error) {
        <div>Ошибка</div>
    }

    if (isFetching && !questions) {
        <div>...Загрузка</div>
    }

    return (
        <div className={styles.container}>
            <section>
                <div className={styles.listContainer}>
                    <h1 className={styles.title}>Вопросы React, JavaScript</h1>
                    <ul className={styles.list}>
                        {questions?.data?.map((question) => (
                            <QuestionsCard key={question.id} title={question.title} rate={question.rate} complexity={question.complexity} shortAnswer={question.shortAnswer} slug={question.slug}/>
                        ))}
                    </ul>
                <div className={styles.Pagination}>
                    {!isFetching && !error && <Pagination totalPages={totalPages} />}
                </div>
                </div>
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