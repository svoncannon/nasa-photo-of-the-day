import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

export default function App() {
  const [nasaData, setNasaData] = useState([])
  console.log(nasaData)
  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      {/* <Image/>
      <NasaCard/> */}
    </div>
  );
}

