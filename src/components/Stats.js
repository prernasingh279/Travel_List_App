
export default function Stats({ items }) {
    const length = items.length;
    const ItemsPacked = items.filter((item) => item.packed).length;
    const PercentPacked = Math.round((ItemsPacked / length) * 100);
    return (
      <footer className="stats">
        <em>
          {PercentPacked === 100
            ? "All set to go"
            : `You have ${length} items in your list , and you already packed ${ItemsPacked}(${PercentPacked}%)`}
        </em>
      </footer>
    );
  }