export const formatDuration = (durationInSeconds) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds - minutes * 60;
  const durationInMinutes = `${minutes}:${seconds}`;
  return durationInMinutes
}