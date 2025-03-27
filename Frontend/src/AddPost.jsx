import React from "react";
import {useLocation} from "react-router-dom"
/*  title: "2 Bedroom Apartment",
    description: "Cozy and modern apartment perfect for small families.",
    price: 75,
    coverImg: "house.jpg",
    location: "New York, USA",
    openSpots: 2,
*/

export default function AddPost(){
    const location = useLocation();
    const {post} = location.state || {};
   
    return(
        <div>
                
                <div className="postContainer">
                <div className="postForm" >
                    <h1 id="title">Add Post</h1>
                    <form>
                    <div className="input-group">
                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input type="file" id="myFile" name="myFile" accept="image/" required/>
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="title" 
                        name="description"
                        required
                        />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="City,Country(Start each with a capital letter)" 
                        name="location"
                        required
                        />
                        </div>

                        <div className="postDetails" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="rooms" 
                        name="rooms"
                        required
                        />
                        </div>

                        <div className="postDetails" id="nameField">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="price(ksh)" 
                        name="price"
                        required
                        />
                        </div>
                       
                       
                    </div>
                    
                    <button  className="addBtn" id="addBtn">Add</button>
           
                    </form>
                </div>
                
                </div>
                
    
        </div>
     )
}