import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked!"+text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success")
        

    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleOnChange=(event)=>{
        console.log("On change!")
        setText(event.target.value)

    }
    const RemoveText = () => {
      setText('');
      props.showAlert("text area cleared","success")
      
    }
    const removeSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const[text,setText]=useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    <label for="myBox" className="form-label"></label>
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick} >Convert to uppercase</button>
    <button className="btn btn-primary btn-sm mx-2" onClick={handleLoClick} >Convert to lowercase</button>
    <button className="btn btn-primary btn-sm mx-2" onClick={RemoveText} >Remove Text</button>
    <button className="btn btn-primary btn-sm mx-2" onClick={removeSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{text.length>0?text:"Enter Something to preview it here!"}</p>
    </div>
    </>




  )
}
