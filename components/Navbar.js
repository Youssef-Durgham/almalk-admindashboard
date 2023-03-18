import Link from 'next/link'
export default function TopBar() {
  return (
    <nav className="bg-gray-800 py-4 px-8 md:px-16 lg:px-24 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/dashboard">
          <button className="text-white font-bold text-2xl flex items-center">
              لوحة التحكم
          </button>
        </Link>
      </div>
      <div className="flex items-center">
        
        <Link href="/dashboard/ads">
          <button className="text-gray-200 hover:text-white font-bold">اعلاناتك </button>
        </Link>
      </div>
    </nav>
  )
}
