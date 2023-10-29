export default function Home() {
  return (
    <div
      id="home"
      className="bg-gray-100  min-h-screen flex items-center justify-center"
    >
      <img
        src="images/landing.jpg"
        alt="landing"
        className="absolute top-0 w-full"
      />
      <div className="z-10 rounded-md bg-blue-500 text-white px-4 py-2 text-center font-bold text-5xl">
        <h1>Welcome to Our Magazine</h1>
      </div>
    </div>
  );
}
