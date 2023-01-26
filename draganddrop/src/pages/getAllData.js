import React from "react";
import axios from "axios"
import  { useState } from "react";


const GetAllData = () =>{

const [Task, setTask] = useState("");


const GetBooks = () => {
    axios.get("http://localhost:3001/getData").then((Response)=>{
        
        setTask(Response.data.data)
    })
}

GetBooks()
return(
    <div>
          
       
      <div >
        {Task && Task.length > 0 && (
          <ol>
            {Task.map((data, index) => (
              <li >
                {data.Description} 
                
                
               
              </li>
            ))}
          </ol>
        )}
        </div>
         


    </div>
    

)


}


export default GetAllData
