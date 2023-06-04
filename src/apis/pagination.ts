import { atom } from "recoil";
import { useRecoilState, SetterOrUpdater } from "recoil";

function getItemsForPage<T>(
  items: T[],
  itemsPerPage: number
): (page: number) => T[] {
  return (page: number) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };
}

function getRangeForPage(
  lastPage: number,
  pageSeen: number
): (page: number) => number[] | undefined {
  return (page: number) => {
    if (page < 1 || page > lastPage) {
      throw new Error("Invalid page number");
    }
    const startRange = Math.floor(page / pageSeen) * pageSeen + 1;
    const endRange = Math.min(startRange + pageSeen - 1, lastPage);
    return Array.from(
      { length: endRange - startRange + 1 },
      (_, i) => i + startRange
    );
  };
}

const currentPageState = atom<number>({
  key: "currentPageState",
  default: 1
});

interface PageProps<T> {
  page: number;
  setPage: SetterOrUpdater<number>;
  itemsForPage: (page: number) => T[];
  rangeForPage: (page: number) => number[] | undefined;
  lastPage: number;
}

export default function usePage<T>(
  itemsPerPage: number,
  items?: T[]
): PageProps<T> {
  const lastPage = items ? Math.ceil(items.length / itemsPerPage) : 1;
  const [page, setPage] = useRecoilState(currentPageState);
  const itemsForPage = items ? getItemsForPage(items, itemsPerPage) : () => [];
  const rangeForPage = getRangeForPage(lastPage, 10);
  return { page, setPage, itemsForPage, rangeForPage, lastPage };
}
