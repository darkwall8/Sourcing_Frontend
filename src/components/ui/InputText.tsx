function InputText({
    label,
    placeholder,
    isRequired,
    value,
    handleChange,
    showValidationErrors,
  }: {
    label: string;
    placeholder: string;
    isRequired: boolean;
    value: string;
    handleChange: (e: string) => void;
    showValidationErrors?: boolean;
  }) {
    const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="font-medium">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        <input
          id={inputId}
          className="border border-gray-400 outline-primary rounded-md h-10 pl-4"
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />
        {showValidationErrors && isRequired && !value && (
          <span className="text-xs text-red-500">Ce champ est obligatoire</span>
        )}
      </div>
    );
  }

  export default InputText;