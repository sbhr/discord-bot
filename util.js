function sec2hour(time) {
  const sec = (time % 60) % 60;
  const min = Math.floor(time / 60) % 60;
  const hour = Math.floor(time / 3600);

  return {
    hour,
    min,
    sec,
  }
}

module.exports = {
  sec2hour,
};
