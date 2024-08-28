// src/components/PageNotFound.js
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col min-h-[80vh] md:hmin-h-[90vh] bg-gray-100">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page you're looking for does not exist.
          </p>
          <a href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
