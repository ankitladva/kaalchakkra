"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

const courseSubLinks = [
  { href: "/courses#pro-program", label: "3-Month Advanced Program" },
  { href: "/courses#realism-masterclass", label: "45-Day Realism Masterclass" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#healed", label: "Healed Work" },
  { href: "#artist", label: "Artist" },
  { href: "/courses", label: "Courses", subLinks: courseSubLinks },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-white/90 backdrop-blur-md border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`relative w-10 h-10 overflow-hidden transition-all duration-500 ${
                  theme === "dark" ? "invert" : ""
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Kaal Chakkra Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={link.subLinks ? "relative group" : undefined}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-300 relative group/link inline-flex items-center gap-1 ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-black/70 hover:text-black"
                      }`}
                    >
                      {link.label}
                      {link.subLinks && (
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/link:w-full ${
                          theme === "dark" ? "bg-white" : "bg-black"
                        }`}
                      />
                    </Link>
                  </motion.div>

                  {/* Desktop dropdown */}
                  {link.subLinks && (
                    <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div
                        className={`min-w-64 border backdrop-blur-md ${
                          theme === "dark"
                            ? "bg-black/95 border-white/10"
                            : "bg-white/95 border-black/10"
                        }`}
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`block px-5 py-3.5 text-sm font-medium transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-white/70 hover:text-white hover:bg-white/10"
                                : "text-black/70 hover:text-black hover:bg-black/5"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </motion.ul>

            {/* Theme Toggle Button */}
            <div className="flex items-center pl-6 border-l border-foreground/10">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white hover:text-black"
                    : "bg-black/10 text-black hover:bg-black hover:text-white"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                if (isMobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              className={`p-2 transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden backdrop-blur-md border-b transition-colors duration-500 ${
              theme === "dark"
                ? "bg-black/95 border-white/10"
                : "bg-white/95 border-black/10"
            }`}
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() =>
                          setIsMobileCoursesOpen(!isMobileCoursesOpen)
                        }
                        className={`flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${
                          theme === "dark"
                            ? "text-white/80 hover:text-white"
                            : "text-black/80 hover:text-black"
                        }`}
                        aria-expanded={isMobileCoursesOpen}
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isMobileCoursesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isMobileCoursesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className={`overflow-hidden mt-3 ml-4 space-y-3 border-l pl-4 ${
                              theme === "dark"
                                ? "border-white/15"
                                : "border-black/15"
                            }`}
                          >
                            {link.subLinks.map((subLink) => (
                              <li key={subLink.href}>
                                <Link
                                  href={subLink.href}
                                  onClick={closeMobileMenu}
                                  className={`block text-base font-medium transition-colors duration-300 ${
                                    theme === "dark"
                                      ? "text-white/70 hover:text-white"
                                      : "text-black/70 hover:text-black"
                                  }`}
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-white/80 hover:text-white"
                          : "text-black/80 hover:text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
