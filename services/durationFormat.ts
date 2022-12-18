export const durationFormat = (duration: number) => {
  let min: string = Math.floor(duration / 60).toString();
  let sec: string = (duration % 60).toString();

  if (Number(min) < 10) {
    min = `0${min}`;
  }

  if (Number(sec) < 10) {
    sec = `0${sec}`;
  }

  return `${min}:${sec}`;
};
