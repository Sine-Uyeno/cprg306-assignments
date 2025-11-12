"use client"
import { useState } from "react";



export default function Item({item, onSelect}) {

    let name = item.name;
    let quantity = item.quantity;
    let category = item.category;



    return (
        <div onClick={() => onSelect(name)}>
            <li className="p-2 m-10 bg-amber-700 max-w-sm">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>Buy {quantity} of them from the {category} isle</p>
            </li>
        </div>
    );   
}