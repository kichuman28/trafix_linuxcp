// src/components/ReportForm.js
import React, { useState } from 'react';
import { submitReportToICP } from '../services/icpService';

function ReportForm() {
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await submitReportToICP(report);

    setLoading(false);
    setReport('');
    alert('Report submitted successfully!');
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <form onSubmit={handleSubmit} className="w-1/2 p-4 border rounded-md shadow-md">
        <textarea
          className="w-full p-2 border mb-4 rounded-md"
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Enter your report..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
}

export default ReportForm;
