import "./Home.css"
import { useNavigate } from "react-router-dom";



const HomePage = () => {
 
  
  const navigate = useNavigate()
  const Create = () =>{
    navigate("/createData")

  }
  const get = () =>{
    navigate("/getAllData")

  }
  
  return(
   
<>
  <div className="home">
    <div className="yash">
      <h1> Home Page </h1>

      <button className="box" onClick={Create} >
        <div className="an"   >Click here to add project details</div>
      </button>
      <button className="box" onClick={get}>
        <div className="an">Click here to fetch all data</div>
      </button>
    </div>

  </div>
  </>
  
  )
  }


export default HomePage;