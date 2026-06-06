import { useState } from "react";
import { motion } from "framer-motion";
import ReviewModal from "./ReviewModal";

const ReviewButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/40 rounded-full font-body text-xs font-medium text-foreground transition-all duration-200 hover:bg-primary/15 hover:border-primary/70 whitespace-nowrap"
  >
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="hsl(var(--primary))"/>
    </svg>
    <span>Leave a Review</span>
  </button>
);

const TabSelector = ({ activeTab, setActiveTab }) => (
  <div className="flex bg-secondary rounded-full p-1 flex-shrink-0">
    {["food", "beverages"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className="relative px-4 py-1.5 font-body text-xs font-medium tracking-wide uppercase transition-colors"
      >
        {activeTab === tab && (
          <motion.div
            layoutId="tab-bg"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className={`relative z-10 ${activeTab === tab ? "text-primary-foreground" : "text-muted-foreground"}`}>
          {tab === "food" ? "Food Menu" : "Beverages"}
        </span>
      </button>
    ))}
  </div>
);

export default function MenuHeader({ activeTab, setActiveTab, isScrolled }) {
  const [showReview, setShowReview] = useState(false);

  return (
    <header className="bg-background/85 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between overflow-hidden transition-all duration-300 backdrop-blur-xl"
        style={{ paddingTop: isScrolled ? "10px" : "24px", paddingBottom: isScrolled ? "10px" : "24px" }}
      >
        {/* Left: Tab selector */}
        <div className="flex-1 flex justify-start">
          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Center: Logo — shrinks when scrolled */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://media.base44.com/images/public/6a168ce126c43a224e7b5577/da160b0aa_edition2.png"
            alt="The Edition Bakery Cafe"
            className="w-auto object-contain mix-blend-screen transition-all duration-300"
            style={{ height: isScrolled ? "36px" : "80px" }}
          />
        </div>

        {/* Right: Review button */}
        <div className="flex-1 flex justify-end">
          <ReviewButton onClick={() => setShowReview(true)} />
        </div>
      </div>

      {showReview && <ReviewModal onClose={() => setShowReview(false)} />}
    </header>
  );
}