// src/components/TransparentCard.jsx
import 'react';
import { LucideSparkles, ArrowRight } from 'lucide-react';

const TransparentCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-7">
      <div
        className="w-90 sm:w-140 md:w-160 md:h-auto lg:w-[50rem] xl:w-[60rem] 
                   sm:h-auto mb-20 backdrop-blur-md bg-white/20 border 
                   border-white/30 rounded-2xl p-6 md:h-100 shadow-lg"
      >
        {/* "Welcome to Noteify" Button (Responsive and Single Line) */}
        <div className="flex justify-center items-center mb-6">
          <button className="flex items-center space-x-2 px-4 sm:px-6 md:px-10 py-1 sm:py-2 
                             border border-white/20 rounded-full bg-transparent 
                             text-white/80 hover:text-white transition-all 
                             hover:bg-white/10 hover:border-white/30 whitespace-nowrap">
            <LucideSparkles className="text-yellow-500 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Welcome to Noteify
            </span>
            <ArrowRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
          </button>
        </div>

        {/* Text on the Left, Image on the Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* Text Section (Unchanged) */}
          <div className="md:w-2/3 p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Prepare with speed and study with strategy
            </h2>
            <p className="text-white/80 mt-4 sm:mt-5 md:mt-7 mb-4 text-sm sm:text-base md:text-lg">
              This is a simple transparent card using Tailwind CSS with a blurred
              background.
            </p>
            
            {/* "Learn More" Button (Unchanged) */}
            <div className="flex justify-center md:justify-start">
              <button className="px-6 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4 bg-blue-600 
                                 text-white rounded-xl shadow hover:bg-blue-700 
                                 transition-transform duration-300 hover:scale-105 
                                 text-sm sm:text-base md:text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section (Responsive) */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              className="h-40 w-40 sm:h-50 sm:w-50 md:h-60 md:w-60 
                         lg:h-72 lg:w-72 transform transition-transform 
                         duration-300 hover:scale-105 object-contain" 
              src="/public/images/Home.png" 
              alt="Home" 
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TransparentCard;

