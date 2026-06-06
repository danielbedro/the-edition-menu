import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

const BEAN_DETAILS = {
  "Ethiopia Hamasho": {
    title: "Ethiopia — Hamasho Village",
    notes: ["Peach", "Mandarin", "Strawberry", "Lychee", "Red Grapes"],
    region: "Sidama, Bensa",
    producer: "Asefa Dukamo Smallholder Farmers",
    processing: "Natural",
    score: "89+",
  },
  "Honduras Mira Flores": {
    title: "Honduras — Finca Mira Flores Lot 22",
    notes: ["Mango", "Cherry", "Caramel Finish", "Well-Balanced"],
    region: "Santa Rosa de Copán",
    producer: "Carlos Roberto Hernandez",
    processing: "Natural",
    score: "87–89+",
  },
  "Tobacco Indonesia": {
    title: "Indonesia — Tobacco",
    notes: ["Tobacco", "Rich Flavours", "Vanilla", "Dark Chocolate", "Smoky Finish"],
    region: "Indonesia",
    producer: "Various Smallholders",
    processing: "Wet Hulled",
    score: "89+",
  },
  "Strawberry Cheesecake": {
    title: "Strawberry Cheesecake",
    notes: ["Strawberry", "Milk Chocolate", "Raisin"],
    region: "Colombia",
    producer: "Twenty Two Origins",
    processing: "Co-Fermented with Fruits",
    score: null,
  },
  "Costa Rica Honey": {
    title: "Costa Rica — Cafe Rivense Honey Anaerobic",
    notes: ["Pineapple", "Golden Raisin", "Cherry", "Pomegranate", "Dried Fig"],
    region: "San Jose, Chirripo",
    producer: "Urena Rojas Family",
    processing: "Honey Anaerobic",
    score: "88–89+",
  },
  "Ethiopia Banko": {
    title: "Ethiopia — Banko Chelchele Chebesa Natural",
    notes: ["Peach", "Red Plum", "Blueberry", "Caramel Finish"],
    region: "Yirgacheffe, Chelbesa Village",
    producer: "EDN Coffee Smallholder Farmers",
    processing: "Natural",
    score: "87–89+",
  },
  "Brazil Fazenda": {
    title: "Brazil — Fazenda IP",
    notes: ["Almond", "Brown Sugar", "Dark Chocolate", "Full Body"],
    region: "Carmo de Minas",
    producer: "Luiz Paulo Pereira",
    processing: "Natural",
    score: "88–89+",
  },
};

export default function BeanDetailsModal({ bean, onClose }) {
  const details = bean ? BEAN_DETAILS[bean.name] : null;

  return (
    <AnimatePresence>
      {bean && details && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-card border border-border/50 rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden"
          >
            {/* Header bar */}
            <div className={`${bean.bg} px-6 pt-6 pb-5`}>
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs font-medium mb-4 opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: bean.text.replace("text-[", "").replace("]", "") }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
              <h3 className={`font-display text-lg font-semibold leading-snug ${bean.text}`}>
                {details.title}
              </h3>
            </div>

            {/* Details */}
            <div className="p-6 space-y-5">
              {/* Tasting notes */}
              <div>
                <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                  Tasting Notes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {details.notes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">Region</p>
                  <p className="font-body text-sm text-foreground">{details.region}</p>
                </div>
                <div>
                  <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">Processing</p>
                  <p className="font-body text-sm text-foreground">{details.processing}</p>
                </div>
                <div className={details.score ? "" : "col-span-2"}>
                  <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">Producer</p>
                  <p className="font-body text-sm text-foreground">{details.producer}</p>
                </div>
                {details.score && (
                  <div>
                    <p className="font-body text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">Cup Score</p>
                    <p className="font-body text-sm text-foreground">{details.score}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}