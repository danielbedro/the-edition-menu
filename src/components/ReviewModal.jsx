import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function ReviewModal({ onClose }) {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-primary rounded-3xl p-8 max-w-sm w-full flex flex-col items-center gap-4 relative border-4 border-background"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-xl font-light"
          >
            ✕
          </button>
          <h2 className="font-display text-xl font-semibold text-primary-foreground">Leave a Review</h2>
          <p className="font-body text-sm text-primary-foreground/80 text-center">Scan the QR code with your phone to leave us a Google review</p>
          <img
            src="https://media.base44.com/images/public/6a168ce126c43a224e7b5577/91f549597_Untitled.png"
            alt="QR Code to leave a Google review"
            className="w-64 h-auto"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}