import React from 'react';

const DateTime = () => {
  const date = new Date();

  return (
    <div className="date-time">
      <p>
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default DateTime;