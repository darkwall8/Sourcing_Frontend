import { useTranslation } from "react-i18next";
import StudentRegistrationStep1 from "./StudentRegistrationStep1";
import StudentRegistrationStep2 from "./StudentRegistrationStep2";
import StudentRegistrationStep3 from "./StudentRegistrationStep3";
import StudentRegistrationStep4 from "./StudentRegistrationStep4";
import { useState } from 'react';


function StudentRegistration(){

    const { t } = useTranslation();

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    function handleChangeCurrentStep(step: number) {
        if((currentStepIndex + 1) < stepList.length) setCurrentStepIndex(step);
    }
    const stepList = [
        {
            component: <StudentRegistrationStep1 stepIndex={0} handleSubmit={handleChangeCurrentStep} />
        },
        {
            component: <StudentRegistrationStep2 stepIndex={1} handleSubmit={handleChangeCurrentStep} />
        },
        {
            component: <StudentRegistrationStep3 stepIndex={2} handleSubmit={handleChangeCurrentStep} />
        },
        {
            component: <StudentRegistrationStep4 stepIndex={3} handleSubmit={handleChangeCurrentStep} />
        }
    ]

    return (
        <div className="h-full w-full p-16">
            <h1 className="text-5xl font-semibold">{ t("step") } { currentStepIndex + 1 } { t("to") } <span className="text-primary">{ stepList.length }</span></h1>
            <div className="pt-16">
                <div>
                    { stepList[currentStepIndex].component }
                </div>
                {/* <div className="flex gap-4">
                    <Button label="Continuer" handleClick={() => handleChangeCurrentStep(currentStepIndex + 1)} styleIndex={0} isActivated={true} />
                    <Button label="Precedent" handleClick={() => handleChangeCurrentStep(currentStepIndex - 1)} styleIndex={1} isActivated={true} />
                    <Button label="Terminer" handleClick={() => null} styleIndex={0} isActivated={true} />
                </div> */}
            </div>
        </div>
    )
}

export default StudentRegistration;