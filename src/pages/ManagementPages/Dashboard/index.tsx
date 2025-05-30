import { useTranslation } from "react-i18next";
import { useAuth } from "../../../utils/Context/AuthContext";

function DashBoard() {

    const { t } = useTranslation();
    const { accountRole } = useAuth();

    return (
        <>
            {/* <div className="bg-usual_gray" data-canbetest="true">DashBoard</div> */}
        </>
    )
}

export default DashBoard;