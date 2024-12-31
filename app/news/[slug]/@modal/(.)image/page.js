import { DUMMY_NEWS } from "@/dummy-news";
const InterceptedImagePage = ({ params }) => {
  const newsItem = DUMMY_NEWS?.find((news) => news?.slug === params?.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
