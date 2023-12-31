import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';




function App() {

  const [mode, setMode] = useState('light'); // darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=>{
         setAlert(null);
      },1500);

 

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils-Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode'
      


    }
  }

  return (
    <>

      
        {/* <Navbar title='TEXTUTILS' aboutText='About TextUtils'/> */}
        <Navbar title='TEXTUTILS' mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert}/>

        <div className="container my-3">
          

            <TextForm showAlert={showAlert} heading="Enter The Text to Analyze below" mode={mode} />
                
         

        </div>
      
    </>
  );
}

export default App;
