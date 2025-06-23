import { useState } from "react";
import Button from "../../../../components/ui/Button";
import check from "/icons/check.svg"
// import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_add-information.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import Tag from "../../../../components/ui/Tag";
import AutocompleteInput, { Option } from "../../../../components/ui/AutocompleteInput";
import InputTextArea from "../../../../components/ui/InputTextarea";

function CompanyRegistrationStep7( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyDescription, companyInternBenefit, hasInternOpportunity, setCompanyDescription, setCompanyInternBenefit, setHasInternOpportunity } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!companyDescription.trim() && companyInternBenefit.length > 0;
    };
    const internBenefitList = [
        {
            label: "frontend",
            value: "front"
        }
    ]

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit("next");
        } else {
            console.warn("Validation failed");
        }
    }

    function updatePreferenceList(option: Option) {
        if(!companyInternBenefit.includes(option.value)){
            setCompanyInternBenefit([...companyInternBenefit, option.value]);
        } else {
            setCompanyInternBenefit([...companyInternBenefit.filter(item => item !== option.value)]);
        }
    }


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between h-full text-xs w-full">
                <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex flex-col gap-4">
                        <InputTextArea label={t("company_registration.your_company_description")} placeholder={t("company_registration.company_description_placeholder")} isRequired={true} value={companyDescription} handleChange={setCompanyDescription} showValidationErrors={isValidatedValues} />
                        <div>
                            <p>{ t("company_registration.your_company_intern_benefit") }</p>
                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <div className="w-full">
                                    <AutocompleteInput placeholder={t("company_registration.company_intern_benefit_placeholder")} options={internBenefitList} onSelect={updatePreferenceList} />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        internBenefitList.filter((offer) => companyInternBenefit.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                            <Tag isCloseButton={true} onClick={() => {
                                                setCompanyInternBenefit([...companyInternBenefit.filter(item => item !== element.value)]);
                                            }}  key={element.value} label={t(element.label)} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <p>{ t("company_registration.your_company_has_opportunity_after_internship") }</p>
                        <div className="flex gap-8">
                            <div onClick={() => setHasInternOpportunity(true)} className="flex gap-2 justify-center items-center cursor-pointer">
                                <p>{ t("yes") }</p>
                                <div className={`${hasInternOpportunity ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                    <img src={check} alt="check" />
                                </div>
                            </div>
                            {/*  */}
                            <div onClick={() => setHasInternOpportunity(false)} className="flex gap-2 justify-center items-center cursor-pointer">
                                <p>{ t("no") }</p>
                                <div className={`${!hasInternOpportunity ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                    <img src={check} alt="check" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit("prev")} styleIndex={1} isActivated={true} />
                    <Button label={t("finish")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className=" md:block hidden">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep7;