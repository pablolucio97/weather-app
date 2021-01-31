import React, { ChangeEvent } from 'react'

import { RiSearch2Line } from 'react-icons/ri'

import * as Searchs from './styles'

export interface IBGEApi {
    sigla?: string
    city?: string;
    temp?: number;
    selectUF?: (e: ChangeEvent<HTMLSelectElement>) => void
    selectCity?: (e: ChangeEvent<HTMLSelectElement>) => void
}
const Search: React.FC<IBGEApi> = ({
    sigla,
    city,
    temp,
    selectCity,
    selectUF
}) => {

    return (
        <>
            <Searchs.SearchContainer>
                <Searchs.SelectUf
                    value={sigla}
                    onChange={selectUF}
                />
                <Searchs.SelectCity
                    value={sigla}
                    onChange={selectCity}
                />
                <Searchs.Button>
                    <RiSearch2Line size={24} color='#fff' />
                </Searchs.Button>
            </Searchs.SearchContainer>
            <Searchs.ResultContainer>
                <h3>{city}</h3>
                <h1>{temp}</h1>
            </Searchs.ResultContainer>
        </>
    )
}

export default Search

