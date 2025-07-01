"use client"

// Imported what was in explanation for Assignment 7
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import Link from "next/link";
import { useState } from "react";


export default function WeekSevenPage() {

    // Get data from json into an array
    let itemArray = itemsData.map( (item) => ({...item}) );

    // Initialize a state variable
    const [items, setItems] = useState(itemArray);

    // New event handler variable for/to add new item/s
    const handleAddItem = (itemObj) => {
        setItems( [...items, itemObj] );
    }
    
    // Added/Passes needed handler and state into components
    return (
        <main>
            <div className="bg-gray-900 my-4 py-2 border-3 border-gray-800 w-100 mx-auto rounded">
                <h1 className="text-4xl text-center text-amber-400">Shopping List</h1>
            </div>

            <NewItem onAddItem={handleAddItem}/>
            
            <ItemList items={items}/>

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