const Button = ({ value, onClick, className = "" }) => (
  <button
    value={value}
    onClick={onClick}
    className={`rounded-full bg-neutral-800 hover:bg-neutral-900 ${
      value === 0 ? "w-3/4" : ""
    } ${
      value === "AC" ? "w-2/3" : ""
    } w-20 h-20 place-self-center ${className}`}
  >
    {value}
  </button>
);

export default Button;
