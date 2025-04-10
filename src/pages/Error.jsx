import React, { useEffect, useState } from 'react';
import { Map, Compass, Home, ArrowRight } from 'lucide-react';

function Error() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-400 text-white">
      {/* Header Section */}
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="flex justify-center">
          <div className="text-center max-w-3xl">
            <h1 className={`text-5xl md:text-6xl font-bold mb-3 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Oops! Lost in Paradise
            </h1>
            <div className={`flex items-center justify-center space-x-2 text-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <a href="/" className="hover:underline flex items-center">
                <Home className="w-4 h-4 mr-1" /> Home
              </a>
              <span><ArrowRight className="w-4 h-4" /></span>
              <span className="font-semibold">Page Not Found</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="absolute -top-8 -right-8 animate-spin-slow">
              <Compass className="w-16 h-16 text-yellow-300" />
            </div>
            
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl max-w-xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Map className="w-24 h-24 text-yellow-300 animate-pulse" />
                </div>
                
                <h2 className="text-7xl font-bold mb-4">404</h2>
                <h3 className="text-2xl md:text-3xl font-medium mb-6">Destination Not Found</h3>
                
                <p className="text-lg mb-8">
                  It seems you've ventured off the beaten path! This destination doesn't exist on our map. Let's get you back to exploring amazing places.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a 
                    href="/" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Home className="w-5 h-5 mr-2" /> Back to Home
                  </a>
                  <a 
                    href="/destinations" 
                    className="bg-transparent border-2 border-white hover:bg-white/10 py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center"
                  >
                    Popular Destinations
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="mt-16 relative w-full max-w-3xl">
            <div className={`absolute -top-20 left-10 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-16 h-16 bg-yellow-300 rounded-full animate-float opacity-60"></div>
            </div>
            <div className={`absolute top-10 right-20 transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-12 h-12 bg-white rounded-full animate-float-delay opacity-40"></div>
            </div>
            <div className={`absolute -bottom-10 right-40 transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-8 h-8 bg-blue-200 rounded-full animate-float-slow opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation keyframes with CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Error;
