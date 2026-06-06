import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BeanDetailsModal from "./BeanDetailsModal";

const WATER_BEANS = [
  { name: "Ethiopia Hamasho", bg: "bg-[#c9a88a]", text: "text-[#5a3520]" },
  { name: "Strawberry Cheesecake", bg: "bg-[#c49090]", text: "text-[#4a1818]" },
  { name: "Brazil Fazenda", bg: "bg-[#8aaa8c]", text: "text-[#1a3e1c]" },
  { name: "Honduras Mira Flores", bg: "bg-[#ccc4a8]", text: "text-[#4a3e22]" },
  { name: "Tobacco Indonesia", bg: "bg-[#8099b0]", text: "text-[#1e2e3e]" },
];

const COLD_BREW_BEANS = [
  { name: "Ethiopia Hamasho", bg: "bg-[#c9a88a]", text: "text-[#5a3520]" },
  { name: "Honduras Mira Flores", bg: "bg-[#ccc4a8]", text: "text-[#4a3e22]" },
  { name: "Costa Rica Honey", bg: "bg-[#c48898]", text: "text-[#4a1828]" },
];

const MILK_BEANS = [
  { name: "Strawberry Cheesecake", bg: "bg-[#c49090]", text: "text-[#4a1818]" },
  { name: "Ethiopia Banko", bg: "bg-[#ccc4a8]", text: "text-[#4a3e22]" },
  { name: "Brazil Fazenda", bg: "bg-[#8aaa8c]", text: "text-[#1a3e1c]" },
];

export default function ItemModal({ item, onClose }) {
  const [selectedBean, setSelectedBean] = useState(null);

  if (!item) return null;

  const beans =
    item.beans === "water"
      ? WATER_BEANS
      : item.beans === "milk"
      ? MILK_BEANS
      : item.beans === "cold-brew"
      ? COLD_BREW_BEANS
      : null;

  return (
    <>
      <AnimatePresence>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-card border border-border/50 rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            {item.image && (
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold text-foreground leading-snug mb-3">
                {item.name}
              </h2>

              {item.description && (
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}

              {beans && (
                <div className="mt-5">
                  <p className="font-body text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-3">
                    Available Beans
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {beans.map((bean) => (
                      <button
                        key={bean.name}
                        onClick={() => setSelectedBean(bean)}
                        className={`px-4 py-2 rounded-full font-body text-sm font-semibold transition-all active:scale-95 hover:opacity-90 shadow-sm ${bean.bg} ${bean.text}`}
                      >
                        {bean.name}
                      </button>
                    ))}
                  </div>
                  <p className="font-body text-xs text-muted-foreground/70 text-center mt-3 tracking-wide">
                    Select to see notes
                  </p>
                </div>
              )}

              {item.allergens && item.allergens.length > 0 && (
                <p className="font-body text-xs text-muted-foreground mt-4">
                  Contains: {item.allergens.join(", ")}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      <BeanDetailsModal bean={selectedBean} onClose={() => setSelectedBean(null)} />
    </>
  );
}