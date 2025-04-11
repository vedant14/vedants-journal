export function formatDate(inputDate) {
  if (inputDate instanceof Date) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    return `${dayOfWeek} ${day} ${month}, ${year}`;
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
