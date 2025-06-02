import { useTranslation } from "react-i18next";
import DataTable, { HeaderColumn } from "./components/DataTable";
import { useState } from "react";
import Popup from "../../../components/common/PopUp";

function StudentsList() {

    const { t } = useTranslation();
    const [isDisplayPopUp, setIsDisplayPopUp] = useState(false);
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
          phone: "(225) 555–0118",
          email: "fokowilfried7@gmail.com",
          country: "United States",
          is_internship_search: true,
        },
        {
          name: "TSAJIO",
          surname: "Fils Logan",
          phone: "(205) 555–0100",
          email: "logan.stajio@2027.ucam...",
          country: "Kiribati",
          is_internship_search: false,
        },
        {
          name: "DJISSOU HAPPY",
          surname: "Franck Sean",
          phone: "(302) 555–0107",
          email: "ronald@adobe.com",
          country: "Israel",
          is_internship_search: false,
        },
      ];
      function onClickRow(rowId: number | string) {
        setIsDisplayPopUp(true);
        console.log(rowId);
      }

    return (
        <div className="w-full h-full">
            <DataTable onClickRow={onClickRow} title={t("dashboard.datalist.student_list")} headers={headers} data={data} />
            <Popup isDisplayed={isDisplayPopUp} onDisplayChange={setIsDisplayPopUp}></Popup>
        </div>
    );

}

export default StudentsList;