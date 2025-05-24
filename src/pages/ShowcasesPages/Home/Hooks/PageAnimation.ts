import { useState, useEffect } from 'react';

interface UsePageAnimationsProps {
    currentPage: number;
    isScrolling: boolean;
    isEnabled: boolean;
}

export const PageAnimations = ({ currentPage, isScrolling, isEnabled }: UsePageAnimationsProps) => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (!isEnabled || !isScrolling) return;

        // Désactiver les animations en cours
        setAnimationKey(prev => prev + 1);

        // Réactiver les animations après un court délai
        const timer = setTimeout(() => {
            setAnimationKey(prev => prev + 1);
        }, 50);

        return () => clearTimeout(timer);
    }, [currentPage, isScrolling, isEnabled]);

    return { animationKey };
};