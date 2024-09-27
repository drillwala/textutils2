import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase wase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlerts("converted to uppercase","sucess");
    }
    const handleLoClick = () => {
        console.log("lowercase wase clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlerts("converted to lowercase","sucess");
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text Summary</h1>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> charaters</p>
                <p>{0.008 * text.split(" ").length} minutes to read this</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
