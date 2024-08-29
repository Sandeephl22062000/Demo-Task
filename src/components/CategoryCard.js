import React from "react";
import RightArrow from "../icons/RightArrow";

const CategoryCard = ({ title, description, icons, appCount }) => {
  return (
    <div className="bg-white text-black p-4 md:p-6 rounded-lg border border-gray-200">
      <div className="min-h-[11rem]">
        <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm md:text-base text-gray-500 mb-4">{description}</p>
      </div>
      <div className="flex space-x-2 mb-4">
        {icons.map(({ IconComponent, color }, index) => (
          <IconComponent key={index} className={`h-10 w-10 ${color}`} />
        ))}
      </div>
      <div className="border-t pt-4 flex justify-between items-center">
        <span className="text-green-600 text-sm md:text-base">
          {appCount} Apps
        </span>
        <button className="bg-black text-white rounded-full py-2 px-4 text-sm md:text-base flex items-center space-x-2">
          <span>Explore more</span>
          <RightArrow height={16} width={16} />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
