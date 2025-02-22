import React from "react";

const BillingAndInvoice = () => {
  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Billing and Invoice</h1>
      <h2 className="text-xl font-semibold mb-6">Transaction History</h2>
      
      <div className="space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md flex justify-between font-semibold text-gray-600">
            <span>Receiver Name</span>
            <span>Date of transaction</span>
            <span>Project Name</span>
            <span>Amount Received</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingAndInvoice;
