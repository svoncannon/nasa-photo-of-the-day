import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Image from './components/Image'
import Title from './components/Title'
import Date from './components/Date'
import Copyright from './components/Copyright'
import Description from './components/Description'

function App() {
  const [nasaData, setNasaData] = useState([])
  console.log(nasaData)
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=s8Zhx2rci52WFUwmo6WV4WoKZga0QSae0iKbioYX')
    .then(res => {
      console.log(res);
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <p>Lets see if we can get something to work here</p>
      <Image url={nasaData.url}/>
      <Title title ={nasaData.title}/>
      <Date date={nasaData.date}/> 
      <Copyright copyright={nasaData.copyright}/>
      <Description description={nasaData.explanation}/>
    </div>
  );
    }
    export default App;