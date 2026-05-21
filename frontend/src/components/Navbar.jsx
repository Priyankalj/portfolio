function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-6">
      <h1 className="text-xl font-semibold">Priyanka</h1>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#experience" className="hover:text-white">Experience</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;