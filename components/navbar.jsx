"use client"
import React from 'react'

const Navbar = () => {
  return (
      <header className="flex justify-between items-center p-6 shadow-md bg-black">
        <h1 className="text-2xl font-bold text-blue-500">BizBrand</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#process" className="hover:text-blue-400">Process</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </header>
  )
}

export default Navbar