export default function Home() {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full flex flex-col gap-2 max-w-screen-sm md:flex-row *:outline-none has-[:invalid]:ring-red-200 has-[:invalid]:ring transition-shadow">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 px-2  placeholder:drop-shadow ring-offset-1 transition ring ring-transparent invalid:focus:ring-red-500 peer valid:focus:ring-green-500"
          type="text"
          placeholder="Email address..."
          required
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full font-medium active:scale-95  transition-transform md:px-8 peer-invalid:bg-red-100">
          Log in
        </button>
      </div>
    </main>
  );
}
