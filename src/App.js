import React, { useState, useEffect} from "react";
import "./App.css";

//import dependencies
import axios from 'axios'
import { format } from 'date-fns'

//import components
import Photo from './components/Photo'
import Title from './components/Title'
import DateBox from './components/DateBox'
import Description from './components/Description'
import NewDate from './components/NewDate'


function App() {

  //get the state that will save the data
  const [nasaData, setNasaData] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  console.log(nasaData)

  //get the data once the app renders only once
  useEffect(()=> {
    const APIDate = format(selectedDate, 'yyyy-MM-dd')
    const APIUrl = `https://api.nasa.gov/planetary/apod?api_key=s8Zhx2rci52WFUwmo6WV4WoKZga0QSae0iKbioYX&date=${APIDate}`
    const getData = axios.get(APIUrl)

    getData.then((res) => {
      console.log(res);
      setNasaData(res.data);
    });
  }, [selectedDate]);

  function changeDate(date) {
    setSelectedDate(date)
  }

  return (
    <div>
      <Title title ={nasaData.title}/>
      <Photo image ={nasaData.url}/>
      <DateBox date={nasaData.date}/> 
      <Description description={nasaData.explanation}/>
      <NewDate changeDate={changeDate}/>
    </div>
  );
    }
    export default App;