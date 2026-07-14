import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Luigi Amatore",
  description: "Digital templates and tools for developers and freelancers.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Digital products built to make the day-to-day work of developers
          and freelancers a little easier.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          New projects coming soon.
        </p>
      )}
    </div>
  );
}
