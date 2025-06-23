interface ToggleProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
}

function Toggle(
    {
        value = false,
        onChange,
        disabled = false
    } : ToggleProps
) {
    const handleToggle = (newValue: boolean) => {
        console.log(newValue);
        if (!disabled) {
            onChange!(newValue);
        }
    };

    return (
        <div className="flex items-center space-x-3">
            <button
                    type="button"
                    onClick={() => handleToggle(!value)}
                    disabled={disabled}
                    className={`
              relative inline-flex h-6 max-lg:h-4 w-11 max-lg:w-8  items-center rounded-full transition-colors duration-200 ease-in-out
              ${value
                        ? disabled ? 'bg-blue-300' : 'bg-primary hover:bg-[#0085af]'
                        : disabled ? 'bg-gray-200' : 'bg-gray-300 hover:bg-gray-400'
                    }
              ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
                    aria-pressed={value}
            >
                <span
                    className={`
                    inline-block h-4 w-4 max-lg:h-2.5 max-lg:w-2.5 transform rounded-full bg-white transition-transform duration-200 ease-in-out
                    ${value ? 'translate-x-6 max-lg:translate-x-4.5' : 'translate-x-1'}
                  `}
                />
            </button>
        </div>
    );
};

export default Toggle;