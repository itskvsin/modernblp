"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Features() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start:"20px 80%",
        end:"bottom 100px",
        markers: true,
        toggleActions: "restart pause reverse pause",
      },
      x:400,
      duration:3
    });
  });

  return (
    <section
      id="features"
      className="flex flex-col justify-around px-8 md:px-20 py-16 bg-gray-900"
    >
      <div>
        <h3 className="text-4xl font-bold text-center mb-4 text-blue-500">
          Our Features
        </h3>
        <h2 className="text-center text-xl text-gray-400">
          We provide the best of the best services to our client + we ensure
          that our client gets the best service possible
        </h2>
      </div>
      <div className="h-80 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Analytics",
            desc: "Get detailed insights into your performance.",
          },
          { title: "Collaboration", desc: "Work seamlessly with your team." },
          {
            title: "Automation",
            desc: "Save time with smart automation tools.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 bg-black box  border-gray-800 rounded-tr-4xl shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold mb-2 text-blue-400">
              {f.title}
            </h4>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
