import check from "/icons/check.svg"
import edit from "/icons/edit.svg"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AutocompleteInput, { Option } from "../../../components/ui/AutocompleteInput";
import InputText from "../../../components/ui/InputText";
import InputFile from "../../../components/ui/InputFile";
import Tag from "../../../components/ui/Tag";
import InputDropdown from "../../../components/ui/InputDropdown";
import InputEmail from "../../../components/ui/InputEmail";
import { isValidEmail, isValidPassword } from "../../../utils/validation";
import API from "../../../utils/API";
import Popup from "../../../components/common/PopUp";

function UserProfile() {

    const { t } = useTranslation();
    const [isValidatedValues, setIsValidatedValues] = useState(false);
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
    const isValid = () => {
        return !!studentName.trim() && !!studentSurname.trim() && !!studentCountry.trim() && !!studentSchoolLevel.trim() && !!studentSpecification.trim() && studentOfferPreferences.length > 0 && !!studentCV && !!studentGitHubLink.trim() && !!studentPortfolioLink.trim() && !!studentLinkedInLink.trim() && isValidEmail(studentEmail);
    };
    const isValidStudentPassword = () => {
        return isValidPassword(studentPassword);
    };
    const [isDisplayPasswordPopUp, setIsDisplayPasswordPopUp] = useState(false)
    const [isValidatedPasswordValues, setIsValidatedPasswordValues] = useState(false);
    const [studentName, setStudentName] = useState<string>("")
    const [studentSurname, setStudentSurname] = useState<string>("")
    const [studentCountry, setStudentCountry] = useState<string>("")
    const [studentSchoolLevel, setStudentSchoolLevel] = useState<string>("")
    const [studentSpecification, setStudentSpecification] = useState<string>("")
    const [studentOfferPreferences, setStudentOfferPreferences] = useState<string[]>([])
    const [isStudentWantToReceiveNotification, setIsStudentWantToReceiveNotification] = useState<boolean>(false)
    const [studentCV, setStudentCV] = useState<File | undefined>()
    const [studentGitHubLink, setStudentGitHubLink] = useState<string>("")
    const [studentPortfolioLink, setStudentPortfolioLink] = useState<string>("")
    const [studentLinkedInLink, setStudentLinkedInLink] = useState<string>("")
    const [studentEmail, setStudentEmail] = useState<string>("")
    const [studentPassword, setStudentPassword] = useState<string>("")
    const [studentLastPassword, setStudentLastPassword] = useState<string>("")

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            // 
        } else {
            console.warn("Validation failed !");
        }
    }
    function handleSubmitPassword() {
        setIsValidatedPasswordValues(true);
        if(isValidStudentPassword()) {
            // 
            setIsValidatedValues(false);
        } else {
            console.warn("Validation failed !")
        }
    }

    function updatePreferenceList(option: Option) {
        if (!studentOfferPreferences.includes(option.value)) {
            setStudentOfferPreferences([...studentOfferPreferences, option.value]);
        } else {
            setStudentOfferPreferences([...studentOfferPreferences.filter(item => item !== option.value)]);
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
            .catch((err) => { throw new Error(err) })
    }, [])

    return (
        <div className="py-10 px-8 text-xs h-full overflow-y-scroll">
            <div className="border-b pb-8 border-gray-300 flex items-center gap-4">
                <div className="relative w-32 h-32 border-2 rounded-full border-primary">
                    <img className="w-full h-full" src={"/icons/chat.svg"} alt={"profile"} />
                    <div className="absolute right-2 bg-primary rounded-full w-fit h-fit p-2 cursor-pointer bottom-0">
                        <img className="w-4 h-4" src={edit} alt="edit" />
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-4xl">{"FOKO KENMOGNE Wilfried"}</p>
                    <p className="text-gray-400 text-xl font-medium">{"FullStack Developer"}</p>
                </div>
            </div>
            <form className="flex flex-col items-center gap-8 w-full">
                <div className="flex justify-between w-full py-4 gap-8 border-b border-gray-300 pb-8">
                    <div className="flex flex-col gap-4 w-full">
                        <InputText label={t("student_registration.your_name")} placeholder={t("student_registration.name_placeholder")} isRequired={true} value={studentName} handleChange={setStudentName} showValidationErrors={isValidatedValues} />
                        <InputText label={t("student_registration.your_surname")} placeholder={t("student_registration.surname_placeholder")} isRequired={true} value={studentSurname} handleChange={setStudentSurname} showValidationErrors={isValidatedValues} />
                        <InputDropdown label={t("student_registration.your_residence_country")} placeholder={t("student_registration.country_placeholder")} isRequired={true} value={studentCountry} handleChange={setStudentCountry} showValidationErrors={isValidatedValues} options={countries} />
                        <InputDropdown label={t("student_registration.your_school_level")} placeholder={t("student_registration.school_level_placeholder")} isRequired={true} value={studentSchoolLevel} handleChange={setStudentSchoolLevel} showValidationErrors={isValidatedValues} options={schoolLevelList} />
                        <div className="flex flex-col gap-4">
                            <InputDropdown label={t("student_registration.your_specification")} placeholder={t("student_registration.specification_placeholder")} isRequired={true} value={studentSpecification} handleChange={setStudentSpecification} showValidationErrors={isValidatedValues} options={specificationList} />
                            <div>
                                <p>{t("student_registration.your_offer_preferences")}</p>
                                {/*  */}
                                <div className="flex flex-col border rounded-md border-gray-400 p-2 gap-2">
                                    <div className="w-full">
                                        <AutocompleteInput placeholder={t("student_registration.select_your_preferences")} options={offerpreferencesList} onSelect={updatePreferenceList} />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            offerpreferencesList.filter((offer) => studentOfferPreferences.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                                <Tag isCloseButton={true} onClick={() => {
                                                    setStudentOfferPreferences([...studentOfferPreferences.filter(item => item !== element.value)]);
                                                }} key={element.value} label={t(element.label)} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <InputFile label={t("student_registration.your_cv")} placeholder={t("student_registration.cv_placeholder")} isRequired={false} file={studentCV} handleChange={setStudentCV} />
                    </div>
                    <div className="flex flex-col gap-4  w-full">
                        <InputText label={t("student_registration.your_github_link")} placeholder={t("student_registration.github_placeholder")} isRequired={true} value={studentGitHubLink} handleChange={setStudentGitHubLink} showValidationErrors={isValidatedValues} />
                        <InputText label={t("student_registration.your_portfolio")} placeholder={t("student_registration.portfolio_placeholder")} isRequired={true} value={studentPortfolioLink} handleChange={setStudentPortfolioLink} showValidationErrors={isValidatedValues} />
                        <InputText label={t("student_registration.your_linkedin")} placeholder={t("student_registration.linkedin_placeholder")} isRequired={true} value={studentLinkedInLink} handleChange={setStudentLinkedInLink} showValidationErrors={isValidatedValues} />
                        <InputEmail label={t("student_registration.your_email")} placeholder={t("student_registration.email_placeholder")} isRequired={true} value={studentEmail} handleChange={setStudentEmail} showValidationErrors={isValidatedValues} />
                        <div className="relative w-full">
                            <div onClick={() => setIsDisplayPasswordPopUp(true)} className="absolute z-20 bottom-0 border cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out border-gray-400 rounded-md w-full h-10 bg-white"></div>
                            <InputText label={t("student_registration.your_password")} type="password" placeholder={t("")} isRequired={false} value={""} handleChange={() => null} showValidationErrors={false} />
                        </div>
                        <div className="py-8">
                            <p>{t("student_registration.do_you_want_to_receive_notification")}</p>
                            <div className="flex gap-8">
                                <div onClick={() => setIsStudentWantToReceiveNotification(true)} className="flex gap-2 justify-center items-center cursor-pointer">
                                    <p>{t("yes")}</p>
                                    <div className={`${isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                        <img src={check} alt="check" />
                                    </div>
                                </div>
                                {/*  */}
                                <div onClick={() => setIsStudentWantToReceiveNotification(false)} className="flex gap-2 justify-center items-center cursor-pointer">
                                    <p>{t("no")}</p>
                                    <div className={`${!isStudentWantToReceiveNotification ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                        <img src={check} alt="check" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/80" onClick={() => submit()}>{t("dashboard.profile.update")}</div>
            </form>
            <Popup isDisplayed={isDisplayPasswordPopUp} onDisplayChange={setIsDisplayPasswordPopUp} >
                <form className="flex flex-col gap-4 w-72 h-72 flex items-center justify-center">
                    <InputText label={t("dashboard.profile.your_last_password")} type="password" placeholder={t("dashboard.profile.last_password_placeholder")} isRequired={true} value={studentLastPassword} handleChange={setStudentLastPassword} showValidationErrors={false} />
                    <InputText label={t("dashboard.profile.your_new_password")} type="password" placeholder={t("dashboard.profile.new_password_placeholder")} isRequired={true} value={studentPassword} handleChange={setStudentPassword} showValidationErrors={isValidatedPasswordValues} />
                    <div className="bg-primary w-full text-white font-semibold flex justify-center items-center rounded-md h-10 cursor-pointer hover:bg-primary/80" onClick={() => handleSubmitPassword()}>{ t("dashboard.profile.update") }</div>
                </form>
            </Popup>
        </div>
    )
}

export default UserProfile;