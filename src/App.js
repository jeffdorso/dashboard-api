import React, {useState,}  from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather' 
import Stocks from './Stocks'
import TodoList from './TodoList'
import Breweries from './Breweries'




function App() {


  return (
    <div  className="App">
      
      <header className="App-header">
       
        <div className="App-logo" >
          <img src="https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>    
          <h1 className="Banner"> My Dashboard</h1>
        </div>
        
      </header>  
       
      <div className="Quote-dash">``
        <h3> Quote of the Day</h3>
       
      </div>
      
    <div className="Main-dash">       

      <div className="item1"><TodoList/></div>
       
      <div className="item2" >My Breweries<Breweries/> </div>
      <div className="Item3"><Stocks/></div>
       
    </div>
      <div className="Side-dash"> 
            <h2>Current</h2>
          <div className= "My-Weather">          
            <Weather/>     
          </div>
     
         <div className= "My-Calendar">
           <h2>My Calendar</h2>
         <iframe src="https://calendar.google.com/calendar/embed?src=jeffreyd9862%40gmail.com&ctz=America%2FNew_York" style={{border: 0}} width="250" height="300" frameborder="0" scrolling="no"></iframe>
         </div>
      </div>   
        <div className="Lower-dash">
        <h2>My Gallery</h2>
            
             <div> 
              <img  className="Img-dash" src="https://images.pexels.com/photos/4943534/pexels-photo-4943534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <div>
              <img className="Img-dash" src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>
              <img className="Img-dash" src="https://images.pexels.com/photos/4943457/pexels-photo-4943457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
            <div>
              <img className="Img-dash" src="https://images.pexels.com/photos/4943461/pexels-photo-4943461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
         </div>
              
       
      
     
    </div>
  );
}

export default App;
