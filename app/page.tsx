export default function Home() {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 px-2 outline-none ring ring-transparent focus:ring-orange-400 placeholder:text-red-500 placeholder:drop-shadow ring-offset-1 transition"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full font-medium outline-none active:scale-95 focus:scale-95 transition-transform">
          Search
        </button>
      </div>
    </main>
  );
}
