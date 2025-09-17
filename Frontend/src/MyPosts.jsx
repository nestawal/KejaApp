import {React,useState,useEffect} from "react"
import {useLocation,useNavigate} from "react-router-dom"
import NewCard from "./components/newCard.jsx"

export default function MyPosts(){
    const navigate = useNavigate()
    const location = useLocation()
    const formData = location.state || {};
    console.log(formData)
    
    const cart = location.state?.cart || [];

    const fetchMyposts = async(req,res) =>{
        try{
            const response = await fetch("http://localhost:3001/Post/feed",{
                email: formData.email
            })
            const data = await response.json();
            console.log(data);
            setPosts(data)
        }
        catch(err) {
            setError(err.message); 
            console.error("Error fetching data:", err);
        }
    }
     useEffect(() => {
            fetchMyposts(); 
        }, []);
    

    const [posts,setPosts] = useState([]);



    const cards = posts.map(item => (
            <NewCard
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    )    
    
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