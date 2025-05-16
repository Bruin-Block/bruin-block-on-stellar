"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaLeaf, FaPassport, FaGift, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useWallet } from '@/contexts/WalletContext';

const Navigation = () => {
  const pathname = usePathname();
  const { isConnected, publicKey, connectWallet, disconnectWallet } = useWallet();

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-green-400 text-xl" />
          <span className="text-xl font-bold">GreenPass</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`flex items-center space-x-1 hover:text-green-300 ${pathname === '/' ? 'text-green-300 font-medium' : ''}`}
          >
            <FaCalendarAlt /> <span>Events</span>
          </Link>
          <Link 
            href="/passport" 
            className={`flex items-center space-x-1 hover:text-green-300 ${pathname === '/passport' ? 'text-green-300 font-medium' : ''}`}
          >
            <FaPassport /> <span>My Passport</span>
          </Link>
          <Link 
            href="/rewards" 
            className={`flex items-center space-x-1 hover:text-green-300 ${pathname === '/rewards' ? 'text-green-300 font-medium' : ''}`}
          >
            <FaGift /> <span>Rewards</span>
          </Link>
          <Link 
            href="/organizer" 
            className={`flex items-center space-x-1 hover:text-green-300 ${pathname === '/organizer' ? 'text-green-300 font-medium' : ''}`}
          >
            <FaPlus /> <span>Create Event</span>
          </Link>
        </div>
        
        <div>
          {isConnected ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm hidden md:inline-block">
                {publicKey && `${publicKey.substring(0, 6)}...${publicKey.substring(publicKey.length - 4)}`}
              </span>
              <button 
                onClick={disconnectWallet}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button 
              onClick={connectWallet}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>Connect Wallet</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 