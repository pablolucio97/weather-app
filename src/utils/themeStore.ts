import {useState, useEffect} from 'react'

function usePersistState(key: string, initialState: any) {
    const [themeState, setThemeState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if(storageValue){
            return JSON.parse(storageValue)
        }else{
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(themeState))
    },[key, themeState])

    return [themeState, setThemeState]

}

export default usePersistState

