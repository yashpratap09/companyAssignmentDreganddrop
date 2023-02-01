import "./Home.css"


const HomePage = () => (

  <div className="home">
    <div className="yash">
      <h1> Home Page</h1>

      <div className="box">
        <a className="an" href="/createData">Click here to add project details</a>
      </div>
      <div className="box">
        <a className="an" href="/getAllData">Click here to fetch all data</a>
      </div>
    </div>

  </div>
);


export default HomePage;