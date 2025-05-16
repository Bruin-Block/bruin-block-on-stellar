import { FaStore, FaLeaf, FaMedal, FaTag } from "react-icons/fa";

// Mock rewards data
const rewards = [
  {
    id: 1,
    businessName: "Leafy Café",
    description: "Sustainable coffee shop with organic, locally-sourced ingredients",
    offer: "20% off any purchase",
    badgeRequired: "Beach Guardian 2025",
    location: "123 Green Street, Toronto",
    image: "/images/rewards/leafy-cafe.jpg",
    category: "Food & Drink",
    ecoRating: 5
  },
  {
    id: 2,
    businessName: "EcoGoods Market",
    description: "Zero-waste grocery store offering plastic-free shopping options",
    offer: "Free reusable produce bag with purchase over $20",
    badgeRequired: "Urban Gardener",
    location: "45 Earth Avenue, Toronto",
    image: "/images/rewards/ecogoods.jpg",
    category: "Retail",
    ecoRating: 5
  },
  {
    id: 3,
    businessName: "Green Transit Bikes",
    description: "Bicycle shop specializing in eco-friendly commuter bikes and repairs",
    offer: "Free bike tune-up",
    badgeRequired: "Trail Steward 2024",
    location: "78 Pedal Lane, Toronto",
    image: "/images/rewards/green-transit.jpg",
    category: "Transportation",
    ecoRating: 4
  },
  {
    id: 4,
    businessName: "Sustainable Threads",
    description: "Clothing store offering ethically made, organic clothing options",
    offer: "15% off any purchase",
    badgeRequired: "Any 2 badges",
    location: "90 Fabric Road, Toronto",
    image: "/images/rewards/sustainable-threads.jpg",
    category: "Fashion",
    ecoRating: 4
  },
  {
    id: 5,
    businessName: "Eco Spa & Wellness",
    description: "Spa using organic, cruelty-free products and sustainable practices",
    offer: "Free eco-friendly gift with any service",
    badgeRequired: "Energy Innovator",
    location: "34 Relax Street, Toronto",
    image: "/images/rewards/eco-spa.jpg",
    category: "Wellness",
    ecoRating: 3
  }
];

export default function RewardsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-green-700 to-green-500 p-8 rounded-xl text-white mb-8">
        <h1 className="text-3xl font-bold mb-3">Eco Rewards</h1>
        <p className="text-lg mb-6">Exclusive perks from eco-friendly businesses for your environmental contributions</p>
        
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center">
            <FaMedal className="mr-2" /> 3 badges unlocked
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center">
            <FaStore className="mr-2" /> 5 partner businesses
          </div>
        </div>
      </section>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Available Rewards</h2>
        <div className="flex gap-2">
          <select className="px-3 py-2 border rounded-lg text-sm">
            <option>All Categories</option>
            <option>Food & Drink</option>
            <option>Retail</option>
            <option>Wellness</option>
            <option>Fashion</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rewards.map(reward => (
          <div key={reward.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{reward.businessName}</h3>
                  <p className="text-gray-600 text-sm">{reward.location}</p>
                </div>
                <div className="flex">
                  {[...Array(reward.ecoRating)].map((_, i) => (
                    <FaLeaf key={i} className="text-green-500" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{reward.description}</p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <FaTag className="text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800">Reward Offer</h4>
                </div>
                <p className="text-green-700 font-medium">{reward.offer}</p>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                  Required: <span className="font-medium">{reward.badgeRequired}</span>
                </div>
                
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Claim Reward
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 