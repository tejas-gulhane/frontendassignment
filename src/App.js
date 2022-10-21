import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css"
import Landingpage from "./Pages/Landing/Landingpage";
import Lifespace from "./Pages/Lifespace/Lifespace";
import Live from "./Pages/Live/Live";
import { useState } from 'react';


function App() {

  const [logo , setlogo] =useState()
  const [prime , setprime] =useState()
  const imgclicked =()=>{
    setlogo("click")
  }

  const primeclicked =() =>{
   setprime("click")
   setlogo("")

  }

  return (
    <div className="App">
     {!logo &&  !prime && <Landingpage onselect={imgclicked}/>}
     {logo && <Live  onselect={primeclicked}/>}
     {prime &&  <Lifespace /> }
    </div>
  );
}
export default App;