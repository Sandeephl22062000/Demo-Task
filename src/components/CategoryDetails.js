import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { categoriesDetails } from "../utils/navigationList";
import Pagination from "./Pagination";

const CategoryDetails = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [categoryName, setCategoryName] = useState();
  const params = useParams();
  const categoryId = Number(params?.categoryId);
  const totalPages = Math.ceil(categoriesDetails.length / itemsPerPage);

  useEffect(() => {
    const category = categoriesDetails.find((category) => {
      console.log({ id: categoryId, categoryId: category.id });
      setCategoryName(category?.category);
      return category.id === categoryId;
    });
    setItems(category?.items);
  }, [categoryId]);

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

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
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
  const visibleCategories = items.slice(startIndex, endIndex);

  return (
    <div>
      <main className="pt-24 px-4">
        <h1 className="flex justify-center h-12 items-center text-3xl tracking-wide font-bold">
          {categoryName}
        </h1>
        <div className="grid grid-cols-1 md-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
          {visibleCategories.map((cat, index) => (
            <div key={index} onClick={() => {}}>
              <CategoryCard
                title={cat.title}
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

export default CategoryDetails;
