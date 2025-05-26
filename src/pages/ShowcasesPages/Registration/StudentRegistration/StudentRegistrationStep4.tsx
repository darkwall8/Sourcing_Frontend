import { useState } from "react";
import Button from "../../../../components/ui/Button";
// import InputDropdown from "../../../../components/ui/InputDropdown";
// import InputText from "../../../../components/ui/InputText";
// import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";
import image from "/images/undraw_hello.svg"
import { useTranslation } from "react-i18next";

function StudentRegistrationStep4( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    // const {  } = useStudentInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        // return !!studentName.trim() && !!studentSurname.trim() && !!studentCountry && !!studentSchoolLevel;
      };

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit(stepIndex + 1);
        } else {
            console.warn("Validation failed");
        }
    }


    return (
        <div className="flex justify-between">
            <form className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    {/* <InputText label={t("your_name")} placeholder={t("name_placeholder")} isRequired={true} value={studentName} handleChange={setStudentName} showValidationErrors={isValidatedValues} />
                    <InputText label={t("your_surname")} placeholder={t("surname_placeholder")} isRequired={true} value={studentSurname} handleChange={setStudentSurname} showValidationErrors={isValidatedValues} />
                    <InputDropdown label={t("your_residence_country")} placeholder={t("country_placeholder")} isRequired={true} value={studentCountry} handleChange={setStudentCountry} showValidationErrors={isValidatedValues} options={countries} />
                    <InputDropdown label={t("your_school_level")} placeholder={t("school_level_placeholder")} isRequired={true} value={studentSchoolLevel} handleChange={setStudentSchoolLevel} showValidationErrors={isValidatedValues} options={[]} /> */}
                </div>
                <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={true} />
            </form>
            <div className="">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep4;