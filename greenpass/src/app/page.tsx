import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaPassport, FaMapMarkerAlt, FaCalendarDay, FaAward } from "react-icons/fa";

// Mock event data
const events = [
  {
    id: 1,
    title: "Beach Cleanup at Lakeshore",
    date: "2025-05-20",
    time: "10:00 AM - 1:00 PM",
    location: "Lakeshore Blvd, Toronto",
    image: "/images/beach-cleanup.jpg",
    description: "Join us in cleaning up plastic waste and debris from our beautiful lakeshore. All cleaning supplies will be provided. Bring water and sunscreen!",
    attendees: 24,
    organizer: "Lake Guardians Association",
    badgeName: "Beach Guardian 2025"
  },
  {
    id: 2,
    title: "Urban Garden Workshop",
    date: "2025-05-25",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, 150 Queen St",
    image: "/images/garden-workshop.jpg",
    description: "Learn how to grow your own vegetables in small urban spaces. We'll cover container gardening, composting, and seasonal planting schedules.",
    attendees: 15,
    organizer: "City Growers Collective",
    badgeName: "Urban Gardener"
  },
  {
    id: 3,
    title: "Forest Trail Conservation",
    date: "2025-06-05",
    time: "9:00 AM - 12:00 PM",
    location: "Rouge Valley Hiking Trails",
    image: "/images/forest-trail.jpg",
    description: "Help maintain and preserve our local hiking trails. Activities include clearing debris, fixing trail markers, and planting native species.",
    attendees: 18,
    organizer: "Trail Keepers",
    badgeName: "Trail Steward 2025"
  },
  {
    id: 4,
    title: "Sustainable Home Energy Workshop",
    date: "2025-06-12",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Event",
    image: "/images/energy-workshop.jpg",
    description: "Learn about affordable ways to reduce your home energy consumption and explore options for renewable energy solutions.",
    attendees: 42,
    organizer: "Green Energy Coalition",
    badgeName: "Energy Innovator"
  }
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl text-white p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turn Your Eco Actions Into Digital Impact
          </h1>
          <p className="text-xl">
            Discover environmental events, collect NFT badges, and earn rewards from eco-friendly businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/events"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-center"
            >
              Explore Events
            </Link>
            <Link
              href="/wallet"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-white text-center"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl w-64">
            <div className="bg-green-200 rounded-lg p-4 mb-4">
              <FaLeaf className="text-green-700 text-5xl mx-auto" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Digital Eco-Passport</h3>
              <p className="text-green-100 mt-2">Collect badges that prove your environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-12">How GreenPass Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Discover Events</h3>
            <p className="text-gray-600">
              Find local beach cleanups, workshops, and conservation events happening near you.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPassport className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Collect NFT Badges</h3>
            <p className="text-gray-600">
              Attend events and scan QR codes to earn unique NFT badges stored on the Stellar blockchain.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unlock Rewards</h3>
            <p className="text-gray-600">
              Show your NFT badges at partner businesses to receive eco-friendly perks and discounts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event Preview */}
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Event</h2>
            <Link href="/events" className="text-green-600 hover:text-green-700 font-medium">
              View All Events →
            </Link>
          </div>
          
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-green-200 rounded-lg h-48 flex items-center justify-center">
                <span className="text-green-700 font-medium">Beach Cleanup at Lakeshore</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Beach Cleanup at Lakeshore</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarDay className="mr-2" />
                  <span>May 20, 2025 • 10:00 AM - 1:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Lakeshore Blvd, Toronto</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Join us in cleaning up plastic waste and debris from our beautiful lakeshore. 
                  All cleaning supplies will be provided. Bring water and sunscreen!
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-gray-500">
                    <div className="bg-green-100 px-3 py-1 rounded-full text-green-700 text-sm font-medium">
                      Beach Guardian 2025 Badge
                    </div>
                  </div>
                  <Link
                    href="/events/1"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Join Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Connect your Stellar wallet and start your eco-friendly journey today.
        </p>
        <Link
          href="/wallet"
          className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
