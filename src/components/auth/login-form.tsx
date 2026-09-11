'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import SocialAuth from './social-auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // TODO: Connect to Supabase
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login:', { email, password, rememberMe });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error Alert */}
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#4A4A3F] mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4A3F]/40" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E5DDD0] rounded-xl text-[#4A4A3F] placeholder-[#4A4A3F]/40 focus:outline-none focus:ring-2 focus:ring-[#7A9A8F] focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#4A4A3F] mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4A3F]/40" />
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full pl-12 pr-12 py-3.5 bg-white border border-[#E5DDD0] rounded-xl text-[#4A4A3F] placeholder-[#4A4A3F]/40 focus:outline-none focus:ring-2 focus:ring-[#7A9A8F] focus:border-transparent transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A4A3F]/40 hover:text-[#4A4A3F] transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-[#E5DDD0] text-[#7A9A8F] focus:ring-[#7A9A8F]"
          />
          <span className="text-sm text-[#4A4A3F]">Remember me</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm text-[#7A9A8F] hover:text-[#4A4A3F] font-medium transition-colors"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 bg-[#7A9A8F] hover:bg-[#4A4A3F] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
      >
        {isLoading ? 'Logging in...' : 'Login to 360LK'}
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#4A4A3F]/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-[#FAF7F2] text-[#4A4A3F]/60">OR</span>
        </div>
      </div>

      {/* Social Auth */}
      <SocialAuth />

      {/* Sign up link */}
      <p className="text-center text-sm text-[#4A4A3F] pt-4">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-[#7A9A8F] hover:text-[#4A4A3F] font-semibold transition-colors">
          Sign up for free
        </Link>
      </p>
    </form>
  );
}