import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen w-full">
      <Link href={'/login'} className='bg-slate-700 text-white px-3 py-2 rounded transition-transform hover:scale-105'>Go to Login Page</Link>
    </main>
  )
}
