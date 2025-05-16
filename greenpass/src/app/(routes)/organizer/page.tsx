"use client";

import { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaImage, FaQrcode, FaLeaf } from 'react-icons/fa';
import QRCode from 'react-qr-code';

export default function OrganizerPage() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-green-800 to-green-600 p-8 rounded-xl text-white mb-8">
        <h1 className="text-3xl font-bold mb-3">Organizer Dashboard</h1>
        <p className="text-lg mb-0">Create eco-events and generate NFT badges for participants</p>
      </section>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Create Event Form */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Create New Event</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  id="eventTitle"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Beach Cleanup at Lakeshore"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendar className="text-gray-400" />
                    </div>
                    <input
                      id="eventDate"
                      type="date"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    id="eventTime"
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <input
                    id="eventLocation"
                    type="text"
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Lakeshore Blvd, Toronto"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="eventDescription"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe your eco-event..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="eventImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Image
                </label>
                <div className="mt-1 flex items-center">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <FaImage className="mr-2" />
                    <span>Upload image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="ml-3 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              
              <div className="pt-5">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Badge Creator */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">NFT Badge Creator</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="badgeName" className="block text-sm font-medium text-gray-700 mb-1">
                  Badge Name
                </label>
                <input
                  id="badgeName"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Beach Guardian 2025"
                />
              </div>
              
              <div>
                <label htmlFor="badgeDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Badge Description
                </label>
                <textarea
                  id="badgeDescription"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe what this badge represents..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Badge Design
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="border border-gray-200 rounded-lg p-2 cursor-pointer hover:border-green-500">
                      <div className="h-20 flex items-center justify-center bg-green-100 rounded">
                        <FaLeaf className="text-green-500 text-2xl" />
                      </div>
                      <p className="text-xs text-center mt-1">Design {i}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-5">
                <button
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaQrcode />
                  <span>Mint Badge & Generate QR</span>
                </button>
              </div>
              
              {/* QR Code Preview (would be conditionally shown) */}
              <div className="mt-6 p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="text-lg font-medium text-green-800 mb-3">Badge QR Code</h3>
                <p className="text-sm text-green-700 mb-4">
                  Participants can scan this QR code to claim their NFT badge after attending your event.
                </p>
                <div className="flex justify-center p-4 bg-white rounded">
                  <QRCode 
                    value="https://greenpass.app/claim/1234567890" 
                    size={150}
                  />
                </div>
                <div className="mt-4 text-center">
                  <button className="text-green-700 text-sm underline">
                    Download QR Code
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 