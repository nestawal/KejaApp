import {React,useState,useEffect} from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"
import Search from "./components/searchBar.jsx"
import {useLocation,useNavigate} from "react-router-dom"
import SideBar from "./SideBar.jsx"

export default function App() {
    const navigate = useNavigate()
    const location = useLocation();
    const {formData} = location.state || {};

    console.log(formData);

    function goSign(){
        navigate("/signUp")
    }

    function goCart(){
        navigate("/cart",{state:{cart}})
    }

    function goPost(){
        navigate("/posts",{state:{formData}})
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
   
    //search functionality
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
        filterCards();
    }
    //filter search function
    const [filtered,setFiltered] = useState([])
    function filterCards(){
            if(search.title==""&&search.location==""){
                setFiltered(data)
            }else{
                const filteredData = data.filter(item => 
                    item.title.toLowerCase() === search.title.toLowerCase() || 
                    item.location.toLowerCase() === search.location.toLowerCase() ); 
                setFiltered(filteredData);
            }
    }
    console.log(filtered)

    console.log(search)
    const [render,setRender] = useState(false)    
    function renderSearch(){
        setRender(prev=>!prev)
    }

    useEffect(() => {
        console.log("Render state changed:", render);
    }, [render]);

    const filCards = filtered.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    })

    const unFil = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    })

    const cards = filtered.length === 0 ? unFil : filCards ;

    const [show,setShow] = useState(false)
    function showSideBar(){
        setShow(prev=> !prev)
    }
    
    return (
        <div>
            {render && <Search
                content={search}
                writeSearch={writeSearch}
                filter={filterCards}
            />}
            <Navbar 
            fullName={formData ? formData.name : "Guest"} 
            renderSearch = {renderSearch}
            show = {show}
            setShow = {setShow}
            showSideBar = {showSideBar}
            />
            <div className="bodySec">
                <section style={{ minWidth: show ? '75%' : undefined }}className="cards-list">
                    {cards}  
                </section>
                {show && 
                <section className="SideSec">
                    <SideBar 
                        signUp = {goSign}
                        cart={goCart}
                        render={renderSearch}
                        post={goPost}
                    />
                </section>}
            </div>
           
        </div>
    )
}