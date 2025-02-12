import React from "react";

interface Props {
  overView: string;
}

const CourseOverView = ({ overView }: Props) => {
  return (
    <div className="p-8 bg-gradient-to-r from-teal-200 to-teal-400 rounded-lg shadow-lg max-w-3xl mx-auto my-10 space-y-6">
      <h2 className="text-4xl font-semibold text-teal-900">Course Overview</h2>
      <p className="text-lg text-gray-800 leading-relaxed text-justify">
        {overView}
      </p>
    </div>
  );
};

export default CourseOverView;
