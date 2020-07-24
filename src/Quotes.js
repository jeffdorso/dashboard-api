import React, {useState, useEffect} from 'react'; 
import axios from 'axios';


function  Quotes (){
   
    const [quotes, setQuotes] = useState ("")
    useEffect(() =>{
        axios.post("http://api.forismatic.com/api/1.0",{method: "getQuote",
        format: "json",
        key: "",
        lang: "en",})
            .then (response=> response.json)
            .then (data => console.log(data) ) 
            .catch(error=>console.log(error))
    },[])



    return (
        <>
           <h3>Quote of the Day </h3> 
          { quotes}
        </>
    )
}
export default Quotes
