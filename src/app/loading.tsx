export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="text-center text-white">
        <div className="mb-4 text-6xl animate-spin">🔄</div>
        <p className="text-xl">Loading...</p>
      </div>
    </div>
  );
}