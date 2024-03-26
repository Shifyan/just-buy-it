import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="  bg-gray-500 fixed z-10 w-full">
        <div className="contain mx-5 flex justify-center py-3 text-lg font-medium text-white items-center">
          <div className="basis-3/12">
            <div className="flex justify-start">
              <p>
                <Link href={'/'}>JUST BUY IT</Link>
              </p>
            </div>
          </div>
          <div className="basis-6/12">
            <div className="flex justify-center">
              <input
                type="text"
                className="w-96 rounded px-2 me-2 text-black"
              />
              <button className="p-2 rounded bg-gray-600 hover:bg-gray-800 transition-colors duration-500 ease-in">
                Search
              </button>
            </div>
          </div>
          <div className="basis-3/12">
            <div className="flex justify-end">
              <p className="">
                <Link href={'/login'}>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
