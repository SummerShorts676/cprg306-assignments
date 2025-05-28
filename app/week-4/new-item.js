"use client"

import { useState } from "react"



export default function NewItem() {
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity <= 19) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity >= 2) {
            setQuantity(currentQuantity - 1);
        }
    }

    const allowedButtonStyles = "inline bg-blue-500 text-white border-2 border-blue-500 rounded px-3 m-1 hover:bg-blue-800 hover:border-blue-200";
    const notAllowedButtonStyles = "inline bg-gray-300 text-white border-2 border-gray-300 rounded px-3 m-1";

    let incButtonStyles = allowedButtonStyles;
    if (quantity >= 20) {
        incButtonStyles = notAllowedButtonStyles;
    }
    let decButtonStyles = allowedButtonStyles;
    if (quantity <= 1) {
        decButtonStyles = notAllowedButtonStyles;
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-row justify-between rounded w-40 h-fit border-2 border-gray-400 bg-white text-black">
                <p className="ml-4 mt-0.5 text-2xl">{quantity}</p>
                <div>
                    <button className={decButtonStyles} onClick={decrement}>-</button>
                    <button className={incButtonStyles} onClick={increment}>+</button>
                </div>
            </div>
        </div>
    )
}