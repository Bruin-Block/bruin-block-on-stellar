"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@/contexts/WalletContext";
import Link from "next/link";
import { FaLeaf, FaLock } from "react-icons/fa";

// Mock user badges data
const mockBadges = [
  {
    id: 1,
    name: "Beach Guardian 2025",
    image: "/images/badges/beach-cleanup.png",
    event: "Beach Cleanup at Lakeshore",
    date: "May 20, 2025",
    description: "Earned for participating in a beach cleanup event and helping remove plastic waste from our shorelines.",
    rarity: "Common"
  },
  {
    id: 2,
    name: "Urban Gardener",
    image: "/images/badges/urban-garden.png",
    event: "Urban Garden Workshop",
    date: "May 25, 2025",
    description: "Awarded for learning sustainable urban gardening techniques and starting your own container garden.",
    rarity: "Common"
  },
  {
    id: 3,
    name: "Trail Steward 2025",
    image: "/images/badges/trail-steward.png",
    event: "Forest Trail Conservation",
    date: "June 5, 2025",
    description: "Given to volunteers who helped maintain hiking trails and preserve natural habitats.",
    rarity: "Uncommon"
  }
];

// Mock locked badges
const lockedBadges = [
  {
    id: 4,
    name: "Energy Innovator",
    image: "/images/badges/locked.png",
    event: "Sustainable Home Energy Workshop",
    date: "June 12, 2025",
    description: "Learn and implement home energy-saving techniques",
    rarity: "Uncommon"
  },
  {
    id: 5,
    name: "Tree Planter",
    image: "/images/badges/locked.png",
    event: "Community Tree Planting Day",
    date: "June 18, 2025",
    description: "Participate in reforestation efforts",
    rarity: "Rare"
  }
];

export default function PassportPage() {
  const { isConnected, connectWallet } = useWallet();
  const [selectedBadge, setSelectedBadge] = useState<typeof mockBadges[0] | null>(null);
  const [userBadges, setUserBadges] = useState<typeof mockBadges>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user badges when wallet is connected
  useEffect(() => {
    if (isConnected) {
      // In a real app, we would fetch badges from the blockchain
      // Simulating API call
      setTimeout(() => {
        setUserBadges(mockBadges);
        setIsLoading(false);
      }, 1000);
    } else {
      setUserBadges([]);
      setIsLoading(false);
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <FaLeaf className="text-green-600 text-4xl" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Your Eco-Passport</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Connect your wallet to view your earned environmental impact badges and track your eco-journey.
        </p>
        <button
          onClick={connectWallet}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-700 to-green-500 p-8 rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-2">Your Eco-Passport</h1>
        <p className="text-lg opacity-90">Collect badges by participating in environmental events</p>
      </div>

      {isLoading ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="inline-flex items-center">
            <svg className="animate-spin h-8 w-8 text-green-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-xl text-gray-600">Loading your badges...</span>
          </div>
        </div>
      ) : (
        <>
          {userBadges.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">No Badges Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't earned any eco-badges yet. Join environmental events to start collecting!
              </p>
              <Link
                href="/events"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
              >
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-6">Your Badges</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {userBadges.map(badge => (
                      <div
                        key={badge.id}
                        onClick={() => setSelectedBadge(badge)}
                        className={`bg-green-50 border rounded-xl p-4 text-center cursor-pointer transition-all hover:shadow-md ${
                          selectedBadge?.id === badge.id ? 'ring-2 ring-green-500 border-green-500' : 'border-green-100'
                        }`}
                      >
                        <div className="bg-green-100 rounded-lg h-24 flex items-center justify-center mb-3">
                          <FaLeaf className="text-green-600 text-3xl" />
                        </div>
                        <h3 className="font-medium text-sm">{badge.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">{badge.date}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Upcoming Badges</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {lockedBadges.map(badge => (
                      <div
                        key={badge.id}
                        className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center opacity-75"
                      >
                        <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center mb-3 relative">
                          <FaLock className="text-gray-400 text-2xl" />
                        </div>
                        <h3 className="font-medium text-sm text-gray-500">{badge.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">{badge.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                {selectedBadge ? (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Badge Details</h2>
                    <div className="bg-green-100 rounded-lg h-48 flex items-center justify-center mb-6">
                      <FaLeaf className="text-green-600 text-5xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{selectedBadge.name}</h3>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>Earned: {selectedBadge.date}</p>
                      <p>Event: {selectedBadge.event}</p>
                      <p>Rarity: {selectedBadge.rarity}</p>
                    </div>
                    <p className="text-gray-700 mb-6">{selectedBadge.description}</p>
                    
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <h4 className="font-medium mb-2">Badge Token Information</h4>
                      <div className="bg-gray-50 rounded-lg p-3 font-mono text-xs break-all">
                        TokenID: xdr9q72hdn937hf93h...
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <FaLeaf className="text-green-200 text-5xl mb-4" />
                    <h3 className="text-xl font-medium text-gray-400 mb-2">Select a Badge</h3>
                    <p className="text-gray-400 text-sm">
                      Click on any badge to see its details
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4">Your Impact Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{userBadges.length}</div>
                <div className="text-gray-600">Badges Earned</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-gray-600">Events Attended</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">Novice</div>
                <div className="text-gray-600">Eco Rank</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 