"use client"
import ItemList from "./item-list";
import { useState } from "react";
import { NewItem, userItem } from "./new-item";
import itemsData from "./items.json";
import { MealIdeas } from "./meal-ideas";


export default function Page() {

  const [items, setItems] = useState(
    itemsData.map((obj) => obj)
  );

  const [selectedItemName, setSelectedItemName] = useState("");
  
  const handleAddItem = () => {
    items.push(userItem);
  };

  const handleItemSelect = () => {
    console.log("aaaa");
  }

  return (
    <main>
      <h1 className="text-4xl font-sans italic">Shopping List</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <NewItem onAddItem={handleAddItem} onItemSelect={handleItemSelect}/>
          <ItemList items={items}/>
        </div>
        <MealIdeas ingredient="egg"/>
        
      </div>
      
      
    </main>
  );
}