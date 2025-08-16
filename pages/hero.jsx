
export default function Hero(){
    return( 
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Grow Your Business with <span className="text-blue-500">Confidence</span>
          </h2>
          <p className="text-lg text-gray-300">
            We provide modern solutions to help you scale, innovate, and stand out in today’s market.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Book a Demo
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/img1.jpeg" alt="Business Growth" className="rounded-2xl shadow-lg" />
        </div>
        </section>
    )
}