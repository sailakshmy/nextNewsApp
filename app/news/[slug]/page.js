import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const NewsDetail = ({ params }) => {
  const newsItem = DUMMY_NEWS?.find((news) => news?.slug === params?.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time datetime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default NewsDetail;
