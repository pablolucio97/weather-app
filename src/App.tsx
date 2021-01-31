import React, { useState, useEffect, ChangeEvent } from 'react';

import GlobalStyle from './GlobalStyle'
import * as Search from './styles'
import Switcher from './components/Switcher/Switcher'

import light from './themes/light'
import dark from './themes/dark'

import {ThemeProvider} from 'styled-components'

import { RiSearch2Line } from 'react-icons/ri'
import {BiWind} from 'react-icons/bi'
import {FaCity, FaCloudSun} from 'react-icons/fa'

import axios from 'axios'

import usePersistState from './utils/themeStore'

interface IResponse {
  sigla?: string
  nome?: string
}

interface UFs {
  sigla: string
}

interface Cities {
  nome: string
}


interface IWeatherApi {
  name: string,
  main: {
    temp: number
  },
  wind: {
    speed: number
  }

}


const apiKey = '3d9181e23f7ee4054e3357f821678690'



const App: React.FC<IResponse> = ({ sigla, nome }) => {

  const [ufs, setUfs] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [selectedUf, setSelectedUf] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [city, setCity] = useState<string>('')
  const [temp, setTemp] = useState<number>(0)
  const [windSpeed, setWindSpeed] = useState<number>(0)
  const [theme, setTheme] = usePersistState('theme', light)



  useEffect(() => {

    (async () => {
      await axios.get<UFs[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => {
          const ufList = response.data.map(item => item.sigla)
          setUfs(ufList)
        })
    })()

  }, [])


  useEffect(() => {

    (async () => {
      await axios.get<Cities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
          const citiesList = response.data.map(item => item.nome)
          setCities(citiesList)
        })
    })()

  }, [selectedUf])

  const setSelecteduf = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setSelectedUf(val)
  }

  const setSelectedcity = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setSelectedCity(val)
  }


  const getWeatherInfo = async () => {
    await axios.get<IWeatherApi>(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=${apiKey}`)
      .then(response => {

        const getTemp = response.data.main.temp
        const getName = response.data.name
        const getWindSpeed = response.data.wind.speed

        switch(response.status){
          case(200):
          return [
            setCity(getName),
            setWindSpeed(Math.ceil(getWindSpeed)),
            setTemp(Math.ceil(getTemp))
          ]
          break;
          case(404):
          return [
            setCity(''),
            setWindSpeed(0),
            setTemp(0),
            window.alert('fsdf')
          ]
          break;
          default:
        }
      })
  }

  const handleTheme = () => {
    setTheme(theme.title === 'light'? dark : light)
  }


  return (
    <ThemeProvider theme = {theme}>
      <Switcher toggleTheme={handleTheme}/>
      <GlobalStyle />
      <Search.Title><FaCloudSun size={32}/>Weather app</Search.Title>
      <Search.SubTitle>Find the weather info of cities across the Brazil</Search.SubTitle>
      <Search.SearchContainer>
        <Search.SelectUf
          id="uf"
          onChange={setSelecteduf}
        >
          <option value="0">Select an UF</option>
          {ufs.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </Search.SelectUf>
        <Search.SelectCity
          id='city'
          onChange={setSelectedcity}
        >
          <option value="0">Select an City</option>
          {cities.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </Search.SelectCity>
        <Search.Button onClick={getWeatherInfo}>
          <RiSearch2Line size={22} color='#fff' />
        </Search.Button>
      </Search.SearchContainer>
      <Search.ResultContainer
          hidden={selectedCity === '' ? true : false}
          style={{background: temp > 20 ? 
            "linear-gradient(#edb483, #e8df9d)"
            :
            "linear-gradient(#e9e4c0, #ccc)"
          }}

      >
        <h3 hidden={city === ''? true : false}><FaCity size={24}
          style={{
            marginRight: 6
          }}
        />{city}
        </h3>
        <h1 hidden={temp < 1}>{temp}°C</h1>
        <h4 hidden={temp < 1}><BiWind size={24}
          style={{marginRight: 6}}
        /> Velocidade do vento: {windSpeed} km/h
        </h4>

      </Search.ResultContainer>
    </ThemeProvider>
  );
}

export default App;
