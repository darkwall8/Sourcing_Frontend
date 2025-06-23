import { useTranslation } from "react-i18next";

function InputNumber({
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

  const showRequiredError = isRequired && !value && showValidationErrors;

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`border outline-none h-10 rounded-md px-4 ${
          showRequiredError
            ? "border-red-500"
            : "border-gray-400 focus:border-primary"
        }`}
        type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      {showRequiredError && (
        <span className="text-xs text-red-500">
          {t("required") || "Ce champ est obligatoire"}
        </span>
      )}
    </div>
  );
}

export default InputNumber;
