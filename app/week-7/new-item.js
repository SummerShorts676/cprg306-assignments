"use client"

import { useState } from "react"

export default function NewItem( {onAddItem} ) {

    const [id, setId] = useState("") // Added it cause it changes?... I think I need this...
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("produce");

    const increment = () => {
        let currentQuantity = quantity.valueOf();
        setQuantity(currentQuantity + 1);
    }

    const decrement = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity >= 2) {
            setQuantity(currentQuantity - 1);
        }
    }

    // Generate a 18 char ID
    function generateId(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    const handleIdChange = (event) => setId(event.target.value); // Event handler for the thing I think I need...
    const handleNameChange = (event) => setName(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Item Form // Changed these so it matches what is in json file
        const newAddObj = {
            id: generateId(18), // Calls random string generator for 18 char
            name: name,
            quantity: quantity,
            category: category
        }

        // onAddItem prop
        onAddItem(newAddObj);
        
        // Reset inputs
        setId(""); //Make sure that it empties out
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    // Prevent increment button from submitting form
    const handleIncClick = (event) => {
        event.preventDefault();
        increment();
    };
    // Prevent decrement button from submitting form
    const handleDecClick = (event) => {
        event.preventDefault();
        decrement();
    };

    // Styling and Restrictions from WEEK-4 lab
    const allowedButtonStyles = "inline bg-blue-500 text-white border-2 border-blue-500 rounded px-3 m-1 hover:bg-blue-800 hover:border-blue-200";
    const notAllowedButtonStyles = "inline bg-gray-300 text-white border-2 border-gray-300 rounded px-3 m-1";
    
    let decButtonStyles = allowedButtonStyles;
    let incButtonStyles = allowedButtonStyles;
    if (quantity <= 1) {
        decButtonStyles = notAllowedButtonStyles;
    }

    // Added onClick but nothing else changes...
    return (
        <div className="bg-gray-800 p-4 w-fit rounded mx-auto mt-10">
            <form onClick={ (event) => event.stopPropagation() } onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 w-100">
                <div className="col-span-2"> {/*  */}
                    <input 
                        type="text"
                        placeholder="Item Name"
                        onChange={handleNameChange}
                        value={name}
                        required={true}
                        className="rounded w-100 h-10 border-2 border-gray-400 bg-white text-black pl-4 pt-0.5"
                    />
                </div>
                <div className="col-span-2 flex flex-row justify-between">
                    <div>
                        <div className="flex flex-row justify-between items-center rounded w-40 h-fit border-2 border-gray-400 bg-white text-black">
                            <p className="ml-4 mt-0.5">{quantity}</p>
                            <div>
                                <button className={decButtonStyles} onClick={handleDecClick}>-</button>
                                <button className={incButtonStyles} onClick={handleIncClick}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <select 
                            onChange={handleCategoryChange}
                            value={category}
                            className="rounded w-40 h-10 border-2 border-gray-400 bg-white text-black pl-1"
                        >
                            <option className="text-center" disabled value="default">--- Categories ---</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                        className="rounded w-100 h-10 
                        bg-blue-500 
                        text-white 
                        border-2 
                        mt-2
                        border-blue-500 
                        hover:bg-blue-800 
                        hover:border-blue-200
                        col-span-2"
                    >Submit Registration</button>
                </div>
            </form>
        </div>
    )
}