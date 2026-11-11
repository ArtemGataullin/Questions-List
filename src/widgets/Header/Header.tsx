import { Button } from "@/shared/ui/Button";
import Logo from "@/shared/ui/Logo/Logo";
import styles from "./Header.module.css";
import { NavLink } from "react-router";

const NAV_ITEMS = ['База вопросов', 'Тренажер', 'Материалы', 'Навыки (hh)']

export function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.conteinerLeft}>
                <Logo />
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <NavLink to={'/'} className={styles.headerNavLink}>{item}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <Button onClick={() => {}} variant={"whiteBgButton"} size={'L'} type={'button'}>Вход</Button>
                <Button onClick={() => {}} variant={'PurpleBgButton'} size={'M'} type={'button'}>Регистрация</Button>
            </div>
        </header>
    )
}