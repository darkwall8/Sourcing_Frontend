function InputFile({
  placeholder,
  isRequired,
  file,
  handleChange,
  showValidationErrors,
  accept,
}: {
  placeholder: string;
  isRequired: boolean;
  file: File | null;
  handleChange: (file: File | null) => void;
  showValidationErrors?: boolean;
  accept?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="relative cursor-pointer border border-gray-400 rounded-md h-10 flex items-center px-4 justify-between hover:bg-blue-50">
        <span className="text-gray-600">{file?.name || placeholder}</span>
        <img src="/icons" alt="file" />
        <input
          type="file"
          accept={accept}
          onChange={(e) => handleChange(e.target.files?.[0] ?? null)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>
      {showValidationErrors && isRequired && !file && (
        <span className="text-xs text-red-500">Ce champ est obligatoire</span>
      )}
    </div>
  );
}

export default InputFile;
