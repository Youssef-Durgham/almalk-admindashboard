import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <main >
        <h1 className="text-6xl font-bold font-sans self-center w-full text-center my-2 mt-6">لوحة التحكم</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 ">
      <div className="w-full md:w-1/4 h-64 bg-primary rounded-lg shadow-lg flex flex-col justify-center items-center p-8">
        <h2 className="text-white text-2xl font-bold mb-4">نشر اعلان مدفوع</h2>
        <Link href="/dashboard/section1">
          <button className="bg-white text-primary py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">انتقل </button>
        </Link>
      </div>
      <div className="w-full md:w-1/4 h-64 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center p-8">
        <h2 className="text-white text-2xl font-bold mb-4">نشر اعلان VIP</h2>
        <Link href="/dashboard/section2">
          <button className="bg-white text-secondary py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">انتقل </button>
        </Link>
      </div>
      <div className="w-full md:w-1/4 h-64 bg-tertiary rounded-lg shadow-lg flex flex-col justify-center items-center p-8">
        <h2 className="text-white text-2xl font-bold mb-4">نشر اعلان منفصل</h2>
        <Link href="/dashboard/section3">
          <button className="bg-white text-tertiary py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">انتقل </button>
        </Link>
      </div>
      <div className="w-full md:w-1/4 h-64 bg-quaternary rounded-lg shadow-lg flex flex-col justify-center items-center p-8">
        <h2 className="text-white text-2xl font-bold mb-4">انشاء قسم جديد</h2>
        <Link href="/dashboard/section4">
          <button className="bg-white text-quaternary py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">انتقل </button>
        </Link>
      </div>
    </div>
      
   
  
      </main>
    </>
  )
}
