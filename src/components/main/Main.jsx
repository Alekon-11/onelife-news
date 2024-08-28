import { useEffect, useState } from 'react';
import NewsIntro from '../newsIntro/NewsIntro';

import styles from './styles.module.css';
import { getNews } from '../../services/currentsApiNews';
import NewsList from '../newsList/NewsList';

const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
                // console.log(response.news);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNews();
    },[]);

    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsIntro item={news[0]} /> : null}

            <NewsList news={news}/>
        </main>
    )
}

export default Main;