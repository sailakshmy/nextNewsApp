import Link from "next/link";
const NewsList = ({ newsList }) => {
  return (
    <ul className="news-list">
      {newsList?.map((news) => (
        <li key={news?.id}>
          <Link href={`/news/${news?.slug}`}>
            <img src={`/images/news/${news?.image}`} alt={news?.title} />
            <span>{news?.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
