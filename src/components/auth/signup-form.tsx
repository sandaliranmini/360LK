'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, Check } from 'lucide-react';
import SocialAuth from './social-auth';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password strength
  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { score: 0, label: '', color: '' };
    if (pwd.length < 6) return { score: 1, label: 'Weak', color: 'bg-red-500' };
    if (pwd.length < 10) return { score: 2, label: 'Fair', color: 'bg-yellow-500' };
    if (pwd.length >= 10 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd))
      return { score: 4, label: 'Strong', color: 'bg-green-500' };
    return { score: 3, label: 'Good', color: 'bg-teal-500' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!agreeTerms) {
      setError('Please agree to the Terms & Conditions');
      return;
    }

    setIsLoading(true);
    // TODO: Connect to Supabase
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup:', formData);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-[#4A4A3F] mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4A3F]/40" />
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter your full name"
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E5DDD0] rounded-xl text-[#4A4A3F] placeholder-[#4A4A3F]/40 focus:outline-none focus:ring-2 focus:ring-[#7A9A8F] focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Create a password (min. 8 characters)"
            className="w-full pl-12 pr-12 py-3.5 bg-white border border-[#E5DDD0] rounded-xl text-[#4A4A3F] placeholder-[#4A4A3F]/40 focus:outline-none focus:ring-2 focus:ring-[#7A9A8F] focus:border-transparent transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A4A3F]/40 hover:text-[#4A4A3F]"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Password Strength Bar */}
        {formData.password && (
          <div className="mt-2">
            <div className="flex gap-1 h-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all ${
                    i <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs mt-1 text-[#4A4A3F]/60">
              Strength: <span className="font-medium">{passwordStrength.label}</span>
            </p>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4A4A3F] mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4A3F]/40" />
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Confirm your password"
            className="w-full pl-12 pr-12 py-3.5 bg-white border border-[#E5DDD0] rounded-xl text-[#4A4A3F] placeholder-[#4A4A3F]/40 focus:outline-none focus:ring-2 focus:ring-[#7A9A8F] focus:border-transparent transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A4A3F]/40 hover:text-[#4A4A3F]"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-[#E5DDD0] text-[#7A9A8F] focus:ring-[#7A9A8F]"
        />
        <span className="text-sm text-[#4A4A3F]">
          I agree to the{' '}
          <Link href="/terms" className="text-[#7A9A8F] hover:underline">Terms & Conditions</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-[#7A9A8F] hover:underline">Privacy Policy</Link>
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 bg-[#7A9A8F] hover:bg-[#4A4A3F] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 shadow-sm hover:shadow-md"
      >
        {isLoading ? 'Creating account...' : 'Create account'}
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

      <SocialAuth />

      <p className="text-center text-sm text-[#4A4A3F] pt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-[#7A9A8F] hover:text-[#4A4A3F] font-semibold">
          Login here
        </Link>
      </p>
    </form>
  );
}