"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative container mx-auto px-6 py-32 text-center z-10">
      {/* Background Elements */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 z-0">
        <div className="w-[600px] h-[600px] bg-[#6949E7] rounded-full blur-[200px] opacity-50 animate-pulse-slow"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
        Raihan Rifandi <br /> <span className="text-purple-300">2217051043</span>
      </h1>
      <p className="text-2xl text-purple-100 max-w-2xl mx-auto mb-6">
        Mata Kuliah : Grafika Komputer
      </p>

      <div className="flex gap-4 justify-center">
        <Link
          href="#tugas"
          className="flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-medium hover:bg-purple-100 transition"
        >
          Lihat Tugas <ArrowRight size={18} />
        </Link>
        <button className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
