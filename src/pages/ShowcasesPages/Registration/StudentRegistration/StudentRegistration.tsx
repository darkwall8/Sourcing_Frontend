import { useTranslation } from "react-i18next";
import StudentRegistrationStep1 from "./StudentRegistrationStep1";
import StudentRegistrationStep2 from "./StudentRegistrationStep2";
import StudentRegistrationStep3 from "./StudentRegistrationStep3";
import StudentRegistrationStep4 from "./StudentRegistrationStep4";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function StudentRegistration() {
    const { t } = useTranslation();

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    function handleChangeCurrentStep(nextStep: number) {
        if (nextStep >= 0 && nextStep < stepList.length) {
            setDirection(nextStep > currentStepIndex ? "next" : "prev");
            setCurrentStepIndex(nextStep);
        }
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
    ];

    const currentComponent = stepList[currentStepIndex].component;

    return (
        <div className="h-full w-full flex flex-col px-6 py-6 overflow-hidden">
            <h1 className="text-5xl font-semibold pb-6">
                {t("student_registration.step")} {currentStepIndex + 1} {t("student_registration.to")} <span className="text-primary">{stepList.length}</span>
            </h1>
            <div className="relative h-full w-full overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={currentStepIndex}
                        initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="h-full"
                    >
                        {currentComponent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default StudentRegistration;
