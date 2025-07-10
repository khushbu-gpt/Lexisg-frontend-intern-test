import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [citations, setCitations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const simulatedResponse = {
    answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
    citations: [
      {
        text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
      }
    ]
  };
  const handleSubmit = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setShowResult(false);
    await new Promise(resolve => setTimeout(resolve, 1500));

    setAnswer(simulatedResponse.answer);
    setCitations(simulatedResponse.citations);
    setQuery(''); 
    setIsLoading(false); 
    setShowResult(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl flex flex-col h-[85vh] max-h-auto overflow-hidden">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 sm:p-5 rounded-t-xl shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Lexi Legal Assistant</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50">
          {showResult && (
            <div className="flex justify-start">
              <div className="bg-blue-50 border border-blue-200 text-gray-800 p-4 sm:p-5 rounded-lg shadow-md max-w-full lg:max-w-2xl">
                <h2 className="font-semibold text-lg mb-2 text-blue-800">Answer:</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{answer}</p>

  
                {citations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <h3 className="font-semibold text-md mb-2 text-blue-700">Citations:</h3>
                    {citations.map((citation, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        <p className="text-sm text-gray-600  mb-1"><strong>text: </strong>"{citation.text}"</p>
                        <p className="text-sm text-gray-600  mb-1"><strong>source: </strong>"{citation.source}"</p>
                        
                        <a
                          href={citation.link}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md text-left whitespace-wrap break-all"
                          disabled={isLoading} 
                        >
                          <strong>link: </strong>
                          {citation.link}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>

        <div className="p-4 sm:p-6 bg-gray-100 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <textarea
              className="flex-1 p-3 sm:p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 resize-none h-24 sm:h-28 placeholder-gray-500"
              placeholder="Ask a legal question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows="3"
              disabled={isLoading}
            ></textarea>
            <button
              onClick={handleSubmit}
              className={`px-6 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out ${
                isLoading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              disabled={isLoading} 
            >
              {isLoading ? (
                <div className='animate-spin h-5 w-5 text-white mx-auto border-5 border-white rounded-full'></div>
              ) : (
                'Ask Lexi'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
