import Wrapper from "../assets/wrappers/CalendarSkelton";
import "../Calendar.css";

const CalenderSkelton = () => (
  <Wrapper>
    <div className="info">
      <div className="title skelton-animation" />
      <div className="sub-title skelton-animation" />
    </div>
    <div className="react-calendar calender-box skelton-animation" />
  </Wrapper>
);

export default CalenderSkelton;
