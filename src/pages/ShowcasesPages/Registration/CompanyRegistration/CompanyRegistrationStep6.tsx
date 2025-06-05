import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_new-entries.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import AutocompleteInput, { Option } from "../../../../components/ui/AutocompleteInput";
import Tag from "../../../../components/ui/Tag";

function CompanyRegistrationStep6( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyInternPreference, companyInternshipType, companyInternShipDuration, setCompanyInternPreference, setCompanyInternshipType, setCompanyInternShipDuration } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return companyInternPreference.length > 0 && companyInternshipType.length > 0 && !!companyInternShipDuration.trim();
    };
    const internPreferenceList = [
        {
            label: "stagiare developpeur fullstack",
            value: "fullstack"
        }
    ]
    const internshipTypeList = [
        {
            label: "academique",
            value: "school"
        },
        {
            label: "professionnel",
            value: "pro"
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

    function updateInternPreference(option: Option) {
        if(!companyInternPreference.includes(option.value)){
            setCompanyInternPreference([...companyInternPreference, option.value]);
        } else {
            setCompanyInternPreference([...companyInternPreference.filter(item => item !== option.value)]);
        }
    }

    function updateInternshipType(option: Option) {
        if(!companyInternshipType.includes(option.value)){
            setCompanyInternshipType([...companyInternshipType, option.value]);
        } else {
            setCompanyInternshipType([...companyInternshipType.filter(item => item !== option.value)]);
        }
    }


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between h-full text-xs w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="w-full">
                            <AutocompleteInput placeholder={t("company_registration.your_company_intern_preference")} options={internPreferenceList} onSelect={updateInternPreference} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {
                                internPreferenceList.filter((offer) => companyInternPreference.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                    <Tag isCloseButton={true} onClick={() => {
                                        setCompanyInternPreference([...companyInternPreference.filter(item => item !== element.value)]);
                                    }}  key={element.value} label={t(element.label)} />
                                ))
                            }
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2">
                        <div className="w-full">
                            <AutocompleteInput placeholder={t("company_registration.your_company_internship_type")} options={internshipTypeList} onSelect={updateInternshipType} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {
                                internshipTypeList.filter((offer) => companyInternshipType.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                    <Tag isCloseButton={true} onClick={() => {
                                        setCompanyInternshipType([...companyInternshipType.filter(item => item !== element.value)]);
                                    }}  key={element.value} label={t(element.label)} />
                                ))
                            }
                        </div>
                    </div>
                    {/*  */}
                    <InputText label={t("company_registration.your_company_internship_duration")} placeholder={t("company_registration.company_internship_duration_placeholder")} isRequired={true} value={companyInternShipDuration} handleChange={setCompanyInternShipDuration} showValidationErrors={isValidatedValues} />
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

export default CompanyRegistrationStep6;