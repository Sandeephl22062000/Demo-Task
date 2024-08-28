import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import Pagination from '../components/Pagination';
import Footer from "../components/Footer"
import { categories } from '../utils/navigationList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCategories = categories.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      <main className="pt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
          {visibleCategories.map((cat, index) => (
          <div key={index} onClick={()=>navigate(`/${cat.title.toLowerCase()}`)}>
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
      <Footer/>
    </div>
  );
};

export default Home;
