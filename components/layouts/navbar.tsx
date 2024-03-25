import Link from 'next/link'

const Navbar = () => {
    return (
      <nav className="divide-y border-gray-200 dark:border-gray-800 border-b fixed w-full top-0 bg-white dark:bg-gray-800 z-10">
        <div className="px-4 py-3 md:py-6 lg:px-6">
          <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
              Tayu
            </Link>
            <nav className="flex items-center space-x-6 text-sm">
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                Top
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                About
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                Works
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar;