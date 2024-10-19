// src/App.js
import React from 'react';
import ReportForm from './components/ReportForm';
import './index.css'; // Import Tailwind styles

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <ReportForm />
    </div>
  );
}

export default App;
