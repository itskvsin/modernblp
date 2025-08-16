export default function Features(){
    return (
        <section id="features" className="px-8 md:px-20 py-16 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">Our Features</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Analytics", desc: "Get detailed insights into your performance." },
            { title: "Collaboration", desc: "Work seamlessly with your team." },
            { title: "Automation", desc: "Save time with smart automation tools." }
          ].map((f, i) => (
            <div key={i} className="p-6 bg-black border border-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-400">{f.title}</h4>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
}