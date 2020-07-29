import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import Image from './components/Image'
import NasaCard from './components/NasaCard'
import PlanetList from './components/PlanetList'



export default function App() {
  const [nasaData, setNasaData ] = useState([]);

  console.log(nasaData);
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CIU85Nrp4bd2qaTwintv4a0Pd0K21PlVdJzimdWk')
    .then(res => {
      //console.log(res)
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      <Image url = {nasaData.title} copyright = {nasaData.copyright} description = {nasaData.explaination}/>
      <PlanetList/>
    </div>
  );
}

