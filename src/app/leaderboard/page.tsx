import { Button } from "@/components/ui/button";
import {
  Coins,
  Trophy,
  Medal,
  ArrowLeft,
  Crown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Alex Chen", tokens: 4250 },
    { rank: 2, name: "Maria Rodriguez", tokens: 3890 },
    { rank: 3, name: "Jake Thompson", tokens: 3520 },
    { rank: 4, name: "Sophie Wilson", tokens: 3210 },
    { rank: 5, name: "David Kim", tokens: 2980 },
    { rank: 6, name: "Emma Davis", tokens: 2750 },
    { rank: 7, name: "You", tokens: 2450 },
    { rank: 8, name: "Ryan Parker", tokens: 2340 },
    { rank: 9, name: "Lisa Wang", tokens: 2180 },
    { rank: 10, name: "Mike Johnson", tokens: 2050 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return Crown;
      case 2:
        return Trophy;
      case 3:
        return Medal;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
                <Trophy className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Leaderboard</span>
            </div>

            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Top Players</h1>
            <p className="text-lg text-gray-600">
              See how you rank against your classmates
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 0, 2].map((index) => {
              const player = leaderboardData[index];
              const Icon = getRankIcon(player.rank);

              return (
                <div
                  key={player.rank}
                  className={`${
                    player.rank === 1
                      ? "md:order-2"
                      : player.rank === 2
                      ? "md:order-1"
                      : "md:order-3"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 border-2 shadow-sm ${
                      player.rank === 1
                        ? "border-yellow-400"
                        : player.rank === 2
                        ? "border-gray-300"
                        : "border-orange-400"
                    } ${
                      player.name === "You"
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : ""
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          player.rank === 1
                            ? "bg-yellow-100"
                            : player.rank === 2
                            ? "bg-gray-100"
                            : "bg-orange-100"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`h-8 w-8 ${
                              player.rank === 1
                                ? "text-yellow-600"
                                : player.rank === 2
                                ? "text-gray-600"
                                : "text-orange-600"
                            }`}
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">
                        {player.name}
                        {player.name === "You" && " (You)"}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <Coins className="h-4 w-4 text-gray-600" />
                        <span className="text-xl font-bold text-black">
                          {player.tokens.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">tokens</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rest of Leaderboard */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-black">Full Rankings</h2>
              <p className="text-gray-600 text-sm">
                All players ranked by total tokens
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                {leaderboardData.slice(3).map((player) => (
                  <div
                    key={player.rank}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:bg-gray-50 ${
                      player.name === "You"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                        #{player.rank}
                      </div>
                      <div>
                        <h3
                          className={`font-semibold ${
                            player.name === "You"
                              ? "text-blue-700"
                              : "text-black"
                          }`}
                        >
                          {player.name}
                          {player.name === "You" && " (You)"}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Coins className="h-4 w-4 text-gray-600" />
                        <span className="font-bold text-lg text-black">
                          {player.tokens.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">tokens</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Climb Higher?
              </h3>
              <p className="text-gray-600 mb-6">
                Start playing games to earn more tokens and improve your ranking
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 font-semibold">
                    Start Playing
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
