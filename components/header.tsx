"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/15 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative overflow-hidden rounded">
            <Image
              src="/logo.png"
              alt="Raihan Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#fitur" className="text-sm font-medium relative group">
            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#6949E7]">
              Home
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6949E7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#komunitas" className="text-sm font-medium relative group">
            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#6949E7]">
              Projects
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6949E7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#sumber-belajar" className="text-sm font-medium relative group">
            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#6949E7]">
              About
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6949E7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#testimoni" className="text-sm font-medium relative group">
            <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-[#6949E7]">
              Contact
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6949E7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-gradient-to-b from-[#6949E7] to-[#5532E2] text-white border border-white/20 hover:opacity-90 shadow-md">
            Download CV
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col py-4 text-center">
            <Link
              href="#fitur"
              className="py-3 text-sm font-medium text-white hover:text-[#6949E7] border-b border-border/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fitur
            </Link>
            <Link
              href="#komunitas"
              className="py-3 text-sm font-medium text-white hover:text-[#6949E7] border-b border-border/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Komunitas
            </Link>
            <Link
              href="#sumber-belajar"
              className="py-3 text-sm font-medium text-white hover:text-[#6949E7] border-b border-border/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sumber Belajar
            </Link>
            <Link
              href="#testimoni"
              className="py-3 text-sm font-medium text-white hover:text-[#6949E7] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Button className="mt-4 bg-gradient-to-r from-[#6949E7] to-blue-400 hover:from-[#6949E7]/90 hover:to-blue-400/90">
              Gabung Discord
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}