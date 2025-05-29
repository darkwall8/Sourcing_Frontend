import { useState } from "react";
import Button from "../../../../components/ui/Button";
// import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_best-place.svg"
import { useTranslation } from "react-i18next";
import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import InteractiveMap from "../../../../components/ui/InteractiveMap";

function CompanyRegistrationStep3( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    const { companyLocation, setCompanyLocation } = useCompanyInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        // return !!companyLocation.trim();
        return true;
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
            <form className="flex flex-col justify-between w-7/12">
                <div className="">
                    <InteractiveMap />
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

export default CompanyRegistrationStep3;