import React, { useState } from 'react';
import MenuButtons from './components/MenuButtons';
import CourseType from './components/CourseType';
import CourseData from './Data.js';

function App() {
  const [menuItem, setMenuItem] = useState(CourseData);
  const [mode, setMode] = useState('Dark-Mode');
  const backgroundMode = () => {
    let value;
    if (mode === 'Dark-Mode') {
      value = 'Light-Mode';
      document.body.style = `background:var(--clr-grey-1);color:var(--clr-grey-9)`;
    } else {
      value = 'Dark-Mode';
      document.body.style = `color:teal;background:var(--clr-grey-10)`;
    }
    return setMode(value);
  };

  const filterMenuItems = (category) => {
    if (category === 'All') {
      setMenuItem(CourseData);
    } else {
      let newMenuItem = CourseData.filter((item) => item.category === category);
      setMenuItem(newMenuItem);
    }
  };

  return (
    <main>
      <button className={mode} onClick={backgroundMode}>
        {mode}
      </button>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <div className='underline'></div>
        </div>
        <MenuButtons
          filterMenuItems={filterMenuItems}
          CourseData={CourseData}
        />
        <CourseType menuItem={menuItem} />
      </section>
    </main>
  );
}

export default App;
