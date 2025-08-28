import {React, useState} from "react";
import {useLocation} from "react-router-dom"
import axios from "axios";


/**
 * handle add post only if U are an admin 
 * first identify if they are registered as an agent 
 * if not direct them to page for registering 
 * and then take them back to adding post
 */

export default function AddPost(){
    const location = useLocation();
    const formData = location.state || {};
    console.log(formData)
   
    const [postForm,setPostForm] = useState({
       myFile: "",
       title:"",
       location:"",
       description:"",
       rooms:"",
       price:"",
       email: ""
      })
      
    function handleChange(e){
      setPostForm(prev=>{
        return{
          ...prev,
          [e.target.name] : e.target.value 
        }
      })
    }
    console.log(formData)
    
    const handleImage = (event) =>{
      setPostForm({...postForm,
        myFile: event.target.files[0]
      });
    }

    const handleSubmit = async(e) =>{
      e.preventDefault();
      
      const fd = new FormData();

      fd.append("file", postForm.myFile);
      fd.append("email", postForm.email);
      fd.append("posts[name]", postForm.title);
      fd.append("posts[description]", postForm.description);
      fd.append("posts[location]", postForm.location);
      fd.append("posts[rooms]", postForm.rooms);
      fd.append("posts[price]", postForm.price);
      
      const res = await axios.post("http://localhost:3001/Post/publish",fd,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("Post created:",res.data);

      navigate("/posts",{ state: { email: postForm.email } });
    
    }
    


    
    
    
    function goLogin(){
      navigate("/login")
    }
      

    return(
        <div>
                
                <div className="postContainer">
                <div className="postForm" >
                    <h1 id="title">Add Post</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input 
                        type="file" 
                        id="myFile" 
                        name="myFile"
                        onChange = {handleImage}
                        accept="image/" required />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="title" 
                        name="title"
                         onChange = {handleChange}
                        value={postForm.title}
                        required
                        />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="description" 
                        name="description"
                         onChange = {handleChange}
                        value={postForm.description}
                        required
                        />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="City,Country(Start each with a capital letter)" 
                        name="location"
                        onChange = {handleChange}
                        value={postForm.location}
                        required
                        />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="rooms" 
                        name="rooms"
                        onChange = {handleChange}
                        value={postForm.rooms}
                        required
                        />
                        </div>

                        <div className="postDetails" id="nameField">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="price(ksh)" 
                        name="price"
                        onChange = {handleChange}
                        value={postForm.price}
                        required
                        />
                        </div>
                       
                       
                    </div>
                    
                    <button  className="addBtn" id="addBtn" type="submit">Add</button>
           
                    </form>
                </div>
                
                </div>
                
    
        </div>
     )
    }