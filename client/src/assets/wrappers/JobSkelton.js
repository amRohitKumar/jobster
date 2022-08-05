import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  opacity: 0.7;
  box-shadow: var(--shadow-2);

  #header {
    padding: 1rem 1.5rem;
    display: grid;
    border-bottom: 1px solid var(--grey-100);
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    border-radius: var(--borderRadius);
    margin-right: 2rem;
  }
  .job-info-skelton {
    width: 100px;
    height: 15px;
    margin-top: 0.5em;
  }
  .job-info-skelton:nth-child(2n) {
    width: 150px;
    height: 15px;
    margin-top: 0.5em;
  }
  .info > div {
    margin-bottom: 0.75rem;
    width: 100px;
    height: 15px;
  }
  .info > div:last-child {
    width: 50px;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  footer {
    margin-top: 1rem;
  }
  .actions {
    display: flex;
  }
  .actions > div {
    width: 60px;
    height: 25px;
    margin-right: 1em;
  }
`;

export default Wrapper;
