import Item from "./item";

const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
export default function ItemList() {
    return (
        <div>
            <ul>
                <li><Item name={item1.name} quantity={item1.quantity} category={item1.category}/></li>
            </ul>
        </div>
    );
}