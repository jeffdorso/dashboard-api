import React, {useState, useEffect} from 'react'; 



function Stocks (props){
    const [symbols, setSymbols] = useState("")
    const [information, setInformation] = useState ("")
    const [volume, setVolume] = useState ("")
    
     /* fetch ("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=300135.SHZ&apikey=75GBSHPRY9BM2TY3")*/

    useEffect  (() => {
       
            queryfunction("300135.SHZ")
 },[])
 const queryfunction = function (symbol){
    fetch (`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=75GBSHPRY9BM2TY3`)
    .then(response => response.json())
   .then(data =>{
       setSymbols(data['Global Quote']['01. symbol'])
       setInformation(data['Global Quote']['05. price'])
       setVolume(data['Global Quote']['06. volume'])
   })     
 } 



 const submitSym = e => {
    e.preventDefault ()
   /* symbol.push(document.getElementById('symbol').value)*/
     queryfunction(document.getElementById('symbol').value)
 }
  
     return (
        <>  
        <form  onSubmit = {submitSym}>
            <input type="text" id = "symbol"/>
            <input type="submit"/>
        </form>     
        <h2>My Stock</h2>
        <h3>Information</h3>
         {information}
         {volume}
         <h3>Symbols</h3>
         {symbols}
        </>
    )
    } 
    export default Stocks

