import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState('');

    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Converted to uppercase", "success");
    }

    const handleLowClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Text is Converted to lower case", "success");

    }

    const handleClearClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = ('');
        setText(newText);
        props.showAlert("Text is cleared", "success");

    }

    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard", "success");

    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("The Extra Spaces is removed successfully", "success");

    }


    const handleOnChange = (event) =>{
        // console.log("On Change")
        setText(event.target.value)
    }


  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  style={{ backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>

    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your text summary</h2>
        <p>The above text has {text.split(" ").length} words and {text.length} characters</p>
        <p>You need {0.008* text.split(" ").length } Minutes to read your text </p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter something in above text box to preview it here"}</p>
      
    </div>

    </>

  )
}
