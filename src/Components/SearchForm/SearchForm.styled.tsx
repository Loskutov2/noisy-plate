import styled from "styled-components";

export const Search = styled.form`
    width: 100%;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    color: #0000007f;
    font-family: 'Miso';
    font-size: 18px;
    input{
        all:unset;
        height: 34px;
        border: solid 3px var(--border);
        border-radius: 15px;
        width: 30%;
        padding: 0 35px;
        backdrop-filter: blur(1.5px);
    }
    input::placeholder {
        color: currentColor;
    }
    button{
        height: 40px;
        width: 40px;
        transform: translate(-100%);
        background: none;
        border: none;
        color: var(--border);
    }
`;
