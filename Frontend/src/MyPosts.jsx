import {React,useState,useEffect} from "react"
import {useLocation,useNavigate} from "react-router-dom"
import NewCard from "./components/newCard.jsx"
import axios from "axios"

export default function MyPosts(){
    const navigate = useNavigate()
    const location = useLocation()
    const formData = location.state?.formData || {};
    console.log(formData)
    
    const cart = location.state?.cart || [];

    console.log("Before function",formData.email);
    const fetchMyposts = () =>{
        console.log("Inside function",formData.email)
       
        axios.post("http://localhost:3001/Post/yourPosts",{email: formData.email })
        .then((response)=>{
            console.log(response.data);
            setPosts(response.data);
        })
        .catch(err => console.log("Error fetching data:", err));
    }
    useEffect(() => {
        setTimeout(() => {
        console.log(" After timeout - formData.email:", formData.email);
        if (formData.email) {
            fetchMyposts();
        }
        }, 100);
    }, [formData.email]);
    

    const [posts,setPosts] = useState([]);



    const cards = Array.isArray(posts) ? posts.map(item => (
            <NewCard
                key={item.id}
                {...item}
                cart={()=>handleCart(item)}
            />
        )
    ) : null;
    
    function addPostForm(){
        navigate("/addPost",{state:{formData}})
    };


    return(
        <div>
            <h1>Your posts</h1>
            <section className="cards-list">
                {cards}
                <button onClick={addPostForm}><img src="/src/images/plus.png" alt="add" /></button>
            </section>
        </div>
    );
}