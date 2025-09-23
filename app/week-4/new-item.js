"use client"
import { useState } from "react";

export function NewItem() {
    const [quantity, setCount] = useState(0);

    const increment = () => {
        if (quantity < 20) {
            setCount(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setCount(quantity - 1);
        }
    }

    return (
        <div>
            <p className="text-green-500 s mb-2 mt-2 font-mono">-----&gt; {quantity} &lt;-----</p>
            <button onClick={increment} className="bg-orange-600 text-black rounded p-2 m-2">+</button>
            <button onClick={decrement} className="bg-orange-600 text-black rounded p-2 m-2">-</button>
            
        </div>
    )
}