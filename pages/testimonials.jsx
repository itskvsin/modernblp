import React from 'react'

const Testimonials = () => {
  return (
    <section className="px-8 md:px-20 py-16">
    <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">What Our Clients Say</h3>
    <div className="grid md:grid-cols-2 gap-10">
      {["BizBrand transformed our workflow!", "Outstanding support and great results!"].map((quote, i) => (
        <div key={i} className="p-6 bg-gray-900 border border-gray-800 rounded-xl shadow">
          <p className="italic text-gray-300">“{quote}”</p>
          <p className="mt-4 font-semibold text-blue-400">- Client {i + 1}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Testimonials
