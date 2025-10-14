"use client"
import { useState } from "react";
import Item from "./item";
import data from "./items.json";



export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");
  const active = "bg-orange-600 text-black rounded p-2 m-2";
  const unactive = "bg-orange-800 text-black rounded p-2 m-2";

  let buttons = [active, unactive];

  const changeSort = (type) => {
    setSortBy(type);
    console.log(data);
    
  };
  if (sortBy == "name") { 
    buttons = [active, unactive];
    data.sort(function(a, b){return a.name.localeCompare(b.name)}) 
  }
  else { 
    buttons = [unactive, active];
    data.sort(function(a, b){return a.category.localeCompare(b.category)}) 
  };

  return (
        <div>
          <button onClick={() => changeSort("name")} className={buttons[0]}>Sort by Name</button>
          <button onClick={() => changeSort("category")} className={buttons[1]}>Sort by Category</button>
          {data.map((value) => (
            <Item item={value} key={value.id}></Item>
          ))}
          
        </div>
    );   
}