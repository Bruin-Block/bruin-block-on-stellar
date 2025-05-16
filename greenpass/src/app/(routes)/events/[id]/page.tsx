"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarDay, FaUsers, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useWallet } from "@/contexts/WalletContext";

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
    badgeName: "Beach Guardian 2025",
    additionalInfo: [
      "Please wear comfortable clothing and closed-toe shoes",
      "Bring a refillable water bottle",
      "Cleanup equipment will be provided by the organizers",
      "Event will be rescheduled in case of heavy rain"
    ],
    organizerInfo: "The Lake Guardians Association is a non-profit dedicated to preserving water ecosystems in the Greater Toronto Area. We organize regular cleanups and educational workshops."
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
    badgeName: "Urban Gardener",
    additionalInfo: [
      "No prior gardening experience needed",
      "We will provide seeds and potting soil samples",
      "Please bring a notebook and pen",
      "Limited to 25 participants"
    ],
    organizerInfo: "City Growers Collective is an urban farming initiative that teaches sustainable growing practices in urban environments."
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
    badgeName: "Trail Steward 2025",
    additionalInfo: [
      "Wear sturdy footwear and weather-appropriate clothing",
      "Tools and gloves will be provided",
      "Meet at the Rouge Valley Visitor Center parking lot",
      "Event runs rain or shine unless severe weather is forecast"
    ],
    organizerInfo: "Trail Keepers is a volunteer group that maintains hiking trails across Ontario's conservation areas."
  }
];

export default function EventDetailsPage() {
  const { id } = useParams();
  const eventId = parseInt(id as string);
  const event = events.find(e => e.id === eventId);
  
  const { isConnected, connectWallet } = useWallet();
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  
  if (!event) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/events" className="text-green-600 hover:text-green-700 flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Events
        </Link>
      </div>
    );
  }
  
  const handleJoinEvent = async () => {
    if (!isConnected) {
      connectWallet();
      return;
    }
    
    setIsJoining(true);
    
    // Simulate API call to join event
    setTimeout(() => {
      setIsJoining(false);
      setHasJoined(true);
    }, 1500);
  };
  
  return (
    <div className="space-y-8">
      <Link href="/events" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
        <FaArrowLeft className="mr-2" /> Back to Events
      </Link>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-64 w-full bg-gray-200">
          {/* In production, we'd use real images */}
          <div className="absolute inset-0 flex items-center justify-center bg-green-100">
            <span className="text-green-700 font-medium text-xl">{event.title}</span>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-3">
                <FaCalendarDay className="mr-2 text-green-600" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {event.time}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-2 text-green-600" />
                <span>{event.attendees} people attending</span>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-5 border border-green-100 md:w-1/3">
              <div className="text-center mb-4">
                <p className="text-gray-600 mb-1">You'll earn:</p>
                <div className="bg-green-100 px-4 py-2 rounded-lg inline-block">
                  <span className="font-medium text-green-800">{event.badgeName}</span>
                </div>
              </div>
              
              {hasJoined ? (
                <div className="text-center">
                  <div className="flex items-center justify-center text-green-600 mb-3">
                    <FaCheckCircle className="mr-2" />
                    <span className="font-medium">You've joined this event!</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Check your email for event details and remember to scan the QR code at the event to claim your badge.
                  </p>
                  <Link 
                    href="/events"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-center transition-colors"
                  >
                    Browse More Events
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleJoinEvent}
                  disabled={isJoining}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors ${isJoining ? 'opacity-80' : ''}`}
                >
                  {isJoining ? (
                    <span className="inline-flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : isConnected ? (
                    "Join This Event"
                  ) : (
                    "Connect Wallet to Join"
                  )}
                </button>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-200 my-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{event.description}</p>
              
              <h3 className="text-lg font-semibold mb-3">What to Know</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {event.additionalInfo.map((info, i) => (
                  <li key={i} className="text-gray-700">{info}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Organizer</h2>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-medium mb-2">{event.organizer}</h3>
                <p className="text-sm text-gray-600">{event.organizerInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 