import { useEffect, useState } from "react";
import InputText from "../../../../components/ui/InputText";
import image from "/images/undraw_join.svg"
import { useTranslation } from "react-i18next";
import Button from "../../../../components/ui/Button";
import InputDropdown from "../../../../components/ui/InputDropdown";
import API from "../../../../utils/API";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";

function StudentRegistrationStep1( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const { studentName, studentSurname, studentCountry, studentSchoolLevel, setStudentName, setStudentSurname, setStudentCountry, setStudentSchoolLevel } = useStudentInscription();


    const [countries, setCountries] = useState<
    {
        value: string,
        label: string
    }[]>([]);
    const schoolLevelList = [
        {
            label: "universite",
            value: "un"
        }
    ]
    const [isValidatedValues, setIsValidatedValues] =useState(false);
    const isValid = () => {
        return !!studentName.trim() && !!studentSurname.trim() && !!studentCountry.trim() && !!studentSchoolLevel.trim();
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
        const api = new API();
        api.getData("https://restcountries.com/v3.1/all")
            .then((res: {
                name: {
                    common: string,
                    official: string,
                }
                cca2: string,
            }[]) => {
                setCountries(res.map((element) => {
                    return {
                        value: element.cca2,
                        label: element.name.common
                    }
                }))
            })
            .catch((err) => {throw new Error(err)})
    }, [])


    return (
        <div className="flex justify-between">
            <form className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <InputText label={t("student_registration.your_name")} placeholder={t("student_registration.name_placeholder")} isRequired={true} value={studentName} handleChange={setStudentName} showValidationErrors={isValidatedValues} />
                    <InputText label={t("student_registration.your_surname")} placeholder={t("student_registration.surname_placeholder")} isRequired={true} value={studentSurname} handleChange={setStudentSurname} showValidationErrors={isValidatedValues} />
                    <InputDropdown label={t("student_registration.your_residence_country")} placeholder={t("student_registration.country_placeholder")} isRequired={true} value={studentCountry} handleChange={setStudentCountry} showValidationErrors={isValidatedValues} options={countries} />
                    <InputDropdown label={t("student_registration.your_school_level")} placeholder={t("student_registration.school_level_placeholder")} isRequired={true} value={studentSchoolLevel} handleChange={setStudentSchoolLevel} showValidationErrors={isValidatedValues} options={schoolLevelList} />
                </div>
                <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
            </form>
            <div className="">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep1;