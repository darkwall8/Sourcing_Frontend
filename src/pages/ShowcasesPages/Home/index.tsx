import EnterpriseSection from "./Section/EnterpriseSection";
import StudentSection from "./Section/StudentSection";
import { PageScroll } from "./Hooks/PageScroll.ts";
import PageIndicator from "./components/PageIndicator";
import { MediaQuery } from "./Hooks/MediaQuery.ts"
import { useState, useEffect } from 'react'; // Ajout

function Home(){
    const LargeScreen = MediaQuery('(min-width: 1024px)');
    const {currentPage, scrollToPage}= PageScroll(LargeScreen)
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
        <>
            <div className="" data-canbetest="true">Home</div>
        </>
    )
}

export default Home;