import React from 'react'
import {InstagramLogo} from '@phosphor-icons/react'

function Footer() {

  return (
    <>
        <div className="absolute bottom-0 left-0 right-0 bg-red-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Fármacia do Povo </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <InstagramLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer