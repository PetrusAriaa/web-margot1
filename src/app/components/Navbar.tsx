'use client';
import {
  Accordion,
  AccordionItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem
} from "@nextui-org/react";
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown';
import Image from "next/image";
import { useState } from "react";

const MyNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={()=>setMenuOpen(!isMenuOpen)}>
      <NavbarBrand as={Link} href="/">
        <div className="flex flex-shrink-0 flex-row items-center gap-2">
          <div className="relative w-10 h-10">
            <Image src="/logo_200.png" alt="Logo" fill sizes="4rem" priority/>
          </div>
          <div>
            <p className='text-blue-primary text-sm'>Lingkungan</p>
            <p className='text-base font-semibold text-blue-primary'>Santa Maria Goretti</p>
          </div>
        </div>
      </NavbarBrand>
      <NavbarContent className='flex gap-4 md:gap-6 lg:gap-10' justify='end'>
        <NavbarItem className="hidden lg:block"><Link href="/" className='text-sm md:text-base text-blue-primary hover:text-blue-secondary font-medium transition-colors'>BERANDA</Link></NavbarItem>
        <ProfileDropdown />
        <NavbarItem className="hidden lg:block">
          <button disabled className="text-sm md:text-base disabled:cursor-not-allowed disabled:text-slate-400 flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
            INFORMASI
          </button>
        </NavbarItem>
        <NavbarItem className="hidden lg:block">
          <button disabled className="text-sm md:text-base disabled:cursor-not-allowed disabled:text-slate-400 flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
            GALERI
          </button>
        </NavbarItem>
        <NavbarMenuToggle
          className="lg:hidden" />
      </NavbarContent>
      <NavbarMenu className="overflow-hidden">
        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
          <Link href="/"
            onClick={()=>setMenuOpen(false)}
            className="text-blue-primary hover:text-blue-secondary font-medium transition-colors min-w-full">
            BERANDA
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
          <Accordion showDivider data-id='nav-accord' variant='light' fullWidth className="data-[id=nav-accord]:px-0">
            <AccordionItem title='PROFIL' classNames={{
              title: [
                'text-blue-primary',
                'hover:text-blue-secondary',
                'transition-colors',
                'font-medium',
              ]
            }}>
              <div className="flex flex-col gap-2 pl-4">
                <Link href="/sejarah"
                  onClick={()=>setMenuOpen(false)}
                  className="text-blue-primary hover:text-blue-secondary font-medium transition-colors w-fit">
                  Sejarah
                </Link>
                <Link href="/maria-goretti"
                  onClick={()=>setMenuOpen(false)}
                  className="text-blue-primary hover:text-blue-secondary font-medium transition-colors w-fit">
                  Nama Pelindung
                </Link>
                <Link href="#"
                  aria-disabled={true}
                  onClick={()=>setMenuOpen(false)}
                  className="text-blue-primary hover:text-blue-secondary font-medium transition-colors w-fit aria-[disabled=true]:text-slate-500 aria-[disabled=true]:cursor-not-allowed">
                  Pengurus Lingkungan
                </Link>
                <Link href="#"
                  aria-disabled={true}
                  onClick={()=>setMenuOpen(false)}
                  className="text-blue-primary hover:text-blue-secondary font-medium transition-colors w-fit aria-[disabled=true]:text-slate-500 aria-[disabled=true]:cursor-not-allowed">
                  Statistik
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
          <Link href="/sejarah"
            aria-disabled={true}
            onClick={()=>setMenuOpen(false)}
            className="relative text-blue-primary hover:text-blue-secondary font-medium transition-colors w-full aria-[disabled=true]:text-slate-500 aria-[disabled=true]:cursor-not-allowed">
            INFORMASI
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
          <Link href="/sejarah"
            aria-disabled={true}
            onClick={()=>setMenuOpen(false)}
            className="relative text-blue-primary hover:text-blue-secondary font-medium transition-colors w-full aria-[disabled=true]:text-slate-500 aria-[disabled=true]:cursor-not-allowed">
            GALERI
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNavbar;
