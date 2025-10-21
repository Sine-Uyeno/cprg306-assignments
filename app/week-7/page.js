"use client"
import ItemList from "./item-list";
import { useState } from "react";
import { NewItem, userItem } from "./new-item";
import itemsData from "./items.json";


export default function Page() {

  const [items, setItems] = useState(
    itemsData.map((obj) => obj)
  );
  
  const handleAddItem = () => {
    items.push(userItem);
  };

  return (
    <main>
      <h1 className="text-4xl font-sans italic">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}