import React, { useState } from 'react';

interface ToggleProps {
    label?: string;
    initialValue?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
                                           label = "Toggle",
                                           initialValue = false,
                                           onChange,
                                           disabled = false
                                       }) => {
    const [isOn, setIsOn] = useState<boolean>(initialValue);

    const handleToggle = () => {
        if (disabled) return;

        const newValue = !isOn;
        setIsOn(newValue);
        onChange?.(newValue);
    };

    return (
        <div className="flex items-center space-x-3">
            <button
                    type="button"
                    onClick={handleToggle}
                    disabled={disabled}
                    className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out
              ${isOn
                        ? disabled ? 'bg-blue-300' : 'bg-primary hover:bg-[#0085af]'
                        : disabled ? 'bg-gray-200' : 'bg-gray-300 hover:bg-gray-400'
                    }
              ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
                    aria-pressed={isOn}
                    aria-label={`${label} ${isOn ? 'activé' : 'désactivé'}`}
            >
                <span
                    className={`
                    inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out
                    ${isOn ? 'translate-x-6' : 'translate-x-1'}
                  `}
                />
            </button>
        </div>
    );
};

export default Toggle;