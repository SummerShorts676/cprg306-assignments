

export default function Item( {itemObj, onSelect} ) {

  let {id, name, quantity, category} = itemObj;

  return (
    <div
      className="bg-blue-950 px-3 py-1 my-3 mx-auto w-full rounded cursor-pointer block text-left hover:bg-blue-800 hover:outline-offset-4 hover:outline-2 hover:outline-amber-500"
      onClick={() => onSelect(itemObj)}
    >
      <h2 className="text-amber-400">{name}</h2>
      <div className="text-amber-200">
        <p>Buy {quantity} in {category}</p>
      </div>
    </div>
  );
}