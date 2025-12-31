const fullFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const shortFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
});

export const formatProjectDate = (dateString: string): string => {
  const actualYear = new Date().getFullYear();
  const [dayStr, monthStr, yearStr] = dateString.split("/");

  const year = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);

  const date = new Date(year, month, day);

  if (year === actualYear) {
    return shortFormatter.format(date);
  }

  return fullFormatter.format(date);
};
