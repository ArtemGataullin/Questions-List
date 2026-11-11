import logoText from "@assets/Logo/logo_text_White.svg"
import Figma from '@assets/LinksIcons/Figma.svg'
import Github from '@assets/LinksIcons/Github.svg'
import Telegram from '@assets/LinksIcons/Telegram.svg'
import Tiktok from '@assets/LinksIcons/Tiktok.svg'
import Youtube from '@assets/LinksIcons/Youtube.svg'
import styles from "./Footer.module.css";

const Link_ITEMS = [Figma, Github, Telegram, Tiktok, Youtube]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        className={styles.logo}
        src={logoText}
        alt="logo text"
        width={99}
        height={32}
      />
      <div className={styles.topText}>
        <p className={styles.title}>Выбери, каким будет IT завтра, вместе с нами</p>
        <p className={styles.description}>
          YeaHub — это полностью открытый проект, призванный объединить
          и улучшить IT-сферу. Наш исходный код доступен для просмотра
          на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
        </p>
      </div>
      <div className={styles.bottomPanel}>
        <div className={styles.legalLinks}>
          <p>© 2024 YeaHub</p>
          <p className={styles.link}>Документы</p>
        </div>
        <div className={styles.socials}>
          <p>Ищите нас и в других соцсетях @yeahub_it</p>
          <ul className={styles.socialList}>
            {Link_ITEMS.map((link) => (
              <li key={link}>
                <img src={link} alt="Links" width={28} height={28}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
