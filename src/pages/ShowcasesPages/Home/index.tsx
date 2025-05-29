import EnterpriseSection from "./Section/EnterpriseSection";
import StudentSection from "./Section/StudentSection";
import { PageScroll } from "./Hooks/PageScroll.ts";
import PageIndicator from "./components/PageIndicator";
import { MediaQuery } from "./Hooks/MediaQuery.ts"
import { useState, useEffect } from 'react'; // Ajout

function Home() {
    const LargeScreen = MediaQuery('(min-width: 1024px)');
    const { currentPage, scrollToPage } = PageScroll(LargeScreen)
    const [visitedPages, setVisitedPages] = useState<Set<number>>(new Set([0])); // Nouvel état

    useEffect(() => {
        if (!LargeScreen) {
            window.scrollTo(0, 0); // Force le scroll visuel vers le haut
        }
    }, [LargeScreen]);


    useEffect(() => {
        setVisitedPages(prev => {
            if (prev.has(currentPage)) return prev;
            const newSet = new Set(prev);
            newSet.add(currentPage);
            return newSet;
        });
    }, [currentPage]);

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