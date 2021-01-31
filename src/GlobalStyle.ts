import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Merriweather', serif;
    }
    
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.background};
    }


`

export default GlobalStyle