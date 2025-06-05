import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_building.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import { isValidEmail } from "../../../../utils/validation";

function CompanyRegistrationStep1( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyName, companyPhoneNumber, companyDomain, companyEmail, setCompanyName, setCompanyPhoneNumber, setCompanyDomain, setCompanyEmail } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyName.trim() && !! companyPhoneNumber.trim() && !!companyDomain.trim() && isValidEmail(companyEmail);
      };

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit("next");
        } else {
            console.warn("Validation failed");
        }
    }


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between h-full text-xs w-full">
                <div className="flex flex-col gap-4">
                    <InputText label={t("company_registration.your_company_name")} placeholder={t("company_registration.company_name_placeholder")} isRequired={true} value={companyName} handleChange={setCompanyName} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_phone_number")} placeholder={t("company_registration.company_phone_number_placeholder")} isRequired={true} value={companyPhoneNumber} handleChange={setCompanyPhoneNumber} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_domain")} placeholder={t("company_registration.company_domain_placeholder")} isRequired={true} value={companyDomain} handleChange={setCompanyDomain} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_email")} placeholder={t("company_registration.company_email_placeholder")} isRequired={true} value={companyEmail} handleChange={setCompanyEmail} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4">
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="h-full">
                <img className="h-full" src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep1;