import { format } from "date-fns";

export function formatDate(inputDate) {
  if (inputDate instanceof Date) {
    return format(inputDate, "EEE d MMM, yyyy");
  } else {
    console.log("Invalid date.", inputDate);
    return null;
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function findByRange(items, targetRange) {
  const matchingItem = items.find((item) => item.range === targetRange);
  return matchingItem || null;
}
