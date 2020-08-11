export default function convertHourToMinutes(time: string): number {
  if (time === '') {
    return 0;
  }

  const [hour, minutes] = time.split(':').map(Number);

  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
