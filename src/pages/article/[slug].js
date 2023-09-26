import {useRouter} from "next/router";
import Data from '../../app/components/data';
export default function Article(){
    const router = useRouter();
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id === slug);

    if(!articleData) return null;
    return (
        <main>
            <h1>Article</h1>
            <p>{articleData.id}</p>
            <img src={articleData.image.url} alt={articleData.image.alt}/>
            <p>{articleData.blurb}</p>
        </main>
    );
};