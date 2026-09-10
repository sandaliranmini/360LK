const navLinks = ["Home", "Plans", "Destinations", "Blogs"];

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-5 text-sm text-[#f5e6c8] md:px-12">
      <ul className="hidden gap-8 font-medium md:flex">
        {navLinks.map((link, i) => (
          <li key={link}>
            <a
              href="#"
              className={i === 0 ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="#" className="flex items-center gap-2 font-serif text-2xl tracking-wide text-white">
        360<span className="text-base">°LK</span>
      </a>

      <ul className="hidden gap-8 font-medium md:flex">
        <li><a href="#" className="hover:underline hover:underline-offset-4">Log in</a></li>
        <li><a href="#" className="hover:underline hover:underline-offset-4">Our Story</a></li>
        <li><a href="#" className="hover:underline hover:underline-offset-4">Contact us</a></li>
      </ul>
    </nav>
  );
}