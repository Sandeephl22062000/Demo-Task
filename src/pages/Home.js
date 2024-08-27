import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import Pagination from '../components/Pagination';
import electronicsImage from "../assets/images/electronics.jpg";

const Home = () => {
  const categories = [
    {
      title: 'Digital',
      imageUrl: electronicsImage,
      description: 'Explore the latest in tech and gadgets.',
    },
    {
      title: 'Cereal',
      imageUrl: 'path_to_image/cereal.jpg',
      description: 'Find your favorite breakfast cereals.',
    },
    {
      title: 'Fashion',
      imageUrl: 'path_to_image/fashion.jpg',
      description: 'Discover the latest trends in fashion.',
    },
    {
      title: 'Books',
      imageUrl: 'path_to_image/books.jpg',
      description: 'Dive into a world of knowledge and stories.',
    },
    {
      title: 'Home Appliances',
      imageUrl: 'path_to_image/appliances.jpg',
      description: 'Upgrade your home with the latest appliances.',
    },
    {
      title: 'Sports',
      imageUrl: 'path_to_image/sports.jpg',
      description: 'Gear up for your favorite sports activities.',
    },
    {
      title: 'Home Furnishing',
      imageUrl: 'path_to_image/home_furnishing.jpg',
      description: 'Upgrade your home with stylish furnishings.',
    },
    {
      title: 'Home Decor',
      imageUrl: 'path_to_image/home_decor.jpg',
      description: 'Decorate your space with beautiful decor.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },

    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },

    {
      title: 'Furniture',
      imageUrl: 'path_to_image/furniture.jpg',
      description: 'Find quality furniture for your home.',
    },
    // Add more categories as needed...
  ];

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCategories.map((cat, index) => (
            <CategoryCard
              key={index}
              title={cat.title}
              imageUrl={cat.imageUrl}
              description={cat.description}
            />
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
