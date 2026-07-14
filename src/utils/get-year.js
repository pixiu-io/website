// Get year from a timestamp string (HubSpot publishDate format)
// Example input: "1700000000000" (milliseconds) or "2024-01-15T10:00:00Z"
// Returns: "2024"
function getYear(dateString) {
  const date = new Date(Number(dateString) || dateString);
  return date.getFullYear().toString();
}

export default getYear;
