import jobs from "./seed";

const res = jobs.map((item) => {
  const newItem = item;
  if (newItem.status === "interview") {
    const month = Math.random() > 0.5 ? 9 : 8;
    const date = parseInt(Math.random() * 30 + 1, 10);
    newItem.interviewDate = `2022-0${month}-${date < 10 ? "0" : ""}${date}`;
  }
  return newItem;
});

export default res;
