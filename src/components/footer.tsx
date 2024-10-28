export default function Footer() {
  return (
    <div>
      <div className=" mt-32 w-full h-52 bg-gray-100  border-gray-300 border-t-[1px] flex gap-64 pl-32 justify-between">
        <div>
          <h3 className="text-pink-600 text-2xl pt-6 font-bold">Contact us</h3>
          <p className="text-pink-600 pt-4 font-normal text-[14px]">
            Email : example@gmail.com
          </p>
          <p className="text-pink-600 pt-4 font-normal text-[14px]">
            Phone : +92123456789
          </p>
          <p className="text-pink-600 pt-4 font-normal text-[14px]">
            Address : North Nazimabad , Karachi
          </p>
        </div>
        <div>
          <h3 className="text-pink-600  text-2xl pt-6 font-bold">
            Quick Links
          </h3>
          <p className="text-pink-600 pt-2 font-normal text-[14px] text-center">
            Home
          </p>
          <p className="text-pink-600 pt-2 font-normal text-[14px] text-center ">
            About Us
          </p>

          <p className="text-pink-600 pt-2 font-normal text-[14px] text-center">
            Products
          </p>
          <p className="text-pink-600 pt-2 font-normal text-[14px] text-center">
            Contact
          </p>
        </div>
        <div></div>
      </div>

      <div className="w-full h-12 bg-white  border-gray-300 border-b-[1px]">
        <p className=" text-center p-3 font-serif font-light text-[15px] text-slate-900">
          Created by Amna | Copyright reserved
        </p>
      </div>
    </div>
  );
}
