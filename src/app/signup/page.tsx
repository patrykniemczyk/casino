import { Button } from "@/components/ui/button";
import { Coins, ArrowLeft, User, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 font-sans flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          {" "}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="h-10 w-10 flex items-center justify-center">
              <Coins className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold font-display">
              Staszic Casino
            </span>
          </div>
          <p className="text-gray-600 font-medium">
            Create your account and start playing today
          </p>
        </div>{" "}
        {/* Sign Up Form */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>{" "}
                <input
                  id="fullName"
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                School Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>{" "}
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="your.name@staszic.waw.pl"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>{" "}
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="Create a secure password"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>{" "}
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="Confirm your password"
                />
              </div>
            </div>{" "}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-6 font-semibold text-base"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-black hover:text-gray-700"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>{" "}
        {/* Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 font-medium">
            🎁 Get 1,000 free tokens when you sign up!
          </p>
        </div>
      </div>
    </div>
  );
}
