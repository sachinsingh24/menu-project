import React from 'react'

const CourseType = ({ menuItem }) => {
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <div className='section-center'>
      {menuItem.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4 className='title'>{title}</h4>
                <h4 className='price'>₹{formatToCurrency(price)}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
     })}
    </div>
  )
}

export default CourseType
