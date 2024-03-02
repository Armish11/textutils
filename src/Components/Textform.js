import React, {useState} from 'react'

export default function Textform(props) {
    const[text,settext]=useState('');

    const handleonchange=(event)=>{
console.log("text on change");
settext(event.target.value);

    }
    const handleupclick=()=>{
        console.log("Uppercase was clicked"+ text);
        let newtext=text.toUpperCase()
        settext(newtext);
        props.showAlert("Converted to Uppercase","success")
    }
    const handledownclick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to lowercase","success")
    }
    const handlereplace=()=>{
        let replace=prompt('What word you want to replace?');
        let replacewith=prompt('Enter the word you want in that place.');
        let newtext=text.replaceAll(replace,replacewith);
        settext(newtext);
        props.showAlert("Text has been replaced","success")
    }
    const handlecleartext=()=>{
        let newtext=""
        settext(newtext);
        props.showAlert("Text has been cleared","success")
    }
    const handlecopytext=(event)=>{
        let text1=document.getElementById("myBox");
        text1.select();
        text1.setSelectionRange(0,Infinity);
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Text has been copied to clipboard","success")
    }
const removeextraspace=()=>{
let text2=/[ ]+/g;
let newtext=text.replace(text2," ");
settext(newtext);
props.showAlert("Extra whitespaces has been removed","success")
}
    
  return (
    <>
    <div>
<div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <label htmlFor="myBox" className="form-label" ><h2 className='mb-4'>{props.heading}</h2></label>
  <textarea className="form-control form-control-sm" id="myBox" value={text} onChange={handleonchange} rows="8"
style={{backgroundColor:props.mode==='dark'?'#6e6ba7':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<div className='container my-3'>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleupclick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-1  my-1" disabled={text.length===0} onClick={handledownclick}>Convert to Lowercase</button>
<button className=" btn btn-primary mx=1  my-1" disabled={text.length===0} onClick={handlereplace}>Replace Words</button>
<button className="btn btn-primary mx-1  my-1" disabled={text.length===0} onClick={handlecleartext}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlecopytext}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={removeextraspace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
        <p className='my-2' >{text===""?0:text.trim().split(/[ ]+/g).length} words and {text.trim().replace(/[ ]+ /g, '').length} characters.</p>
        <p>{0.008 * (text===""?0:text.trim().split(/[ ]+/g).length) } Minutes to read</p>
        <p>{text===""?0:text.trim().split('. ').length} number of sentences</p>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </div>
    </>
  )
}
