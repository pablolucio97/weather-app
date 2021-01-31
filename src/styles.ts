import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 600px;
    height: 200px;
    border-radius: 3px;
    `

export const SelectUf = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 40px;
    border: none;
    padding: 10px;
    margin: 0 10px;
    outline: 1px solid #222;
`


export const SelectCity = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 40px;
    border: none;
    padding: 10px;
    outline: 1px solid #222;
`


export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 40px;
    border: none;
    padding: 10px;
    margin-left: 10px;
    outline: none;
    background-color: #0492ff;
    transition: all .3s ease-in-out;


    &:hover{
        cursor: pointer;
        background-color:#3298e6;
    }

`

export const ResultContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 320px;
    height: 400px;
    border-radius: 3px;
    margin: 0 20%;
    
    

    h1{
        position: absolute;

        top:180px;
        left: 110px;

        font-size: 2.2rem;
        color: #fff;
    }

        
    h3{
        position: absolute;

        top: 120px;
        left: 40px;

        font-size: 1.6rem;
        color: #fff;
    }

           
    h4{
        position: absolute;

        top:230px;
        left: 110px;

        font-size: 1.2rem;
        color: #fff;
    }

`
export const Title = styled.h1`
         color: ${props => props.theme.colors.text};
        font-size: 2.4rem;
        margin: 70px 60px 10px; 
        
`

export const SubTitle = styled.h2`
         color: ${props => props.theme.colors.text};
        font-size: 1.8rem;
        margin: 10px 50px 0px; 
        
`
