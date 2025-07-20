import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login'); 
  };

  return (
   <div className="min-h-screen w-full relative bg-gradient-to-br from-gray-900 to-black p-20" style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
 
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative z-50 flex items-center justify-center text-center text-white h-full">
    <div className="space-y-6 max-w-xl px-4">
      <h1 className="text-5xl font-extrabold drop-shadow-md animate-fade-in-down">
        QuizSuper
      </h1>
      <p className="text-xl font-light animate-fade-in-up">
        Test your knowledge and challenge your mind!! 👩🏻‍🎓
      </p>

      <button onClick={handleStart} className="mt-8 bg-gradient-to-r from-blue-800 to-green-950 hover:bg-indigo-500
       text-white hover:text-gray-950 text-lg font-semibold px-10 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-pink-400/60 animate-bounce">
        🚀 Start Quiz
      </button>
    </div>
  </div>
</div>
  );
};

export default Dashboard;
