import { profileData } from '@/lib/data';
import type { ProfileData } from '@/lib/types';

export default function Hero() {
  const { name, title, avatar } = profileData;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-[80px]">
          {/* Avatar */}
          <img
            alt={name}
            className="mx-auto h-80 w-80 rounded-full object-cover"
            src={avatar}
          />

          {/* Text Content */}
          <div className="space-y-[19px] text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 whitespace-pre-line">
              {title}
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
