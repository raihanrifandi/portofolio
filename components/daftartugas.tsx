"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const tugasData = [
  { title: "Tugas 1 — Tokoh Perintis Grafika Komputer", link: "https://youtu.be/dWTL0B4pWew?si=HjsqQTZItUjQ7gjK" },
  { title: "Tugas 2 — Algoritma Garis DDA & Bresenham", link: "https://drive.google.com/file/d/1Z2YCsdnderV1vRYhMClBpr4Gc7Z2qo-H/view?usp=sharing" },
  { title: "Tugas 3 — Algoritma Lingkaran Midpoint & Bresenham", link: "https://drive.google.com/file/d/1zxL2N-oHkCgXanRX2WE-OUpOW5lvI0xp/view?usp=drive_link" },
  { title: "Tugas 4 — Algoritma Kurva Bezier", link: "https://drive.google.com/file/d/1CrspR-R111TEPxJsZrxugrOsFTogaTE4/view?usp=sharing" },
];

const kuisData = [
  { title: "Kuis 1", link: "https://youtu.be/WMw0D9R8ACE?si=dfqbYnQ5d2koZFCl" },
  { title: "Kuis 2", link: "https://drive.google.com/file/d/1Rr2bWrz2ruFRmH7bgvXbjRG76Hx1dXpS/view?usp=sharing" },
  { title: "Kuis 3", link: "https://youtu.be/7xZ4ETOhqao" },
  { title: "Kuis 4", link: "https://youtu.be/LWjjDro1TQM" },
];

export default function TugasKuisSection() {
  return (
    <section id="tugas" className="container mx-auto px-6 py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e1a] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📚 Daftar Tugas & Kuis
        </motion.h2>

        {/* Tugas */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">📖 Tugas</h3>
          <div className="space-y-6">
            {tugasData.map((item, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg flex items-center justify-between hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-lg">{item.title}</p>
                <Link 
                  href={item.link} 
                  target="_blank" 
                  className="text-purple-300 hover:text-purple-400 transition"
                >
                  <ExternalLink size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kuis */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">📝 Kuis</h3>
          <div className="space-y-6">
            {kuisData.map((item, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg flex items-center justify-between hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-lg">{item.title}</p>
                <Link 
                  href={item.link} 
                  target="_blank" 
                  className="text-purple-300 hover:text-purple-400 transition"
                >
                  <ExternalLink size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
