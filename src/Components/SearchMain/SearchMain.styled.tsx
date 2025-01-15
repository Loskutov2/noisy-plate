import styled from "styled-components";


export const SearchResults = styled.main`
    overflow-y: scroll;
    height: calc(100vh - 60px);
    font-family: 'Patriot';
    &::-webkit-scrollbar {
        background: transparent;
        width: 16px;
        padding: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--border); /* Set the color to --border */
      border-radius: 8px; /* Round the edges */
      border: 2px solid transparent;
    }
`