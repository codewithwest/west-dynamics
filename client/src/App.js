import React from "react";
import "./App.css";
import Tabs from './components/Tabs';

function App() {
  /*
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("/api").then((res) => res.json())
    .then( (data)=> setData(data))
    .then(console.log(data))
    .catch((e) => console.error("no data"));
  },[data]
  );
*/
  return (

    <div>
     
    <h1>WEST DYNAMICS</h1>
    
    <Tabs/>
    <footer><a href='https://www.westdynamics.tech'>westdynamics.tech</a></footer>
  </div>
  );
  
}
export default App;