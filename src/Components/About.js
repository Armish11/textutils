import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })
    // const [textbt,settextbt]=useState('Enable dark mode')
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black' && myStyle.backgroundColor==='white')
    //     {
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //          } )
    //          settextbt('Enable light mode');
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //          } )
    //          settextbt('Enable dark mode');

    //     }
    let myStyle={
     color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'rgb(29 74 137)':'white',

    }
    
  return (
    <div className='container'>
        <h2 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <span style={{fontWeight:"500",}}> Analyze your text</span>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
      Textutils will carefully analyze your text to provide insightful feedback and identify key themes or areas for improvement.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <span style={{fontWeight:"500",}}>Free to use</span>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body" style={myStyle}>
      Feel free to use my analysis of your text to enhance your writing skills and further develop your ideas. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
       <span style={{fontWeight:"500",}}> Browser Compatible</span>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
      Rest assured, my analysis is browser compatible, meaning you can access it seamlessly across various web browsers without any compatibility issues. 
      </div>
    </div>
  </div>
</div>
{/* <button className='my-2 btn btn-primary' onClick={toggleStyle}>{textbt}</button> */}
    </div>
      )
}
