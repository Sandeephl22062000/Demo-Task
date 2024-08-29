import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import Pagination from "../components/Pagination";
import { cardDetails } from "../utils/constants";

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardDetails.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width > 1300) {
      setItemsPerPage(12);
    } else if (width > 1000) {
      setItemsPerPage(9);
    } else if (width >= 770) {
      setItemsPerPage(8);
    } else if (width >= 450) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCategories = cardDetails.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen px-4 md:px-[5vw]">
      <main className="pt-16 md:pt-24">
        <div className="px-4 py-5 md:px-6 md:py-6">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl px-2 md:px-4 py-2">
            Top Shopify Collections
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-blue-500 pb-5 md:pb-6">
            <p className="px-2 md:px-4 text-xs md:text-sm lg:text-base mb-2 md:mb-0 text-gray-500">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
            <div className="flex flex-col md:flex-row items-end md:items-center md:ml-auto mt-2 md:mt-0">
              <span className="cursor-pointer text-sm md:text-base pl-4">
                See all
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 custom-md:grid-cols-3 custom-lg:grid-cols-4 gap-6 px-[2vw]">
          {visibleCategories.map((cat, index) => (
            <div key={index}>
              <CategoryCard
                title={cat.title}
                description={cat.description}
                icons={cat.icons}
                appCount={cat.appCounts}
              />
            </div>
          ))}
        </div>
        <div className="px-[2vw] py-[4vh]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
