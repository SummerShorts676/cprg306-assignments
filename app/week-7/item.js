

// From Week 3 with some changes to tailwind CSS to make it look prettier :)
export default function Item({itemObj}) {

    let {id, name, quantity, category} = itemObj;

  return (
    <div className="bg-blue-950 px-3 py-1 my-3 mx-auto w-65 rounded">
      <h2 className="text-amber-400">{name}</h2>
        <div className="text-amber-200">
            <p>Buy {quantity} in {category}</p>
        </div>
    </div>
  );
}