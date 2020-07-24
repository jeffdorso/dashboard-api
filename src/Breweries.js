import React, {useState, useEffect} from 'react';


function Breweries (props){
    const [breweries, setBreweries] = useState([])

    useEffect  (() => {
        queryfunction("sandiego")
    },[])
    const queryfunction = function (city){

        fetch (`https://api.openbrewerydb.org/breweries?by_city=${city}`)
            .then(response => response.json())
            .then(data =>{
                setBreweries (data)
                console.log(data)})
      }
        

            const submitCity = e => {
                e.preventDefault ()
                queryfunction(document.getElementById('city').value)
            }       
            let lis = breweries.map((item,i) => <li key={i}>{item.name}</li>) 
    return (
           <>  
            <form  onSubmit = {submitCity}>
               <input type="text" id = "city"/>
               <input type="submit"/>
             </form>   
             {lis}  
                    
           </>
    )


}
export default Breweries