import { useState } from "react";
import image from "/images/undraw_in-sync.svg"
import check from "/icons/check.svg"
import { useTranslation } from "react-i18next";
import InputDropdown from "../../../../components/ui/InputDropdown";
import Button from "../../../../components/ui/Button";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";

function StudentRegistrationStep2( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const { studentSpecification, studentOfferPreferences, isStudentWantToReceiveNotification, setStudentSpecification, setStudentOfferPreferences, setIsStudentWantToReceiveNotification } = useStudentInscription();


    const [isValidatedValues, setIsValidatedValues] = useState(false);
    const isValid = () => {
        return !!studentSpecification.trim() && !!studentOfferPreferences;
    };
    const specificationList = [
        {
            label: "frontend",
            value: "front"
        }
    ]

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
                <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex flex-col gap-4">
                        <InputDropdown label={t("your_specification")} placeholder={t("specification_placeholder")} isRequired={true} value={studentSpecification} handleChange={setStudentSpecification} showValidationErrors={isValidatedValues} options={specificationList  } />
                        <div>
                            <p>{ t("your_offer_preferences") }</p>

                        </div>
                    </div>
                    <div className="py-8">
                        <p>{ t("do_you_want_to_receive_notification") }</p>
                        <div className="flex gap-8">
                            <div onClick={() => setIsStudentWantToReceiveNotification(true)} className="flex gap-2 justify-center items-center">
                                <p>{ t("yes") }</p>
                                <div className={`${isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-7 h-7 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                    <img src={check} alt="check" />
                                </div>
                            </div>
                            {/*  */}
                            <div onClick={() => setIsStudentWantToReceiveNotification(false)} className="flex gap-2 justify-center items-center">
                                <p>{ t("no") }</p>
                                <div className={`${!isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-7 h-7 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                    <img src={check} alt="check" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button label={t("preview")} handleClick={() => handleSubmit(stepIndex - 1)} styleIndex={1} isActivated={true} />
                    <Button label={t("continue")} handleClick={() => submit()} styleIndex={0} isActivated={isValid()} />
                </div>
            </form>
            <div className="">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default StudentRegistrationStep2;