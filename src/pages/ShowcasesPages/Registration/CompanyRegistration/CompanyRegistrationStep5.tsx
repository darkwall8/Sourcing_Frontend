import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/icons/hammer.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import InputFile from "../../../../components/ui/InputFile";

function CompanyRegistrationStep5( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyTaxConformityCertificate, companyStatisticalDeclarationNumber, setCompanyTaxConformityCertificate, setCompanyStatisticalDeclarationNumber } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyTaxConformityCertificate && !!companyStatisticalDeclarationNumber.trim();
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
                    <InputFile label={t("company_registration.your_company_tax__comformity_certificate")} placeholder={t("company_registration.company_tax__comformity_certificate_placeholder")} isRequired={false} file={companyTaxConformityCertificate} handleChange={setCompanyTaxConformityCertificate} />
                    <InputText label={t("company_registration.your_company_statistical_declaration")} placeholder={t("company_registration.company_statistical_declaration_placeholder")} isRequired={true} value={companyStatisticalDeclarationNumber} handleChange={setCompanyStatisticalDeclarationNumber} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit("prev")} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className=" md:block hidden">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep5;