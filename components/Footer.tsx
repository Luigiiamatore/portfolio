export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Luigi Amatore</p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:luigi.amatore7@gmail.com"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            luigi.amatore7@gmail.com
          </a>
          <a
            href="https://github.com/luigiiamatore"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
