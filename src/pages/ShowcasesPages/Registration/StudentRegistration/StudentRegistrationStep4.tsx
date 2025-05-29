import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";
import image from "/images/undraw_hello.svg"
import { useTranslation } from "react-i18next";
import InputEmail from "../../../../components/ui/InputEmail";
import { isValidEmail, isValidPassword } from "../../../../utils/validation";

function StudentRegistrationStep4( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const { studentEmail, studentPassword, setStudentEmail, setStudentPassword } = useStudentInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return isValidEmail(studentEmail) && isValidPassword(studentPassword);
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
                    <InputEmail label={t("student_registration.your_email")} placeholder={t("student_registration.email_placeholder")} isRequired={true} value={studentEmail} handleChange={setStudentEmail} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_password")} type="password" placeholder={t("student_registration.password_placeholder")} isRequired={true} value={studentPassword} handleChange={setStudentPassword} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit(stepIndex - 1)} styleIndex={1} isActivated={true} />
                    <Button label={t("finish")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep4;