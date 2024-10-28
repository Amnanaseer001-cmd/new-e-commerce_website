import Navbar from "@/components/navbar";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <h2 className="text-4xl text-center mt-20 font-bold text-pink-600">
        Contact Us
      </h2>

      <div className="flex items-center justify-center min-h-screen ">
        <form
          action=""
          method=""
          className="bg-white p-6 border-[1px] border-pink-600 rounded-md shadow-md w-96 mb-64">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNo"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-2 rounded-md hover:bg-orange-800 text-[16px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
