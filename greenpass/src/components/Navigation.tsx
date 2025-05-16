"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaLeaf, FaPassport, FaGift, FaCalendarAlt, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useWallet } from '@/contexts/WalletContext';

const Navigation = () => {
  const pathname = usePathname();
  const { isConnected, publicKey, connectWallet, disconnectWallet } = useWallet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <FaLeaf /> },
    { href: "/events", label: "Events", icon: <FaCalendarAlt /> },
    { href: "/passport", label: "My Passport", icon: <FaPassport /> },
    { href: "/rewards", label: "Rewards", icon: <FaGift /> },
    { href: "/organizer", label: "Create Event", icon: <FaPlus /> },
  ];

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <FaLeaf className="text-green-400 text-xl" />
              <span className="text-xl font-bold">GreenPass</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-1 hover:text-green-300 ${
                  (pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))) 
                    ? 'text-green-300 font-medium' 
                    : ''
                }`}
              >
                {link.icon} <span>{link.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm hidden lg:inline-block">
                  {publicKey && `${publicKey.substring(0, 6)}...${publicKey.substring(publicKey.length - 4)}`}
                </span>
                <button 
                  onClick={disconnectWallet}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors hidden md:block"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 hidden md:flex"
              >
                <span>Connect Wallet</span>
              </button>
            )}
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-700 pb-4 px-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-2 py-3 px-4 rounded-lg ${
                  (pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))) 
                    ? 'bg-green-600 text-white' 
                    : 'text-green-100 hover:bg-green-600'
                }`}
              >
                {link.icon} <span>{link.label}</span>
              </Link>
            ))}

            {/* Mobile wallet buttons */}
            {isConnected ? (
              <div className="pt-2 pb-1">
                <div className="px-4 py-2 text-xs text-green-300">
                  Connected: {publicKey && `${publicKey.substring(0, 6)}...${publicKey.substring(publicKey.length - 4)}`}
                </div>
                <button 
                  onClick={() => {
                    disconnectWallet();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg bg-green-600 text-white font-medium"
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  connectWallet();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 mt-2 rounded-lg bg-green-500 text-white font-medium"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 