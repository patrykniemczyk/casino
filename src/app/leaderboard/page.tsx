import { Button } from "@/components/ui/button";
import { Coins, Trophy, Medal, ArrowLeft, Crown } from "lucide-react";
import Link from "next/link";

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Alex Chen", tokens: 4250, wins: 28, icon: Crown },
    { rank: 2, name: "Maria Rodriguez", tokens: 3890, wins: 24, icon: Trophy },
    { rank: 3, name: "Jake Thompson", tokens: 3520, wins: 22, icon: Medal },
    { rank: 4, name: "Sophie Wilson", tokens: 3210, wins: 19, icon: null },
    { rank: 5, name: "David Kim", tokens: 2980, wins: 18, icon: null },
    { rank: 6, name: "Emma Davis", tokens: 2750, wins: 16, icon: null },
    { rank: 7, name: "You", tokens: 2450, wins: 15, icon: null },
    { rank: 8, name: "Ryan Parker", tokens: 2340, wins: 14, icon: null },
    { rank: 9, name: "Lisa Wang", tokens: 2180, wins: 13, icon: null },
    { rank: 10, name: "Mike Johnson", tokens: 2050, wins: 12, icon: null },
  ];

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
                <Trophy className="h-5 w-5 text-black" />
              </div>
              <span className="text-lg font-bold font-display">
                Leaderboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="font-medium">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">
              Top Players
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              See how you rank against your classmates
            </p>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white font-display">
                🏆 Hall of Fame
              </h2>
              <p className="text-yellow-100 font-medium">
                Top token earners this month
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {leaderboardData.map((player, index) => (
                  <div
                    key={player.rank}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-colors duration-200 ${
                      player.name === "You"
                        ? "bg-blue-50 border-blue-200 ring-2 ring-blue-300"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          player.rank === 1
                            ? "bg-yellow-400 text-yellow-800"
                            : player.rank === 2
                            ? "bg-gray-300 text-gray-700"
                            : player.rank === 3
                            ? "bg-amber-600 text-amber-100"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {player.icon && <player.icon className="h-6 w-6" />}
                        {!player.icon && `#${player.rank}`}
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${
                            player.name === "You"
                              ? "text-blue-700"
                              : "text-gray-900"
                          }`}
                        >
                          {player.name}
                          {player.name === "You" && " (You)"}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {player.wins} games won
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Coins className="h-5 w-5 text-yellow-600" />
                        <span className="font-bold text-lg text-gray-900">
                          {player.tokens.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">tokens</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-600 font-medium">
              Want to climb higher? Start playing more games!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 font-semibold">
                  Play Games
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 font-semibold"
              >
                View Stats
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
