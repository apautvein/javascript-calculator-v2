import Button from "./Button";

const FunctionKey = ({ value, onClick }) => (
  <Button
    value={value}
    onClick={onClick}
    className="bg-gray-400 text-black font-semibold col-span-3 hover:bg-gray-500"
  >
    {value}
  </Button>
);

export default FunctionKey;
