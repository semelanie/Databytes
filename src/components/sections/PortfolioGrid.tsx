"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, GraduationCap, HandHeart, Building2 } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: { label: ProjectCategory | "All"; icon?: typeof Landmark }[] = [
  { label: "All" },
  { label: "Government", icon: Landmark },
  { label: "Education", icon: GraduationCap },
  { label: "NGOs & Community", icon: HandHeart },
  { label: "Private Sector", icon: Building2 },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.label)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              active === cat.label
                ? "border-primary bg-primary text-white"
                : "border-mist bg-white text-ink hover:border-primary hover:text-primary"
            }`}
          >
            {cat.icon && <cat.icon size={14} aria-hidden="true" />}
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-card bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.client}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{project.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.delivery.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-ink/70">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
