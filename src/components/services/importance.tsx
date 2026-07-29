"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Boxes, UserCircle, Gamepad2 } from "lucide-react";

const audiences = [
  {
    icon: <Gamepad2 className="h-6 w-6 text-primary" />,
    title: "Game Developers",
    description: "Build reliable Unity systems, gameplay tools, and production-ready assets for prototypes or shipped titles."
  },
  {
    icon: <Boxes className="h-6 w-6 text-primary" />,
    title: "Small Studios",
    description: "Get flexible support for Blender modeling, texturing, and shader work without needing a full in-house 3D team."
  },
  {
    icon: <UserCircle className="h-6 w-6 text-primary" />,
    title: "Solo Creators",
    description: "Work directly with one person who can handle collaboration or independent execution depending on your process."
  }
];

export function ServicesImportance() {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 relative z-20 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
            Who This <span className="text-primary">Helps</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium leading-relaxed font-mono">
            If you need Unity development, Blender art, shader work, or detailed asset production, this studio is set up to support that work directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/30 border border-white/5 hover:border-white/10 p-8 rounded-[2rem] backdrop-blur-sm hover:bg-card/60 transition-colors group"
            >
              <div className="size-14 rounded-full bg-[#1B1B1B] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-mono">
                {item.description}
              </p>
              
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Custom-built solutions
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Practical production support
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Game-ready output
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
