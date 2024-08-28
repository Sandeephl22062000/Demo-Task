import React, { useState } from "react";

const CategoryCard = ({ title, imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log({ imageUrl });

  return (
    <div
      className={`bg-lightBlack text-white p-6 m-4 rounded-lg shadow-lg max-w-xs transform transition-transform duration-200 ${
        isHovered ? "scale-110" : "hover:scale-105"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxHeight: isHovered ? "auto" : "320px", overflow: "hidden" }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-32 w-full object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className={`text-sm text-gray-400 ${isHovered ? "" : "truncate"}`}>
        {description}
      </p>
    </div>
  );
};

export default CategoryCard;
