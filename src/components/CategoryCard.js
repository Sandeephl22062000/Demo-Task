import React from "react";

const CategoryCard = ({ title, imageUrl, description }) => (
  <div className="bg-lightBlack text-white p-6 m-4 rounded-lg shadow-lg max-w-xs transform hover:scale-105 transition-transform duration-200">
    <img 
      src={imageUrl} 
      alt={title} 
      className="h-32 w-full object-cover rounded-t-lg mb-4"
    />
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default CategoryCard;
