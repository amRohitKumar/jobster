import styled from "styled-components";

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--white);
  border-bottom: 5px solid #c6c3c3;

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    width: 60px;
    height: 60px;
}
  .title {
    width: 150px;
    height: 15px;
    margin-top: 1em;
  }
  .icon {
    width: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
