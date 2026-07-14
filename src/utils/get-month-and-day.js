// Get month and day from a timestamp string (HubSpot publishDate format)
// Example input: "1700000000000" (milliseconds) or "2024-01-15T10:00:00Z"
// Returns: "Jan 15"
function getMonthAndDay(dateString) {
  const date = new Date(Number(dateString) || dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}

export default getMonthAndDay;
