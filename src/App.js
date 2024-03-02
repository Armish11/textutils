
// import {
//   BrowserRouter,
//   Link,
//   Route,
//   Routes,
// } from "react-router-dom";

import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';

// import About  from './Components/About';



function App() {
  const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type,
  }
  )
setTimeout(() => {
  setAlert(null);
},2000);
  
}
  const[text, changetxt]=useState('Enable dark mode')
const[mode, setmode]= useState('light');//Whether dark mode is enabled or not?
const toggleMode=()=>{
  if(mode==='light'){
    changetxt('Enable light mode')
    setmode('dark');
    document.body.style.backgroundColor='#052c65';
    showAlert("dark mode has been enabled","success");
// document.title="TextUtils-Dark Mode"    
  }
  else{
    changetxt('Enable dark mode');
    setmode('light');
    document.body.style.backgroundColor='white';
showAlert("light mode has been enabled","success");
// document.title='TextUtils-Light Mode'

  }
}

//   const[gtext, gchangetxt]=useState('Enable green mode')
// const[gmode, gsetmode]= useState('red');//Whether green mode is enabled or not?
// const gtoggleMode=()=>{
//   if(gmode==='red'){
//     gchangetxt('Enable red mode')
//     gsetmode('green');
//     document.body.style.backgroundColor='#65a565';
//     showAlert("Green mode has been enabled","success");

    
//   }
//   else{
//     gchangetxt('Enable green mode');
//     gsetmode('red');
//     document.body.style.backgroundColor='red';
// showAlert("Red mode has been enabled","success");
//   }
 
// }

  return (
  <>  
    {/*<BrowserRouter basename="/textutils">*/}
<Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} text={text} /*gmode={gmode} gtoggleMode={gtoggleMode} gtext={gtext}*//>
{/* <Navbar/> */}

<Alert alert={alert}/>
 <div className="container my-3"> 
  {/* <Routes>*/}
       
         
<Textform mode={mode}  toggleMode={toggleMode} /*gmode={gmode} gtoggleMode={gtoggleMode}*/ heading={`Try TextUtils-Word Counter, Character Counter, Remove extra spaces`} showAlert={showAlert} />
 </div>

 </>


  
      );

}
export default App;

