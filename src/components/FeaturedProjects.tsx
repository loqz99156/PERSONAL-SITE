import { projectsData } from '@/lib/data';
import type { ProjectData } from '@/lib/types';

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-9 text-center text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
          vibe coding 作品
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {projectsData.map((project: ProjectData) => (
            <div
              key={project.id}
              className="group relative h-60 w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform hover:scale-105"
              style={{ backgroundImage: `url("${project.imageUrl}")` }}
            >
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
