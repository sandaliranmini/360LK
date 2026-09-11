import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main split-screen area */}
      <div className="flex-1 flex">
        {/* Left: Image (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/auth/auth-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent" />
        </div>

        {/* Right: Form area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAF7F2] p-6 lg:p-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#4A4A3F] text-white text-center py-4 text-sm">
        © 2025 360LK. All rights reserved.
      </footer>
    </div>
  );
}