import { useTranslation } from "react-i18next";
import { isValidEmail } from "../../utils/validation";

function InputEmail({
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
  const { t } = useTranslation();
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  const showRequiredError = isRequired && !value && showValidationErrors;
  const showFormatError = value && !isValidEmail(value);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="font-medium">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={inputId}
        className={`border outline-none h-10 rounded-md px-4 ${
          showRequiredError || showFormatError
            ? "border-red-500"
            : "border-gray-400 focus:border-primary"
        }`}
        type="email"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      {showRequiredError && (
        <span className="text-xs text-red-500">
          {t("required") || "Ce champ est obligatoire"}
        </span>
      )}
      {showFormatError && (
        <span className="text-xs text-red-500">
          {t("invalid_email") || "Adresse e-mail invalide"}
        </span>
      )}
    </div>
  );
}

export default InputEmail;
