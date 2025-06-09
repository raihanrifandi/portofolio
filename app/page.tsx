import Header from "@/components/header"
import Hero from "@/components/hero"
import TugasTimeline from "@/components/daftartugas";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060311] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TugasTimeline />
      </main>
    </div>
  );
}
