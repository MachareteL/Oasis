import { BoschSansLight } from '@/fonts/fonts'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export default function ItemRoom({
  title,
  className,
  ...attr
}: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <div className='bg-bosch-light-gray-100 dark:bg-bosch-dark-gray-400 h-5 px-1 mt-1 mr-1 flex justify-between items-center rounded-full space-x-2'>
      <h1 className={`${BoschSansLight.className} text-sm `}>{title}</h1>
      <button>
        <XMarkIcon className='w-4 h-4 hover:text-oasis-aqua-400 dark:hover:text-oasis-aqua-300'/>
      </button>
    </div>
  )
}
