import NewsList from "@/components/NewsList/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let links = getAvailableNewsYears();
  let news;
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedMonth && selectedYear) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter!");
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news?.length) {
    newsContent = <NewsList newsList={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
