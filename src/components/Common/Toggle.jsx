const Toggle = ({
  checked = false,
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
        disabled
          ? "cursor-not-allowed bg-gray-300"
          : checked
          ? "bg-blue-600"
          : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
          checked ? "left-8" : "left-1"
        }`}
      />
    </button>
  );
};

export default Toggle;