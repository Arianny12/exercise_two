"use client";
import styles from "./articleCard.module.css";
const ArticleCard = ({description, title, date, link, imageSrc, imageAlt}) => {
    return (
        <div className={styles.articleCard}>
            <div className ={styles.articleCardImg}>
            <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className={styles.articleCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>            
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ArticleCard;