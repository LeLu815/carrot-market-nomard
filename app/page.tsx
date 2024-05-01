export default function Home() {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full flex flex-col gap-2 max-w-screen-sm md:flex-row">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 px-2 outline-none ring ring-transparent focus:ring-orange-400 placeholder:text-red-500 placeholder:drop-shadow ring-offset-1 transition"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full font-medium outline-none active:scale-95 focus:scale-95 transition-transform md:px-8">
          Search
        </button>
      </div>
    </main>
  );
}
