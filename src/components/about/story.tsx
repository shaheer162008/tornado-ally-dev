"use client";

import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="relative w-full bg-transparent text-foreground py-20 md:py-28 font-sans px-6 md:px-12 isolate overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto flex w-full max-w-4xl flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md self-start">
            <span className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
              Our Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-balance mb-4 text-left">
            How It Started
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-mono text-left leading-relaxed">
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                TornadoallyDev is a solo studio shaped around direct communication, practical delivery, and a workflow that stays flexible for each project.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                The focus is Unity development and Blender art: gameplay systems, shaders, hard-surface modeling, and texturing for game-ready projects.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                I&apos;m available full time, open to collaboration or independent work, and comfortable taking projects per task or at an hourly rate.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Payment via PayPal is preferred, and rates are negotiable depending on scope.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                The goal is simple: deliver reliable creative production that supports the final product, not just the process.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Open for work right now.
              </p>
            </div>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-card/80 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.16)] backdrop-blur-md font-sans text-sm text-foreground">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Working Style
              </div>
              <div className="italic text-muted-foreground leading-relaxed">
                Open to collaboration or working independently, depending on what the project needs.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
