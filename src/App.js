import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import Number from "./components/Number";
import Operator from "./components/Operator";
import FunctionKey from "./components/FunctionKey";

const App = () => {
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
    <div className="h-screen bg-black lg:w-1/3 mx-auto rounded-3xl text-white">
      <div className="h-screen">
        <div className="text-8xl text-right grid grid-rows-2 gap-4 h-1/3">
          <p>
            {!output && buffer}
            {output}
          </p>
          <div>{input}</div>
        </div>
        <div className="text-3xl grid grid-cols-4 content-evenly gap-4 auto-cols-auto h-2/3">
          <FunctionKey value={"AC"} onClick={handleClearClick} />
          <Operator value={"/"} onClick={handleOperatorClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Operator value={"*"} onClick={handleOperatorClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Operator value={"-"} onClick={handleOperatorClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Operator value={"+"} onClick={handleOperatorClick} />
          <Number
            value={0}
            onClick={handleNumberClick}
            className={"w-32 col-span-2"}
          />
          <Number value={"."} onClick={handleDecimalClick} />
          <Operator value={"="} onClick={handleEqualsClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
