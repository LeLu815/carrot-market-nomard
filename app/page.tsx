export default function Home() {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full flex flex-col gap-3">
        {["Leein", "Me", "You", "Yourself"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-2.5 rounded-xl border-b-2 pb-5 even:bg-cyan-100  odd:bg-gray-100 last:border-0 *:animate-pulse group"
          >
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium group-hover:text-red-500">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full animate-bounce">
              <span>{index}</span>
            </div>
            <div className="w-40 h-4 rounded-full bg-gray-400"></div>
            <div className="w-20 h-4 rounded-full bg-gray-400"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
