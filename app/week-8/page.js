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

  const handleItemSelect = (name) => {
    let nameEdit = name;
    nameEdit = nameEdit.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    nameEdit = nameEdit.split(",")[0]
    setSelectedItemName(nameEdit);
  }

  console.log("handle item select");
  console.log(handleItemSelect);

  return (
    <main>
      <h1 className="text-4xl font-sans italic">Shopping List</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <MealIdeas ingredient={selectedItemName}/>
        
      </div>
      
      
    </main>
  );
}