function Navbar() {
  return (
    <nav className="flex justify-end items-center px-6 md:px-16 py-5">
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#skills" className="hover:text-accent transition">Skills</a>
        <a href="#experience" className="hover:text-accent transition">Experience</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a
          href="#contact"
          className="rounded-full bg-accent text-white px-5 py-2.5 hover:bg-accent-bright transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
