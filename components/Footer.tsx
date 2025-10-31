
import React from 'react';

const HandIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.278 4.223A4.994 4.994 0 0 1 12.5 3a4.994 4.994 0 0 1 2.223 1.223l.01.008c.56.402.94.981 1.138 1.637.24.8.329 1.64.329 2.632v3.75a.75.75 0 0 1-1.5 0v-3.75a4.49 4.49 0 0 0-.21-1.464c-.114-.423-.3-.801-.548-1.103a3.49 3.49 0 0 0-1.442-1.316A3.49 3.49 0 0 0 12.5 4.5c-.75 0-1.446.235-2.02.634-.58.403-1.01.96-1.262 1.623-.19.497-.288 1.04-.288 1.668v6.675A.75.75 0 0 1 7.5 15v-4.5a.75.75 0 0 1 1.5 0v3.325a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 1.5 0v2.025a.75.75 0 0 1-1.5 0V9.375a.75.75 0 0 1 1.5 0V12a5.96 5.96 0 0 1-2.223 4.773A5.01 5.01 0 0 1 5 18c-2.485 0-4.5-2.015-4.5-4.5v-3.75c0-2.485 2.015-4.5 4.5-4.5.75 0 1.447.18 2.05.5H7.5a.75.75 0 0 1 0-1.5h1.114A4.991 4.991 0 0 1 10.278 4.223ZM3.5 9.75v3.75a3 3 0 0 0 3 3V7.051a3.012 3.012 0 0 0-2.23-2.95A.75.75 0 0 1 3.5 4.875v.75a.75.75 0 0 1-1.5 0V4.5a3 3 0 0 1 3-3h.05a3 3 0 0 1 2.95 2.23.75.75 0 0 1-1.45.34A1.5 1.5 0 0 0 5 2.25H4.95A1.5 1.5 0 0 0 3.5 3.75v1.125a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 1.5 0V9.75Z" />
    <path d="M16.5 6a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 1.5 0v2.25a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 15 9a.75.75 0 0 1-1.5 0 3 3 0 0 1 3-3Z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-white">
              <HandIcon className="w-8 h-8 text-sky-400"/>
              <span>Sign VSL</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-sm">
              Dự án tham gia Cuộc thi Nghiên cứu Khoa học Kỹ thuật cấp tỉnh Trà Vinh, năm học 2024 - 2025.
            </p>
          </div>
          <div className="text-gray-400">
             <p>&copy; {new Date().getFullYear()} Sign VSL. All rights reserved.</p>
             <p className="text-sm">Trà Vinh, ngày 7 tháng 12 năm 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
