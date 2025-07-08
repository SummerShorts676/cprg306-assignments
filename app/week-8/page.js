"use client"

// Imported what was in explanation for Assignment 7
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import Link from "next/link";
import { useState } from "react";
import MealIdeas from "./meal-ideas"; // Imported meal-idea js


export default function WeekEightPage() {

    let itemArray = itemsData.map( (item) => ({...item}) );

    const [items, setItems] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState(""); // new state variable for selectedItemName

    const handleAddItem = (itemObj) => {
        setItems( [...items, itemObj] );
    }

    const handleItemSelect = (item) => { // New handler taking item and cleaning its "label/title" from emojis and setting it
        const cleanedName = item.name
            .split(",")[0]
            // .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '') // Removes the emojis 
            // Don't need previous line as next line does it :)
            .replace(/[^A-Za-z0-9\s!?]/g,'') // Removes any numbers or anything not a letter "https://stackoverflow.com/questions/12343451/how-to-remove-everything-but-letters-numbers-space-exclamation-and-question-m"
            .trim()
            .toLowerCase();
        setSelectedItemName(cleanedName);
    };
    
    return (
        <main>
            <div className="bg-gray-900 my-4 py-2 border-3 border-gray-800 w-80 mx-auto rounded">
                <h1 className="text-4xl text-center text-amber-400">Shopping List</h1>
            </div>

            {/* Making it pretty and adding mealideas component here*/}
            <div className="flex justify-center mx-auto gap-5">
                <div className="w-110">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="w-fit">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                    <Link 
                        href="/" 
                        className="
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
                            col-span-2"
                    >
                        Back to Home
                    </Link>
            </div>
        </main>
    )
}