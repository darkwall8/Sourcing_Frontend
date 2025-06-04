import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_building.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import { isValidPassword } from "../../../../utils/validation";

function CompanyRegistrationStep2( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyAdresse, companyWebSite, companyCorporate, companyPassword, setCompanyAdresse, setCompanyWebSite, setCompanyCorporate, setCompanyPassword } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyAdresse.trim() && !!companyWebSite.trim() && !!companyCorporate.trim() && isValidPassword(companyPassword);
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
        <div className="flex justify-between h-full">
            <form className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4">
                    <InputText label={t("company_registration.your_company_addresse")} placeholder={t("company_registration.company_addresse_placeholder")} isRequired={true} value={companyAdresse} handleChange={setCompanyAdresse} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_website")} placeholder={t("company_registration.company_website_placeholder")} isRequired={true} value={companyWebSite} handleChange={setCompanyWebSite} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_corporate")} placeholder={t("company_registration.company_corporate_placeholder")} isRequired={true} value={companyCorporate} handleChange={setCompanyCorporate} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_password")} type="password" placeholder={t("student_registration.password_placeholder")} isRequired={true} value={companyPassword} handleChange={setCompanyPassword} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit("prev")} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep2;