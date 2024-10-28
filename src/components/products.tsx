
export default function Products(){

  return (
    <>
      {/*........Products....... */}
      <center>
        <h1 className="text-[32px] font-bold text-pink-600 font-sans mt-28">
          Available Products
        </h1>
      </center>

      <div className="flex flex-col items-center min-h-[400px] w-[1200px] p-4 mt-8 ml-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/*Card 1*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="ch.webp" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              Chocoalate Cake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $20.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $25.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>

          {/*Card 2*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="st2.jpg" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              Strawberry Cake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $22.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $27.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>

          {/*Card 3*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="chc.jpg" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              Cheese Cake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $23.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $26.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>

          {/*Card 4*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="rvc.jpg" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              Redvelvet Cake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $27.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $29.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>

          {/*Card 5*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="fc2.avif" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              Fruit Cake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $19.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $21.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>

          {/*Card 6*/}
          <div className="relative group overflow-hidden rounded-lg shadow-lg  w-[270px] h-[360px] bg-gray-100">
            <img src="cc.avif" alt="Card 1" className="w-[280px] h-[270px]" />
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100
           transition-opacity duration-300 flex-col"></div>
            <h2 className="text-[18px] font-bold font-sans text-center text-black">
              CupCake
            </h2>
            <div className="flex ml-20 gap-2">
              <h2 className="text-[16px] font-extrabold font-sans text-center text-orange-700">
                $15.5
              </h2>
              <h2 className="text-[15px] font-semibold font-sans text-center text-gray-500 line-through">
                $18.5
              </h2>
            </div>
            <button className="w-[100px] h-[30px] text-[11px] text-white mt-1 ml-20 rounded-full bg-pink-600 font-sans font-medium">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

