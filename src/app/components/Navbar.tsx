import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown';

const MyNavbar = () => {

  return (
    <Navbar shouldHideOnScroll className='py-4'>
      <NavbarBrand>
        <div className="flex flex-shrink-0 flex-row items-center gap-2">
          <img className="h-16 w-auto" src="/logo_200.png" alt="Logo" />
          <div>
            <p className='text-blue-primary'>Lingkungan</p>
            <p className='text-2xl font-semibold text-blue-primary'>Santa Maria Goretti</p>
          </div>
        </div>
      </NavbarBrand>
      <NavbarContent className='flex gap-10' justify='end'>
        <NavbarItem><Link href="/" className='text-blue-primary hover:text-blue-secondary font-medium transition-colors'>BERANDA</Link></NavbarItem>
        <ProfileDropdown />
        <NavbarItem>
          <button disabled className="disabled:cursor-not-allowed disabled:text-slate-400 flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
            INFORMASI
          </button>
        </NavbarItem>
        <NavbarItem>
          <button disabled className="disabled:cursor-not-allowed disabled:text-slate-400 flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
            GALERI
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
