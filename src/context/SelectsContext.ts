import React, {useState, createContext, useEffect, useContext} from 'react'

import axios from 'axios'

interface Selects{
    sigla?: string
    nome?: string
}


const [ufs, setUfs] = useState<string[]>([])

const SelectContext = createContext(ufs)

useEffect(() => {

}, [])