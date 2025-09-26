import Image from 'next/image';
import { profileData } from '@/lib/data';
import type { ProfileData } from '@/lib/types';

export default function Hero() {
  const { name, title, avatar } = profileData;

  return (
    <section className="w-full bg-[var(--module-background)] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-[80px]">
          <div className="relative mx-auto h-80 w-80">
            <Image
              alt={name}
              src={avatar}
              fill
              className="rounded-full object-cover"
              sizes="(min-width: 768px) 320px, 240px"
              priority
            />
          </div>

          <div className="space-y-[19px] text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              {name}
            </h2>
            <p className="whitespace-pre-line text-lg text-[var(--text-secondary)]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
