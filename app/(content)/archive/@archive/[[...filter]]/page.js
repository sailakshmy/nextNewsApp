import NewsList from "@/components/NewsList/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ selectedYear, selectedMonth }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;
  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedMonth && selectedYear) {
    links = [];
  }
  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter!");
  }
  return (
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
  );
}

async function FilteredNews({ selectedYear, selectedMonth }) {
  let news;
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  }
  if (selectedMonth && selectedYear) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news?.length) {
    newsContent = <NewsList newsList={news} />;
  }
  return newsContent;
}

const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters....</p>}>
        <FilterHeader
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
      <Suspense fallback={<p>Loading news for the selected filters....</p>}>
        <FilteredNews
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
