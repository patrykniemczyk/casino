import { Button } from "@/components/ui/button";
import { Coins, Users, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                <Coins className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Dashboard</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Coins className="h-4 w-4 text-yellow-800" />
              </div>
              <span className="font-bold text-gray-900">1,000 tokens</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">
              Your Gaming Dashboard
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Choose a game to start playing or join your friends
            </p>
          </div>
          {/* Games Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Roulette */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Roulette</h3>
                    <p className="text-sm text-gray-600">Solo play</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  Test your luck with classic roulette! Place your bets and
                  watch the wheel spin.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold">
                  Play Roulette
                </Button>
              </div>
            </div>

            {/* Poker */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Poker</h3>
                    <p className="text-sm text-gray-600">Multiplayer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  Challenge your classmates in exciting poker matches! Use
                  strategy to win.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold">
                  Play Poker
                </Button>
              </div>
            </div>

            {/* Blackjack */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">
                      Blackjack
                    </h3>
                    <p className="text-sm text-gray-600">Multiplayer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  Beat the dealer with your friends! Get as close to 21 as
                  possible.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold">
                  Play Blackjack
                </Button>
              </div>{" "}
            </div>
          </div>
          {/* Join Table Section */}{" "}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-display">
                    Join Existing Table
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  Join your friends at an existing game table and start playing
                  together!
                </p>{" "}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Enter table code..."
                    className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full font-semibold px-6 py-6 text-sm">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
