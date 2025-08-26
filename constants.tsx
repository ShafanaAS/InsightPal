
import React from 'react';
import type { Step } from './types';

const BrainIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2.25 2.25 0 003.813-1.428l-1.121-4.483a2.25 2.25 0 00-2.134-1.928H14.25a2.25 2.25 0 00-2.134 1.928l-1.121 4.483a2.25 2.25 0 003.813 1.428L12 18.517l.611.546a.75.75 0 001.054-.188l2-2.5a.75.75 0 00-.188-1.054l-.546-.611 2.546-2.546zM9 13.5a3.75 3.75 0 00-7.5 0v3.75a3.75 3.75 0 007.5 0V13.5z" />
  </svg>
);

const EyeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WrenchScrewdriverIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.474-4.474c-.048-.58-.198-1.153-.448-1.684m-5.108.233c-.346.24-.69.508-.997.82a4.5 4.5 0 01-6.364 0c-.307-.312-.56-.654-.82-.997m5.108.233L5.5 5.5m0 0a4.5 4.5 0 016.364 0c.307.312.56.654.82.997m-6.364 0c-.346.24-.69.508-.997.82a4.5 4.5 0 000 6.364c.307.312.56.654.82.997m-6.364 0L5.5 16.5" />
  </svg>
);

const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);

const PuzzlePieceIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.539-1.199 1.2-1.199h.6c.66 0 1.2.54 1.2 1.2v.6c0 .66-.54 1.2-1.2 1.2h-.6c-.66 0-1.2-.54-1.2-1.2v-.6zM10.5 18.087c0-.66.539-1.199 1.2-1.199h.6c.66 0 1.2.54 1.2 1.2v.6c0 .66-.54 1.2-1.2 1.2h-.6c-.66 0-1.2-.54-1.2-1.2v-.6zM18 10.5h.6c.66 0 1.2.54 1.2 1.2v.6c0 .66-.54 1.2-1.2 1.2h-.6c-.66 0-1.2-.54-1.2-1.2v-.6c0-.66.539-1.199 1.2-1.199zM6 10.5h.6c.66 0 1.2.54 1.2 1.2v.6c0 .66-.54 1.2-1.2 1.2H6c-.66 0-1.2-.54-1.2-1.2v-.6c0-.66.539-1.199 1.2-1.199zM12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z" />
    </svg>
);

const AcademicCapIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v-2.5l4-2.222m18 4.444V9.5l-4-2.222" />
    </svg>
);


export const STEPS: Step[] = [
  {
    id: 1,
    title: 'What is an AI Agent?',
    description: 'Understand the fundamental definition and architecture of an autonomous AI agent.',
    icon: <AcademicCapIcon className="h-6 w-6 text-brand-light" />,
  },
  {
    id: 2,
    title: 'The Agent\'s Mind: LLMs',
    description: 'Explore how Large Language Models (LLMs) like Gemini act as the core reasoning engine.',
    icon: <BrainIcon className="h-6 w-6 text-brand-light" />,
  },
  {
    id: 3,
    title: 'The Agent\'s Senses: Perception',
    description: 'Learn how agents take in information from various sources like text, images, and APIs.',
    icon: <EyeIcon className="h-6 w-6 text-brand-light" />,
  },
  {
    id: 4,
    title: 'The Agent\'s Tools: Functions',
    description: 'Discover how agents can use external tools and functions to interact with the world.',
    icon: <WrenchScrewdriverIcon className="h-6 w-6 text-brand-light" />,
  },
  {
    id: 5,
    title: 'The Agent\'s Memory: State',
    description: 'Understand the importance of memory and state management for context and learning.',
    icon: <BookOpenIcon className="h-6 w-6 text-brand-light" />,
  },
  {
    id: 6,
    title: 'Putting It All Together',
    description: 'See a simple, complete example of an AI agent that combines all these concepts.',
    icon: <PuzzlePieceIcon className="h-6 w-6 text-brand-light" />,
  },
];
