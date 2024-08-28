import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import Pagination from "../components/Pagination";
import { categoriesDetails } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categoriesDetails.length / itemsPerPage);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(12);
    } else if (width >= 770) {
      setItemsPerPage(9);
    } else if (width >= 450) {
      setItemsPerPage(8);
    } else {
      setItemsPerPage(6);
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
  const visibleCategories = categoriesDetails.slice(startIndex, endIndex);
  console.log({ visibleCategories });

  return (
    <div className="min-h-screen">
      <main className="pt-24 px-4 ">
        <h1 className="flex justify-center  h-12 items-center text-3xl tracking-wide font-bold">
          Categories
        </h1>

        <div className="grid grid-cols-1 md-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {visibleCategories.map((cat, index) => (
            <div key={index} onClick={() => navigate(`/category/${cat.id}`)}>
              <CategoryCard
                title={cat.category}
                imageUrl={cat.imageUrl}
                description={cat.description}
              />
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default Home;
