import React from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}