import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    
    const handleCapitalize = () => {
    if(text.length === 0) return; 
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("First letter capitalized successfully", "success");
}


    const handleClearClick = ()=>{
       
        let newText = '';

        setText(newText)
        props.showAlert("Cleared!!", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied successfully!!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully ", "success");
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
        
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize First Word</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(word=>word.length !== 0).length} words and {text.replace(/\s+/g,"").length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes will take to read this...</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
