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
    /* ul{
      list-style: none;
      & li{
        display: flex;
        margin-left: 30px;
        margin-top: 13px;
        perspective: 40vw;
        height: 100px;
        cursor: pointer;
        & svg{
          position: absolute;
          stroke-width: 3px;
          left: -30px;
          top:-8px;
          color: ${({theme})=>theme.color.border};
          width: 100%;
        }
        .content{
          width: 100%;
          margin-left: -10px;
          z-index: -1;
          height: 100%;
          & p{
            margin: auto 30px;
          }
        }
        & img{
          border-radius: 15px;
          height: 100px;
          width: 100px;
          box-shadow: 0 0 10px 3px rgba(0,0,0,0.5);
          transform-style: preserve-3d;
        }
        @media screen and (min-width:${(p) => p.theme.breakpoints.tablet}){
          &:hover,&:focus{
            img{
              transform: rotateY(90deg) scaleX(0.9);
              box-shadow: -3px 0 10px 4px rgba(0,0,0,0.5);
            }
            .content{
              box-shadow: 0 0 10px 5px rgba(0,0,0,0.5);
              transform: scaleY(0.9);
            }
          }
        }
      }
    } */
    ul{
      padding-left: 30px;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 23px;
        position: relative;
        perspective: 40vw;
        cursor: pointer;
      
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 0 10px 3px rgba(0,0,0,0.5);
          transform-style: preserve-3d;
        }
      
        span {
          margin-left: 30px;
          font-size: 16px;
        }
      
        &::after {
          content: '';
          position: absolute;
          left: -30px;
          right: 0;
          top: -13px;
          height: 3px;
          background-color: ${({theme})=>theme.color.border};
        }

        @media screen and (min-width:${(p) => p.theme.breakpoints.tablet}){
          &:hover,&:focus{
            box-shadow: 0px 0px 10px 5px #881b0086;
            img{
              transform: rotateY(90deg) scaleX(0.9);
              box-shadow: -3px 0 10px 4px rgba(0,0,0,0.5);
            }
            }
          }
        }
      }
`
