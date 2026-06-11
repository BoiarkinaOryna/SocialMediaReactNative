
export function filterBySearch<T>(
  items: T[],
  search: string,
  getSearchText: (item: T) => string,
) {
  const query = search.trim().toLowerCase();

  if (!query) {
    return items;
  }

  return items.filter((item) =>
    getSearchText(item).toLowerCase().includes(query)
  );
}
