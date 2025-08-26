
import React from 'react';
import type { Step } from '../types';

interface StepCardProps {
  step: Step;
  isActive: boolean;
  onClick: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ step, isActive, onClick }) => {
  const baseClasses = "w-full flex items-start p-3 rounded-lg text-left transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary";
  const activeClasses = "bg-brand-primary/20 text-text-primary shadow-lg";
  const inactiveClasses = "text-text-secondary hover:bg-slate-700/50 hover:text-text-primary";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <div className="flex-shrink-0 mr-4 mt-1">{step.icon}</div>
      <div>
        <p className="font-bold text-md">{step.title}</p>
        <p className="text-sm text-text-secondary">{isActive ? '' : step.description}</p>
      </div>
    </button>
  );
};

export default StepCard;
