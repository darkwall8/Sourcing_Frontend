// import { useState } from "react";
import Button from "../../../../components/ui/Button";
// import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_best-place.svg"
import { useTranslation } from "react-i18next";
// import { useCompanyInscription } from "../../../../utils/Context/CompanyInscriptionContext";
import InteractiveMap from "../../../../components/ui/InteractiveMap";

function CompanyRegistrationStep3( { handleSubmit } : { handleSubmit: (stepIndex: "next" | "prev") => void } ) {

    const { t } = useTranslation();
    // const { companyLocation, setCompanyLocation } = useCompanyInscription();

    // const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        // return !!companyLocation.trim();
        return true;
      };

    function submit() {
        // setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit("next");
        } else {
            console.warn("Validation failed");
        }
    }


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col gap-4 justify-between h-full w-full text-xs">
                <InteractiveMap />
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit("prev")} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="h-full">
                <img className="h-full" src={image} alt="" />
            </div>
        </div>
    )
}

export default CompanyRegistrationStep3;