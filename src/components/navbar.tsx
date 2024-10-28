import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      {/*...Navbar starts...*/}
      <center>
        <header className="h-[55px] w-full bg-pink-600 font-sans bg-center">
          <div className="flex ">
            <img src="logo.jpg" className="h-16 w-16 rounded-full ml-10 mt-1" />
            <ul className="text-white text-[15px] flex gap-14 pt-4 font-medium ml-[400px] ">
              <Link href="/">
                <li className="hover:border-b-[3px] border-pink-500 rounded-sm hover:font-semibold">
                  Home
                </li>
              </Link>
              <Link href="/about">
                {/*...Detailed Page...*/}
                <li className="hover:border-b-[3px] border-pink-500 rounded-sm hover:font-semibold">
                  About
                </li>
              </Link>

              <Link href="/products">
                {/*...Detailed Page...*/}
                <li className="hover:border-b-[3px] border-pink-500 rounded-sm hover:font-semibold">
                  Products
                </li>
              </Link>

              <Link href="/contact">
                {/*...Detailed Page...*/}
                <li className="hover:border-b-[3px] border-pink-500 rounded-sm hover:font-semibold">
                  Contact
                </li>
              </Link>

              <li>
                <FaShoppingCart className="size-6 ml-80 hover:border-b-[3px] border-pink-500 rounded-sm" />
              </li>
            </ul>
          </div>
        </header>
      </center>
      {/*...Navbar ends...*/}
    </>
  );
}
