"use client";

import { motion } from "framer-motion";
import { companyConfig } from "../../company.config";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black font-sans z-10 border-t border-white/5 overflow-hidden">
      
      {/* Subtle top glow matching Next.js dark themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Info & Connect */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block group">
                <Image 
                  src="/tornado-ally-dev.png" 
                  alt="TornadoallyDev Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain transition-transform duration-300 hover:scale-[1.1] rounded-full" 
                />
              </Link>
              <p className="mt-6 text-sm text-muted-foreground font-medium leading-relaxed max-w-sm">
                Unity development and Blender artistry for full-time project support, collaboration, and independent production.
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} className="opacity-60" />
                  <p className="text-sm text-muted-foreground hover:text-white transition-colors">{companyConfig.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/icons/email.svg" alt="Email" width={16} height={16} className="opacity-60" />
                  <p className="text-sm text-muted-foreground hover:text-white transition-colors">{companyConfig.email}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-base font-bold text-white mb-4 tracking-wide">Connect</h4>
                <div className="flex items-center gap-3 flex-wrap">
                  <a href="https://discord.com/users/tornadoallydev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0" aria-label="Discord contact">
                    <Image src="/icons/discord.svg" alt="Discord" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href="https://www.instagram.com/tornadoallydev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href={companyConfig.socials.email} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/email.svg" alt="Email" width={18} height={18} className="opacity-80" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Unity Development</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Blender Art</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">C# Programming</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Shader Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm text-muted-foreground font-medium text-center sm:text-left">
              &copy; {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
            </p>
            <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
          
          <a href="https://www.nexiler.tech" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md transition-all">
            <span>Developed by</span>
            <span className="flex items-center gap-1.5 transition-all">
              <span className="font-extrabold bg-gradient-to-r from-[#0c86ba] to-[#0c86ba] bg-clip-text text-transparent tracking-wide group-hover:from-[#0c86ba] group-hover:to-[#0c86ba] transition-colors">Team Nexiler</span>
              <svg className="w-3.5 h-3.5 text-[#0c86ba] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}