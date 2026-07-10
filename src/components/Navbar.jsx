import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-blue-200 dark:border-blue-700 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#home">
            <h1 className="text-2xl sm:text-3xl font-extrabold cursor-pointer transition-all duration-300 hover:scale-110">
              <span className="text-blue-800 dark:text-blue-400">
                Auto
              </span>
              <span className="text-gray-900 dark:text-white">
                Sales
              </span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
px-4 py-2 rounded-full
text-gray-900 dark:text-white
font-medium
hover:bg-blue-700
hover:text-white
hover:-translate-y-1
hover:shadow-lg
transition-all
duration-300
"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
w-10 h-10 sm:w-11 sm:h-11
rounded-full
bg-white dark:bg-slate-800
border border-blue-300 dark:border-blue-600
shadow-md
flex items-center justify-center
text-gray-900 dark:text-white
hover:scale-110
hover:rotate-180
transition-all
duration-500
">
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-slate-800 dark:text-white text-lg" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
lg:hidden
w-10 h-10 sm:w-11 sm:h-11
rounded-full
bg-gray-100 dark:bg-slate-900
border border-blue-500
flex items-center justify-center
text-gray-900 dark:text-white
hover:scale-110
transition-all
duration-300
"
            >
              {menuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="
lg:hidden
mx-2 mt-3 mb-4
rounded-3xl
bg-white dark:bg-slate-900
border border-blue-200 dark:border-blue-700
shadow-xl
p-5
animate-fadeDown
" >

            <ul className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
block
rounded-xl
px-4 py-3
text-gray-700 dark:text-gray-300
hover:bg-blue-600
hover:text-white
hover:translate-x-2
transition-all
duration-300
">
                    {link.name}
                  </a>
                </li>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
mt-3
block
rounded-xl
bg-blue-700
py-3
text-center
text-white
font-semibold
hover:bg-blue-800
hover:scale-105
shadow-lg
transition-all
duration-300
"
              >
                Contact Me
              </a>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;