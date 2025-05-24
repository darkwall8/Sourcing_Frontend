import { useState, useEffect, useCallback, useRef } from 'react';

export const PageScroll = (isEnabled: boolean = true) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const currentPageRef = useRef(0);

    useEffect(() => {
        currentPageRef.current = currentPage;
    }, [currentPage]);

    // Réinitialiser à la première page quand l'effet se réactive
    useEffect(() => {
        if (!isEnabled) {
            setCurrentPage(0); // Réinitialisation immédiate
            currentPageRef.current = 0;
        }
    }, [isEnabled]);

    const scrollToPage = useCallback((pageIndex: number) => {
        if (isScrolling || pageIndex < 0 || pageIndex > 1) return;

        setIsScrolling(true);
        setCurrentPage(pageIndex);

        setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    }, [isScrolling]);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isEnabled) return; // Ne pas intercepter si désactivé

        e.preventDefault();
        if (isScrolling) return;

        const current = currentPageRef.current;

        if (e.deltaY > 0 && current < 1) {
            scrollToPage(current + 1);
        } else if (e.deltaY < 0 && current > 0) {
            scrollToPage(current - 1);
        }
    }, [isScrolling, scrollToPage, isEnabled]);

    useEffect(() => {
        if (!isEnabled) return; // Ne pas ajouter l'event listener si désactivé

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel, isEnabled]);

    // Retourner les valeurs nécessaires
    return {
        currentPage,
        isScrolling,
        scrollToPage
    };
};