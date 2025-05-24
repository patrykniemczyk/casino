import { Button } from "@/components/ui/button";
import { Coins, Users, User, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 font-sans">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 flex items-center justify-center">
                <Coins className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight">
                Staszic Casino
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium tracking-tight"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium tracking-tight"
              >
                Games
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium tracking-tight"
              >
                Leaderboard
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="font-medium tracking-tight">
                Log in
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 font-semibold tracking-tight">
                Sign up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-8 leading-none">
              The best and only school casino.{" "}
              <span className="block">All games in one place.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
              Staszic Casino is a token-based gaming platform where you can
              play, compete, and have fun with classmates — all in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-bold tracking-tight"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Playing
              </Button>
            </div>

            {/* Game Interface Mockup */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 pl-2 text-sm text-gray-500 font-semibold tracking-tight">
                      Staszic Casino Dashboard
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 tracking-tight">
                        Roulette
                      </h3>
                      <p className="text-sm text-gray-600 font-medium tracking-tight mb-8">
                        Solo play
                      </p>
                      <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
                        <Image
                          src="/images/roulette.png"
                          alt="Roulette wheel"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 tracking-tight">
                        Poker
                      </h3>
                      <p className="text-sm text-gray-600 font-medium tracking-tight mb-8">
                        Multiplayer
                      </p>
                      <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
                        <Image
                          src="/images/poker.png"
                          alt="Poker cards and chips"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 tracking-tight">
                        Blackjack
                      </h3>
                      <p className="text-sm text-gray-600 font-medium tracking-tight mb-8">
                        Multiplayer
                      </p>
                      <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
                        <Image
                          src="/images/blackjack.png"
                          alt="Blackjack cards on table"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Coins className="h-5 w-5 text-yellow-800" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 tracking-tight">
                          Your Tokens
                        </p>
                        <p className="text-sm text-gray-600 font-medium tracking-tight">
                          1,250 available
                        </p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-black text-white rounded-full font-semibold tracking-tight"
                    >
                      Add Tokens
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tighter mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium tracking-tight">
                Getting started is simple. Three steps to begin your gaming
                adventure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white font-display">
                    1
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display tracking-tight mb-4">
                  Sign Up
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium tracking-tight">
                  Use your school account to access the platform. Quick and
                  secure authentication.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white font-display">
                    2
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display tracking-tight mb-4">
                  Get Tokens
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium tracking-tight">
                  Receive your starting tokens. No real money involved — just
                  pure gaming fun.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white font-display">
                    3
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display tracking-tight mb-4">
                  Start Playing
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium tracking-tight">
                  Choose your game, compete with classmates, and earn bragging
                  rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tighter mb-6">
                Choose Your Game
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium tracking-tight">
                Experience the excitement of casino gaming with our token-based
                system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Roulette Game */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display tracking-tight">
                      Singleplayer Roulette
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium tracking-tight">
                    Test your luck with classic roulette! Place your token bets
                    and watch the wheel spin.
                  </p>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold tracking-tight">
                    Play Now
                  </Button>
                </div>
              </div>

              {/* Poker Game */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display tracking-tight">
                      Multiplayer Poker
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium tracking-tight">
                    Challenge your classmates in exciting poker matches! Use
                    strategy and win tokens.
                  </p>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold tracking-tight">
                    Play Now
                  </Button>
                </div>
              </div>

              {/* Blackjack Game */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display tracking-tight">
                      Multiplayer Blackjack
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium tracking-tight">
                    Beat the dealer with your friends! Get as close to 21 as
                    possible.
                  </p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold tracking-tight">
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tighter mb-6">
              Ready to Start Playing?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-medium tracking-tight">
              Join hundreds of students already gaming on Staszic Casino.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold tracking-tight"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center mr-3">
                <Coins className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                Staszic Casino
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-medium tracking-tight">
              This is a token-based game platform for entertainment only. No
              real money is used or won.
            </p>
            <div className="pt-6 border-t">
              <p className="text-sm text-gray-500 font-medium tracking-tight">
                © {new Date().getFullYear()} Staszic Online Casino. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
