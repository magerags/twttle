export function formatDate(dateString: string): React.JSX.Element {
  const date = new Date(dateString);

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.getDate();
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <>
      {dayName} {day}
      <sup>{getOrdinalSuffix(day)}</sup> {monthName} {year}
    </>
  );
}
