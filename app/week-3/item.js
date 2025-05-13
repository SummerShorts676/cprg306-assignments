export default function Item({name, quantity, category}) {
  return (
    <div className="border-4 border-blue-950 px-8 py-1 m-2 bg-indigo-950 w-fit">
      <h2 className="text-2xl text-amber-400 text-">{name}</h2>
      <div className="text-amber-200">
        <p className="inline-block">Quantity: </p><p className="inline-block text-amber-100 pl-3">{quantity}</p>
        <br/>
        <p className="inline-block">Category: </p><p className="inline-block text-amber-100 pl-3">{category}</p>
      </div>
    </div>
  );
}