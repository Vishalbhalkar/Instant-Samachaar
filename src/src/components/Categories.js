import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
      { name: 'Smartphone', query: 'smartphone' },
      { name: 'Technology', query: 'technology' },
      { name: 'Review', query: 'review' },
      { name: 'IT', query: 'information technology' }
    ];

    return (
        <div>
            <section className="bg-[rgb(0,0,0)] w-full h-[557px]">
                    <div className='flex justify-center items-center top-10 relative'>
                <div className='absolute w-5/6 border-[1.5px] border-white rounded-lg'></div>
                </div>
                <h2 className="font-bold text-white text-[64px] pt-20 text-center">
                POPULAR&nbsp;
                <span className="text-bluet">CATEGORIES</span>
                </h2>
                <div className="flex flex-row justify-center mt-4 gap-10 cursor-pointer">
                {categories.map((category, index) => (
                    <Link key={index} to={`/search?q=${category.query}`}>
                    <div className="border w-[250px] h-[300px] rounded-md hover:shadow-blue-400 shadow-lg bg-cover bg-center bg-no-repeat image-container" style={{ backgroundImage: `url('${getBackgroundImage(category.query)}')` }}>
                        <h4 className="font-[700] text-white text-[24px] mx-10 text-center pt-[250px]">{category.name}</h4>
                    </div>
                    </Link>
                ))}
                </div>
            </section>
        </div>
    );
};

// Function to get background image URL based on category query (dummy URLs used)
const getBackgroundImage = (query) => {
  switch (query) {
    case 'smartphone':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbUlM7ZqmITq60v-itQHmnykWVyiUO9uAp3rI8bZRlMADgDX7OYLTr7gg5q95h3theNc&usqp=CAU';
    case 'technology':
      return 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/technology-trend-freepik-1647963838.jpg';
    case 'review':
      return 'https://www.gizmochina.com/wp-content/uploads/2024/06/PS5.webp';
    case 'information technology':
      return 'https://i.insider.com/659a6aa8ec62ab5daf81571f?width=700';
    default:
      return ''; // Handle default case if necessary
  }
};
export default Categories;
