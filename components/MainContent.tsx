import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface MainContentProps {
  content: string | null;
  isLoading: boolean;
  error: string | null;
}

const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  // Split content into sections based on the '###' headers which our prompt requests.
  const sections = text.split(/(?=###)/g).filter(s => s.trim());

  return (
    <div className="text-left text-text-secondary space-y-6">
      {sections.map((section, index) => {
        if (!section.trim()) return null;
        
        const headerMatch = section.match(/### (.*)/);
        const header = headerMatch ? headerMatch[1] : '';
        
        // Get content after the header, and split into list items.
        const content = section.replace(/### .*\n?/, '');
        const listItems = content.split('\n').map(line => line.trim()).filter(line => line.startsWith('*') || line.startsWith('-'));

        return (
          <div key={index}>
            {header && <h3 className="text-2xl font-bold text-text-primary mb-3">{header}</h3>}
            {listItems.length > 0 ? (
              <ul className="list-disc pl-6 space-y-2">
                {listItems.map((item, i) => (
                  <li key={i}>{item.substring(item.indexOf(' ') + 1).trim()}</li>
                ))}
              </ul>
            ) : (
               <p>{content}</p> 
            )}
          </div>
        );
      })}
    </div>
  );
};

const MainContent: React.FC<MainContentProps> = ({ content, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">
            <p className="font-bold text-lg mb-2">Oops! Something went wrong.</p>
            <p>{error}</p>
        </div>
      );
    }
    if (content) {
      return <MarkdownRenderer text={content} />;
    }
    return (
      <div className="text-center text-text-secondary">
          <h2 className="text-2xl font-semibold text-text-primary mb-2">Welcome to InsightPal</h2>
          <p className="text-lg">Your summary will appear here once you enter a URL and click "Summarize".</p>
      </div>
    );
  };

  return (
    <div className="w-full h-full p-6 bg-surface-dark rounded-xl border border-slate-700/50 min-h-[400px] flex flex-col justify-center transition-all duration-300">
      {renderContent()}
    </div>
  );
};

export default MainContent;
