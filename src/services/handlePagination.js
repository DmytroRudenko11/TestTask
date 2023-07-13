export const handlePagination = (data, page, limit) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  const paginatedData = data.slice(start, end);
  const totalPages = Math.ceil(data.length / limit);
  const dataToReturn = { paginatedData, totalPages };
  return dataToReturn;
};
