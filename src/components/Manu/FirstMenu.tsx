'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function FirstMenu() {

  const router = useRouter()
  const [togleBT, SettogleBT] = useState(true)
  return (
    <>

      <div className={`${togleBT ?"bg-thynne-sun":"bg-thynne-moon"} text-white px-8 xl:px-80 flex justify-between shadow gap-5 py-5 text-sm`}>
        <div className='flex gap-4'>
          <button onClick={() => router.push('/')}>
            Home
          </button>
          <button onClick={() => router.push('/contact')}>
            Contact
          </button>
        </div>
        <div className='flex gap-4'>
          <button onClick={() => { SettogleBT(!togleBT) }}>
            Tog
          </button>
          <button onClick={() => router.push('/detail')}>
            Detail
          </button>
        </div>
      </div>
    </>
  )
}
