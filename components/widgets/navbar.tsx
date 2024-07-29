import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/button'

export default function Navbar() {
  return (
    <header className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
        </Link>
        <nav>
          <ul className='hidden h-full gap-12 lg:flex '>
            {
              NAV_LINKS.map(nav => (
                <li key={nav.key}>
                  <Link href={nav.href} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {nav.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className='lg:flexCenter hidden'>
            <Button 
              title='Login'
              type='button'
              icon='/user.svg'
              variant='btn_dark_green'
            />
        </div>
        
        <button className='inline-block cursor-pointer lg:hidden'>
          <Image 
            src='/menu.svg'
            alt='menu'
            width={32}
            height={32}
          />
        </button>
    </header>
  )
}
