import Button from "./Button";

const Operator = ({ value, onClick }) => (
  <Button
    value={value}
    onClick={onClick}
    className={"bg-[#f69907] hover:bg-amber-600"}
  ></Button>
);
export default Operator;
