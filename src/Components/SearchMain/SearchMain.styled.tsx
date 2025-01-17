import styled from "styled-components";


export const SearchResults = styled.main`
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 60px);
    &::-webkit-scrollbar {
        width: 16px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=>theme.color.border};
      border: 3px solid transparent;
      border-radius: 7px; 
      background-clip: padding-box;
    } 
    ul{
      list-style: none;
      & svg{
        width: 100%;
        stroke: ${({theme})=>theme.color.border};
        stroke-width: 3px;
      }
      & li{
        display: flex;
        margin-left: 30px;
        margin-top: 10px;
        perspective: 40vw;
        cursor: pointer;
        & p{
          margin: auto 20px;
        }
        & img{
          border-radius: 15px;
          height: 100px;
          height: 100px;
          box-shadow: 0 0 10px 5px rgba(0,0,0,0.5);
          transform-style: preserve-3d;
        }
        @media screen and (min-width:${(p) => p.theme.breakpoints.tablet}){
          &:hover,&:focus{
            img{
              transform: rotateY(90deg) scaleX(0.9) scaleY(1.1);
              box-shadow: -3px 0 10px 5px rgba(0,0,0,0.5);
            }
            box-shadow: 0 0 10px 5px rgba(0,0,0,0.5);
            transform: scaleY(0.9);
          }
        }
      }
    }
`