"use client"

// Imported what was in explanation for Assignment 7
import ItemList from "./item-list";
import NewItem from "./new-item";
import Link from "next/link";
import { useState, useEffect } from "react"; // Week 10: Imported useEffect from React
import MealIdeas from "./meal-ideas"; // Imported meal-idea js
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service"; // Week 10: Importing functions from shopping-list-service.js


export default function WeekTenPage() {

    const {user, firebaseSignOut} = useUserAuth();

    // Sign out of Firebase
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch {
            console.log(error);
        }
    }

    const [items, setItems] = useState([]); // Remove itemsArray const and fix this line to that state empty
    const [selectedItemName, setSelectedItemName] = useState("");
    
    // Week 10: P3 Get the import { getItems, addItem } from "../_services/shopping-list-service";shopping list
    async function loadItems() {
        if (user && user.uid) {
            try {
                const getUserItems = await getItems(user.uid);
                setItems(getUserItems);
            } catch (error) {
                console.error(error);
            }
        }
    }

    // Week 10: P4 Add the useEffect hook
    useEffect( () => {
        if (user) {
            loadItems();
        }
    }, [user] );

    // Week 10: P5 Handle adding an item
    const handleAddItem = (itemObj) => {
        if (!user || !user.uid) return;
        try {
            const newItemID = addItem(user.uid, itemObj);
            const newItem = { ...itemObj, id: newItemID };
            console.log(newItem);
            setItems( [...items, newItem] );
        } catch (error) {
            console.error(error);
        }
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0]
            .replace(/[^A-Za-z0-9\s!?]/g,'')
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
                                    href="/week-10/profile-page/"
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
                            href="/week-10/"
                            type="button" 
                            className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Click her to return to the sign in page</Link>
                    </section>
                )
            }
        </main>
    )
}