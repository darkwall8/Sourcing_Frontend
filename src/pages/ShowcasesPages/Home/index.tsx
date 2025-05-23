import {useState, useEffect, useCallback, useRef} from 'react';
import { useTranslation } from "react-i18next";
import  Check  from "/icons/check.svg";
import HomeCompany from "/images/home_company_image.svg";
import HomeStudent from "/images/home_student_image.svg";
import IconCompany from "/icons/company.svg";
import IconHappy from "/icons/happy.svg";
import IconVector from "/icons/Vector-2.svg";
import IconStudent from "/icons/students.svg";
import IconSchool from "/icons/school.svg";

function Home(){
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const currentPageRef = useRef(0);

    useEffect(() => {
        currentPageRef.current = currentPage;
    }, [currentPage]);

    const scrollToPage = useCallback((pageIndex: number) => {
        if (isScrolling || pageIndex < 0 || pageIndex > 1) return;

        setIsScrolling(true);
        setCurrentPage(pageIndex);

        setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    }, [isScrolling]);

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        if (isScrolling) return;

        const current = currentPageRef.current;

        if (e.deltaY > 0 && current < 1) {
            scrollToPage(current + 1);
        } else if (e.deltaY < 0 && current > 0) {
            scrollToPage(current - 1);
        }
    }, [isScrolling, scrollToPage]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel]);

    return (
        <>
            <div className="" data-canbetest="true">Home</div>
        </>
    )
}

export default Home;