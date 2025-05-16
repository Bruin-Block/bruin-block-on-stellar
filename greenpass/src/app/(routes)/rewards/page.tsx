"use client";

import { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import Link from "next/link";
import { FaGift, FaLeaf, FaStar, FaUnlock, FaLock, FaQrcode, FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

// Mock rewards data
const rewards = [
  {
    id: 1,
    title: "20% Off at Leafy Café",
    business: "Leafy Café",
    location: "123 Green Street, Toronto",
    description: "Enjoy 20% off any purchase at Leafy Café, including their delicious vegan options and eco-friendly merchandise.",
    image: "/images/rewards/cafe.jpg",
    badgesRequired: ["Beach Guardian 2025"],
    unlocked: true,
    expiresAt: "2026-01-01",
    redemptionCode: "ECO-BEACH-2025"
  },
  {
    id: 2,
    title: "Free Reusable Tote Bag",
    business: "EcoStore",
    location: "456 Nature Avenue, Toronto",
    description: "Get a free organic cotton tote bag with any purchase over $20 at EcoStore. Reduce plastic bag usage while shopping in style!",
    image: "/images/rewards/tote.jpg",
    badgesRequired: ["Urban Gardener"],
    unlocked: true,
    expiresAt: "2025-12-31",
    redemptionCode: "GARDEN-TOTE-25"
  },
  {
    id: 3,
    title: "15% Off Hiking Gear",
    business: "Outdoor Outfitters",
    location: "789 Mountain Road, Toronto",
    description: "Save 15% on sustainable hiking gear and eco-friendly outdoor equipment at Outdoor Outfitters.",
    image: "/images/rewards/hiking.jpg",
    badgesRequired: ["Trail Steward 2025"],
    unlocked: true,
    expiresAt: "2025-12-20",
    redemptionCode: "TRAIL-GEAR-15"
  },
  {
    id: 4,
    title: "50% Off Solar Phone Charger",
    business: "Green Energy Store",
    location: "321 Renewable Lane, Toronto",
    description: "Get a high-quality portable solar phone charger at 50% off retail price. Perfect for outdoor adventures!",
    image: "/images/rewards/solar.jpg",
    badgesRequired: ["Energy Innovator"],
    unlocked: false,
    expiresAt: "2025-12-31",
    redemptionCode: null
  },
  {
    id: 5,
    title: "Free Tree Sapling",
    business: "Community Garden Center",
    location: "654 Forest Way, Toronto",
    description: "Receive a free native tree sapling to plant in your yard or a designated community space. Help grow our urban forest!",
    image: "/images/rewards/tree.jpg",
    badgesRequired: ["Tree Planter"],
    unlocked: false,
    expiresAt: "2025-12-15",
    redemptionCode: null
  }
];

export default function RewardsPage() {
  const { isConnected, connectWallet } = useWallet();
  const [selectedReward, setSelectedReward] = useState<typeof rewards[0] | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  
  if (!isConnected) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <FaGift className="text-green-600 text-4xl" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Eco-Friendly Rewards</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Connect your wallet to view and redeem rewards from eco-friendly businesses.
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
        <h1 className="text-3xl font-bold mb-2">Eco-Friendly Rewards</h1>
        <p className="text-lg opacity-90">Perks and discounts from green businesses for your environmental impact</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Available Rewards</h2>
            
            <div className="space-y-6">
              {rewards.map(reward => (
                <div 
                  key={reward.id} 
                  onClick={() => setSelectedReward(reward)}
                  className={`border rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all ${
                    selectedReward?.id === reward.id ? 'ring-2 ring-green-500 border-green-500' : 'border-gray-200'
                  } ${!reward.unlocked ? 'opacity-75' : ''}`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-green-100 p-4 flex items-center justify-center">
                      {reward.unlocked ? (
                        <FaGift className="text-green-600 text-4xl" />
                      ) : (
                        <FaLock className="text-gray-400 text-4xl" />
                      )}
                    </div>
                    <div className="p-5 md:w-3/4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{reward.title}</h3>
                          <p className="text-gray-600 mb-2">{reward.business}</p>
                        </div>
                        <div className="flex">
                          {reward.unlocked ? (
                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                              <FaUnlock className="mr-1" /> Unlocked
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                              <FaLock className="mr-1" /> Locked
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3 text-sm">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{reward.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{reward.description}</p>
                      
                      <div className="border-t border-gray-100 pt-3 mt-3">
                        <p className="text-sm font-medium mb-1">Required badges:</p>
                        <div className="flex flex-wrap gap-2">
                          {reward.badgesRequired.map(badge => (
                            <span 
                              key={badge} 
                              className={`text-xs px-2 py-1 rounded-full flex items-center ${
                                reward.unlocked 
                                  ? 'bg-green-50 text-green-700 border border-green-100' 
                                  : 'bg-gray-50 text-gray-500 border border-gray-100'
                              }`}
                            >
                              <FaLeaf className="mr-1" /> {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          {selectedReward ? (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Reward Details</h2>
              
              {showQRCode && selectedReward.unlocked ? (
                <div className="text-center">
                  <div className="bg-white border-4 border-green-100 rounded-lg p-6 mb-4 inline-block">
                    <div className="bg-[#F2F2F2] w-48 h-48 mx-auto flex items-center justify-center">
                      <FaQrcode className="text-6xl" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="font-medium mb-2">Redemption Code</p>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3 font-mono">
                      {selectedReward.redemptionCode}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    Show this QR code to the staff at {selectedReward.business} to redeem your reward.
                  </p>
                  
                  <button
                    onClick={() => setShowQRCode(false)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Back to Details
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-green-100 h-32 rounded-lg flex items-center justify-center mb-4">
                    {selectedReward.unlocked ? (
                      <FaGift className="text-green-600 text-4xl" />
                    ) : (
                      <FaLock className="text-gray-400 text-4xl" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{selectedReward.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedReward.business}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4 text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedReward.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedReward.description}</p>
                  
                  <div className="border border-gray-100 rounded-lg p-4 mb-6">
                    <h4 className="font-medium mb-2">Required Badges</h4>
                    <div className="space-y-2">
                      {selectedReward.badgesRequired.map(badge => (
                        <div key={badge} className="flex items-center">
                          {selectedReward.unlocked ? (
                            <FaStar className="text-yellow-400 mr-2" />
                          ) : (
                            <FaLock className="text-gray-400 mr-2" />
                          )}
                          <span className={selectedReward.unlocked ? 'text-gray-800' : 'text-gray-500'}>
                            {badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-sm text-gray-600">
                      Expires: {new Date(selectedReward.expiresAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  
                  {selectedReward.unlocked ? (
                    <button
                      onClick={() => setShowQRCode(true)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                      Show Redemption Code
                    </button>
                  ) : (
                    <Link
                      href="/events"
                      className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Find Events to Unlock
                    </Link>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <FaGift className="text-green-200 text-5xl mb-4" />
              <h3 className="text-xl font-medium text-gray-400 mb-2">Select a Reward</h3>
              <p className="text-gray-400 text-sm">
                Click on any reward to see its details and redemption information
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h2 className="text-xl font-semibold mb-4">How Rewards Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FaLeaf className="text-green-600 text-xl" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Earn Badges</h3>
            <p className="text-sm text-gray-600">Attend eco-events and earn unique NFT badges</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FaUnlock className="text-green-600 text-xl" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Unlock Rewards</h3>
            <p className="text-sm text-gray-600">Specific badges automatically unlock special perks</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                <FaQrcode className="text-green-600 text-xl" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Redeem In-Store</h3>
            <p className="text-sm text-gray-600">Show QR code to merchant to enjoy your eco-rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
} 