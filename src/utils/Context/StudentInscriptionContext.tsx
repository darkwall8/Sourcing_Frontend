import { createContext, useContext, useState, ReactNode } from "react";

interface StudentInscriptionContextType {
    studentName: string;
    studentSurname: string;
    studentCountry: string;
    studentSchoolLevel: string;
    studentSpecification: string;
    studentOfferPreferences: string[];
    isStudentWantToReceiveNotification: boolean;
    studentCV: File | undefined;
    studentGitHubLink: string;
    studentPortfolioLink: string;
    studentLinkedInLink: string;
    studentEmail: string;
    studentPassword: string;
    setStudentName: (newValue: string) => void;
    setStudentSurname: (newValue: string) => void;
    setStudentCountry: (newValue: string) => void;
    setStudentSchoolLevel: (newValue: string) => void;
    setStudentSpecification: (newValue: string) => void;
    setStudentOfferPreferences: (newValue: string[]) => void;
    setIsStudentWantToReceiveNotification: (newValue: boolean) => void;
    setStudentCV: (newValue: File | undefined) => void;
    setStudentGitHubLink: (newValue: string) => void;
    setStudentPortfolioLink: (newValue: string) => void;
    setStudentLinkedInLink: (newValue: string) => void;
    setStudentEmail: (newValue: string) => void;
    setStudentPassword: (newValue: string) => void;
}

const StudentInscriptionContext = createContext<StudentInscriptionContextType | undefined>(undefined);

export const StudentInscriptionProvider = ({ children }: { children: ReactNode }) => {
    const [studentName, setStudentName] = useState<string>("")
    const [studentSurname, setStudentSurname] = useState<string>("")
    const [studentCountry, setStudentCountry] = useState<string>("")
    const [studentSchoolLevel, setStudentSchoolLevel] = useState<string>("")
    const [studentSpecification, setStudentSpecification] = useState<string>("")
    const [studentOfferPreferences, setStudentOfferPreferences] = useState<string[]>([])
    const [isStudentWantToReceiveNotification, setIsStudentWantToReceiveNotification] = useState<boolean>(false)
    const [studentCV, setStudentCV] = useState<File | undefined>()
    const [studentGitHubLink, setStudentGitHubLink] = useState<string>("")
    const [studentPortfolioLink, setStudentPortfolioLink] = useState<string>("")
    const [studentLinkedInLink, setStudentLinkedInLink] = useState<string>("")
    const [studentEmail, setStudentEmail] = useState<string>("")
    const [studentPassword, setStudentPassword] = useState<string>("")

  return (
    <StudentInscriptionContext.Provider value={{
        studentName,
        studentSurname,
        studentCountry,
        studentSchoolLevel,
        studentSpecification,
        studentOfferPreferences,
        isStudentWantToReceiveNotification,
        studentCV,
        studentGitHubLink,
        studentPortfolioLink,
        studentLinkedInLink,
        studentEmail,
        studentPassword,
        setStudentName,
        setStudentSurname,
        setStudentCountry,
        setStudentSchoolLevel,
        setStudentSpecification,
        setStudentOfferPreferences,
        setIsStudentWantToReceiveNotification,
        setStudentCV,
        setStudentGitHubLink,
        setStudentPortfolioLink,
        setStudentLinkedInLink,
        setStudentEmail,
        setStudentPassword,
        }}>
      {children}
    </StudentInscriptionContext.Provider>
  );
};

export const useStudentInscription = () => {
  const context = useContext(StudentInscriptionContext);
  if (!context) {
    throw new Error("StudentInscription must be used within an StudentInscriptionProvider");
  }
  return context;
};
