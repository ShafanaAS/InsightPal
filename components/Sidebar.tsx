
import React from 'react';
import type { Step } from '../types';
import StepCard from './StepCard';

interface SidebarProps {
  steps: Step[];
  activeStepId: number;
  onSelectStep: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, activeStepId, onSelectStep }) => {
  return (
    <aside className="w-1/4 max-w-sm min-w-max h-full bg-surface-dark/50 border-r border-slate-700/50 p-4 overflow-y-auto">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-brand-primary/20 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 01-12.022 0m12.022 0L15.59 4.63m-5.84 9.74v-4.82l-2.08 4.82a6 6 0 005.84 2.56z" />
            </svg>
        </div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">AI Agent Forge</h1>
      </div>
      <nav className="space-y-2">
        {steps.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            isActive={step.id === activeStepId}
            onClick={() => onSelectStep(step.id)}
          />
        ))}
      </nav>
       <div className="mt-8 p-4 bg-slate-800/50 rounded-lg text-sm text-text-secondary">
        <p className="font-semibold text-text-primary mb-2">Your AI Mentor</p>
        <p>Follow these steps to build your understanding of AI agents from the ground up. Click "Generate Explanation" in each step to learn more.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
