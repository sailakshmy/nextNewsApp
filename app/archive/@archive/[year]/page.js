import NewsList from "@/components/NewsList/news-list";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const year = params.year;
  const newsListForThisYear = getNewsForYear(year);
  console.log(newsListForThisYear);
  return <NewsList newsList={newsListForThisYear} />;
};

export default FilteredNewsPage;
