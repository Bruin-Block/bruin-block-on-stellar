"use client";

import { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { FaCalendarPlus, FaImage, FaQrcode, FaCheckCircle } from "react-icons/fa";

export default function OrganizerPage() {
  const { isConnected, connectWallet, publicKey } = useWallet();
  const [formStep, setFormStep] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    badgeName: "",
    organizer: "",
    category: "cleanup"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    
    // Simulate API call to create event and mint NFT badge
    setTimeout(() => {
      setIsCreating(false);
      setIsSuccess(true);
      setFormStep(3);
    }, 2000);
  };

  if (!isConnected) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <FaCalendarPlus className="text-green-600 text-4xl" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Create Environmental Event</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Connect your wallet to create events and mint NFT badges for attendees.
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
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-green-500 p-6 text-white">
          <h1 className="text-2xl font-bold">Create Environmental Event</h1>
          <p className="text-sm opacity-90">Organize an event and mint NFT badges for attendees</p>
        </div>
        
        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`h-1 w-12 mx-2 ${formStep >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className={`h-1 w-12 mx-2 ${formStep >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {formStep === 1 && "Event Details"}
              {formStep === 2 && "Badge Creation"}
              {formStep === 3 && "Event Created"}
            </div>
          </div>

          {formStep === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                  <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Beach Cleanup at Lakeshore"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={eventData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={eventData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Lakeshore Blvd, Toronto"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={eventData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="cleanup">Cleanup</option>
                    <option value="workshop">Workshop</option>
                    <option value="conservation">Conservation</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organizer Name</label>
                  <input
                    type="text"
                    name="organizer"
                    value={eventData.organizer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Lake Guardians Association"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe your event, what attendees should bring, etc."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Next: Badge Details
                </button>
              </div>
            </form>
          )}
          
          {formStep === 2 && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NFT Badge Name</label>
                  <input
                    type="text"
                    name="badgeName"
                    value={eventData.badgeName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Beach Guardian 2025"
                    required
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FaImage className="text-green-600 mr-2" />
                    <h3 className="font-medium">Badge Image</h3>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors">
                    <FaImage className="text-gray-400 text-5xl mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload badge image</p>
                    <p className="text-xs text-gray-500">PNG, JPG or SVG (max. 5MB)</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <FaQrcode className="text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium mb-1">NFT Claim Process</h3>
                      <p className="text-sm text-gray-600">
                        A unique QR code will be generated for this event. Attendees can scan it on-site
                        to claim their badge NFT directly to their connected wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isCreating}
                  className={`bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors ${isCreating ? 'opacity-70' : ''}`}
                >
                  {isCreating ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </span>
                  ) : (
                    "Create Event & Mint Badge"
                  )}
                </button>
              </div>
            </form>
          )}
          
          {formStep === 3 && (
            <div className="text-center py-6">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaCheckCircle className="text-green-600 text-4xl" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Event Created Successfully!</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Your event "{eventData.title}" has been created and the NFT badge has been prepared.
              </p>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-white border-4 border-green-100 rounded-lg p-6 inline-block">
                    <div className="bg-[#F2F2F2] w-48 h-48 flex items-center justify-center">
                      <FaQrcode className="text-6xl" />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-green-800">Event Claim QR Code</p>
                <p className="text-xs text-gray-600 mt-1">
                  Display this QR code at your event for attendees to scan and claim their NFT badge
                </p>
                <button className="mt-4 bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors text-sm">
                  Download QR Code
                </button>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setFormStep(1);
                    setIsSuccess(false);
                    setEventData({
                      title: "",
                      date: "",
                      time: "",
                      location: "",
                      description: "",
                      badgeName: "",
                      organizer: "",
                      category: "cleanup"
                    });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Create Another Event
                </button>
                <button
                  onClick={() => window.location.href = "/events"}
                  className="bg-transparent border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg transition-colors"
                >
                  View All Events
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 