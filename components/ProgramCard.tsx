import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  animationSvg?: string;
  staticImage: string;
}

export default function ProgramCard({
  title,
  description,
  icon,
  href,
  gradientFrom,
  gradientTo,
  animationSvg,
  staticImage,
}: ProgramCardProps) {
  return (
    <Link href={href} className="block group">
      <div
        className={`relative rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100/10 ${gradientFrom} ${gradientTo} bg-gradient-to-br text-white`}
      >
        <div>
          <div className="mb-4 text-white">{icon}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
        <div className="relative mt-4 h-40">
          <Image
            src={staticImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-bottom transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      </div>
    </Link>
  );
}
