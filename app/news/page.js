import NewsList from "@/components/NewsList/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const News = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList newsList={DUMMY_NEWS} />
    </div>
  );
};

export default News;
