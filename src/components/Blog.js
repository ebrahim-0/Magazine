export default function Blog() {
  return (
    <section className="bg-blue-50" id="blog">
      <main className="w-4/5 mx-auto py-16">
        <h2 className="text-5xl font-bold text-center mb-9">About</h2>
        <div className="grid items-center  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white p-5 h-full grid justify-items-start rounded-md shadow-2xl">
            <img src="/images/blog.jpg" className="w-full h-auto" alt="" />
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog2.jpg" alt="" className="w-full h-auto" />
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog2.jpg" alt="" className="w-full h-auto" />
          </div>
          <div className="bg-white p-5 h-full grid rounded-md shadow-2xl">
            <img src="/images/blog3.jpg" alt="" className="w-full h-auto" />
          </div>
        </div>
      </main>
    </section>
  );
}
