import styles from './styles.module.css';

const NewsIntroImage = ({image}) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img className={styles.image} src={image} alt="news intro" /> : null }
        </div>
    )
}

export default NewsIntroImage;