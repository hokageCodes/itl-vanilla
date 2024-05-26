import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-textPrimary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex flex-col gap-4 items-center">
              <img src="/assets/logo.png" className="h-16 me-3 w-32" alt="Your Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">The ITL Conference</span>
              <p className='text-center'>The largest gathering of Internationally Trained Lawyers (ITLs) in Canada.</p>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-textPrimary uppercase">Quick Links</h2>
              <ul className="text-textPrimary font-medium">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="#about-us" className="hover:underline">About</a></li>
                <li><a href="/speakers" className="hover:underline">Speakers</a></li>
                <li><a href="#schedule-section" className="hover:underline">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-textPrimary uppercase">Follow us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.instagram.com/globallawyersca?igsh=ZG5iOWVmZWJ2eTk0&utm_source=qr" target='_blank' className="hover:underline text-2xl"><FaInstagram /></a>
                <a href="https://twitter.com/theITLNetwork" className="hover:underline text-2xl" target='_blank'><FaTwitter /></a>
                <a href="https://www.facebook.com/share/oCJwFpzhsF5n2Qeb/?mibextid=K35XfP" target='_blank' className="hover:underline text-2xl"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/company/the-itl-network/" target='_blank' className="hover:underline text-2xl"><FaLinkedinIn /></a>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-textPrimary">Legal</h2>
              <ul className="text-textPrimary font-medium">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-textPrimary lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-textPrimary sm:text-center">© 2025 The ITL Conference. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
