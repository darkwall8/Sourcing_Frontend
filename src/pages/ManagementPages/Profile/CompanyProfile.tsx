import { useState } from "react";
import { useTranslation } from "react-i18next";
import check from "/icons/check.svg"
import edit from "/icons/edit.svg"
import InputText from "../../../components/ui/InputText";
import Tag from "../../../components/ui/Tag";
import AutocompleteInput, { Option } from "../../../components/ui/AutocompleteInput";
import InputTextArea from "../../../components/ui/InputTextarea";
import InputFile from "../../../components/ui/InputFile";
import Popup from "../../../components/common/PopUp";
import { isValidPassword } from "../../../utils/validation";

function CompanyProfile() {

    const { t } = useTranslation();
    const isValid = () => {
        return !!companyName.trim() && !! companyPhoneNumber.trim() && !!companyDomain.trim() && !!companyEmail.trim() && !!companyDescription.trim() && companyInternBenefit.length > 0 && companyInternPreference.length > 0 && companyInternshipType.length > 0 && !!companyInternShipDuration.trim() && !!companyTaxConformityCertificate && !!companyStatisticalDeclarationNumber.trim() && !!companyRCCM.trim() && !!companyNIU.trim() && !!companyCommercialRegister.trim() && !!companyLegalStatut.trim();
    };
    const isValidCompanyPassword = () => {
        return isValidPassword(companyPassword);
    };
    const internPreferenceList = [
        {
            label: "stagiare developpeur fullstack",
            value: "fullstack"
        }
    ]
    const internshipTypeList = [
        {
            label: "academique",
            value: "school"
        },
        {
            label: "professionnel",
            value: "pro"
        }
    ]
    const internBenefitList = [
        {
            label: "frontend",
            value: "front"
        }
    ]
    const [isDisplayPasswordPopUp, setIsDisplayPasswordPopUp] = useState(false)
    const [isValidatedValues, setIsValidatedValues] = useState(false);
    const [isValidatedPasswordValues, setIsValidatedPasswordValues] = useState(false);
    const [companyName, setCompanyName] = useState<string>("")
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState<string>("")
    const [companyDomain, setCompanyDomain] = useState<string>("")
    const [companyEmail, setCompanyEmail] = useState<string>("")
    const [companyAdresse, setCompanyAdresse] = useState<string>("")
    const [companyWebSite, setCompanyWebSite] = useState<string>("")
    const [companyCorporate, setCompanyCorporate] = useState<string>("")
    const [companyRCCM, setCompanyRCCM] = useState<string>("")
    const [companyNIU, setCompanyNIU] = useState<string>("")
    const [companyCommercialRegister, setCompanyCommercialRegister] = useState<string>("")
    const [companyLegalStatut, setCompanyLegalStatut] = useState<string>("")
    const [companyTaxConformityCertificate, setCompanyTaxConformityCertificate] = useState<File | undefined>()
    const [companyStatisticalDeclarationNumber, setCompanyStatisticalDeclarationNumber] = useState<string>("")
    const [companyInternPreference, setCompanyInternPreference] = useState<string[]>([])
    const [companyInternshipType, setCompanyInternshipType] = useState<string[]>([])
    const [companyInternShipDuration, setCompanyInternShipDuration] = useState<string>("")
    const [companyDescription, setCompanyDescription] = useState<string>("")
    const [companyInternBenefit, setCompanyInternBenefit] = useState<string[]>([])
    const [hasInternOpportunity, setHasInternOpportunity] = useState<boolean>(false)
    const [companyPassword, setCompanyPassword] = useState<string>("")
    const [companyLastPassword, setcompanyLastPassword] = useState<string>("")

    function submit() {
        setIsValidatedValues(true);
        if (isValid()) {
            // 
        } else {
            console.warn("Validation failed");
        }
    }
    function handleSubmitPassword() {
        setIsValidatedPasswordValues(true);
        if(isValidCompanyPassword()) {
            // 
            setIsValidatedValues(false);
        } else {
            console.warn("Validation failed !")
        }
    }
    function updateInternPreference(option: Option) {
        if (!companyInternPreference.includes(option.value)) {
            setCompanyInternPreference([...companyInternPreference, option.value]);
        } else {
            setCompanyInternPreference([...companyInternPreference.filter(item => item !== option.value)]);
        }
    }
    function updateInternshipType(option: Option) {
        if (!companyInternshipType.includes(option.value)) {
            setCompanyInternshipType([...companyInternshipType, option.value]);
        } else {
            setCompanyInternshipType([...companyInternshipType.filter(item => item !== option.value)]);
        }
    }
    function updatePreferenceList(option: Option) {
        if (!companyInternBenefit.includes(option.value)) {
            setCompanyInternBenefit([...companyInternBenefit, option.value]);
        } else {
            setCompanyInternBenefit([...companyInternBenefit.filter(item => item !== option.value)]);
        }
    }

    return (
        <div className="py-10 px-32 h-full overflow-scroll">
            <div className="border-b pb-8 border-gray-300 flex items-center gap-4">
                <div className="relative w-24 h-24 border-2 rounded-full border-primary">
                    <img className="w-full h-full" src={"/icons/chat.svg"} alt={"profile"} />
                    <div className="absolute right-2 bg-primary rounded-full w-fit h-fit p-2 cursor-pointer bottom-0">
                        <img className="w-4 h-4" src={edit} alt="edit" />
                    </div>
                </div>
                <p className="font-semibold text-4xl">{"FTD237"}</p>
            </div>
            <form className="flex flex-col items-center gap-8 w-full border-b border-gray-300 pb-8">
                <div className="flex justify-between w-full py-4 gap-8">
                    <div className="flex flex-col gap-4 w-full">
                        <InputText label={t("company_registration.your_company_name")} placeholder={t("company_registration.company_name_placeholder")} isRequired={true} value={companyName} handleChange={setCompanyName} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_phone_number")} placeholder={t("company_registration.company_phone_number_placeholder")} isRequired={true} value={companyPhoneNumber} handleChange={setCompanyPhoneNumber} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_domain")} placeholder={t("company_registration.company_domain_placeholder")} isRequired={true} value={companyDomain} handleChange={setCompanyDomain} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_email")} placeholder={t("company_registration.company_email_placeholder")} isRequired={true} value={companyEmail} handleChange={setCompanyEmail} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_addresse")} placeholder={t("company_registration.company_addresse_placeholder")} isRequired={true} value={companyAdresse} handleChange={setCompanyAdresse} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_website")} placeholder={t("company_registration.company_website_placeholder")} isRequired={true} value={companyWebSite} handleChange={setCompanyWebSite} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_corporate")} placeholder={t("company_registration.company_corporate_placeholder")} isRequired={true} value={companyCorporate} handleChange={setCompanyCorporate} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_RCCM")} placeholder={t("company_registration.company_RCCM_placeholder")} isRequired={true} value={companyRCCM} handleChange={setCompanyRCCM} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_NIU")} placeholder={t("company_registration.company_NUI_placeholder")} isRequired={true} value={companyNIU} handleChange={setCompanyNIU} showValidationErrors={isValidatedValues} />
                        <InputText label={t("company_registration.your_company_commercial_register")} placeholder={t("company_registration.company_commercial_register_placeholder")} isRequired={true} value={companyCommercialRegister} handleChange={setCompanyCommercialRegister} showValidationErrors={isValidatedValues} />
                    </div>
                    <div className="flex flex-col gap-4  w-full">
                        <InputText label={t("company_registration.your_company_legal_statut")} placeholder={t("company_registration.company_legal_statut_placeholder")} isRequired={true} value={companyLegalStatut} handleChange={setCompanyLegalStatut} showValidationErrors={isValidatedValues} />
                        <InputFile label={t("company_registration.your_company_tax__comformity_certificate")} placeholder={t("company_registration.company_tax__comformity_certificate_placeholder")} isRequired={false} file={companyTaxConformityCertificate} handleChange={setCompanyTaxConformityCertificate} />
                        <InputText label={t("company_registration.your_company_statistical_declaration")} placeholder={t("company_registration.company_statistical_declaration_placeholder")} isRequired={true} value={companyStatisticalDeclarationNumber} handleChange={setCompanyStatisticalDeclarationNumber} showValidationErrors={isValidatedValues} />
                        <div className="flex flex-col gap-2 border rounded-md border-gray-400 p-2">
                            <div className="w-full">
                                <AutocompleteInput placeholder={t("company_registration.your_company_intern_preference")} options={internPreferenceList} onSelect={updateInternPreference} />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    internPreferenceList.filter((offer) => companyInternPreference.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                        <Tag isCloseButton={true} onClick={() => {
                                            setCompanyInternPreference([...companyInternPreference.filter(item => item !== element.value)]);
                                        }} key={element.value} label={t(element.label)} />
                                    ))
                                }
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col gap-2 border rounded-md border-gray-400 p-2">
                            <div className="w-full">
                                <AutocompleteInput placeholder={t("company_registration.your_company_internship_type")} options={internshipTypeList} onSelect={updateInternshipType} />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    internshipTypeList.filter((offer) => companyInternshipType.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                        <Tag isCloseButton={true} onClick={() => {
                                            setCompanyInternshipType([...companyInternshipType.filter(item => item !== element.value)]);
                                        }} key={element.value} label={t(element.label)} />
                                    ))
                                }
                            </div>
                        </div>
                        {/*  */}
                        <InputText label={t("company_registration.your_company_internship_duration")} placeholder={t("company_registration.company_internship_duration_placeholder")} isRequired={true} value={companyInternShipDuration} handleChange={setCompanyInternShipDuration} showValidationErrors={isValidatedValues} />
                        <InputTextArea label={t("company_registration.your_company_description")} placeholder={t("company_registration.company_description_placeholder")} isRequired={true} value={companyDescription} handleChange={setCompanyDescription} showValidationErrors={isValidatedValues} />
                        <div className="relative w-full">
                            <div onClick={() => setIsDisplayPasswordPopUp(true)} className="absolute z-20 bottom-0 border cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out border-gray-400 rounded-md w-full h-10 bg-white"></div>
                            <InputText label={t("student_registration.your_password")} type="password" placeholder={t("")} isRequired={false} value={""} handleChange={() => null} showValidationErrors={false} />
                        </div>
                        <div>
                            <p>{t("company_registration.your_company_intern_benefit")}</p>
                            {/*  */}
                            <div className="flex flex-col border rounded-md border-gray-400 p-2 gap-2">
                                <div className="w-full">
                                    <AutocompleteInput placeholder={t("company_registration.company_intern_benefit_placeholder")} options={internBenefitList} onSelect={updatePreferenceList} />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        internBenefitList.filter((offer) => companyInternBenefit.some((studentOffer => offer.value.includes(studentOffer)))).map((element) => (
                                            <Tag isCloseButton={true} onClick={() => {
                                                setCompanyInternBenefit([...companyInternBenefit.filter(item => item !== element.value)]);
                                            }} key={element.value} label={t(element.label)} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="py-8">
                            <p>{t("company_registration.your_company_has_opportunity_after_internship")}</p>
                            <div className="flex gap-8">
                                <div onClick={() => setHasInternOpportunity(true)} className="flex gap-2 justify-center items-center cursor-pointer">
                                    <p>{t("yes")}</p>
                                    <div className={`${hasInternOpportunity ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                        <img src={check} alt="check" />
                                    </div>
                                </div>
                                {/*  */}
                                <div onClick={() => setHasInternOpportunity(false)} className="flex gap-2 justify-center items-center cursor-pointer">
                                    <p>{t("no")}</p>
                                    <div className={`${!hasInternOpportunity ? "bg-primary" : "bg-white border-2"} w-6 h-6 flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
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
                <form className="flex flex-col gap-4">
                    <InputText label={t("dashboard.profile.your_last_password")} type="password" placeholder={t("dashboard.profile.last_password_placeholder")} isRequired={true} value={companyLastPassword} handleChange={setcompanyLastPassword} showValidationErrors={false} />
                    <InputText label={t("dashboard.profile.your_new_password")} type="password" placeholder={t("dashboard.profile.new_password_placeholder")} isRequired={true} value={companyPassword} handleChange={setCompanyPassword} showValidationErrors={isValidatedPasswordValues} />
                    <div className="bg-primary text-white font-semibold flex justify-center items-center rounded-md h-10 cursor-pointer hover:bg-primary/80" onClick={() => handleSubmitPassword()}>{ t("dashboard.profile.update") }</div>
                </form>
            </Popup>
        </div>
    )
}

export default CompanyProfile;