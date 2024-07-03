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
      <NavbarItem>
        <DropdownTrigger>
          <button className="flex items-center gap-1 text-blue-primary hover:text-blue-secondary font-medium transition-colors focus:outline-none">
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
        <DropdownItem key='sejarah'>
          <Link href='/sejarah'>Sejarah</Link>
        </DropdownItem>
        <DropdownItem key='nama_pelindung'>
          <Link href='/maria-goretti'>Nama Pelindung</Link>
        </DropdownItem>
        <DropdownItem key='pengurus'>Pengurus Lingkungan</DropdownItem>
        <DropdownItem key='statistik'>Statistik</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileDropdown;