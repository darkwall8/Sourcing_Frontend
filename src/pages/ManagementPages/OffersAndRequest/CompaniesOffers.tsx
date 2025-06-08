import { useState } from "react";
import { useTranslation } from "react-i18next";

type Offer = {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  duration: string;
};

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Développeur Frontend React",
    company: "AGL",
    description: "Stage de 3 mois dans une équipe agile pour créer des interfaces modernes ksosdkosd.",
    location: "Douala, Cameroun",
    duration: "3 mois"
  },
  {
    id: 2,
    title: "Stagiaire DevOps",
    company: "MTN Cameroun",
    description: "Participation à la mise en place d'un pipeline CI/CD avec Docker & GitHub Actions.",
    location: "Yaoundé, Cameroun",
    duration: "2 mois"
  },
];

function CompaniesOffers() {
  const [offers, setOffers] = useState<Offer[]>(mockOffers);
  const { t } = useTranslation();

  const handleApply = (offerId: number) => {
    alert(`Vous avez postulé à l'offre ${offerId}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-primary mb-6">{ t("dashboard.offer_and_request.available_internship_offer") }</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl shadow-md border border-usual_light_purple p-6 flex flex-col justify-between transition-transform hover:scale-[1.01]"
          >
            <div>
              <h2 className="text-xl font-bold text-usual_purple">{offer.title}</h2>
              <p className="text-gray-600 font-medium">{offer.company}</p>
              <p className="text-sm text-gray-500 mt-2">{offer.description}</p>
              <div className="text-sm mt-4 text-gray-700">
                📍 {offer.location} <br />
                🕒 {offer.duration}
              </div>
            </div>
            <button
              onClick={() => handleApply(offer.id)}
              className="mt-6 self-start bg-primary cursor-pointer hover:bg-primary/80 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              { t("dashboard.offer_and_request.request") }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesOffers;
