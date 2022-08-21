export function changeTimerToSeconds(timer: string) {
  const [hours = '0', minutes = '0', second = '0'] = timer.split(':');

  const hoursToSecond = Number(hours) * 3600;
  const minutesToSecond = Number(minutes) * 60;

  return hoursToSecond + minutesToSecond + Number(second);
}