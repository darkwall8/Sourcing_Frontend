import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import AutocompleteInput, { Option } from "../../../components/ui/AutocompleteInput";
import InputDropdown from "../../../components/ui/InputDropdown";


type Offer = {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  duration: string;
  domain: string;
};

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Développeur Frontend React",
    company: "AGL",
    description: "Stage de 3 mois dans une équipe agile pour créer des interfaces modernes ksosdkosd.",
    location: "Douala, Cameroun",
    duration: "3 mois",
    domain: "Développement"
  },
  {
    id: 2,
    title: "Stagiaire DevOps",
    company: "MTN Cameroun",
    description: "Participation à la mise en place d'un pipeline CI/CD avec Docker & GitHub Actions.",
    location: "Yaoundé, Cameroun",
    duration: "2 mois",
    domain: "Infrastructure"
  },
];

function CompaniesOffers() {
  const { t } = useTranslation();
  const [offers] = useState<Offer[]>(mockOffers);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(mockOffers);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const locationOptions: Option[] = useMemo(() => {
    return [...new Set(offers.map(o => o.location))].map(loc => ({ label: loc, value: loc }));
  }, [offers]);

  const durationOptions: Option[] = useMemo(() => {
    return [...new Set(offers.map(o => o.duration))].map(dur => ({ label: dur, value: dur }));
  }, [offers]);

  const companyOptions: Option[] = useMemo(() => {
    return [...new Set(offers.map(o => o.company))].map(c => ({ label: c, value: c }));
  }, [offers]);

  const domainOptions: Option[] = useMemo(() => {
    return [...new Set(offers.map(o => o.domain))].map(d => ({ label: d, value: d }));
  }, [offers]);

  const titleOptions: Option[] = offers.map((o) => ({ label: o.title, value: o.title }));

  const handleFilter = () => {
    let updated = [...offers];
    if (selectedLocation) updated = updated.filter(o => o.location === selectedLocation);
    if (selectedDuration) updated = updated.filter(o => o.duration === selectedDuration);
    if (selectedCompany) updated = updated.filter(o => o.company === selectedCompany);
    if (selectedDomain) updated = updated.filter(o => o.domain === selectedDomain);
    if (searchTerm) updated = updated.filter(o => o.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredOffers(updated);
  };

  const handleReset = () => {
    setSelectedLocation("");
    setSelectedDuration("");
    setSelectedCompany("");
    setSelectedDomain("");
    setSearchTerm("");
    setFilteredOffers(offers);
  };

  const handleApply = (offerId: number) => {
    alert(`Vous avez postulé à l'offre ${offerId}`);
  };

  return (
    <div className="p-8 h-full overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-primary mb-6">{t("dashboard.offer_and_request.available_internship_offer")}</h1>

      <div className="flex flex-col gap-4">
        <AutocompleteInput
          placeholder="Rechercher par intitulé de stage"
          options={titleOptions}
          onSelect={(option) => {
            setSearchTerm(option.value);
            handleFilter();
          }}
        />
        <div className="flex flex-wrap gap-x-4 gap-y-2 w-full">
          <InputDropdown
            label="Lieu"
            placeholder="Sélectionnez un lieu"
            isRequired={false}
            value={selectedLocation}
            handleChange={(val) => { setSelectedLocation(val); handleFilter(); }}
            options={locationOptions}
          />
          <InputDropdown
            label="Durée"
            placeholder="Sélectionnez une durée"
            isRequired={false}
            value={selectedDuration}
            handleChange={(val) => { setSelectedDuration(val); handleFilter(); }}
            options={durationOptions}
          />
          <InputDropdown
            label="Entreprise"
            placeholder="Sélectionnez une entreprise"
            isRequired={false}
            value={selectedCompany}
            handleChange={(val) => { setSelectedCompany(val); handleFilter(); }}
            options={companyOptions}
          />
          <InputDropdown
            label="Domaine"
            placeholder="Développement, Réseau..."
            isRequired={false}
            value={selectedDomain}
            handleChange={(val) => { setSelectedDomain(val); handleFilter(); }}
            options={domainOptions}
          />
        </div>
        <div className="mb-8">
          <button
            onClick={handleReset}
            className="text-sm bg-usual_purple text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => (
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
                🕒 {offer.duration} <br />
                🧩 {offer.domain}
              </div>
            </div>
            <button
              onClick={() => handleApply(offer.id)}
              className="mt-6 self-start bg-primary cursor-pointer hover:bg-primary/80 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              {t("dashboard.offer_and_request.request")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesOffers;
