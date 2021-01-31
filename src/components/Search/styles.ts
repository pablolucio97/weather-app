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

    width: 200px;
    height: 40px;
    border: none;
    padding: 10px;
    margin: 0 10px;
    border-radius: 3px;
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
    border-radius: 3px;
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
    transition: all .4s ease-in-out;


    &:hover{
        cursor: pointer;
        background-color:#ff6004;
    }

`

export const ResultContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 320px;
    height: 440px;
    border-radius: 3px;
    margin: 0 auto;
    background: linear-gradient(to bottom, #ddd, #ffeaad);


    h1{
        position: absolute;

        top: 130px;
        left: 130px;

        font-size: 1.2rem;
        color: #fff;
    }
    
    
    &:nth-child(2){
        position: absolute;

        top:100px;
        left: 100px;

        font-size: 1.2rem;
        color: cyan;
    }

        
    &:nth-child(2){
        position: absolute;

        top:120px;
        left: 120px;

        font-size: 1.2rem;
        color: red;
    }
`

