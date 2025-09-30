import React ,{useState,useEffect} from "react";
import data from "./data.js"
import { useParams } from "react-router-dom";

export default function PostInfo(){
     const formData = location.state || {};
    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect(()=>{
        const foundPost = data.find(p=> p.id === Number(id));
        //we will change this from the dummy data to dynamic when we are done
        console.log(foundPost);
        setPost(foundPost);
    },[id]);


    const findPost = async() =>{
        const
    }


    /**
     * TODAY'S WORK
     * instaed of creating multiple pages use this page 
     * have request table
     * money spent/earnt section
     * rented to who section also
     * lease section also
     */

    if(!post){
        return <div>Loading post ...</div>
    }

    return(
        <div className="postInfo">
            <img 
                src={`/src/images/${post.coverImg}`} 
                className="card--image" 
            />
            <div className="postDetails">
                <div>{post.title}</div>
                <div>{post.description}</div>
                <div>ksh {post.price}</div>
                <div className="detButtons">
                    <button>Rent</button>
                    <button>List</button>
                </div>
            </div>
            
        </div>
    )
}