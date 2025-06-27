import { useState } from "react";
import { useTranslation } from "react-i18next";
import DataTable, { HeaderColumn } from "./components/DataTable";
import Popup from "../../../components/common/PopUp";
import UserProfileMini from "../../../components/common/UserProfileMini";
import Button from "../../../components/ui/Button";
import AddOfferForm, { formDataType } from "../AddOfferForm";

function StudentsList() {
  const { t } = useTranslation();
  const [isDisplayProfilePopup, setIsDisplayProfilePopup] = useState(false);
  const [isDisplayOfferChoicePopup, setIsDisplayOfferChoicePopup] = useState(false);
  const [isDisplayOfferFormPopup, setIsDisplayOfferFormPopup] = useState(false);
  const [isDisplayOfferListPopup, setIsDisplayOfferListPopup] = useState(false);
  // const [selectedStudentName, setSelectedStudentName] = useState("");
  const [selectedStudentEmail, setSelectedStudentEmail] = useState("");

  const headers: HeaderColumn[] = [
    { key: "name", label: t("dashboard.datalist.student_name"), type: "string", searchable: true },
    { key: "surname", label: t("dashboard.datalist.student_surname"), type: "string", searchable: true },
    { key: "phone", label: t("dashboard.datalist.student_phone"), type: "string", searchable: false },
    { key: "email", label: t("dashboard.datalist.student_email"), type: "string", searchable: true },
    { key: "country", label: t("dashboard.datalist.student_country"), type: "string", searchable: true },
    { key: "is_internship_search", label: t("dashboard.datalist.is_internship_search"), type: "boolean", searchable: false },
  ];

  const data = [
    {
      name: "FOKO KENMOGNE",
      surname: "Wilfried",
      phone: "(225) 555-0118",
      email: "fokowilfried7@gmail.com",
      country: "United States",
      is_internship_search: true,
    },
    {
      name: "TSAJIO",
      surname: "Fils Logan",
      phone: "(205) 555-0100",
      email: "logan.tsajio@2027.ucam...",
      country: "Kiribati",
      is_internship_search: false,
    },
    {
      name: "DJISSOU HAPPY",
      surname: "Franck Sean",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      is_internship_search: false,
    },
  ];

  const studentExample = {
    name: "Jean",
    surname: "Kamga",
    email: "jean.kamga@example.com",
    country: "Cameroun",
    schoolLevel: "Licence 3",
    specification: "Développeur Backend",
    offerPreferences: ["Node.js", "API REST", "Docker"],
    github: "https://github.com/jeankamga",
    portfolio: "https://jeanportfolio.dev",
    linkedin: "https://linkedin.com/in/jeankamga",
    cvUrl: "/cvs/jean_kamga.pdf",
    profilePictureUrl: "/images/profile.png",
  };

  function onClickRow(rowId: number | string) {
    setIsDisplayProfilePopup(true);
    const student = data.find((_, idx) => idx === Number(rowId));
    if (student) {
      // setSelectedStudentName(`${student.name} ${student.surname}`);
      setSelectedStudentEmail(student.email);
    }
  }

  function handleSubmitOffer(offerData: formDataType) {
    console.log("Offre envoyée à :", selectedStudentEmail);
    console.log("Contenu de l'offre :", offerData);
    setIsDisplayOfferFormPopup(false);
  }

  function handleSendExistingOffer(offerId: number) {
    console.log(`Offre existante ${offerId} envoyée à ${selectedStudentEmail}`);
    // setIsDisplayOfferListPopup(false);
  }

  return (
    <div className="w-full h-full">
      <DataTable onClickRow={onClickRow} title={t("dashboard.datalist.student_list")} headers={headers} data={data} />

      <Popup isDisplayed={isDisplayProfilePopup} onDisplayChange={setIsDisplayProfilePopup}>
        <div className="flex flex-col items-center gap-4">
          <UserProfileMini student={studentExample} />
          <Button
            label={t("dashboard.datalist.propose_internship")}
            handleClick={() => {
              setIsDisplayProfilePopup(false);
              setIsDisplayOfferChoicePopup(true);
            }}
            styleIndex={0}
            isActivated={true}
          />
        </div>
      </Popup>

      <Popup isDisplayed={isDisplayOfferChoicePopup} onDisplayChange={setIsDisplayOfferChoicePopup}>
        <div className="flex flex-col items-center gap-4 p-6">
          <p className="text-lg font-medium">{ t("dashboard.datalist.create_customized_offer") }</p>
          <div className="flex gap-4">
            <Button
              label={t("dashboard.datalist.create_offer")}
              handleClick={() => {
                setIsDisplayOfferChoicePopup(false);
                setIsDisplayOfferFormPopup(true);
              }}
              styleIndex={0}
              isActivated={true}
            />
            <Button
              label={t("dashboard.datalist.existing_offer")}
              handleClick={() => {
                setIsDisplayOfferChoicePopup(false);
                setIsDisplayOfferListPopup(true);
              }}
              styleIndex={1}
              isActivated={true}
            />
          </div>
        </div>
      </Popup>

      <Popup isDisplayed={isDisplayOfferFormPopup} onDisplayChange={setIsDisplayOfferFormPopup}>
        <div className="w-[40vw] h-[70vh] overflow-y-scroll">
          <AddOfferForm onSubmit={handleSubmitOffer} />
        </div>
      </Popup>

      <Popup isDisplayed={isDisplayOfferListPopup} onDisplayChange={setIsDisplayOfferListPopup}>
        <div className="w-[40vw] max-h-[70vh] overflow-y-scroll p-4 space-y-4">
          <p className="text-lg font-semibold mb-4">{ t("dashboard.datalist.existing_offer_list") }</p>
          {[1, 2, 3].map((id) => (
            <div key={id} className="border rounded-md p-4 shadow-sm bg-white flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-usual_purple">Offre #{id}</h4>
                <p className="text-sm text-gray-500">Description de l'offre...</p>
              </div>
              <Button
                label="Envoyer"
                handleClick={() => handleSendExistingOffer(id)}
                styleIndex={0}
                isActivated={true}
              />
            </div>
          ))}
        </div>
      </Popup>
    </div>
  );
}

export default StudentsList;
