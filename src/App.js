import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [buffer, setBuffer] = useState("");
  const operators = ["+", "-", "*", "/"];

  const handleNumberClick = ({ target: { value } }) => {
    setInput(() => checkInput(value, input));

    setBuffer(() => checkInput(value, buffer));
  };

  const checkInput = (value, current) => {
    if (input === "0") {
      return `${value}`;
    } else if (operators.some((oper) => oper === input)) {
      return current + value;
    }
    return current + value;
  };

  const handleClearClick = () => {
    setInput(() => "0");

    setBuffer(() => "");

    setOutput(() => "");
  };

  const handleOperatorClick = ({ target: { value } }) => {
    const containsOperator = /[*\-+/]/.test(input);
    const endsWithMinus = /-$/.test(input);

    if (output) {
      setInput(() => value);

      setBuffer(() => output + value);

      setOutput(() => "");
    } else if (!containsOperator) {
      setInput(() => value);

      setBuffer(() => buffer + value);
    } else if (value === "-" && !endsWithMinus) {
      setInput(() => value);

      setBuffer(() => buffer + value);
    } else {
      let number = buffer.replace(/\D+$/, "");

      setInput(() => value);

      setBuffer(() => number + value);
    }
  };

  const handleEqualsClick = () => {
    const lastCharacter = buffer[buffer.length - 1];

    if (/[0-9]/.test(lastCharacter)) {
      setInput(() => evaluate(buffer));

      setBuffer(() => buffer + "=");

      setOutput(() => evaluate(buffer));
    } else {
      const split = removeLastCharacter(buffer);

      setInput(() => evaluate(split));

      setBuffer(() => split + "=");

      setOutput(() => evaluate(split));
    }
  };

  const handleDecimalClick = () => {
    if (!/\.$/.test(input) && !/\.\d*/.test(input)) {
      setInput(() => input + ".");

      setBuffer(() => buffer + ".");
    }
  };

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
            {buffer}
            {output}
          </p>
          <div id="display">{input}</div>
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
