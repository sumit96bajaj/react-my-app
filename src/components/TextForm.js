import React, { useState } from "react";
export default function TextForm(props) {
  const buttonColor=(mode)=>{
    if(mode==="green" || mode==="dark"){
      return "light"
    }
    else
    return "dark"
  }
  const textColor=(mode)=>{
    if(mode==="green" || mode==="dark"){
      return "white"
    }
    else
    return "black"
  }
  const backgroundColor=(mode)=>{
    if(mode==="green"){
      return "#abab9a"
    }
    else if(mode==="dark"){
      return "#0d2845"
    }
    return "white"
  }
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);

    console.log("Text area changed");
  };
  const handleUpClickLowercase = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  };
  const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleConverttoCamelcase = () => {
    const textValue = text.split(" ");
    let finalString = "";
    // eslint-disable-next-line no-undef
    textValue.forEach((element) => {
      const ele = element.split("");
      ele[0] = ele[0].toUpperCase();
      let up = ele.join("");
      finalString = finalString + up;
    });
    // let msg = new SpeechSynthesisUtterance();
    // msg.text = text;
    // window.speechSynthesis.speak(msg);
    setText(finalString);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container"  style={{backgroundColor:backgroundColor(props.mode),color:textColor(props.mode)}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:backgroundColor(props.mode),color:textColor(props.mode)}}
          ></textarea>
        </div>
        <button className={`btn btn-${buttonColor(props.mode)} mx-3`} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${buttonColor(props.mode)} mx-3`} onClick={handleUpClickLowercase}>
          Convert to lowercase
        </button>
        <button
          className={`btn btn-${buttonColor(props.mode)} mx-3`}
          onClick={handleConverttoCamelcase}
        >
          Convert to camelcase
        </button>
        <button className={`btn btn-${buttonColor(props.mode)} mx-3`} onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className="classname container my-3" style={{color:textColor(props.mode)}}>
        <h1>Your text summary </h1>
        <p>
          Contains {text.length} characters and {text.split(" ").length} words
        </p>
        <h1>Preview</h1>
        <div className="container my-3 border" >
          
        <p>Camelcase text {text}</p>
        </div>
      
      </div>
    </>
  );
}
