import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewPic = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pic = location.state?.pic;

  if (!pic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
        <h2 className="text-xl mb-4 text-center">Certificate not available!</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 sm:p-6 md:p-10">
      <img
        src={pic}
        alt="Certificate"
        className="w-full max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl rounded shadow-lg object-contain"
        style={{ maxHeight: '80vh' }}
      />
      <button
        onClick={() => navigate(-1)} 
        className="mt-6 px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default ViewPic;
