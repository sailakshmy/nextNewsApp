import NewsList from "@/components/NewsList/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = () => {
  const latestNewsList = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList newsList={latestNewsList} />
    </>
  );
};

export default LatestNewsPage;