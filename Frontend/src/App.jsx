import {React,useState} from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"
import {useLocation,useNavigate} from "react-router-dom"

export default function App() {
    const navigate = useNavigate()
    const location = useLocation();
    const {formData} = location.state || {};

    function goCart(){
        navigate("/cart",{state:{cart}})
    }
/**
 * idea=hapa nataka ku  take every item that is selected nieke kwa array
 * alafu array nieke kwa cart
 */
   
    //console.log(isListed)
    const[cart,setCart]= useState([])
    function handleCart(newItem){
            setCart(prev=>[
                ...prev,
                newItem
            ])
        
    }
    console.log(cart);
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    })        
    
    return (
        <div>
            <Navbar 
            fullName={formData ? formData.name : "Guest"} 
            cart={goCart}
            />
            
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}