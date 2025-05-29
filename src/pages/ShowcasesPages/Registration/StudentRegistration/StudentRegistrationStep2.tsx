import { useState } from "react";
import image from "/images/undraw_in-sync.svg"
import check from "/icons/check.svg"
import { useTranslation } from "react-i18next";
import InputDropdown from "../../../../components/ui/InputDropdown";
import Button from "../../../../components/ui/Button";
import { useStudentInscription } from "../../../../utils/Context/StudentInscriptionContext";
import Tag from "../../../../components/ui/Tag";
import AutocompleteInput, { Option } from "../../../../components/ui/AutocompleteInput";

function StudentRegistrationStep2( { handleSubmit, stepIndex } : { handleSubmit: (stepIndex: number) => void, stepIndex: number } ) {

    const { t } = useTranslation();
    const { studentSpecification, studentOfferPreferences, isStudentWantToReceiveNotification, setStudentSpecification, setStudentOfferPreferences, setIsStudentWantToReceiveNotification } = useStudentInscription();

    const [isValidatedValues, setIsValidatedValues] = useState(false);
    const isValid = () => {
        return !!studentSpecification.trim() && studentOfferPreferences.length > 0;
    };
    const specificationList = [
        {
            label: "frontend",
            value: "front"
        }
    ]

    const offerpreferencesList = [
        {
            label: "developpeur web",
            value: "dev_web"
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

    function updatePreferenceList(option: Option) {
        if(!studentOfferPreferences.includes(option.value)){
            setStudentOfferPreferences([...studentOfferPreferences, option.value]);
        } else {
            setStudentOfferPreferences([...studentOfferPreferences.filter(item => item !== option.value)]);
        }
    }


    return (
        <div className="flex justify-between">
            <form className="flex flex-col justify-between">
                <div className="flex flex-col gap-4 justify-between h-full">
                    <div className="flex flex-col gap-4">
                        <InputDropdown label={t("student_registration.your_specification")} placeholder={t("student_registration.specification_placeholder")} isRequired={true} value={studentSpecification} handleChange={setStudentSpecification} showValidationErrors={isValidatedValues} options={specificationList  } />
                        <div>
                            <p>{ t("student_registration.your_offer_preferences") }</p>
                            {/*  */}
                            <div className="flex flex-col gap-2">
                                <div className="w-full">
                                    <AutocompleteInput placeholder={t("student_registration.select_your_preferences")} options={offerpreferencesList} onSelect={updatePreferenceList} />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        offerpreferencesList.filter((offer) => studentOfferPreferences.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                            <Tag isCloseButton={true} onClick={() => {
                                                setStudentOfferPreferences([...studentOfferPreferences.filter(item => item !== element.value)]);
                                            }}  key={element.value} label={t(element.label)} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <p>{ t("student_registration.do_you_want_to_receive_notification") }</p>
                        <div className="flex gap-8">
                            <div onClick={() => setIsStudentWantToReceiveNotification(true)} className="flex gap-2 justify-center items-center cursor-pointer">
                                <p>{ t("yes") }</p>
                                <div className={`${isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                    <img src={check} alt="check" />
                                </div>
                            </div>
                            {/*  */}
                            <div onClick={() => setIsStudentWantToReceiveNotification(false)} className="flex gap-2 justify-center items-center cursor-pointer">
                                <p>{ t("no") }</p>
                                <div className={`${!isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
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