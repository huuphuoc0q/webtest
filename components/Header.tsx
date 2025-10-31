
import React, { useState } from 'react';

const HandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.278 4.223A4.994 4.994 0 0 1 12.5 3a4.994 4.994 0 0 1 2.223 1.223l.01.008c.56.402.94.981 1.138 1.637.24.8.329 1.64.329 2.632v3.75a.75.75 0 0 1-1.5 0v-3.75a4.49 4.49 0 0 0-.21-1.464c-.114-.423-.3-.801-.548-1.103a3.49 3.49 0 0 0-1.442-1.316A3.49 3.49 0 0 0 12.5 4.5c-.75 0-1.446.235-2.02.634-.58.403-1.01.96-1.262 1.623-.19.497-.288 1.04-.288 1.668v6.675A.75.75 0 0 1 7.5 15v-4.5a.75.75 0 0 1 1.5 0v3.325a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 1.5 0v2.025a.75.75 0 0 1-1.5 0V9.375a.75.75 0 0 1 1.5 0V12a5.96 5.96 0 0 1-2.223 4.773A5.01 5.01 0 0 1 5 18c-2.485 0-4.5-2.015-4.5-4.5v-3.75c0-2.485 2.015-4.5 4.5-4.5.75 0 1.447.18 2.05.5H7.5a.75.75 0 0 1 0-1.5h1.114A4.991 4.991 0 0 1 10.278 4.223ZM3.5 9.75v3.75a3 3 0 0 0 3 3V7.051a3.012 3.012 0 0 0-2.23-2.95A.75.75 0 0 1 3.5 4.875v.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h.05a3 3 0 0 1 2.95 2.23.75.75 0 0 1-1.45.34A1.5 1.5 0 0 0 5 2.25H4.95A1.5 1.5 0 0 0 3.5 3.75v1.125a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 1.5 0V9.75Z" />
    <path d="M16.5 6a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 1.5 0v2.25a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 15 9a.75.75 0 0 1-1.5 0 3 3 0 0 1 3-3Z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#gioi-thieu', label: 'Giới thiệu' },
    { href: '#tinh-nang', label: 'Tính năng' },
    { href: '#cong-nghe', label: 'Công nghệ' },
    { href: '#lo-trinh', label: 'Lộ trình' },
    { href: '#doi-ngu', label: 'Đội ngũ' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-sky-600">
            <HandIcon className="w-8 h-8"/>
            <span>Sign VSL</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-sky-600 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          
          <a href="#" className="hidden md:inline-block bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-md">
            Tải về
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-sky-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-sky-600 py-2 px-3 rounded-md bg-gray-100 transition-colors duration-300 font-medium">
                  {link.label}
                </a>
              ))}
              <a href="#" className="bg-sky-600 text-white font-semibold text-center mt-2 px-5 py-2 rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-md">
                Tải về
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
