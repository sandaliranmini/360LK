const footerColumns = [
  {
    heading: "About 360°LK",
    body: "An immersive virtual tourism platform connecting culture, technology, and travel.",
  },
  {
    heading: "Quick Links",
    links: ["Home", "Plans", "Destinations", "Blog", "Log in", "Our Story"],
  },
  {
    heading: "Top Destinations",
    links: ["Sigiriya Rock Fortress", "Temple of the Tooth Relic", "Unawatuna Beach", "Yala National Park", "Nallur Kovil"],
  },
  {
    heading: "Contact Us",
    body: "Phone: +94 77 123 4567\nEmail: 360lk@gmail.com\nWebsite: 360lk.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#4a3f2f] px-6 py-12 text-[#e8dcc3] md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-serif text-lg text-[#f5c400]">{col.heading}</h4>
            {col.body && (
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#d9cdb0]">{col.body}</p>
            )}
            {col.links && (
              <ul className="mt-3 space-y-2 text-sm text-[#d9cdb0]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#f5c400] hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-[#a99d80]">© 2025 360LK</p>
    </footer>
  );
}