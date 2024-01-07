'use client'
import { useRouter } from 'next/navigation'

export default function FirstMenu() {

  const router = useRouter()

  return (
    <>
      <div className="bg-dark text-white px-80 flex justify-between gap-5">
        <button onClick={() => router.push('/contact')}>
          contact
        </button>
        <button onClick={() => router.push('/detail')}>
        detail
        </button>
      </div>
    </>
  )
}
