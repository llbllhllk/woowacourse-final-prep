const checkWeekdayOrWeekend = (year, month, day) => {
  const inputDate = new Date(year, month - 1, day);
  const dayOfWeek = inputDate.getDay();
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    return '주말';
  } else {
    return '평일';
  }
};

export default checkWeekdayOrWeekend;
