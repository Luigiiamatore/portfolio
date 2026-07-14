import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-zinc-400 dark:text-zinc-600">
            {project.title}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-600/10 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>

        <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          {project.price}
        </span>

        <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-2">
          <a
            href={project.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get it on Gumroad
          </a>
        </div>
      </div>
    </div>
  );
}
