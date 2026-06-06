import { useState } from "react";
import { motion } from "framer-motion";
import ItemModal from "./ItemModal";

export default function MenuItemCard({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onClick={() => setOpen(true)}
        className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
      >
        {item.image && (
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          <h3 className="font-display text-lg font-medium text-foreground">{item.name}</h3>
          {item.description && (
            <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
          )}
        </div>
      </motion.div>

      {open && <ItemModal item={item} onClose={() => setOpen(false)} />}
    </>
  );
}