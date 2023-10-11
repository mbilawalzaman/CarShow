"use client"
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'

const SearchManufacturer = ( {manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="realtive w-full"> 
        <Combobox.Button className="absolute top-[14px]">
        <Image
        src="/car-logo.svg"
        alt="car logo"
        width={20}
        height={20}
        className="ml-4"
        />
        </Combobox.Button>
        <Combobox.Input 
        className="search-manufacturer__input"
        placeholder="Suzuki Mehran"
        
        />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer