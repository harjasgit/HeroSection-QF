
import React from "react";

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-100 p-4 flex justify-between items-center z-50">
      <div className="flex items-center space-x-4">
        <h3 className="text-black font-bold">True Design is Invisible</h3>
        <img src="path_to_your_logo.png" alt="QuickFinds Logo" className="w-8 h-8" />
        <h3 className="text-black font-bold">
          <span className="text-blue-600">Quick</span>
          <span className="text-green-600">Finds</span>
        </h3>
      </div>

      <div className="flex items-center space-x-4">
        <h3 className="text-black font-bold">We Make Solutions Simple</h3>
        <img src="path_to_your_logo.png" alt="QuickFind Logo" className="w-8 h-8" />
        <h3 className="text-black font-bold">
          <span className="text-blue-600">Quick</span>
          <span className="text-green-600">Find</span>
        </h3>
      </div>
    </div>
  );
};

export default Banner;
