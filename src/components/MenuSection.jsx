import MenuItemCard from "./MenuItemCard";

export default function MenuSection({ category }) {
  return (
    <section id={category.id} className="scroll-mt-40">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">{category.name}</h2>
        <div className="flex-1 h-px bg-border/50 ml-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.items.map((item, i) => (
          <MenuItemCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}