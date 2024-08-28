import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import NewsIntroImage from '../newsIntroImage/NewsIntroImage';

import styles from './styles.module.css';

const NewsIntro = ({item}) => {
    return (
        <div className={styles.intro}>
            <NewsIntroImage image={item?.image} />
            <h3 className={styles.intro__title}>{item.title}</h3>
            <p className={styles.intro__date}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

export default NewsIntro;