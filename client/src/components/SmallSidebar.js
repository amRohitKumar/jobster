import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }`}
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggleSidebar={() => dispatch(toggleSidebar())} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
