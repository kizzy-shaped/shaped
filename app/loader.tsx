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
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            {progress < 100 ? (
                <div className="w-full max-w-lg">
                    <div className="h-2 bg-gray-200 rounded">
                        <div
                            className="h-2 bg-green-500 rounded transition-all duration-75"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            ) : (
                <div className="w-10 h-10 bg-green-500 rounded animate-scale-to-full"></div>
            )}
        </div>
    );
};

export default Loader;
