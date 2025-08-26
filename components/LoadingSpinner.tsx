import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-text-secondary animate-pulse-fast">
        Fetching & Analyzing Page...
      </p>
    </div>
  );
};

export default LoadingSpinner;
