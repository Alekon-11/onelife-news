import { formatDate } from "../../helpers/formatDate";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}><span>ONELIFE</span> NEWS</h1>
            <p className={styles.header__date}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;