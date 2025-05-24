"use client";

import { Button } from "@/components/ui/button";
import { Coins, Users, User, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Update shadow state
      setHasScrolled(currentScrollY > 50);

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 font-sans">
      {/* Header */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-[125%]"
        }`}
      >
        <div
          className={`rounded-full px-12 py-4 mx-2 transition-all duration-300  w-full ${
            hasScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4">
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="h-8 w-8 flex items-center justify-center">
                <Coins className="h-5 w-5 text-black" />
              </div>
              <span className="text-lg font-bold font-display whitespace-nowrap">
                Staszic Casino
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 whitespace-nowrap ml-60 mr-60">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                How it works
              </a>
              <a
                href="#games"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Games
              </a>
              <a
                href="/leaderboard"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Leaderboard
              </a>
            </nav>
            <div className="flex items-center space-x-4 whitespace-nowrap flex-shrink-0">
              <a href="/login">
                <Button
                  variant="ghost"
                  className="font-medium text-sm px-4 py-2 rounded-2xl"
                >
                  Log in
                </Button>
              </a>
              <a href="/signup">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-4 py-2 font-semibold text-sm">
                  Sign up
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8 leading-none">
              Where school meets excitement.{" "}
              <span className="block">Play, compete, and level up.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium ">
              The premier gaming destination for students. Connect with
              classmates through thrilling casino games using our safe,
              token-based system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="/dashboard">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-bold "
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Playing
                </Button>
              </a>
            </div>

            {/* Game Interface Mockup */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 pl-2 text-sm text-gray-500 font-semibold ">
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
                      <h3 className="font-bold text-gray-900 mb-2 ">
                        Roulette
                      </h3>
                      <p className="text-sm text-gray-600 font-medium  mb-8">
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
                      <h3 className="font-bold text-gray-900 mb-2 ">Poker</h3>
                      <p className="text-sm text-gray-600 font-medium  mb-8">
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
                      <h3 className="font-bold text-gray-900 mb-2 ">
                        Blackjack
                      </h3>
                      <p className="text-sm text-gray-600 font-medium  mb-8">
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
                        <p className="font-bold text-gray-900 ">Your Tokens</p>
                        <p className="text-sm text-gray-600 font-medium ">
                          1,000 available
                        </p>
                      </div>
                    </div>
                    <a href="/dashboard">
                      <Button
                        size="sm"
                        className="bg-black text-white rounded-full font-semibold "
                      >
                        Add Tokens
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl  font-bold font-display  mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium ">
                Jump into the action in just 3 simple steps. Your gaming journey
                starts here.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 border-black border-4 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black font-display">
                    1
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display  mb-4">
                  Sign Up
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium ">
                  Create an account using your school login details. Fast,
                  secure and hassle-free setup.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border-black border-4 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black font-display">
                    2
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display  mb-4">
                  Get Tokens
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium ">
                  Get your starter tokens instantly. Play risk-free with our
                  virtual currency system.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border-black border-4 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black font-display">
                    3
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display  mb-4">
                  Start Playing
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium ">
                  Pick your favorite game, challenge friends, and climb the
                  leaderboards together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl  font-bold font-display  mb-6">
                Choose Your Game
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium ">
                Discover classic casino games reimagined for the modern student.
                Every game is designed for maximum fun and fair play.
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
                    <h3 className="text-xl font-bold font-display ">
                      Roulette
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium ">
                    Feel the thrill of the spin! Place your bets and watch
                    fortune decide your fate in this timeless classic.
                  </p>
                  <a href="/dashboard">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold ">
                      Play Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Poker Game */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display ">Poker</h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium ">
                    Master the art of bluffing and strategy. Outsmart your
                    opponents in intense multiplayer showdowns.
                  </p>
                  <a href="/dashboard">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold ">
                      Play Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Blackjack Game */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold font-display ">
                      Blackjack
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium ">
                    Perfect your card counting skills! Team up with friends to
                    beat the house in this strategic favorite.
                  </p>
                  <a href="/dashboard">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold ">
                      Play Now
                    </Button>
                  </a>
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
            <h2 className="text-4xl  font-bold font-display mb-6">
              Your next epic gaming session awaits
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-medium ">
              Join a thriving community of student gamers. The tables are ready,
              are you?
            </p>
            <a href="/signup">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold "
              >
                <Play className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-8 w-8 flex items-center justify-center mr-3">
                <Coins className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold font-display ">
                Staszic Casino
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-medium ">
              All games use virtual tokens with no real money involved.
            </p>
            <div className="pt-6 border-t border-gray-400">
              <p className="text-sm text-gray-500 font-medium ">
                © {new Date().getFullYear()} Patryk Niemczyk. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
