import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/icons/hammer.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import InputDropdown from "../../../../components/ui/InputDropdown";

function CompanyRegistrationStep4( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyRCCM, companyNIU, companyCommercialRegister, companyLegalStatut, setCompanyRCCM, setCompanyNIU, setCompanyCommercialRegister, setCompanyLegalStatut } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyRCCM.trim() && !!companyNIU.trim() && !!companyCommercialRegister.trim() && !!companyLegalStatut.trim();
    };
    const companyLegalStatusList = [
        { value: "SARL", label: t("legalStatus.sarl") },
        { value: "SA", label: t("legalStatus.sa") },
        { value: "SAS", label: t("legalStatus.sas") },
        { value: "SNC", label: t("legalStatus.snc") },
        { value: "EI", label: t("legalStatus.ei") },
        { value: "EURL", label: t("legalStatus.eurl") },
        { value: "GIE", label: t("legalStatus.gie") },
    ];

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
                    <InputText label={t("company_registration.your_company_RCCM")} placeholder={t("company_registration.company_RCCM_placeholder")} isRequired={true} value={companyRCCM} handleChange={setCompanyRCCM} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_NIU")} placeholder={t("company_registration.company_NUI_placeholder")} isRequired={true} value={companyNIU} handleChange={setCompanyNIU} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_commercial_register")} placeholder={t("company_registration.company_commercial_register_placeholder")} isRequired={true} value={companyCommercialRegister} handleChange={setCompanyCommercialRegister} showValidationErrors={isValidatedValues} />
                    <InputDropdown label={t("company_registration.your_company_legal_statut")} placeholder={t("company_registration.company_legal_statut_placeholder")} isRequired={true} value={companyLegalStatut} handleChange={setCompanyLegalStatut} showValidationErrors={isValidatedValues} options={companyLegalStatusList} />
                </div>
                <div className="flex gap-4 p-2">
                    <Button label={t("preview")} handleClick={() => handleSubmit("prev")} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="h-[65vh] md:block hidden">
                <img className="" src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep4;