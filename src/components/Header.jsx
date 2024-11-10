import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isScrolledPastThreshold = currentScrollPos > 100;

      if (!isMenuOpen) {
        setVisible(isScrollingUp || !isScrolledPastThreshold);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const headerOffset = 80; // Adjust based on your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={`flex justify-around items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 left-0 z-50
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${isMenuOpen ? 'translate-y-0' : ''}`}
    >
      
      {/* Logo/Brand */}
      <div className="text-xl font-bold transition-all duration-300">
        <h1>BMD mobile</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 group">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
          }}
          className="transition-all duration-500 ease-in-out hover:shadow-md p-2 rounded-md group-hover:text-gray-300 hover:!text-blue-500"
        >
          Home
        </a>
        <a 
          href="#services" 
          onClick={scrollToSection('services')}
          className="transition-all duration-500 ease-in-out hover:shadow-md p-2 rounded-md group-hover:text-gray-300 hover:!text-blue-500"
        >
          Services & Prices
        </a>
        <a 
          href="#gallery" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
          }}
          className="transition-all duration-500 ease-in-out hover:shadow-md p-2 rounded-md group-hover:text-gray-300 hover:!text-blue-500"
        >
          Gallery
        </a>
        <a 
          href="#faq" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
          }}
          className="transition-all duration-500 ease-in-out hover:shadow-md p-2 rounded-md group-hover:text-gray-300 hover:!text-blue-500"
        >
          FAQ
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}
          className="transition-all duration-500 ease-in-out hover:shadow-md p-2 rounded-md group-hover:text-gray-300 hover:!text-blue-500"
        >
          Contact Us
        </a>
        
        <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
          <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
            <svg 
              className="w-4 h-4 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
          </div>
          <a 
            href="tel:+16802020000" 
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            (680) 202-0000
          </a>
        </div>
      </nav>

      {/* Desktop Button */}
      <a 
        href="https://app.squareup.com/appointments/book/cxwgrre1ay0zyn/LZHX6SQFX8Y97/start"
        className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all duration-500 ease-in-out hover:scale-105"
      >
        Book Appointment
      </a>

      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-2xl p-2 transition-transform duration-300 ease-in-out hover:scale-110"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-500 ease-in-out transform ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <nav className="flex flex-col p-4">
          {/* Phone Number */}
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white">
                <svg 
                  className="w-5 h-5 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Call us at</p>
                <a 
                  href="tel:+16802020000" 
                  className="text-lg font-bold text-blue-500"
                >
                  (680) 202-0000
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('home');
              const headerOffset = 80;
              const elementPosition = section.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:pl-6"
          >
            Home
          </a>
          
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('services');
              const headerOffset = 80;
              const elementPosition = section.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:pl-6"
          >
            Services & Prices
          </a>
          
          <a 
            href="#gallery" 
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('gallery');
              const headerOffset = 80;
              const elementPosition = section.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:pl-6"
          >
            Gallery
          </a>
          
          <a 
            href="#faq" 
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('faq');
              const headerOffset = 80;
              const elementPosition = section.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out hover:pl-6"
          >
            FAQ
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('contact');
              const headerOffset = 80;
              const elementPosition = section.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 transition-all duration-300 ease-in-out "
          >
            Contact Us
          </a>
          
          <a 
            href="https://app.squareup.com/appointments/book/cxwgrre1ay0zyn/LZHX6SQFX8Y97/start"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-500 ease-in-out hover:scale-105"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;