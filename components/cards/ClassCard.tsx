import React from 'react';

const ClassCard = () => {
  return (
    <div className="w-full text-white bg-primary-600 min-w-[200px] mx-auto rounded-xl shadow-lg p-4  cursor-pointer ">
      <h1 className="font-bold text-2xl pb-1"> Online Class</h1>
      <p className="font-semibold text-lg">February 21, 2025</p>
      <p className="font-semibold text-sm"> 8:00pm-9:30pm</p>
    </div>
  );
};

export default ClassCard;
