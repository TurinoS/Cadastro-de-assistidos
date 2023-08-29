interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  innerText: string;
  className?: string;
  classNameInput?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export default function Input({
  type,
  label,
  placeholder,
  innerText,
  className = "flex flex-col gap-1",
  classNameInput,
  onChange,
  value
}: InputProps) {
  return (
    <div className={`${className}`}>
      <label className="text-lg" htmlFor={label}>
        {innerText}
      </label>
      <input
        className={`px-4 py-2 rounded-xl ${classNameInput}`}
        style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
