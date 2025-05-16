import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarDay, FaUsers } from "react-icons/fa";

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
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-green-700 to-green-500 p-8 rounded-xl text-white mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Environmental Events Near You</h1>
        <p className="text-lg mb-6">Join events, earn NFT badges, and unlock rewards from eco-friendly businesses.</p>
        <div className="flex space-x-4">
          <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
            Explore Events
          </button>
          <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-2 rounded-lg font-medium transition-colors">
            Learn More
          </button>
        </div>
      </section>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <div className="flex gap-2">
          <select className="px-3 py-2 border rounded-lg text-sm">
            <option>All Categories</option>
            <option>Cleanups</option>
            <option>Workshops</option>
            <option>Conservation</option>
          </select>
          <select className="px-3 py-2 border rounded-lg text-sm">
            <option>Any Distance</option>
            <option>5 km</option>
            <option>10 km</option>
            <option>25 km</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full bg-gray-200">
              {/* In production, we'd use real images */}
              <div className="absolute inset-0 flex items-center justify-center bg-green-100">
                <span className="text-green-700 font-medium">{event.title}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <FaCalendarDay className="mr-2" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {event.time}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-gray-500">
                  <FaUsers className="mr-1" />
                  <span className="text-sm">{event.attendees} attending</span>
                </div>
                
                <Link 
                  href={`/events/${event.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Join Event
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
