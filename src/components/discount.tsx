import Link from "next/link";
export default function Discount() {
  return (
    <>
      <div className="flex mt-12 bg-gray-50">
        <img src="cc.jpg" className="w-[600px] h-[450px] mt-28 ml-28" />
        <div>
          <h1 className="text-[24px] font-semibold text-orange-700 font-sans mt-28  ml-20">
            Limited Offers For Customers{" "}
          </h1>
          <h1 className="text-[48px] font-bold text-pink-700 font-sans mt-2 ml-20">
            100% Fresh Cakes
          </h1>
          <h1 className="text-[40px] font-bold text-pink-700 font-sans mt-2 ml-20">
            Fast Delivery
          </h1>
          <h1 className="text-[40px] font-bold text-pink-700 font-sans mt-2 ml-20">
            UP TO
          </h1>
          <h1 className="text-[52px] font-bold text-orange-700 font-sans mt-2 ml-20">
            20% Off
          </h1>
          <Link href={"/products"}>
            <button
              className="h-[40px] w-[130px] bg-pink-700 rounded-full text-white mt-10 ml-20
          font-sans text-[18px] font-semibold hover:bg-rose-300 hover:text-orange-800">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
