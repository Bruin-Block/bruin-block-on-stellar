"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import * as freighter from '@stellar/freighter-api';

// Define context types
interface WalletContextType {
  isConnected: boolean;
  publicKey: string | null;
  isFreighterAvailable: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

// Create context with default values
const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  publicKey: null,
  isFreighterAvailable: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

// Provider component
export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [isFreighterAvailable, setIsFreighterAvailable] = useState(false);

  // Check if Freighter is available on component mount
  useEffect(() => {
    const checkFreighterAvailability = async () => {
      try {
        // Check if we're in browser environment
        if (typeof window === 'undefined') return;

        // Check if Freighter is available
        const hasFreighter = 'freighter' in window;
        setIsFreighterAvailable(hasFreighter);
        
        if (hasFreighter) {
          try {
            // Check if user is connected
            const connected = await freighter.isConnected();
            if (connected) {
              // Try to get public key - handle potential TypeScript errors with any
              const key = await (freighter as any).getPublicKey();
              if (key) {
                setPublicKey(key);
                setIsConnected(true);
              }
            }
          } catch (error) {
            console.error('Error getting Freighter connection:', error);
          }
        }
      } catch (error) {
        console.error('Error checking Freighter availability:', error);
      }
    };
    
    checkFreighterAvailability();
  }, []);

  // Connect wallet function - Always use demo wallet for this hackathon
  const connectWallet = async () => {
    // DEMO MODE: Always connect with a fake wallet
    console.log('Using demo wallet for hackathon');
    setPublicKey('GBLT5IEYSXMRJT7NVSM7HJGT5FJRQZNNAQMKLMCW6DCEMK5XVDGP5C7A');
    setIsConnected(true);
    
    // The code below is commented out since we're always using the demo wallet
    /*
    if (!isFreighterAvailable) {
      window.open('https://www.freighter.app/', '_blank');
      return;
    }

    try {
      // Try to connect
      const connected = await freighter.isConnected();
      
      if (connected) {
        try {
          // Use type assertion to bypass TypeScript checking
          const key = await (freighter as any).getPublicKey();
          if (key) {
            setPublicKey(key);
            setIsConnected(true);
          }
        } catch (error) {
          console.error('Error getting public key:', error);
        }
      } else {
        // If not connected, we'll use a fallback for demo purposes
        console.log('Using fallback demo wallet');
        setPublicKey('GBLT5IEYSXMRJT7NVSM7HJGT5FJRQZNNAQMKLMCW6DCEMK5XVDGP5C7A');
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
    */
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    setIsConnected(false);
    setPublicKey(null);
    // Note: Freighter doesn't have a built-in disconnect function
    // This just removes the wallet from our app's state
  };

  const contextValue = {
    isConnected,
    publicKey,
    isFreighterAvailable,
    connectWallet,
    disconnectWallet,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for easier context consumption
export const useWallet = () => useContext(WalletContext); 