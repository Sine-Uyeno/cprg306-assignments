"use client"
import { useState } from "react";

export function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setCount] = useState(1);
    const [category, setCategory] = useState("produce");

    const submitFunction = (event) => {
        event.preventDefault();
        alert("Added Item: "+ name + ", Quantity: " + quantity + ", Category: " + category);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleCategory = (event) => {
        setName(event.target.value);
    };

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
            <form className="p-2 m-4 bg-white rounded-lg text-black max-w-sm w-full" onSubmit={submitFunction}>
                <div className="flex justify-between p-2">
                    <label className="inline-block w-40">NAME</label>
                    <input type="text" className="bg-white border-2 text-black" onChange={handleName} required></input>
                </div>
                <div className="flex justify-between p-2">
                    <label className="inline-block w-40">CATEGORY</label>
                    <select className="bg-white border-2 text-black" onChange={handleCategory}>
                        <option value="produce" defaultValue>Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex justify-between p-2">
                    <p className="text-black">QUANTITY:</p>
                    <p className="text-black">{quantity}</p>
                </div>
                <button type="button" onClick={increment} className="bg-green-600 text-black rounded p-2 m-2">+</button>
                <button type="button" onClick={decrement} className="bg-green-600 text-black rounded p-2 m-2">-</button>
                
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}