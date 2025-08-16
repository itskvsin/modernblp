"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  useEffect(() => {
    // let tl = gsap.timeline();
    gsap.registerPlugin(SplitText, ScrollTrigger);

    SplitText.create(".heading1", {
      type: "words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
    SplitText.create(".confidence", {
      type: "chars",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
    SplitText.create(".para", {
      type: "words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 0.5,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });

    gsap.from(".image", {
      x: 600,
      autoAlpha: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".image",
        start: "top 80%", // when image top hits 80% viewport
        end: "top 40%",   // when image top hits 40% viewport
        scrub: true,      // smooth scroll-linked animation
        toggleActions: "play reverse play reverse", // entry + exit control
      },
    });

    gsap.from(".button", {
      y: 200,
      autoAlpha: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".button",
        start: "top 90%",
        end: "top 75%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16"
    >
      <div className="md:w-1/2 space-y-6">
        <div>
          <h2 className="heading1 text-4xl md:text-5xl font-extrabold leading-tight">
            Grow Your Business with{" "}
          </h2>
          <span className="confidence text-4xl md:text-5xl font-extrabold leading-tight text-blue-500">
            Confidence
          </span>
        </div>
        <p className="para text-lg text-gray-300">
          We provide modern solutions to help you scale, innovate, and stand out
          in today’s market.
        </p>
        <button className="button bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Book a Demo
        </button>
      </div>
      <div className="image  md:w-1/2 mt-10 md:mt-0">
        <img
          src="/img1.jpeg"
          alt="Business Growth"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
