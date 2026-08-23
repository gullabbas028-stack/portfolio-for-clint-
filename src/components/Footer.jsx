import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-mist">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <p className="text-mist/70">status: <span className="text-cyan">online</span></p>
      </div>
    </footer>
  );
}
