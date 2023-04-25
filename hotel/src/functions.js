export function formateDate(dateStr) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date = new Date(dateStr);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const month = months[monthIndex];

  return `${day} ${month} ${year}`;
}

export function addDaysToDate(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + Number(days));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getWord(num, words) {
  let i = 0;
  const perTwo = num % 100;
  if (perTwo >= 11 && perTwo <= 19) {
    i = 2;
  } else {
    const per = num % 10;
    if (per === 1) {
      i = 0;
    } else if (per >= 2 && per <= 4) {
      i = 1;
    } else {
      i = 2;
    }
  }
  return words[i];
}
