import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Search from './Search';
import Result from './Result';
import axios from 'axios';
export default function StateMap({ stateMap, stateName }) {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const changeSearch = (value) => {
    setSearch(value);
  }

  const searchWeatherHandler = () => {
    if (search !== "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search},${stateName}&appid=62cd8f10ea471019bc84d9d2b97f07f6&units=metric`)
        .then((res) => {
          console.log(res.data)
          setWeather(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  return (
    <div>
      <h3>{stateName}</h3>
      <Container>
        <Row>
          <Col>
            <svg xmlns="http://w3.org/2000/svg" viewBox='-150 -150 600 600'>
              <g transform='scale(1.5)'>
                <path d={stateMap} />
              </g>
            </svg>
          </Col>
          <Col>
            <Search searchData={search} eventHandler={changeSearch} searchWeatherHandler={searchWeatherHandler} />
            <br />
            <Result weatherData={weather}  />
          </Col>
        </Row>
      </Container>

    </div>
  )
}
