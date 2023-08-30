function solution(s) {
  let str = s.toUpperCase();

  if (str.split("P").length === str.split("Y").length) {
    return true;
  } else {
    return false;
  }
}