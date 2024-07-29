import Image from 'next/image'
import React from 'react'

interface ButtonProps {
    title : string
    type : 'button' | 'submit'
    icon? : string
    variant : 'btn_dark_green' | 'btn_white' | 'btn_green'| 'btn_white_text' | 'btn_dark_green_outline'
    full? : boolean
}

export default function Button({title, type, variant, icon, full } : ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} type={type}>
        {
            icon && <Image src={icon} alt={title} width={24} height={24}/>
        }
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}
