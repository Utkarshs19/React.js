import React from 'react';

function MyButton() {
  // Function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Match Kundli</button>
  );
}

export default MyButton;
