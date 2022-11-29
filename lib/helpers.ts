type Division = {
  amount: number;
  name: Intl.RelativeTimeFormatUnit;
};

const DIVISIONS: Division[] = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export const formatDate = (date: string) => {
  let duration = (Number(new Date(date)) - Number(new Date())) / 1000;
  const formatter = new Intl.RelativeTimeFormat(undefined, {
    localeMatcher: "best fit",
    numeric: "auto",
    style: "long",
  });

  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }

    duration /= division.amount;
  }
};
