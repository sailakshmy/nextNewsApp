import { DUMMY_NEWS } from "@/dummy-news";
const ImagePage = ({ params }) => {
  const newsItem = DUMMY_NEWS?.find((news) => news?.slug === params?.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  );
};

export default ImagePage;
