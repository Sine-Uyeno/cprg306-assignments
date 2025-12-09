"use client"
import { useState } from "react";

export default function DogControlPanelPage() {
    const [delDogId, setDelDogId] = useState("");
    const [deleteText, setDeleteText] = useState("");

    async function handleDeleteDog() {
        try {
            let request = new Request(
                `http://localhost:3000/week-13/api/dogs/${delDogId}`, 
                
                {
                    method: "DELETE"
                }
            );
            let response = await fetch(request);
            if (!response.ok) console.log(response.status);
            setDeleteText(await response.text());
        } catch (error) {

        }
    }

    return(
        <main>
            <header>
                <h1>Dog Control Panel</h1>
            </header>
            <section>
                <p>{deleteText}</p>
                <form onSubmit={handleDeleteDog}>
                    <div>
                        <label>Delete Dog:</label>
                        <input type="number" onChange={ (event) => setDelDogId(event.target.value)} value={delDogId}/>
                    </div>
                    <div>
                        <button type="submit">Delete Dog</button>
                    </div>
                </form>
            </section>
        </main>
    );
}