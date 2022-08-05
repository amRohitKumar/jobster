import Wrapper from "../assets/wrappers/StatsContainer";
import WrapperItem from "../assets/wrappers/StatItemSkelton";

const StatsContainerSkelton = () => (
  <Wrapper>
    {[...Array(3)].map((_, i) => (
      <WrapperItem key={i}>
        <div id="header">
          <div className="count skelton-animation" />
          <span className="icon skelton-animation" />
        </div>
        <div className="title skelton-animation" />
      </WrapperItem>
    ))}
  </Wrapper>
);

export default StatsContainerSkelton;
