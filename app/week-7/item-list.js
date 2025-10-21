"use client"
import { useState } from "react";
import Item from "./item";



export default function ItemList({items}) {

  const [sortBy, setSortBy] = useState("name");
  const active = "bg-orange-600 text-black rounded p-2 m-2";
  const unactive = "bg-orange-800 text-black rounded p-2 m-2";

  let buttons = [active, unactive];

  const changeSort = (type) => {
    setSortBy(type);    
  };
  if (sortBy == "name") { 
    buttons = [active, unactive];
    items.sort(function(a, b){return a.name.localeCompare(b.name)}) 
  }
  else { 
    buttons = [unactive, active];
    items.sort(function(a, b){return a.category.localeCompare(b.category)}) 
  }

  return (
        <div>
          <button onClick={() => changeSort("name")} className={buttons[0]}>Sort by Name</button>
          <button onClick={() => changeSort("category")} className={buttons[1]}>Sort by Category</button>
          {items.map((value) => (
            <Item item={value} key={value.id}></Item>
          ))}
          
        </div>
    );   
}