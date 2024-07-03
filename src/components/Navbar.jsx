import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <NavbarItem><Link to={"/"} className='text-blue-primary hover:text-blue-secondary font-medium transition-colors'>BERANDA</Link></NavbarItem>
        <Dropdown showArrow radius='sm' onOpenChange={()=>setIsOpen(true)} onClose={()=> setIsOpen(false)}>
          <NavbarItem>
            <DropdownTrigger>
              <button className="flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
                <p>
                  PROFIL
                </p>
                <IoChevronDownOutline size={20} className={'transition-transform '+(isOpen ? 'rotate-180' : '')}/>
              </button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu disabledKeys={['pengurus', 'statistik']} itemClasses={{
            base: [
              'rounded-sm',
              'data-[hover=true]:bg-transparent',
              'data-[hover=true]:text-blue-secondary',
            ]
          }}>
            <DropdownItem key='sejarah'>
              <Link to='/sejarah'>Sejarah</Link>
            </DropdownItem>
            <DropdownItem key='nama_pelindung'>
              <Link to='/maria-goretti'>Nama Pelindung</Link>
            </DropdownItem>
            <DropdownItem key='pengurus'>Pengurus Lingkungan</DropdownItem>
            <DropdownItem key='statistik'>Statistik</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
