import Link from "next/link";
import ItemList from "../week-6/item-list";

export default function WeekSixPage() {
    return (
        <main className="bg-black justify-center pb-10">
            <div className="bg-gray-900 my-4 py-2 border-3 border-gray-800 w-100 mx-auto rounded">
                <h1 className="text-4xl text-center text-amber-400">Shopping List</h1>
            </div>
            <ItemList />
            <div className="flex justify-center mt-4">
                    <Link href="/" className="
                        rounded 
                        w-fit
                        px-2
                        h-10 
                        bg-blue-900
                        text-center
                        text-white 
                        border-2
                        pt-2
                        border-blue-900
                        hover:bg-blue-800 
                        hover:border-blue-200
                        col-span-2">Back to Home</Link>
            </div>
        </main>
    )
}