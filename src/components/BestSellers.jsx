import MenuItemCard from "./MenuItemCard";

const bestSellers = [
  {
    name: "Avocado Toast",
    tag: "Food",
    description: "Sourdough toast with smashed avocado, feta cheese, and cherry tomatoes",
    allergens: ["Dairy"],
    image: "https://cdn-customerapp.qlub.io/digital_menu/product/391874/mp6jrmo8ecaisysfip_editedImage.png",
  },
  {
    name: "Egg Benedict",
    tag: "Food",
    description: "English muffin topped with sautéed mushrooms and beef, poached eggs, hollandaise sauce",
    allergens: ["Egg", "Dairy"],
    image: "https://cdn-customerapp.qlub.io/digital_menu/product/391873/mp6jqsiv8pzrcb14zfb_editedImage.png",
  },
  {
    name: "Flat White",
    tag: "Coffee",
    description: "Double espresso with velvety steamed milk",
    allergens: ["Dairy"],
    beans: "milk",
    image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638936988190686264",
  },
];

export default function BestSellers() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-6">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="font-display text-2xl font-semibold text-foreground">Best Sellers</h2>
        <div className="flex-1 h-px bg-border/50" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {bestSellers.map((item, index) => (
          <MenuItemCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}