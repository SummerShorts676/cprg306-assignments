"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList( {items, onItemSelect} ) { // Added onItemSelect

    let [sortBy, setSortBy] = useState("name");
    const handleSortByClick = (event) => setSortBy(event.target.value);

    let sortedItems = [...items];

    if (sortBy != "group") { // still works so leaving here :)
        sortedItems.sort( (a,b) => {
            if (isNaN(parseInt(a[sortBy]))) {
                let varA = a[sortBy].toUpperCase();
                let varB = b[sortBy].toUpperCase();
                if (varA < varB) return -1;
                if (varA > varB) return 1;
                return 0;
            }
        })
    }

    const buttonStyle = "inline bg-blue-950 text-amber-200 border-2 border-blue-900 rounded px-3 m-1 hover:bg-blue-800 hover:border-blue-950";

    return (
        <section className="flex justify-center mt-5">
            <div className="bg-gray-900 w-full py-5 px-5 rounded border-3 border-gray-800">
                <div className="mb-5 w-fit text-center h-fit p-1 bg-gray-800 rounded border-2 border-gray-800 mx-auto">
                    <h3 className="inline pl-1 text-amber-400">Sort By:</h3>
                    <button className={buttonStyle} value="name" onClick={handleSortByClick}>Name</button>
                    <button className={buttonStyle} value="category" onClick={handleSortByClick}>Category</button>
                    {/* Removed this sorting button */}
                </div>
                <div className="">
                        {sortedItems.map( (item) => (
                            <Item 
                                key={item.id} 
                                itemObj={item}
                                onSelect={() => onItemSelect(item)} // Added handler/OnSelect
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}
