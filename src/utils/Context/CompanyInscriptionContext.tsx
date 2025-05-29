import { createContext, useContext, useState, ReactNode } from "react";

interface CompanyInscriptionContextType {
    companyName: string,
    companyPhoneNumber: string,
    companyDomain: string,
    companyEmail: string,
    companyAdresse: string,
    companyWebSite: string,
    companyCorporate: string,
    companyLocation: string,
    companyRCCM: string,
    companyNIU: string,
    companyCommercialRegister: string,
    companyLegalStatut: string,
    companyTaxConformityCertificate: File | undefined,
    companyStatisticalDeclarationNumber: string,
    companyInternPreference: string[],
    companyInternshipType: string[],
    companyInternShipDuration: string,
    companyDescription: string,
    companyInternBenefit: string[],
    hasInternOpportunity: boolean,
    setCompanyName: (newValue: string) => void,
    setCompanyPhoneNumber: (newValue: string) => void,
    setCompanyDomain: (newValue: string) => void,
    setCompanyEmail: (newValue: string) => void,
    setCompanyAdresse: (newValue: string) => void,
    setCompanyWebSite: (newValue: string) => void,
    setCompanyCorporate: (newValue: string) => void,
    setCompanyLocation: (newValue: string) => void,
    setCompanyRCCM: (newValue: string) => void,
    setCompanyNIU: (newValue: string) => void,
    setCompanyCommercialRegister: (newValue: string) => void,
    setCompanyLegalStatut: (newValue: string) => void,
    setCompanyTaxConformityCertificate: (newValue: File | undefined) => void,
    setCompanyStatisticalDeclarationNumber: (newValue: string) => void,
    setCompanyInternPreference: (newValue: string[]) => void,
    setCompanyInternshipType: (newValue: string[]) => void,
    setCompanyInternShipDuration: (newValue: string) => void,
    setCompanyDescription: (newValue: string) => void,
    setCompanyInternBenefit: (newValue: string[]) => void,
    setHasInternOpportunity: (newValue: boolean) => void
}

const CompanyInscriptionContext = createContext<CompanyInscriptionContextType | undefined>(undefined);

export const CompanyInscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [companyName, setCompanyName] = useState<string>("")
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState<string>("")
  const [companyDomain, setCompanyDomain] = useState<string>("")
  const [companyEmail, setCompanyEmail] = useState<string>("")
  const [companyAdresse, setCompanyAdresse] = useState<string>("")
  const [companyWebSite, setCompanyWebSite] = useState<string>("")
  const [companyCorporate, setCompanyCorporate] = useState<string>("")
  const [companyLocation, setCompanyLocation] = useState<string>("")
  const [companyRCCM, setCompanyRCCM] = useState<string>("")
  const [companyNIU, setCompanyNIU] = useState<string>("")
  const [companyCommercialRegister, setCompanyCommercialRegister] = useState<string>("")
  const [companyLegalStatut, setCompanyLegalStatut] = useState<string>("")
  const [companyTaxConformityCertificate, setCompanyTaxConformityCertificate] = useState<File | undefined>()
  const [companyStatisticalDeclarationNumber, setCompanyStatisticalDeclarationNumber] = useState<string>("")
  const [companyInternPreference, setCompanyInternPreference] = useState<string[]>([])
  const [companyInternshipType, setCompanyInternshipType] = useState<string[]>([])
  const [companyInternShipDuration, setCompanyInternShipDuration] = useState<string>("")
  const [companyDescription, setCompanyDescription] = useState<string>("")
  const [companyInternBenefit, setCompanyInternBenefit] = useState<string[]>([])
  const [hasInternOpportunity, setHasInternOpportunity] = useState<boolean>(false)

  return (
    <CompanyInscriptionContext.Provider value={{
      companyName,
      companyPhoneNumber,
      companyDomain,
      companyEmail,
      companyAdresse,
      companyWebSite,
      companyCorporate,
      companyLocation,
      companyRCCM,
      companyNIU,
      companyCommercialRegister,
      companyLegalStatut,
      companyTaxConformityCertificate,
      companyStatisticalDeclarationNumber,
      companyInternPreference,
      companyInternshipType,
      companyInternShipDuration,
      companyDescription,
      companyInternBenefit,
      hasInternOpportunity,
      setCompanyName,
      setCompanyPhoneNumber,
      setCompanyDomain,
      setCompanyEmail,
      setCompanyAdresse,
      setCompanyWebSite,
      setCompanyCorporate,
      setCompanyLocation,
      setCompanyRCCM,
      setCompanyNIU,
      setCompanyCommercialRegister,
      setCompanyLegalStatut,
      setCompanyTaxConformityCertificate,
      setCompanyStatisticalDeclarationNumber,
      setCompanyInternPreference,
      setCompanyInternshipType,
      setCompanyInternShipDuration,
      setCompanyDescription,
      setCompanyInternBenefit,
      setHasInternOpportunity,
    }}>
      {children}
    </CompanyInscriptionContext.Provider>
  );
};

export const useCompanyInscription = () => {
  const context = useContext(CompanyInscriptionContext);
  if (!context) {
    throw new Error("CompanyInscription must be used within an CompanyInscriptionProvider");
  }
  return context;
};
