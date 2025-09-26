import { exclusivesData } from '@/lib/data';
import type { ExclusiveData } from '@/lib/types';

export default function PaidExclusives() {
  return (
    <section className="w-full bg-[var(--module-background)] py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-9 text-center text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">
          付费专栏
        </h2>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-8">
          {exclusivesData.map((exclusive: ExclusiveData) => (
            <div
              key={exclusive.id}
              className="group flex h-[536px] w-[400px] flex-col overflow-hidden rounded-lg bg-[var(--surface)] text-[var(--text-surface)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex h-full flex-col p-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">
                    {exclusive.badge}
                  </p>
                  <h3 className="text-xl font-bold">
                    {exclusive.title}
                  </h3>
                  <p className="text-[var(--text-surface-secondary)]">
                    {exclusive.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    className="inline-block w-full rounded bg-yellow-500 px-6 py-3 text-center font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
                    href={exclusive.cta.url}
                  >
                    {exclusive.cta.text}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
