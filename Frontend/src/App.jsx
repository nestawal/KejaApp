import {React,useState} from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"
import Search from "./components/searchBar.jsx"
import {useLocation,useNavigate} from "react-router-dom"

export default function App() {
    const navigate = useNavigate()
    const location = useLocation();
    const {formData} = location.state || {};

    function goCart(){
        navigate("/cart",{state:{cart}})
    }

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
    //search functionality
    const [search,setSearch] = useState({
        title:"",
        location:""
    })
    //function for change on the searchbar component
    function writeSearch(e){
        setSearch(prev=>{
            return{
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    console.log(search)
    const [render,setRender] = useState(false)    
    function renderSearch(){
        setRender(prev=>!prev)
    }
    return (
        <div>
            {render && <Search
                content={search}
                writeSearch={writeSearch}
            />}
            <Navbar 
            fullName={formData ? formData.name : "Guest"} 
            cart={goCart}
            render={renderSearch}
            />
            
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}