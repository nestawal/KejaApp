import React ,{useState,useEffect} from "react";
//import data from "./data.js"
import  {useParams,useLocation}  from "react-router-dom";
import axios from "axios";
import Payments from "./InfoRecord/postPayments.jsx";
import Accepted from "./InfoRecord/Accepted.jsx";
import Requests from "./InfoRecord/Requests.jsx";

export default function AgentPostInfo(){
    const location = useLocation();
     const formData = location.state || {};
    const {id} = useParams();
    const [post,setPost] = useState(null);
    const [Record,SetRecord] = useState("requests");
    const [requestInfo,setRequestInfo] = useState();
    const url = "http://localhost:3001"

    useEffect(()=>{
        /*const foundPost = data.find(p=> p.id === Number(id));
        //we will change this from the dummy data to dynamic when we are done
        console.log(foundPost);
        setPost(foundPost);*/
        const findPost = async() =>{
           
        try{     
          
        const postResult = await axios.get(`${url}/Post/${id}`);
        setPost(postResult.data);
        console.log("Post data set:", postResult.data);

       
        const requestResult = await axios.get(`${url}/requests/${id}`); 
        setRequestInfo(requestResult.data);
        console.log("Request info set:", requestResult.data);

        } catch (error) {
            // Handle network or API errors here
            console.error("Error fetching data:", error);
        }
           
        }

        findPost();
        console.log(post);
        

    },[id]);

    


    


    /**
     * TODAY'S WORK
     * instaed of creating multiple pages use this page 
     * have request table
     * money spent/earnt section
     * rented to who section also
     * lease section also
     */
   
    function recordChoice(r){
        SetRecord(r);
        console.log(Record);
    }

     if(!post || !post.posts){
        return <div>Loading post ...</div>
    }

    return(
        <div className="postInfo">
            <div className="postInfo--profile">
                <img 
                    src={`data:image/jpeg;base64,${post.file}`}  
                    className="postInfo--image" 
                />
                <div className="postInfo--details">
                    <div>{post.posts.name}</div>
                    <div><strong>rooms:</strong>{post.posts.rooms}</div>
                    <div>ksh {post.posts.price}</div>
                    <div className="detButtons">
                        <button>Rent</button>
                        <button>List</button>
                    </div>
                </div>
            </div>
            <div className="postInfo--choice">
                <button onClick={()=>recordChoice("Requests")}>requests</button>
                <button onClick={()=>recordChoice("Accepted")}>accepted</button>
                <button onClick={()=>recordChoice("Payments")}>payments</button>
            </div>
            {Record === "Requests"&& <Requests/>}
            {Record === "Accepted"&& <Accepted/>}
            {Record === "Payments"&& <Payments/>}
            
        </div>
    )

}