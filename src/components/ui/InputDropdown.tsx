type Option = {
    label: string;
    value: string;
  };

  function InputDropdown({
    label,
    placeholder,
    isRequired,
    value,
    handleChange,
    showValidationErrors,
    options,
  }: {
    label: string;
    placeholder: string;
    isRequired: boolean;
    value: string;
    handleChange: (val: string) => void;
    showValidationErrors?: boolean;
    options: Option[];
  }) {
    const inputId = `dropdown-${label.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="font-medium">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        <select
          id={inputId}
          className={`${value == "" ? "text-black/50" : "text-black"} border border-gray-400 outline-primary rounded-md h-10 pl-4`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {showValidationErrors && isRequired && !value && (
          <span className="text-xs text-red-500">Ce champ est obligatoire</span>
        )}
      </div>
    );
  }

  export default InputDropdown;