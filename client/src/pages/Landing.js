import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          Job <span>tracking</span> app{" "}
        </h1>
        <p>
          We understand how important it is to know the status of your job
          application. That is why our website provides you with a Job Tracker
          tool to help you stay informed of your job process. This easy-to-use
          system allows you to easily view the progress of your application and
          access all of your job-related information. With our Job Tracker, you
          can easily track the status of each of your applications and stay
          up-to-date on any changes or updates throughout the hiring process.
        </p>
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
  </Wrapper>
);

export default Landing;
