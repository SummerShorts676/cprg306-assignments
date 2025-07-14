"use client"

// Imported what was in explanation for Assignment 7
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import Link from "next/link";
import { useState } from "react";
import MealIdeas from "./meal-ideas"; // Imported meal-idea js
import { useUserAuth } from "../_utils/auth-context";


export default function WeekEightPage() {

    const {user, firebaseSignOut} = useUserAuth();

    // Sign out of Firebase
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch {
            console.log(error);
        }
    }

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
            {
                user ? (
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

                        <div className="flex flex-row justify-center mt-4">
                                <button 
                                    onClick={handleSignOut}
                                    type="button" 
                                    className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                                >Sign Out</button>
                                <Link 
                                    href="/week-9/profile-page/"
                                    type="button" 
                                    className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                                >Profile Page</Link>
                        </div>
                    </main>
                ) : (
                    <section>
                        <header>
                            <h1>This is a Protected Page</h1>
                        </header>
                        <p>Your must be logged in to view this page</p>
                        <Link 
                            href="/week-9/"
                            type="button" 
                            className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Click her to return to the sign in page</Link>
                    </section>
                )
            }
        </main>
    )
}