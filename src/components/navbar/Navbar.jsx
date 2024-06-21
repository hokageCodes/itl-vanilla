import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white fixed top-0 z-50 w-full text-textPrimary font-bold transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent py-3'}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between h-20">
        <div className="flex items-center">
          <a href="/" className="flex items-center mr-8">
            <img className='logo-img' src={isScrolled ? "/assets/1.png" : "/assets/22.png"} width={200} height={50} alt="Logo" />
          </a>
        </div>

        {/* Navigation Links Centered */}
        <div className="hidden text-sm md:flex gap-8 justify-center flex-1">
          <a href="/itl25-conference" className="font-black">&#39;25 Conference</a>
          <a href="/pre-register" className="font-black">Registration</a>
          <a href="/speakers" className="font-black">Speakers</a>
          <a href="/partners" className="font-black">Partners</a>
          <a href="/faqs" className="font-black">FAQs</a>
          <a href="/awards" className="font-black">Awards</a>
        </div>

        {/* CTA Button to the Far Right */}
        <div className="hidden md:flex">
          <a href="/volunteer" className="py-2 px-8 mr-4 bg-ctaBg text-white hover:bg-ctaHover rounded transition duration-300">Volunteer</a>
        </div>

        {/* Hamburger Menu Button (Mobile View) */}
        <div className="md:hidden">
          <button onClick={toggleHamburger} className="outline-none">
            {isOpen ? (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-4 pt-2 pb-4 bg-[#F6F4EB] text-black`}>
        <a href="/itl25-conference" className="block py-2 px-4 text-sm font-bold">&#39;25 Conference</a>
        <a href="/pre-register" className="block py-2 px-4 text-sm font-bold">Registration</a>
        <a href="/speakers" className="block py-2 px-4 text-sm font-bold">Speakers</a>
        <a href="/partners" className="block py-2 px-4 text-sm font-bold">Partners</a>
        <a href="/faqs" className="block py-2 px-4 text-sm font-bold">FAQs</a>
        <a href="/awards" className="block py-2 px-4 text-sm font-bold">Awards</a>
        <a href="/volunteer" className="block mx-auto my-4 py-2 px-4 w-auto bg-ctaBg text-white hover:bg-blue-700 rounded transition duration-300 text-center">Volunteer</a>
      </div>
    </nav>
  );
};

export default Navbar;
