import { useEffect, useState } from "react";
import image from "/images/undraw_file-bundle.svg"
import { useTranslation } from "react-i18next";
import InputText from "../../../../components/ui/InputText";
import Button from "../../../../components/ui/Button";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";
import InputFile from "../../../../components/ui/InputFile";

function StudentRegistrationStep3( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const { studentCV, studentGitHubLink, studentPortfolioLink, studentLinkedInLink, setStudentCV, setStudentGitHubLink, setStudentPortfolioLink, setStudentLinkedInLink } = useStudentInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!studentCV && !!studentGitHubLink.trim() && !!studentPortfolioLink.trim() && !!studentLinkedInLink.trim();
      };

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit(stepIndex + 1);
        } else {
            console.warn("Validation failed");
        }
    }

    useEffect(() => {
        console.log(studentCV)
    }, [studentCV])


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between h-full text-xs w-full">
                <div className="flex flex-col gap-4">
                    <InputFile label={t("student_registration.your_cv")} placeholder={t("student_registration.cv_placeholder")} isRequired={false} file={studentCV} handleChange={setStudentCV} />
                    <InputText label={t("student_registration.your_github_link")} placeholder={t("student_registration.github_placeholder")} isRequired={true} value={studentGitHubLink} handleChange={setStudentGitHubLink} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_portfolio")} placeholder={t("student_registration.portfolio_placeholder")} isRequired={true} value={studentPortfolioLink} handleChange={setStudentPortfolioLink} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_linkedin")} placeholder={t("student_registration.linkedin_placeholder")} isRequired={true} value={studentLinkedInLink} handleChange={setStudentLinkedInLink} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit(stepIndex - 1)} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className=" md:block hidden">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep3;