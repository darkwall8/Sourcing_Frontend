import { useAuth } from "../../../utils/Context/AuthContext";
import CompaniesOffers from "./CompaniesOffers";
import StudentsRequest from "./StudentsRequest";

function OfferAndRequest() {

    const { accountRole } = useAuth()

    return (
        <>
            <div className="w-full h-full" data-canbetest="true">
                {
                    accountRole == "student" ? (
                        <CompaniesOffers />
                    ) : accountRole == "company" ? (
                        <StudentsRequest />
                    ) : (
                        <div>Undefined role</div>
                    )
                }
            </div>
        </>
    )
}

export default OfferAndRequest;