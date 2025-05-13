import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-5xl p-4 font-bold text-amber-100 bg-indigo-950 border-blue-950 border-4 m-2 w-fit ">Shopping List</h1>
            <ItemList />
        </main>
    )
}