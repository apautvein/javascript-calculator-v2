import './App.css';
import { useState } from 'react';

function App() {
const [input, setInput] = useState("0"); 
const [output, setOutput] = useState(""); 
const [buffer, setBuffer] = useState(""); 
const operators = ["+", "-", "*", "/"];

  const handleNumberClick = ({target: {value}}) => {
    setInput(() => {
      checkInput(value, input); 
    }); 

    setBuffer(() => {
      checkInput(value, buffer); 
    });
  }

  const checkInput = (value, current) => {
    if (input === "0") {
      return `${value}`;
    } else if (operators.some((oper) => oper === input)) {
      return current += value;
    }
    return current += value; 
  }; 

  handleClearClick(clear) {
    setState({ input: "0", output: "", buffer: "" });
  }

  handleOperatorClick(e) {
    const { value } = e.target;
    const containsOperator = /[\*\-\+\/]/.test(state.input);
    const endsWithMinus = /\-$/.test(state.input);
    if (state.output) {
      setState((state) => {
        return { input: value, buffer: (state.output += value), output: "" };
      });
    } else if (!containsOperator) {
      setState((state) => {
        return { input: value, buffer: (state.buffer += value) };
      });
    } else if (value === "-" && !endsWithMinus) {
      setState((state) => {
        return { input: value, buffer: (state.buffer += value) };
      });
    } else {
      let number = state.buffer.replace(/\D+$/, "");
      setState((state) => {
        return { input: value, buffer: (number += value) };
      });
    }
  }

  handleEqualsClick() {
    const lastCharacter = state.buffer[state.buffer.length - 1];

    if (/[0-9]/.test(lastCharacter)) {
      setState((state) => {
        return {
          output: math.evaluate(state.buffer),
          input: math.evaluate(state.buffer),
          buffer: (state.buffer += "=")
        };
      });
    } else {
      const split = removeLastCharacter(state.buffer);
      setState({
        output: math.evaluate(split),
        input: math.evaluate(split),
        buffer: (split += "=")
      });
    }
  }

  handleDecimalClick() {
    if (!/\.$/.test(state.input) && !/\.\d*/.test(state.input)) {
      setState((state) => {
        return { buffer: (state.buffer += "."), input: (state.input += ".") };
      });
    }
  }
  const removeLastCharacter = (string) => {
    let split = string.split("");
    split.pop();
    return split.join("");
  };
  return (
    <div id="container">
          <div id="calculator">
            <div id="input-area">
              <p>
                {state.buffer}
                {state.output}
              </p>
              <div id="display">{state.input}</div>
            </div>
            <div id="buttons">
              <button id="clear" onClick={handleClearClick}>
                Clear
              </button>
              <button id="divide" value="/" onClick={handleOperatorClick}>
                /
              </button>
              <button id="seven" value="7" onClick={handleNumberClick}>
                7
              </button>
              <button id="eight" value="8" onClick={handleNumberClick}>
                8
              </button>
              <button id="nine" value="9" onClick={handleNumberClick}>
                9
              </button>
              <button id="multiply" value="*" onClick={handleOperatorClick}>
                *
              </button>
              <button id="four" value="4" onClick={handleNumberClick}>
                4
              </button>
              <button id="five" value="5" onClick={handleNumberClick}>
                5
              </button>
              <button id="six" value="6" onClick={handleNumberClick}>
                6
              </button>
              <button id="subtract" value="-" onClick={handleOperatorClick}>
                -
              </button>
              <button id="one" value="1" onClick={handleNumberClick}>
                1
              </button>
              <button id="two" value="2" onClick={handleNumberClick}>
                2
              </button>
              <button id="three" value="3" onClick={handleNumberClick}>
                3
              </button>
              <button id="add" value="+" onClick={handleOperatorClick}>
                +
              </button>
              <button id="zero" value="0" onClick={handleNumberClick}>
                0
              </button>
              <button id="decimal" onClick={handleDecimalClick}>
                .
              </button>
              <button id="equals" onClick={handleEqualsClick}>
                =
              </button>
            </div>
          </div>
        </div>
  );
}

export default App;
