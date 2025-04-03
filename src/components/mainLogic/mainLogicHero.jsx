import React from 'react'
import matchImg from '../../assets/match.jpg'

function MainLogicHero() {
    
const recentProfiles = [
  
  ];
    return (
        <>
            <div className="relative mainLogic">
                {/* Background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white mix-blend-overlay"></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Find Your Perfect <span className="text-yellow-300">Match</span> Today
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="bg-white text-[#3c6e71] hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition hover:scale-105">
                                    Create Profile
                                </button>
                                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition hover:scale-105">
                                    How It Works
                                </button>
                            </div>
                        </div>

                        {/* Right content - image */}
                        <div className="relative">
                            <div className="image-logic relative w-full h-96 md:h-auto aspect-square bg-white bg-opacity-20 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-white border-opacity-30 shadow-2xl">
                                {/* This would be your hero image - using placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <img src={matchImg} alt="" />
                                </div>

                                {/* Floating profile cards */}
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl p-2 shadow-xl">
                                    <div className="bg-gray-200 h-full rounded-xl"></div>
                                </div>
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-2xl p-2 shadow-xl rotate-6">
                                    <div className="bg-gray-200 h-full rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave divider at bottom */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <svg viewBox="0 0 1440 120" className="w-full h-16">
                        <path fill="#FFFFFF" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>
            </div>
            {/* profile added */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Recently Added Profiles
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                  <p className="text-gray-200">{profile.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-pink-600 hover:text-pink-700 font-medium">
                    View Profile
                  </button>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="border-2 bg-[#3c6e71]  text-white hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-colors duration-300">
            View All Profiles
          </button>
        </div>
      </div>

        </>

    )

}

export default MainLogicHero




