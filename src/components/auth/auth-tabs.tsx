'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  const isSignup = pathname === '/signup';

  return (
    <div className="flex bg-[#7A9A8F] rounded-2xl p-1 mb-8">
      <Link
        href="/login"
        className={`flex-1 text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
          isLogin
            ? 'bg-[#4A4A3F] text-white shadow-md'
            : 'text-white/80 hover:text-white'
        }`}
      >
        Log In
      </Link>
      <Link
        href="/signup"
        className={`flex-1 text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
          isSignup
            ? 'bg-[#4A4A3F] text-white shadow-md'
            : 'text-white/80 hover:text-white'
        }`}
      >
        Sign Up
      </Link>
    </div>
  );
}