'use client';

import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onFinish(), 1000); // Wait for animation to complete
                }
                return Math.min(prev + 1, 100);
            });
        }, 30); // Speed of the progress bar

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            {progress < 100 ? (
                <div className="w-full max-w-lg">
                    <div className={`${progress > 90 ? 'w-[36px] mx-auto' : ''} h-[36px] bg-[#FFFFFF1F]`}>
                        <div
                            className="h-[36px] bg-white transition-all duration-75"
                            style={{ width: progress > 90 ? '36px' : `${progress}%` }}
                        />
                    </div>
                </div>
            ) : (
                <div className="w-[36px] h-[36px] bg-white animate-scale-to-full"></div>
            )}
        </div>
    );
};

export default Loader;
