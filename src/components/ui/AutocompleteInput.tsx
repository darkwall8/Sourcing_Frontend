import { useEffect, useRef, useState } from "react";

export type Option = {
  label: string;
  value: string;
};

function AutocompleteInput({
  placeholder,
  options,
  onSelect,
}: {
  placeholder: string;
  options: Option[];
  onSelect: (option: Option) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    onSelect(option);
    setInputValue("");
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (!inputValue.trim()) setFilteredOptions(options);
  }, [inputValue, options]);

  // Ferme la liste si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const suggestionListId = "autocomplete-suggestion-list";

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input
        type="text"
        role="combobox"
        aria-expanded={showSuggestions}
        aria-controls={suggestionListId}
        aria-autocomplete="list"
        className="border-b border-gray-400 focus:border-primary outline-none pl-4 w-full h-10 transition duration-200 ease-in-out"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && filteredOptions.length > 0 && (
        <ul
          id={suggestionListId}
          className="absolute w-full bg-white border mt-1 z-10 max-h-48 overflow-auto shadow-lg rounded-md"
          role="listbox"
        >
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors"
              onClick={() => handleSelect(opt)}
              role="option"
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
