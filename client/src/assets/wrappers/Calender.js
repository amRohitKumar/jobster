import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5em 0.5em;
    flex-direction: column;

    .info-text{
        letter-spacing: var(--letterSpacing);
        color: var(--primary-500);
        font-size: 1.25em;
        margin-bottom: 1em;
    }
`;

export default Wrapper;
