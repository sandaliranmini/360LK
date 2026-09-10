import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page not found</p>
      <Link
        href="/"
        className="mt-6 rounded bg-blue-500 px-4 py-2 hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}