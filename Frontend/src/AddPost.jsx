import React from "react";
/*  title: "2 Bedroom Apartment",
    description: "Cozy and modern apartment perfect for small families.",
    price: 75,
    coverImg: "house.jpg",
    location: "New York, USA",
    openSpots: 2,
*/

export default function AddPost(){
    return(
        <div>
                
                <div className="postContainer">
                <div className="postForm" >
                    <h1 id="title">Add Post</h1>
                    <form>
                    <div className="input-group">
                        <div className="input-field" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="title" 
                        name="title"
                        />
                        </div>

                        <div className="input-field" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="title" 
                        name="description"
                        />
                        </div>

                        <div className="input-field" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="City,Country(Start each with a capital letter)" 
                        name="location"
                        />
                        </div>

                        <div className="input-field" >
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="rooms" 
                        name="rooms"
                        />
                        </div>

                        <div className="input-field" id="nameField">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                        type="text" 
                        placeholder="price(ksh)" 
                        name="price"
                        />
                        </div>
                       
                       
                    </div>
                    <div className="postBtn-field">
                        <button  id="addBtn">Add</button>
                       
                        
                    </div>
                    </form>
                </div>
                
                </div>
                
    
        </div>
     )
}