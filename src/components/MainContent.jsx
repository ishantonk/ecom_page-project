import React, { useState } from 'react';
import Card from './Card';
import DataSet from '../data/dummyData';

function MainContent({ currentCategoryId }) {
  const [sortType, setSortType] = useState("none");
  const [productData, setProductData] = useState(DataSet);
  const changeSortType = (e) => {
    setSortType(e.target.value);
    getSortedListOfCards(e.target.value);
  }

  // get sorted list of cards
  const getSortedListOfCards = (typeOfSort) => {
    if (typeOfSort === "lowest price") {
      return (
        productData.sort((a, b) => {
          // for lowest price or in ascending order
          return a.price - b.price;
        })
      );
    } else if (typeOfSort === "highest price") {
      return (
        productData.sort((a, b) => {
          // for highest price or in descending order
          return b.price - a.price;
        })
      );
    } else if (typeOfSort === "recent") {
      return (
        productData.sort((a, b) => {
          // for sort in recent
          return a.listedTimestamp - b.listedTimestamp;
        })
      );
    } else if (typeOfSort === "popular") {
      return (
        productData.sort((a, b) => {
          // for sort by popularly
          return a.popularity - b.popularity;
        })
      );
    } else {
      setProductData(DataSet);
    }
  }
  return (
    <div className='bg-white h-full p-6'>
      {/* button for sort items */}
      <div className='flex justify-end items-center my-2 mr-4 gap-x-2'>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
          Sort items
        </label>
        <select onChange={(e) => changeSortType(e)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-transparent bg-gray-200 hover:text-blue-700 focus:z-10">
          <option defaultValue value="none">None</option>
          <option value="recent">Recent</option>
          <option value="popular">Popular</option>
          <option value="lowest price">Lowest price</option>
          <option value="highest price">Highest price</option>
        </select>
      </div>
      <div className='grid grid-flow-row grid-cols-3 gap-4 gap-y-10 my-2'>
        {
          currentCategoryId === 0 ?
            // for all categories
            productData.map((value) => {
              const { id, name, image, price } = value;
              return (
                <Card key={id} id={id} title={name} price={price} image={image} />
              );
            })
            :
            // for filter category
            productData.filter((element) => element.categoryId === currentCategoryId).map((filterVal) => {
              const { id, name, image, price } = filterVal;
              return (
                <Card key={id} id={id} title={name} price={price} image={image} />
              );
            })
        }
      </div>
    </div>
  )
}

export default MainContent;