import { useState } from "react";
import { useTranslation } from "react-i18next";
import UserProfileMini from "../../../components/common/UserProfileMini";
import Popup from "../../../components/common/PopUp";

type Request = {
  id: number;
  studentName: string;
  email: string;
  profile: string;
  motivation: string;
  status: "pending" | "accepted" | "rejected";
};

const mockRequests: Request[] = [
  {
    id: 1,
    studentName: "Jean Kamga",
    email: "jean.kamga@example.com",
    profile: "Développeur Backend - Node.js",
    motivation: "Je suis très motivé à l'idée de rejoindre votre équipe pour un stage.",
    status: "pending"
  },
  {
    id: 2,
    studentName: "Aminata Talla",
    email: "aminata.talla@example.com",
    profile: "UI/UX Designer",
    motivation: "J'aimerais améliorer mes compétences en design produit.",
    status: "pending"
  },
];

function StudentsRequest() {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const { t } = useTranslation();
  const [isDisplayProfile, setIsDisplayProfile] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const updateStatus = (id: number, newStatus: "accepted" | "rejected") => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
    if (selectedRequest?.id === id) {
      setSelectedRequest({ ...selectedRequest, status: newStatus });
    }
  };

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
    profilePictureUrl: "/images/profile.png"
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-primary mb-6">{t("dashboard.offer_and_request.internship_request")}</h1>
      <div className="space-y-6">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-white border border-usual_light_purple rounded-xl shadow-sm p-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-lg font-semibold text-usual_purple">{req.studentName}</h2>
                <p className="text-sm text-gray-500">{req.email}</p>
                <p className="text-sm mt-2 text-gray-700 font-medium">{req.profile}</p>
                <p className="text-sm mt-2 italic text-gray-600">"{req.motivation}"</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3 items-center">
                {req.status === "pending" ? (
                  <>
                    <button
                      onClick={() => updateStatus(req.id, "accepted")}
                      className="text-usual_green hover:opacity-80 bg-usual_green rounded-full cursor-pointer p-1"
                      title="Accepter"
                    >
                      <div
                        className={`w-6 h-6 bg-cover bg-center transition-all duration-200 ease-in-out`}
                        style={{
                          backgroundColor: "white",
                          maskImage: `url("/icons/check_2.svg")`,
                          WebkitMaskImage: `url("/icons/check_2.svg")`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                        }}
                      />
                    </button>
                    <button
                      onClick={() => updateStatus(req.id, "rejected")}
                      className="text-usual_red bg-usual_red rounded-full hover:opacity-80 cursor-pointer p-1"
                      title="Refuser"
                    >
                      <div
                        className={`w-6 h-6 bg-cover bg-center transition-all duration-200 ease-in-out`}
                        style={{
                          backgroundColor: "white",
                          maskImage: `url("/icons/cross_2.svg")`,
                          WebkitMaskImage: `url("/icons/cross_2.svg")`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                        }}
                      />
                    </button>
                    <button
                      onClick={() => {
                        setIsDisplayProfile(true);
                        setSelectedRequest(req);
                      }}
                      className="text-primary hover:opacity-80 bg-primary rounded-full cursor-pointer p-1"
                      title="Voir le profil"
                    >
                      <div
                        className={`w-6 h-6 bg-cover bg-center transition-all duration-200 ease-in-out`}
                        style={{
                          backgroundColor: "white",
                          maskImage: `url("/icons/see.svg")`,
                          WebkitMaskImage: `url("/icons/see.svg")`,
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                        }}
                      />
                    </button>
                  </>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-md font-semibold ${req.status === "accepted"
                      ? "bg-usual_green/20 text-usual_green"
                      : "bg-usual_red/20 text-usual_red"
                      }`}
                  >
                    {req.status === "accepted" ? "Acceptée" : "Refusée"}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Popup isDisplayed={isDisplayProfile} onDisplayChange={setIsDisplayProfile}>
        <div className="flex flex-col gap-4">
          {selectedRequest && <UserProfileMini student={{ ...studentExample, name: selectedRequest.studentName.split(" ")[0], surname: selectedRequest.studentName.split(" ")[1] || "" }} />}
          {selectedRequest && selectedRequest.status === "pending" && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => updateStatus(selectedRequest.id, "accepted")}
                className="text-usual_green hover:opacity-80 bg-usual_green rounded-full cursor-pointer p-2"
                title="Accepter"
              >
                <div
                  className={`w-6 h-6 bg-cover bg-center transition-all duration-200 ease-in-out`}
                  style={{
                    backgroundColor: "white",
                    maskImage: `url("/icons/check_2.svg")`,
                    WebkitMaskImage: `url("/icons/check_2.svg")`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </button>
              <button
                onClick={() => updateStatus(selectedRequest.id, "rejected")}
                className="text-usual_red bg-usual_red rounded-full hover:opacity-80 cursor-pointer p-2"
                title="Refuser"
              >
                <div
                  className={`w-6 h-6 bg-cover bg-center transition-all duration-200 ease-in-out`}
                  style={{
                    backgroundColor: "white",
                    maskImage: `url("/icons/cross_2.svg")`,
                    WebkitMaskImage: `url("/icons/cross_2.svg")`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
}

export default StudentsRequest;
