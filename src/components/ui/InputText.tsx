import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";

function InputText({
  label,
  placeholder,
  isRequired,
  value,
  type,
  handleChange,
  showValidationErrors,
}: {
  label: string;
  placeholder: string;
  isRequired: boolean;
  value: string;
  type?: string;
  handleChange: (e: string) => void;
  showValidationErrors?: boolean;
}) {
  const { t } = useTranslation();
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const [showPassword, setShowPassword] = useState(false);

  // Vérifie les critères du mot de passe
  const validatePassword = (password: string) => {
    const isLengthValid = password.length >= 10;
    const startsWithUppercase = /\b\w*[A-Z]\w*\b/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);
    return {
      isLengthValid,
      startsWithUppercase,
      hasNumber,
      hasSymbol,
      isValid: isLengthValid && startsWithUppercase && hasNumber && hasSymbol,
    };
  };

  const passwordValidation = type === "password" ? validatePassword(value) : null;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="font-medium">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          className="border border-gray-400 outline-primary rounded-md h-10 pl-4 pr-10 w-full"
          type={type === "password" && showPassword ? "text" : type || "text"}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {/* Message d'erreur général */}
      {showValidationErrors && isRequired && !value && (
        <span className="text-xs text-red-500">Ce champ est obligatoire</span>
      )}

      {/* Messages de validation du mot de passe */}
      {type === "password" && value && showValidationErrors && (
        <div className="text-xs text-gray-600 mt-1 space-y-1">
          <p className={passwordValidation!.isLengthValid ? "text-green-600" : "text-red-500"}>
            • { t("regex_10_caracter") }
          </p>
          <p className={passwordValidation!.startsWithUppercase ? "text-green-600" : "text-red-500"}>
            • { t("regex_less_one_uppercase_letter") }
          </p>
          <p className={passwordValidation!.hasNumber ? "text-green-600" : "text-red-500"}>
            • { t("regex_one_number") }
          </p>
          <p className={passwordValidation!.hasSymbol ? "text-green-600" : "text-red-500"}>
            • { t("regex_one_symbol") }
          </p>
        </div>
      )}
    </div>
  );
}

export default InputText;
