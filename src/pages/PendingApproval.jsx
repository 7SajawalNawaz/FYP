// src/pages/PendingApproval.jsx

import React from "react";

const PendingApproval = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-6 rounded-xl">
      <div className="bg-purple-100 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md py-6 px-8">
        <h1 className="text-3xl font-bold text-purple-900">Your File is Pending</h1>
        <p className="text-lg text-yellow-600 mt-4">
          Your file is currently pending approval by the admin. Please wait for confirmation.
        </p>
        <div className="mt-8">
          <p className="text-lg text-gray-700">
            Thank you for submitting your file. You will be notified once it has been reviewed and approved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingApproval;
