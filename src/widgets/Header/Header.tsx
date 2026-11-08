import { Button } from "@/shared/ui/Button";
import Logo from "@/shared/ui/Logo/Logo";
import styles from "./Header.module.css";

export function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.conteinerLeft}>
                <Logo />
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li>База вопросов</li>
                        <li>Тренажёр</li>
                        <li>Материалы</li>
                        <li>Навыки (hh)</li>
                    </ul>
                </nav>
            </div>
            <div>
                <Button onClick={() => {}} variant={"whiteBgButton"} size={'M'} type={'button'} text={'Вход'} />
                <Button onClick={() => {}} variant={'PurpleBgButton'} size={'L'} type={'button'} text={'Регистрация'} />
            </div>
        </header>
    )
}