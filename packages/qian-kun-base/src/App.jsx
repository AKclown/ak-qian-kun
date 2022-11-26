import './App.css';
import {BrowserRouter, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter basename="/">
     <p>AKclown    <Link to={`/app-react`}>React</Link>    <Link to={`/app-vue`}>Vue</Link> </p> 
     </BrowserRouter>

     <div id='react-container'></div>
     <div id='vue-container'></div>
    </div>
  );
}

export default App;
