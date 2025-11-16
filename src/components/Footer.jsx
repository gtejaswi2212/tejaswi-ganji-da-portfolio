export default function Footer() {
    return (
      <footer className="border-t border-white/5 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>Built by Tejaswi Ganji</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/gtejaswi2212"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gtejaswi2212"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    );
  }
  