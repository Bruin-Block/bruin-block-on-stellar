import { FaMapMarkerAlt, FaCalendarDay, FaTrophy, FaShare } from "react-icons/fa";

// Mock badge/NFT data
const badges = [
  {
    id: 1,
    name: "Beach Guardian 2025",
    eventTitle: "Beach Cleanup at Lakeshore",
    date: "2025-05-20",
    location: "Lakeshore Blvd, Toronto",
    image: "/images/badges/beach-guardian.png",
    issuer: "Lake Guardians Association",
    tokenId: "GBLT5I...XVDGP5C7A-0000001"
  },
  {
    id: 2,
    name: "Urban Gardener",
    eventTitle: "Urban Garden Workshop",
    date: "2025-05-25",
    location: "Community Center, 150 Queen St",
    image: "/images/badges/urban-gardener.png",
    issuer: "City Growers Collective", 
    tokenId: "GBLT5I...XVDGP5C7A-0000002"
  },
  {
    id: 3,
    name: "Trail Steward 2024",
    eventTitle: "Forest Trail Conservation",
    date: "2024-10-15",
    location: "Rouge Valley Hiking Trails",
    image: "/images/badges/trail-steward.png",
    issuer: "Trail Keepers",
    tokenId: "GBLT5I...XVDGP5C7A-0000003"
  }
];

export default function PassportPage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-800 to-green-600 p-8 rounded-xl text-white mb-8">
        <h1 className="text-3xl font-bold mb-3">My Eco-Passport</h1>
        <p className="text-lg mb-6">Your collection of environmental impact achievements</p>
        
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-xl p-4 flex items-center space-x-3">
            <FaTrophy className="text-yellow-300 text-xl" />
            <div>
              <p className="text-sm font-medium">Current Rank</p>
              <p className="font-bold">Eco Explorer</p>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-xl p-4 flex items-center space-x-3">
            <div className="text-2xl font-bold">{badges.length}</div>
            <div>
              <p className="text-sm font-medium">Badges</p>
              <p className="font-bold">Collected</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Passport section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Badges</h2>
          <button className="text-green-600 hover:text-green-700 flex items-center">
            <FaShare className="mr-2" /> Share Passport
          </button>
        </div>
        
        {badges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map(badge => (
              <div key={badge.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full flex items-center justify-center bg-green-100">
                  {/* In production, we'd use real badge images */}
                  <div className="h-32 w-32 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold">{badge.name}</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{badge.name}</h3>
                  <p className="text-gray-600 mb-3">From: {badge.eventTitle}</p>
                  
                  <div className="flex items-center text-gray-600 mb-2 text-sm">
                    <FaCalendarDay className="mr-2" />
                    <span>{new Date(badge.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3 text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{badge.location}</span>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">Issuer: {badge.issuer}</p>
                    <p className="text-xs text-gray-500 font-mono mt-1">Token ID: {badge.tokenId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your passport is empty</h3>
            <p className="text-gray-600 mb-6">Join environmental events to earn NFT badges</p>
            <a href="/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
              Discover Events
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 