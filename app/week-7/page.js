"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import Link from "next/link";


export default function WeekSevenPage() {

    // Create an event handler function (e.g., handleAddItem) that adds a new item to items.


    // In your render function, display both the NewItem and ItemList components.
    //      - Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
    //      - Pass the items state to the ItemList component as a prop.

    
    return (
        <main>
            <div className="bg-gray-900 my-4 py-2 border-3 border-gray-800 w-100 mx-auto rounded">
                <h1 className="text-4xl text-center text-amber-400">Shopping List</h1>
            </div>

            <NewItem />
            
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