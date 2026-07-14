import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-24 px-6 py-24">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Hi, I'm Luigi!
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          I'm a 24 y/o software engineer working across Java, Go, JavaScript, 
          TypeScript, React, and whatever language the problem calls for. I
          build products that solve real problems, ship fast, and iterate
          from there. Between client work I build side projects and small
          tools for developers and freelancers, mostly to scratch my own
          itches.
        </p>
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            See my products
          </Link>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="flex flex-col gap-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Featured projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
