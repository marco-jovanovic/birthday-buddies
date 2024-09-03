import React, { useState } from 'react';

import { buddies } from '../data';

function BirthdayBuddy() {
  const [myBuddies, setmyBuddies] = useState(buddies);

  const handleClear = () => {
    setmyBuddies([]);
  };

  return (
    <>
      <h3 className="card-header"> I have {myBuddies.length} buddies</h3>
      <div className="container">
        {myBuddies.map((buddy) => {
          const { name, age, image, id } = buddy;

          return (
            <div key={id} className="card">
              <img className="round-img" src={image} alt={name} />
              <h2>{name}</h2>
              <p>{age} years old</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleClear} className="clear-btn">
        Clear
      </button>
    </>
  );
}

export default BirthdayBuddy;
