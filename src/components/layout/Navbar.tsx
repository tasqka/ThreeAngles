import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { NavItem } from "../../types";

interface NavbarProps {
  brandName: string;
  links: NavItem[];
  mediaFinderLink: string;
  contactButtonText: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName,
  links,
  mediaFinderLink,
  contactButtonText,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverDisabledRef = useRef(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverDisabledRef.current) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  const handleDropdownClick = (label: string) => {
    hoverDisabledRef.current = true;
    setOpenDropdown(null);
  };

  const handleNavAreaMouseLeave = () => {
    handleMouseLeave();
    hoverDisabledRef.current = false;
  };

  useEffect(() => {
    if (openDropdown) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [openDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-100"
          : "bg-white py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Main Nav */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link
              to="/"
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-brand-orange-500 rounded-lg p-1"
              aria-label={`${brandName} Home`}
            >
              <div className="flex items-center">
                <span className="font-display text-2xl sm:text-3xl font-black tracking-tighter text-black group-hover:text-neutral-800 transition-colors">
                  {brandName}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-500 ml-1 transform group-hover:scale-125 transition-transform" />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden xl:flex items-center space-x-7"
              aria-label="Main Navigation"
            >
              {links.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.children && handleNavAreaMouseLeave()}
                >
                  {link.children ? (
                    <>
                      <Link
                        to={link.href}
                        onClick={() => handleDropdownClick(link.label)}
                        className="flex items-center space-x-1 text-sm font-semibold text-neutral-800 hover:text-brand-orange-500 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm font-semibold text-neutral-800 hover:text-brand-orange-500 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={mediaFinderLink}
              className="flex items-center space-x-1.5 text-sm font-bold text-neutral-900 hover:text-brand-orange-500 transition-colors"
            >
              <Search className="w-4 h-4 text-brand-orange-500" />
              <span>Media Finder</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 rounded-full shadow-sm hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500"
            >
              <span>{contactButtonText}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 xl:hidden">
            <Link
              to="/contact"
              className="md:hidden px-5 py-2 text-sm font-bold text-white bg-brand-orange-500 rounded-full"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-neutral-800 hover:text-brand-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange-500"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Dropdown Overlay */}
      {openDropdown && (
        <div
          className="hidden xl:flex fixed inset-0 top-[72px] bg-white z-50 animate-fadeIn"
          onMouseEnter={() => {
            hoverDisabledRef.current = false;
            handleMouseEnter(openDropdown);
          }}
          onMouseLeave={handleMouseLeave}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenDropdown(null)}
            className="absolute top-8 right-8 p-3 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-neutral-800" />
          </button>

          {/* Dropdown Content */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
            {links
              .find((l) => l.label === openDropdown)
              ?.children?.map((child) => (
                <Link
                  key={child.label}
                  to={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block py-4 text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-neutral-900 hover:text-brand-orange-500 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 shadow-xl px-6 py-6 animate-slideDown">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div className="flex items-center justify-between border-b border-neutral-100">
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-bold text-neutral-800 hover:text-brand-orange-500 py-1 transition-colors"
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.label ? null : link.label
                          )
                        }
                        className="p-1"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileDropdown === link.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-semibold text-neutral-600 hover:text-brand-orange-500 py-1 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-neutral-800 hover:text-brand-orange-500 py-1 transition-colors border-b border-neutral-100"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <Link
                to={mediaFinderLink}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-sm font-bold text-neutral-900 py-2"
              >
                <Search className="w-4 h-4 text-brand-orange-500" />
                <span>Media Finder</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 text-base font-bold text-white bg-brand-orange-500 hover:bg-brand-orange-600 rounded-full shadow-md"
              >
                {contactButtonText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
