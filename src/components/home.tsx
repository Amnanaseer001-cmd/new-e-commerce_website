import Link from "next/link";
export default function Home() {
  return (
    <>
      {/*...Home Page starts...*/}
      <div
        className="h-[600px] w-full bg-no-repeat scroll-smooth "
        style={{ backgroundImage: "url('/m81.jpeg')" }}>
        <div className="ml-[860px] pt-[480px]">
          {/*...Button with hover effect and Link*/}
          <Link href={"/products"}>
            <button
              className="h-[50px] w-[310px] bg-pink-700 rounded-full text-white  
          font-sans text-[24px] font-bold hover:bg-rose-300 hover:text-orange-800">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      {/*...Home Page starts...*/}
    </>
  );
}
