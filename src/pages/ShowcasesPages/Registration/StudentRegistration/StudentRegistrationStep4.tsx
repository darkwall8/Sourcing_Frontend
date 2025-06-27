import { useState } from "react";
import Button from "../../../../components/ui/Button";
import InputText from "../../../../components/ui/InputText";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";
import image from "/images/undraw_hello.svg"
import { useTranslation } from "react-i18next";
import InputEmail from "../../../../components/ui/InputEmail";
import { isValidEmail, isValidPassword } from "../../../../utils/validation";
import API from "../../../../utils/API";
import { LocalStorageManager } from "../../../../utils/functions/LocalStorageManager";

function StudentRegistrationStep4( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const api = new API();
    const {
        studentName,
        studentSurname,
        studentCountry,
        studentSchoolLevel,
        studentSpecification,
        studentOfferPreferences,
        studentCV,
        studentGitHubLink,
        studentPortfolioLink,
        studentLinkedInLink,
        studentEmail,
        studentPassword,
        setStudentEmail,
        setStudentPassword
    } = useStudentInscription();

    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return isValidEmail(studentEmail) && isValidPassword(studentPassword);
    };

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            handleSubmit(stepIndex + 1);
            api.postData(api.authUrl + "/api/auth/register", {
                email: studentEmail,
                password: studentPassword,
                userName: studentName
            }, false).then((res) => {
                LocalStorageManager.setItem("token", res.token)
                console.log(res)
                if(res.token) {
                    const data = {
                        user: {
                            name: studentName + " " + studentSurname,
                            email: studentEmail,
                            profile: studentSpecification,
                            roleId: "5caea3d5-8e64-4ee4-9b7c-2fb8ac77f94f",
                            hasPremium: false,
                            isActivated: true
                        },
                        studentInfo: {
                            userEmail: studentEmail,
                            studentCountry: studentCountry,
                            studentSchoolLevel: studentSchoolLevel,
                            studentSpecification: studentOfferPreferences,
                            studentWantToReceiveNotification: true,
                            studentCv: studentCV,
                            portfolioUrl: studentPortfolioLink,
                            githubUrl: studentGitHubLink,
                            linkedinUrl: studentLinkedInLink
                        }
                    }
                    api.postData(api.apiUrl + "/api/service/database/new/student", data, false)
                    .then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        throw new Error(err);
                    })
                }
            }).catch((err) => {
                throw new Error(err);
            })
        } else {
            console.warn("Validation failed");
        }
    }


    return (
        <div className="flex justify-between h-full gap-4">
            <form className="flex flex-col justify-between text-xs w-full">
                <div className="flex flex-col gap-4">
                    <InputEmail label={t("student_registration.your_email")} placeholder={t("student_registration.email_placeholder")} isRequired={true} value={studentEmail} handleChange={setStudentEmail} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_password")} type="password" placeholder={t("student_registration.password_placeholder")} isRequired={true} value={studentPassword} handleChange={setStudentPassword} showValidationErrors={isValidatedValues} />
                </div>
                <div className="flex gap-4 py-2">
                    <Button label={t("preview")} handleClick={() => handleSubmit(stepIndex - 1)} styleIndex={1} isActivated={true} />
                    <Button label={t("finish")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className=" md:block hidden">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep4;