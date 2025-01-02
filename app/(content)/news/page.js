// "use client";
import NewsList from "@/components/NewsList/news-list";
import { getAllNews } from "@/lib/news";
// import { useEffect, useState } from "react";

const News = async () => {
  /** Client Side data fetching */
  // const [loadingNews, setLoadingNews] = useState(false);
  // const [error, setError] = useState();
  // const [news, setNews] = useState();
  // useEffect(() => {
  //   async function fetchNews() {
  //     setLoadingNews(true);
  //     const response = await fetch("http://localhost:8080/news");
  //     if (!response.ok) {
  //       setError("Failed to fetch news!");
  //       setLoadingNews(false);
  //     }
  //     const newsList = await response.json();
  //     setLoadingNews(false);
  //     setNews(newsList);
  //   }
  //   fetchNews();
  // }, []);

  /** Server side data fetching */
  // const response = await fetch("http://localhost:8080/news");
  // const newsList = await response.json();
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news!");
  // }

  /** Direct Data fetchinbg */
  const news = await getAllNews();

  return (
    <>
      <div>
        <h1>News Page</h1>
        {/** Client Side data fetching*/}
        {/* {loadingNews && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {news && <NewsList newsList={news} />} */}

        {/** Server Side data fetching */}
        {/* {newsList && <NewsList newsList={newsList} />} */}

        {/** Direct Data fetching */}
        {news && <NewsList newsList={news} />}
      </div>
    </>
  );
};

export default News;
