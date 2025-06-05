import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CompanyRegistrationStep1 from "./CompanyRegistrationStep1";
import CompanyRegistrationStep2 from "./CompanyRegistrationStep2";
import CompanyRegistrationStep3 from "./CompanyRegistrationStep3";
import CompanyRegistrationStep4 from "./CompanyRegistrationStep4";
import CompanyRegistrationStep5 from "./CompanyRegistrationStep5";
import CompanyRegistrationStep6 from "./CompanyRegistrationStep6";
import CompanyRegistrationStep7 from "./CompanyRegistrationStep7";

function CompanyRegistration() {
  const { t } = useTranslation();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentSubStepIndex, setCurrentSubStepIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function handleChangeCurrentStep(dir: "next" | "prev") {
    setDirection(dir);
    const currentStep = stepList[currentStepIndex];
    const totalSubSteps = currentStep.subStep.length;

    if (dir === "next") {
      if (currentSubStepIndex + 1 < totalSubSteps) {
        setCurrentSubStepIndex(currentSubStepIndex + 1);
      } else if (currentStepIndex + 1 < stepList.length) {
        setCurrentStepIndex(currentStepIndex + 1);
        setCurrentSubStepIndex(0);
      }
    }

    if (dir === "prev") {
      if (currentSubStepIndex > 0) {
        setCurrentSubStepIndex(currentSubStepIndex - 1);
      } else if (currentStepIndex > 0) {
        const previousStep = stepList[currentStepIndex - 1];
        setCurrentStepIndex(currentStepIndex - 1);
        setCurrentSubStepIndex(previousStep.subStep.length - 1);
      }
    }
  }

  const stepList = [
    {
      stepTitle: t("company_registration.basic_info"),
      stepLayout: <div></div>,
      subStep: [
        { component: <CompanyRegistrationStep1 handleSubmit={handleChangeCurrentStep} /> },
        { component: <CompanyRegistrationStep2 handleSubmit={handleChangeCurrentStep} /> },
        { component: <CompanyRegistrationStep3 handleSubmit={handleChangeCurrentStep} /> }
      ]
    },
    {
      stepTitle: t("company_registration.legal_information"),
      stepLayout: <div></div>,
      subStep: [
        { component: <CompanyRegistrationStep4 handleSubmit={handleChangeCurrentStep} /> },
        { component: <CompanyRegistrationStep5 handleSubmit={handleChangeCurrentStep} /> }
      ]
    },
    {
      stepTitle: t("company_registration.recruitment_information"),
      stepLayout: <div></div>,
      subStep: [
        { component: <CompanyRegistrationStep6 handleSubmit={handleChangeCurrentStep} /> }
      ]
    },
    {
      stepTitle: t("company_registration.additional_information"),
      stepLayout: <div></div>,
      subStep: [
        { component: <CompanyRegistrationStep7 handleSubmit={handleChangeCurrentStep} /> }
      ]
    }
  ];

  const currentComponent =
    stepList[currentStepIndex].subStep[currentSubStepIndex].component;

  return (
    <div className="h-full w-full flex flex-col px-6 py-6 overflow-hidden">
      <h1 className="text-5xl font-semibold pb-6">
        {stepList[currentStepIndex].stepTitle}
      </h1>
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="h-full"
            key={`${currentStepIndex}-${currentSubStepIndex}`}
            initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {currentComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CompanyRegistration;
