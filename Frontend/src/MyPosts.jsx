import React from "react"
import {useLocation,useNavigate} from "react-router-dom"
import Card from "./components/cartCard.jsx"

export default function MyPosts(){
    const navigate = useNavigate()
    const location = useLocation()
    const {formData} = location.state || {};
    
    const cart = location.state?.cart || [];

    const cards = cart.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    })    
    
    function addPostForm(){
        navigate("/addPost",{state:{formData}})
    }


    return(
        <div>
            <h1>Your posts</h1>
            <section className="cards-list">
                {cards}
                <button onClick={addPostForm}><img src="/src/images/plus.png" alt="add" /></button>
            </section>
        </div>
    )
}