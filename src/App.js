import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  };
  const [checkBox1Checked,setCheckBox1Changed]=useState(false)
  const [checkBox2Checked,setCheckBox2Changed]=useState(false)

  const blackMode = () => {
    if (mode!=="dark") {
      if(checkBox2Checked){
        setCheckBox2Changed(false);
      }
      setCheckBox1Changed(true)
      setMode("dark");
      document.body.style.backgroundColor = "#0d2845";
      // showAlert(" Dark mode has been enabled","success")
    } else {
      setCheckBox1Changed(false)
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert(" Light mode has been enabled","success")

    }
  };
  const greenMode=()=>{
    if(mode!=="green"){
      if(checkBox1Checked){
        setCheckBox1Changed(false);
      }
      console.log(checkBox2Checked)
      setCheckBox2Changed(true)
      setMode("green");
      document.body.style.backgroundColor = "#abab9a";
    }else{
      setCheckBox2Changed(false)
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
 
  return (
    <>
      <Navbar
        title="Sumit@co"
        hometext="Sumit's home"
        mode={mode}
        blackMode={blackMode}
        greenMode={greenMode}
        checkBox1Checked={checkBox1Checked}
        checkBox2Checked={checkBox2Checked}

      ></Navbar>
      {/* <Alert alert={alert}></Alert> */}
      <div className="container" my-3="true">
        <TextForm
          heading="Enter the text to analyse below"
          mode={mode}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
