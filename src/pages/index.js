import Data from '../app/components/data';
import ArticleCard from '@/app/components/ArticleCard';

export default function Home() {
  const projectName= "Exercise Two";
  
  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title="cool Title" description = "cool description"/>
        <ArticleCard title="cool Title 2"/>
    </main>
  );
};

