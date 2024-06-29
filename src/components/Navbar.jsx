import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-between">
            <div className="flex flex-shrink-0 flex-row items-center gap-2">
              <img className="h-16 w-auto" src="/logo_200.png" alt="Logo" />
              {/* <div className='size-16 bg-slate-300 animate-pulse rounded-md' /> */}
              <div>
                <p className='text-blue-primary'>Lingkungan</p>
                <p className='text-2xl font-semibold text-blue-primary'>Santa Maria Goretti</p>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-10 ">
                <a href="#" className="text-blue-primary hover:text-blue-secondary font-medium transition-colors">BERANDA</a>
                <a href="#" className="text-blue-primary hover:text-blue-secondary font-medium transition-colors">PROFIL</a>
                <a href="#" className="text-blue-primary hover:text-blue-secondary font-medium transition-colors">INFORMASI</a>
                <a href="#" className="text-blue-primary hover:text-blue-secondary font-medium transition-colors">GALERI</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
