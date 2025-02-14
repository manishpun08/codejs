import React from 'react';

interface Props {
  overView: string;
}

const CourseOverView = ({ overView }: Props) => {
  return (
    <div className=" ">
      <h2 className="text-4xl font-semibold py-4">Course Overview</h2>
      <p className="text-lg text-gray-800 leading-relaxed text-justify whitespace-pre-line">
        {overView}
      </p>
    </div>
  );
};

export default CourseOverView;
