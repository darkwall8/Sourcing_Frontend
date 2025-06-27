import { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_building.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import { isValidEmail } from "../../../../utils/validation";
import InputDropdown from "../../../../components/ui/InputDropdown";
import API from "../../../../utils/API";
import InputNumber from "../../../../components/ui/InputNumber";

function CompanyRegistrationStep1( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyName, companyPhoneNumber, companySize, companyDomain, companyEmail, setCompanyName, setCompanyPhoneNumber, setCompanyDomain, setCompanySize, setCompanyEmail } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyName.trim() &&
               !!companySize.trim() &&
               !!companyPhoneNumber.trim() &&
               !!companyDomain.trim() &&
               isValidEmail(companyEmail);
    };

    const [companyActivitySectorList, setCompanyActivitySectorList] = useState([])
    const api = new API();

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit("next");
        } else {
            console.warn("Validation failed");
        }
    }

    useEffect(() => {
        api.getData(api.apiUrl + "/sector/all")
        .then((res) => {
            console.log(res);
            setCompanyActivitySectorList(res.map((sector: {
                name: string,
                id: string
            }) => {
                return {
                    value: sector.id,
                    name: sector.name
                }
            }))
        }).catch((err) => Error(err));
    }, [])

    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between h-full text-xs w-full">
                <div className="flex flex-col gap-4">
                    <InputText label={t("company_registration.your_company_name")} placeholder={t("company_registration.company_name_placeholder")} isRequired={true} value={companyName} handleChange={setCompanyName} showValidationErrors={isValidatedValues} />
                    <InputText label={t("company_registration.your_company_phone_number")} placeholder={t("company_registration.company_phone_number_placeholder")} isRequired={true} value={companyPhoneNumber} handleChange={setCompanyPhoneNumber} showValidationErrors={isValidatedValues} />
                    <InputNumber label={t("company_registration.your_company_size")} placeholder={t("company_registration.company_size_placeholder")} isRequired={true} value={companySize} handleChange={setCompanySize} showValidationErrors={isValidatedValues} />
                    {/* <InputText label={t("company_registration.your_company_domain")} placeholder={t("company_registration.company_domain_placeholder")} isRequired={true} value={companyDomain} handleChange={setCompanyDomain} showValidationErrors={isValidatedValues} /> */}
                    <InputDropdown label={t("company_registration.your_company_domain")} placeholder={t("company_registration.company_domain_placeholder")} isRequired={true} value={companyDomain} handleChange={setCompanyDomain} showValidationErrors={isValidatedValues} options={companyActivitySectorList} />
                    <InputText label={t("company_registration.your_company_email")} placeholder={t("company_registration.company_email_placeholder")} isRequired={true} value={companyEmail} handleChange={setCompanyEmail} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4 py-2">
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="h-full md:block hidden">
                <img className="h-full" src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep1;