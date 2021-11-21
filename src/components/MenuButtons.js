import React from 'react';

function MenuButtons({ filterMenuItems, CourseData }) {
  let categories = CourseData.map((item) => item.category);
  categories = ['All', ...new Set(categories)];

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}

      {/* <button className='filter-btn' onClick={() => filterMenuItems('All')}>
              All
            </button>
            <button
              className='filter-btn'
              onClick={() => filterMenuItems('Web Development')}
            >
              Web Development
            </button>
            <button
              className='filter-btn'
              onClick={() => filterMenuItems('Analytics')}
            >
              Analytics
            </button>
            <button
              className='filter-btn'
              onClick={() => filterMenuItems('Programming')}
            >
              Programming
            </button> */}
    </div>
  );
}

export default MenuButtons;
