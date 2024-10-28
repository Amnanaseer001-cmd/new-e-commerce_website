import Link from "next/link";
import Navbar from "@/components/navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex mt-12 bg-gray-50 justify-between">
        <div>
          <h1 className="text-[38px] font-bold text-pink-700 font-sans mt-16 ml-32">
            Why Chose Us?
          </h1>
          <p className="ml-32 mt-4 text-balance leading-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            fugit sed accusamus illum, ex unde minus ipsa tenetur omnis vero
            odit reiciendis rerum quas distinctio, quae quos quaerat nulla odio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            fugit sed accusamus illum, ex unde minus ipsa tenetur omnis vero
            odit reiciendis rerum quas distinctio, quae quos quaerat nulla odio
            adipisicing elit. Tempore fugit sed accusamus illum, ex unde minus
            ipsa tenetur omnis ver odit reiciendis rerum quas distinctio, quae
            quos quaerat nulla odio.
          </p>
          <Link href={"/"}>
            <button
              className="h-[40px] w-[130px] bg-pink-700 rounded-full text-white mt-10 ml-32
          font-sans text-[16px] font-semibold hover:bg-rose-300 hover:text-orange-800 hover:font-bold">
              Explore Now
            </button>
          </Link>
        </div>
        <img src="m7.jpg" className="w-[600px] h-[450px] mt-16 mr-16" />
      </div>
    </>
  );
}
