import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3em 0;

  .info{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title{
    width: 200px;
    height: 20px;
    margin-bottom: 1.5em;
  }
  .sub-title{
    width: 250px;
    height: 16px;
    margin-bottom: 1em;
  }
  .calender-box{
    aspect-ratio: 1/0.75;
    border: none;
    opacity: 0.25 !important;
  }
`;

export default Wrapper;
