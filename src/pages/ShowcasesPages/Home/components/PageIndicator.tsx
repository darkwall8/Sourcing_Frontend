import React from 'react';

interface PageIndicatorProps {
    currentPage: number;
    totalPages: number;
    onPageClick?: (pageIndex: number) => void;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({currentPage, totalPages, onPageClick}) => {
    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageClick?.(index)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                        currentPage === index
                            ? 'bg-primary border-primary shadow-lg'
                            : 'bg-transparent border-gray-300 hover:border-primary-op-40'
                    }`}
                />
            ))}
        </div>
    );
};

export default PageIndicator;