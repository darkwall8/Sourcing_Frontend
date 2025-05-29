import { useEffect, useState } from "react";

export type Option = {
  label: string;
  value: string;
};

function AutocompleteInput({ placeholder, options, onSelect }: { placeholder: string, options: Option[], onSelect: (option: Option) => void }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setFilteredOptions([]);
      setShowSuggestions(false);
      return;
    }
    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (option: Option) => {
    setInputValue(option.label);
    setFilteredOptions([]);
    setShowSuggestions(false);
    onSelect(option);
  };

  useEffect(() => {
    if(!inputValue.trim()) setFilteredOptions(options);
  }, [inputValue])

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border-b border-gray-400 focus:border-primary outline-none pl-4 w-full h-10"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && filteredOptions.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 z-10 max-h-48 overflow-auto shadow-lg rounded-md">
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteInput;
