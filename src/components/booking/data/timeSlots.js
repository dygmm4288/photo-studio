export const timeSlotsObject = {
  "10:00 AM": false,
  "10:30 AM": false,
  "11:00 AM": false,
  "11:30 AM": false,
  "1:00 PM": false,
  "1:30 PM": false,
  "2:00 PM": false,
  "2:30 PM": false,
  "3:00 PM": false,
  "3:30 PM": false,
  "4:00 PM": false,
  "4:30 PM": false,
  "5:00 PM": false,
  "5:30 PM": false,
};

export const arrayToTimeObject = (timesArr) => {
  return timesArr.reduce((acc, time) => {
    acc[time] = true;
    return acc;
  }, {});
};
