import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Calender from "react-calendar";
import CountBadge from "./CountBadge";
import Wrapper from "../assets/wrappers/Calender";
import "react-calendar/dist/Calendar.css";
import "../Calendar.css";

const InterviewCalender = () => {
  const [val, setDate] = useState(new Date());
  const { upcomingInterviews } = useSelector((store) => store.allJobs);
  const tileContent = ({ date, view }) => {
    const formatedDate = moment(date).format("YYYY-MM-DD");
    if (view !== "month") return null;
    let match = 0;
    upcomingInterviews.forEach((item) => {
      if (item.time === formatedDate) {
        match = item.count;
      }
    });
    if (match) return <CountBadge count={match} />;
    return null;
  };
  const tileClassName = ({ date, view }) => {
    const formatedDate = moment(date).format("YYYY-MM-DD");
    if (view !== "month") return null;
    let match = 0;
    upcomingInterviews.forEach((item) => {
      if (item.time === formatedDate) {
        match = item.count;
      }
    });
    if (match) return "interviewDay";
    return "";
  };
  const curr = new Date();
  return (
    <Wrapper>
      <h4>Interview Calender</h4>
      <span className="info-text">Your upcoming interviews (max 10)</span>
      <Calender
        value={val}
        onChange={setDate}
        tileContent={tileContent}
        tileClassName={tileClassName}
        maxDetail="month"
        maxDate={new Date(curr.getFullYear(), curr.getMonth() + 2, 1)}
        minDate={new Date(curr.getFullYear(), curr.getMonth() - 1, 1)}
      />
    </Wrapper>
  );
};

export default InterviewCalender;
