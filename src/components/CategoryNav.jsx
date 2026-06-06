import { useRef } from "react";
import { motion } from "framer-motion";

export default function CategoryNav({ categories, activeCategory, setActiveCategory }) {
  const scrollRef = useRef(null);

  return (
    <div className="bg-background/85 backdrop-blur-xl border-b border-border/30">
      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto px-8 flex gap-2 py-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="relative flex-shrink-0"
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="cat-pill"
                className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className={`relative z-10 inline-flex items-center gap-2 px-5 py-2 font-body text-sm font-medium transition-colors ${
              activeCategory === cat.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              <span>{cat.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}