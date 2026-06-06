import { useState, useEffect, useCallback } from "react";
import BestSellers from "../components/BestSellers";
import { foodCategories, beverageCategories } from "../lib/menuData";
import MenuHeader from "../components/MenuHeader";
import CategoryNav from "../components/CategoryNav";
import MenuSection from "../components/MenuSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("food");
  const categories = activeTab === "food" ? foodCategories : beverageCategories;
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveCategory(categories[0]?.id);
  }, [activeTab]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
    for (const cat of [...categories].reverse()) {
      const el = document.getElementById(cat.id);
      if (el && el.getBoundingClientRect().top < 200) {
        setActiveCategory(cat.id);
        break;
      }
    }
  }, [categories]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40">
        <MenuHeader activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />
        <CategoryNav categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <BestSellers />
      <main className="max-w-6xl mx-auto px-8 py-10 space-y-16">
        {categories.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </main>

      <footer className="border-t border-border/30 py-10 text-center">
        <p className="font-display text-lg text-muted-foreground">The Edition</p>
        <p className="font-body text-xs text-muted-foreground/60 mt-1 tracking-widest uppercase">Al Zeina · Abu Dhabi</p>
      </footer>
    </div>
  );
}