import { Button } from "@/components/ui/button";
import { Coins, Users, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600 font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 flex items-center justify-center">
                <Coins className="h-5 w-5 text-black" />
              </div>
              <span className="text-lg font-bold font-display">
                Staszic Casino Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Coins className="h-4 w-4 text-yellow-800" />
                </div>
                <span className="font-bold text-gray-900">1,250 tokens</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">
              Your Gaming Dashboard
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Choose a game to start playing or check your stats
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
                  Join Poker Table
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
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold font-display mb-6">Your Stats</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <p className="text-gray-600 font-medium">Games Won</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">8</div>
                <p className="text-gray-600 font-medium">Games Lost</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2,450
                </div>
                <p className="text-gray-600 font-medium">Total Tokens Won</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  #7
                </div>
                <p className="text-gray-600 font-medium">Leaderboard Rank</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
