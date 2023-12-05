import { format } from "date-fns";

export function formatDate(inputDate) {
  if (inputDate instanceof Date) {
    return format(inputDate, "EEE d MMM, yyyy");
  } else {
    console.log("Invalid date.");
    return null;
  }
}
