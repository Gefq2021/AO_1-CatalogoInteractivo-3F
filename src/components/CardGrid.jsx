import ItemCard from "./ItemCard";

const CardGrid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardGrid;
