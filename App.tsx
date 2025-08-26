import React, { useState, useCallback } from 'react';
import { summarizeContent } from './services/geminiService';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!url) {
      setError('Please enter a valid URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSummary(null);

    try {
      // Use a CORS proxy to fetch content from the client-side.
      // This is a workaround for browser security (CORS) and may not work for all sites.
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch the URL. Status: ${response.status}. The server may be blocking requests.`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract text and clean it up.
      let textContent = doc.body.textContent || "";
      textContent = textContent.replace(/\s\s+/g, ' ').trim();

      if (textContent.length < 150) {
        throw new Error("Could not extract enough readable content from the URL. The page might require JavaScript to render or be structured in a way that is difficult to parse.");
      }

      const result = await summarizeContent(textContent, url);
      setSummary(result);
    } catch (err) {
      let errorMessage = 'An unknown error occurred.';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      // Provide more specific feedback for common fetch/CORS errors.
      if (errorMessage.includes('Failed to fetch')) {
        errorMessage = `Could not retrieve content from the URL. This could be due to a network issue, a security (CORS) block from the website, or the proxy service being temporarily unavailable. Some sites are harder to scrape than others! Please try a different URL.`;
      }
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-background-dark font-sans text-text-primary p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
          🚀 InsightPal
        </h1>
        <p className="mt-2 text-lg text-text-secondary">
          Your AI-powered web research assistant. Paste a URL to get started.
        </p>
      </header>
      
      <div className="w-full max-w-3xl mb-8">
        <form onSubmit={handleSummarize} className="flex flex-col sm:flex-row gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/article"
            className="flex-grow p-3 bg-surface-dark border border-slate-700 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
            aria-label="URL to summarize"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
          >
            {isLoading ? 'Analyzing...' : 'Summarize'}
          </button>
        </form>
      </div>

      <main className="w-full max-w-3xl flex-1">
        <MainContent
          content={summary}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
};

export default App;
