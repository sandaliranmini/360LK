import Link from 'next/link';
import Image from 'next/image';

export default function AuthLogo() {
  return (
    <Link href="/" className="flex justify-center mb-6 group">
      <Image
        src="/images/branding/logo.png"
        alt="360LK Logo"
        width={100}
        height={90}
        priority
        className="object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}