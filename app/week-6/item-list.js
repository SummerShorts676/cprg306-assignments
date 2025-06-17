"use client"

import { useState } from "react";
import Item from "./item";
import itemData from "./items.json";

export default function ItemList() {

    let itemArray = itemData.map( (item) => ({...item}));
    let [sortBy, setSortBy] = useState("name");
    const handleSortByClick = (event) => setSortBy(event.target.value);

    if (sortBy != "group") {
        itemArray.sort( (a,b) => {
            if (isNaN(parseInt(a[sortBy]))) {
                let varA = a[sortBy].toUpperCase();
                let varB = b[sortBy].toUpperCase();
                if (varA < varB) return -1;
                if (varA > varB) return 1;
                // Here so that when sorted by category it orders items by category -> name
                // let nameA = a.name.toUpperCase();
                // let nameB = b.name.toUpperCase();
                // if (nameA < nameB) return -1;
                // if (nameA > nameB) return 1;
                return 0;
            }
        })
    } else {

    }

    const buttonStyle = "inline bg-blue-950 text-amber-200 border-2 border-blue-900 rounded px-3 m-1 hover:bg-blue-800 hover:border-blue-950";

    return (
        <section className="flex justify-center">
            <div className="bg-gray-900 w-fit py-5 px-5 rounded border-3 border-gray-800">
                <div className="mb-10 w-fit h-fit p-1 bg-gray-800 rounded border-2 border-gray-800">
                    <h3 className="inline pl-1 text-amber-400">Sort By:</h3>
                    <button className={buttonStyle} value="name" onClick={handleSortByClick}>Name</button>
                    <button className={buttonStyle} value="category" onClick={handleSortByClick}>Category</button>
                    <button className={buttonStyle} value="group" onClick={handleSortByClick}>Group Category</button>
                </div>
                <div className="">
                        {itemArray.map( (item) => (
                                <Item key={item.id} itemObj={item} />
                        ))}
                </div>
            </div>
        </section>
    )
}
