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
        LargeScreen ? (
            <div className="lg:overflow-hidden h-full">
                <div
                    className={LargeScreen ? "lg:duration-1500 h-full lg:ease-in-out hidden md:block" : ""}
                    style={{
                        transform: LargeScreen ?

                            `translateY(-${currentPage * 87}vh)` :
                            "translateY(0)", // Force la position initiale
                        transition: LargeScreen ?
                            "transform 1000ms ease-in-out" :
                            "none"
                    }}
                >
                    <EnterpriseSection shouldAnimate={visitedPages.has(0)} />
                    <StudentSection shouldAnimate={visitedPages.has(1)} />
                </div>
                {LargeScreen && (
                    <PageIndicator
                        currentPage={currentPage}
                        totalPages={2}
                        onPageClick={scrollToPage}
                    />
                )}
            </div>
        ) : (
            <div className="lg:overflow-hidden">
                <div>
                    <EnterpriseSection shouldAnimate={visitedPages.has(0)} />
                    <StudentSection shouldAnimate={visitedPages.has(1)} />
                </div>
            </div>
        )
    )
}

export default Home;