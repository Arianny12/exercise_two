import Data from '../app/components/data';
import ArticleCard from '@/app/components/ArticleCard';
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "Cute Pets";
  
  return (
    <main className={styles.page}>
        <h1>{projectName}</h1>
        {Data.map((article) => (
          <ArticleCard
            key= {article.id}
            date={new Date(article.publishedDate).toDateString}
            // My date dissapeard???
            description ={article.blurb}
            imageAlt={article.image.alt}
            imageSrc={article.image.url}
            title={article.title}
          />
        ))}
    </main>
  );
};

