import styled from "styled-components";

export const Search = styled.form`
    position: relative;
    width: 100%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 18px;
    input{
        all:unset;
        text-align: left;
        height: 34px;
        border: solid 3px var(--border);
        border-radius: 15px;
        width: 30vw;
        padding: 0 35px;
        backdrop-filter: blur(1.5px);
    }
    input::placeholder {
        color: currentColor;
    }
    button{
        position: absolute;
        height: 40px;
        width: 40px;
        transform: translate(-100%);
        background: none;
        border: none;
        cursor: pointer;
    }
`;
