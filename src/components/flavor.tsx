import Link from "next/link";
export default function Flavours() {
  return (
    <>
      {/*........Categories........ */}
      <center>
        <h1 className="text-[32px] font-bold text-pink-600 font-sans mt-20 ">
          Available Categories
        </h1>
      </center>

      <div className="flex flex-col items-center min-h-[300px] w-[1200px] p-4 mt-8 ml-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg border-[4px] border-pink-700  h-[320px] w-[280px]">
            <img src="ch1.jpg" alt="Card 1" className="w-[300px] h-[350px]" />
            <div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col">
              <h2 className="text-[22px] font-semibold font-sans border-b-[3px] border-pink-500 rounded-sm">
                Chocoalate Cake
              </h2>

              <Link href={"/choco"}>
                <button className="w-[80px] h-[30px] text-white mt-4 rounded-full bg-pink-600 font-sans text-[14px]">
                  More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg border-[4px] border-pink-700 h-[320px] w-[280px]">
            <img src="rv.webp" alt="Card 1" className="w-[300px] h-[350px]" />
            <div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col">
              <h2 className="text-[22px] font-semibold font-sans border-b-[3px] border-pink-500 rounded-sm text-white">
                Redvelvet Cake
              </h2>
              <Link href={"/redvelvet"}>
                <button className="w-[80px] h-[30px] text-white mt-4 rounded-full bg-pink-600 font-sans text-[14px]">
                  More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg border-[4px] border-pink-700 h-[320px] w-[280px]">
            <img src="1.jpg" alt="Card 1" className="w-[300px] h-[350px]" />
            <div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col">
              <h2 className="text-[22px] font-semibold font-sans border-b-[3px] border-pink-500 rounded-sm">
                Strawberry Cake
              </h2>

              <Link href={"/strawberry"}>
                <button className="w-[80px] h-[30px] text-white mt-4 rounded-full bg-pink-600 font-sans text-[14px]">
                  More
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg border-[4px] border-pink-700 h-[320px] w-[280px]">
            <img src="cc3.jfif" alt="Card 1" className="w-[300px] h-[350px]" />
            <div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col">
              <h2 className="text-[22px] font-semibold font-sans border-b-[3px] border-pink-500 rounded-sm">
                Cup Cake
              </h2>
              <Link href={"/cupcake"}>
                <button className="w-[80px] h-[30px] text-white mt-4 rounded-full bg-pink-600 font-sans text-[14px]">
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
