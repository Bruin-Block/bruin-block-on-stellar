"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaWallet, FaLeaf, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useWallet } from "@/contexts/WalletContext";

export default function WalletPage() {
  const router = useRouter();
  const { isConnected, publicKey, connectWallet, isFreighterAvailable } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      await connectWallet();
      // Short delay to show animation
      setTimeout(() => {
        router.push("/events");
      }, 1500);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <FaWallet className="text-green-600 text-4xl" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Connect Your Wallet</h1>
        
        <p className="text-gray-600 mb-8">
          Connect your Stellar wallet to access GreenPass features. Your wallet serves as your identity and stores your NFT badges.
        </p>
        
        {isConnected ? (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
              <FaCheckCircle className="text-xl" />
              <span className="font-medium">Wallet Connected!</span>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Your Public Key:</p>
              <p className="font-mono text-sm bg-white p-2 rounded border">
                {publicKey}
              </p>
            </div>
            <button
              onClick={() => router.push("/events")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
            >
              Continue to Events
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Choose a Connection Method</h2>
              
              <button
                onClick={handleConnectWallet}
                disabled={isConnecting}
                className={`relative flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white p-4 rounded-lg mb-4 transition-all ${isConnecting ? 'opacity-80' : ''}`}
              >
                {isConnecting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  <>
                    <img 
                      src="/images/freighter-logo.svg"
                      alt="Freighter Logo"
                      className="w-6 h-6 mr-3"
                      width={24}
                      height={24}
                    />
                    <span>Connect with Freighter</span>
                  </>
                )}
              </button>
              
              {!isFreighterAvailable && (
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-left">
                  <div className="flex items-start mb-2">
                    <FaExclamationCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-800">Freighter not detected</p>
                      <p className="text-sm text-amber-700">You need to install the Freighter browser extension.</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.freighter.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 underline hover:text-amber-800"
                  >
                    Click here to install Freighter
                  </a>
                </div>
              )}
              
              {error && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 mt-4">
                  <div className="flex items-center text-red-700">
                    <FaExclamationCircle className="mr-2" />
                    <span>{error}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="font-medium mb-4">Why connect a wallet?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Own your eco-impact</h4>
                    <p className="text-sm text-gray-600">Your NFT badges are stored securely in your wallet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <FaCheckCircle className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">No sign-up needed</h4>
                    <p className="text-sm text-gray-600">Your wallet is your identity on GreenPass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 