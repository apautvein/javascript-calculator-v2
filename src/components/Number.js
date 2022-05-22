import Button from "./Button";

const Number = ({ value, onClick, className = "" }) => (
  <Button value={value} onClick={onClick} className={className}>
    {value}
  </Button>
);

export default Number;
