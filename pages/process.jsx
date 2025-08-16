import React from 'react'

const Process = () => {
  return (
    <section id="process" className="px-8 md:px-20 py-16 bg-gray-900">
    <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">How It Works</h3>
    <div className="grid md:grid-cols-3 gap-10 text-center">
      {["Consult", "Implement", "Grow"].map((step, i) => (
        <div key={i} className="p-6 bg-black border border-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <div className="text-2xl font-bold text-blue-400 mb-4">0{i + 1}</div>
          <h4 className="text-xl font-semibold mb-2">{step}</h4>
          <p className="text-gray-400">Description of {step.toLowerCase()} phase goes here.</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Process
