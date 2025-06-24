import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/ui/InputText";
import InputTextArea from "../../../components/ui/InputTextarea";
import InputDropdown from "../../../components/ui/InputDropdown";


export interface formDataType { title: string, description: string, location: string, duration: string, domain: string }

function AddOfferForm({ onSubmit }: {
  onSubmit: (formData: formDataType
  ) => void
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [domain, setDomain] = useState("");
  const [isValidatedValues, setIsValidatedValues] = useState(false);
  const { t } = useTranslation();

  const domainOptions = [
    { label: "Développement", value: "Développement" },
    { label: "Réseau", value: "Réseau" },
    { label: "DevOps", value: "DevOps" },
    { label: "Design", value: "Design" },
    { label: "Marketing", value: "Marketing" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    if (onSubmit!) {
      e.preventDefault();
      onSubmit({ title, description, location, duration, domain })
    } else {
      e.preventDefault();
      console.log("else...")
      console.log({ title, description, location, duration, domain });
      setIsValidatedValues(true);
      if (isValid()) {
        alert("Offre ajoutée avec succès !");
        setIsValidatedValues(false);
        setTitle("");
        setDescription("");
        setLocation("");
        setDuration("");
        setDomain("");
      } else {
        console.warn("Validation failed !");
      }
    }
  };

  const isValid = () => {
    return !!title.trim() && !!description.trim() && !!location.trim() && !!duration.trim() && !!domain.trim();
  };

  return (
    <div className="p-8 h-full w-full">
      <h1 className="text-3xl font-semibold text-primary mb-6">{t("dashboard.add_offer.add_new_offer")}</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-6 border border-usual_light_purple">
        <InputText label={t("dashboard.add_offer.title")} placeholder={t("dashboard.add_offer.title_placeholder")} isRequired={true} value={title} handleChange={setTitle} showValidationErrors={isValidatedValues} />
        <InputTextArea label={t("dashboard.add_offer.description")} placeholder={t("dashboard.add_offer.description_placeholder")} isRequired={true} value={description} handleChange={setDescription} showValidationErrors={isValidatedValues} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText label={t("dashboard.add_offer.location")} placeholder={t("dashboard.add_offer.location_placeholder")} isRequired={true} value={location} handleChange={setLocation} showValidationErrors={isValidatedValues} />
          <InputText label={t("dashboard.add_offer.duration")} placeholder={t("dashboard.add_offer.duration_placeholder")} isRequired={true} value={duration} handleChange={setDuration} showValidationErrors={isValidatedValues} />
        </div>
        <InputDropdown label={t("dashboard.add_offer.domain")} placeholder={t("dashboard.add_offer.domain_placeholder")} isRequired={true} value={domain} handleChange={setDomain} showValidationErrors={isValidatedValues} options={domainOptions} />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 cursor-pointer hover:bg-primary/80 rounded-md hover:bg-opacity-90 transition"
        >
          {t("dashboard.add_offer.add_offer")}
        </button>
      </form>
    </div>
  );
}

export default AddOfferForm;
