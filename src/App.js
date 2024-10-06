import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";
import Switch from "react-router-dom"




function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils-Dark Mode"
    }



    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
      document.title="TextUtils-Light Mode"
    }
  }
  

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  
  return (
   <>
  
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
 
  {/* <About/> */}
  <div className="container my-3">
        
          <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert}/>
         
    
  </div>
  
  
 
  </>
  );
}


export default App;
