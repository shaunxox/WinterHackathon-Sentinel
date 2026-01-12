import React, { useState } from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard'; // Create similar files for Dashboard/Results
import Results from '../pages/Result';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <>
      {currentPage === 'login' && <Login onLogin={() => setCurrentPage('dashboard')} />}
      {currentPage === 'dashboard' && (
        <Dashboard 
          setFile={setUploadedFile} 
          onFinish={() => setCurrentPage('results')} 
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === 'results' && <Results file={uploadedFile} onNavigate={setCurrentPage} />}
    </>
  );
};

export default App;