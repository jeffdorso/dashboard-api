import React, {useState, useEffect} from "react"
import firebase from './firebase.js'

const dbList = firebase.database ().ref ('todos')

function TodoList(){
    const [myList, setMyList] = useState([])

    useEffect(() => 
      dbList.on('value',(data)=>{
          let list = []
          data.forEach(item => {
              list.push(item.val())
          })
          setMyList(list)
      }) 
        
   ,[])


    const submitMe = (e => {
         e.preventDefault ()
         dbList.push(document.getElementById('todo').value)
    })  
    let lis = myList.map((item,i) => <li key={i}>{item}</li>) 
    return (
        <div className = "Todo"> To Do
            <form onSubmit= {submitMe}>
                <input type="text" id= "todo"/>
                <input type="submit"/> 
            </form>
            {lis}
        </div>
        
   );
}

export default TodoList