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
                <div className="w-full">
                    <div className={`${progress > 90 ? 'wmin_lg:w-[36px] wmax_lg:w-[30px] mx-auto' : ''} wmin_lg:h-[36px] wmax_lg:h-[30px] bg-[#FFFFFF1F]`}>
                        <div
                            className="wmin_lg:h-[36px] wmax_lg:h-[30px] bg-white transition-all duration-75"
                            style={{ width: progress > 90 ? '36px' : `${progress}%` }}
                        />
                    </div>
                </div>
            ) : (
                <div className="wmin_lg:w-[36px] wmin_lg:h-[36px] wmax_lg:w-[36px] wmax_lg:h-[30px] bg-white animate-scale-to-full"></div>
            )}
        </div>
    );
};

export default Loader;
