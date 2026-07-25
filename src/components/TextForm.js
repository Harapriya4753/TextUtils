import React from "react";

export default function TextForm(props) {
    const [text, setText] = React.useState("");

    
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743',display: 'inline-block'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div><br />
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: props.buttonColor }} onClick={() => setText(text.toUpperCase())}>
                    Convert to Uppercase
                </button>
                <button type="submit" className="btn btn-primary mx-2" style={{ backgroundColor: props.buttonColor }} onClick={() => setText(text.toLowerCase())}>
                    Convert to Lowercase
                </button>
                <button type="submit" className="btn btn-primary mx-2" style={{ backgroundColor: props.buttonColor }} onClick={() => setText("")}>
                    Clear Text
                </button>
                <button type="submit" className="btn btn-primary mx-2" style={{ backgroundColor: props.buttonColor }} onClick={() => setText(text.trim())}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}