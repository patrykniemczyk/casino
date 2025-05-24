import { Button } from "@/components/ui/button";
import { Coins, ArrowLeft, User, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 font-sans flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-10 w-10 flex items-center justify-center">
              <Coins className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold font-display">
              Staszic Casino
            </span>
          </div>
          <h1 className="text-3xl font-bold font-display mb-2">Welcome Back</h1>
          <p className="text-gray-600 font-medium">
            Sign in to your account to continue playing
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                School Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="your.name@school.edu"
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
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-black hover:text-gray-700"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-3 font-semibold text-lg"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 font-medium">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-black hover:text-gray-700"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Use your school credentials to access the platform safely
          </p>
        </div>
      </div>
    </div>
  );
}
