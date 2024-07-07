'use client'
import { useState } from 'react';
import {
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu
} from '@nextui-org/react'
import Link from 'next/link'
import { IoChevronDownOutline } from "react-icons/io5";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown showArrow radius='sm' onOpenChange={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
      <NavbarItem className="hidden lg:block">
        <DropdownTrigger>
          <button className="__navbar-text__ text-sm md:text-base flex items-center gap-1 text-neutral-white font-medium transition-colors focus:outline-none">
            <p>
              PROFIL
            </p>
            <IoChevronDownOutline size={20} className={'transition-transform ' + (isOpen ? 'rotate-180' : '')} />
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
        <DropdownItem as={Link} href='/sejarah' key='sejarah'>Sejarah</DropdownItem>
        <DropdownItem as={Link} href='/maria-goretti' key='nama_pelindung'>Nama Pelindung</DropdownItem>
        <DropdownItem key='pengurus'>Pengurus Lingkungan</DropdownItem>
        <DropdownItem key='statistik'>Statistik</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileDropdown;