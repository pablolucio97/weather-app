import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Switch from 'react-switch'

import {SwitcherContainer} from './styles'

interface SwitchProps{
    toggleTheme():void
}

const Switcher : React.FC<SwitchProps> = ({toggleTheme}) => {


const {title} = useContext(ThemeContext)
    

    return(
        <SwitcherContainer>
        <Switch
            width={40}
            height={15}
            checked={title === 'dark'}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            onColor='#0492ff'
        />
        </SwitcherContainer>
    )
}

export default Switcher