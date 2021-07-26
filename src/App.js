import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";
const App = (props) => {
  const texts = props.title.toUpperCase();

  // RESULT
  let [result, setResult] = useState("");

  const [bgColorsInput, setBgColorsInput] = useState("");
  const handlerChangeBgColor = (colors) => {
    setBgColorsInput(colors);
  };

  const handlerNumber = (number) => {
    console.log('WKWKKW',number)
    if (number === 'reset') {
      resetHandler()
    } else if (number === 'delete') {
      handlerDelete()
    } else if (number === 'equal') {
      calculate()
    } else {
      setResult(result + number)
    }
  }

  const handlerDelete = () => {
      setResult(result.slice(0, -1))
  }

  const resetHandler = () => {
    setResult("")
  }

  const calculate = () => {
    let resultNumber = ''
    if (result.includes('--')) {
      resultNumber = result.replace('--', '+')
    } else {
      resultNumber = result
    }

    try {
      // eslint-disable-next-line
      setResult(eval(resultNumber))
    } catch (e) {
      setResult('Error')
    }
  }

  return (
    <div className="App">
      <div className="title-header">
        <h1>{texts}</h1>
      </div>
      <Container>
        <Display 
          handleChangeBgInput={handlerChangeBgColor} 
          handlerResultValue={result}
        />
        <Input
          changeBgColorsInput={bgColorsInput}
          handlerChangeInput={handlerNumber}
        />
      </Container>
    </div>
  );
};
App.defaultProps = {
  title: "calculator App",
};
export default App;
