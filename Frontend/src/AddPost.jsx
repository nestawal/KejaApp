import {React, useState} from "react";
import {useLocation} from "react-router-dom"
import axios from "axios";
/*  title: "2 Bedroom Apartment",
    description: "Cozy and modern apartment perfect for small families.",
    price: 75,
    coverImg: "house.jpg",
    location: "New York, USA",
    openSpots: 2,
*/

export default function AddPost(){
    const location = useLocation();
    const {formData} = location.state || {};
   
    const [postForm,setPostForm] = useState({
       myFile: "",
       title:"",
       location:"",
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
      
      function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3001/identities/signup",{
            myFile: postForm.myFile,
            title: postForm.title,
            location: postForm.location,
            rooms: postForm.rooms,
            price: postForm.price,
            email:formData.email
        })
        .then(result=>{console.log(result)//then go back to the myposts page retrieving the email of formDta 
          navigate("/posts",{state: {formData}})
        })
        .catch(error=>console.log(error))
      
      }
      
      
      
      function goLogin(){
        navigate("/login")
      }
      

    return(
        <div>
                
                <div className="postContainer">
                <div className="postForm"  onSubmit={handleChange}>
                    <h1 id="title">Add Post</h1>
                    <form>
                    <div className="input-group">
                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input 
                        type="file" 
                        id="myFile" 
                        name="myFile"
                        onChange = {handleChange}
                        value={postForm.myFile} 
                        accept="image/" required/>
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