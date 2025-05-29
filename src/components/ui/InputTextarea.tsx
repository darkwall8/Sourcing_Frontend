interface InputTextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: string) => void;
  isRequired?: boolean;
  showValidationErrors?: boolean;
}

function InputTextArea({
  label,
  placeholder,
  value,
  handleChange,
  isRequired = false,
  showValidationErrors = false,
}: InputTextAreaProps) {
  const hasError = isRequired && showValidationErrors && value.trim() === "";

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      <textarea
        className={`w-full p-2 border rounded-lg outline-primary resize-none min-h-[100px] ${
          hasError ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {hasError && (
        <span className="text-red-500 text-sm">
          Ce champ est requis.
        </span>
      )}
    </div>
  );
}

export default InputTextArea;
