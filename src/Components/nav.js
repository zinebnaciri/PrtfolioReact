import React, { useState } from 'react';
import Education from './Eductation';
import Experience from './Experience';
import MediaCard from './Certifications';

function TEST() {
  const [activeComponent, setActiveComponent] = useState('Education');

  const handleClick = (component) => {
    setActiveComponent(component);
  }

  return (
    <div>
      <nav>
        <button onClick={() => handleClick('Education')}>Education</button>
        <button onClick={() => handleClick('Experience')}>Experience</button>
        <button onClick={() => handleClick('MediaCard')}>MediaCard</button>
      </nav>
      {activeComponent === 'Education' && <Education />}
      {activeComponent === 'Experience' && <Experience />}
      {activeComponent === 'MediaCard' && <MediaCard />}
    </div>
  );
}

export default TEST;
