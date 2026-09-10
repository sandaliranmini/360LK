'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const PanoramaViewer = dynamic(
  () => import('react-pannellum-next').then((mod) => mod.PanoramaViewer),
  { ssr: false }
);

export default function VRPage() {
  const params = useParams<{ slug: string }>();
  const [isClient, setIsClient] = useState(false);
  const imagePath = `/images/vr/panoramas/${params.slug}.jpg`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-white">
        <p>Loading VR...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <PanoramaViewer
        imagePath={imagePath}
        viewerProps={{
          autoRotate: 2,
          hfov: 100,
        }}
      />
    </div>
  );
}