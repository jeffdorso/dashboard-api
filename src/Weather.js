import React, {useState, useEffect} from 'react'; 

function Weather (props){ 
  const [temp, setTemps] = useState ("")
  const [clouds, setClouds] = useState("")
  const [description, setDescription] = useState ("")
 
  useEffect  (() => {
      fetch (`https://api.openweathermap.org/data/2.5/weather?zip=19804,us&appid=4b04c3d4be396c81125c730710ee79fb&units=imperial`)
          .then(response => response.json())
          .then(data =>{
              setTemps (data.main.temp)
              setDescription(data.weather[0].description)  

              console.log(data)})
     
   },[] )

return (
    <>
    <h2>My Weather</h2>
    <h3>temp</h3>
     {temp}
     <h3>Conditions</h3>
     {description}
    </>
)
} 
export default Weather