import React from "react";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


    

export  default function Signup(){

  function MyComponent() {
    const buttonRef = useRef(null);
  }

  
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate('/main'); 
      }
  

    let signupBtn = document.getElementById("signupBtn");
      let signinBtn = document.getElementById("signinBtn");
      let nameField = document.getElementById("nameField");
      let title = document.getElementById("title");

      signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classNameList.add("disable");
        signinBtn.classNameList.remove("disable");
      }

      signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classNameList.remove("disable");
        signinBtn.classNameList.add("disable");
      }


 return(
    <div>
        
        <body>
            <div className="container">
            <div className="form">
                <h1 id="title">Sign Up</h1>
                <form>
                <div className="input-group">
                    <div className="input-field" id="nameField">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" placeholder="name" />
                    </div>
                    <div className="input-field">  
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" placeholder="email" />
                    </div>
                    <div className="input-field">  
                    <i className="fa-solid fa-envelope"></i>
                    <input type="password" placeholder="password" />              
                    </div>
                    <p>Lost password<a href="#">Click Here!</a></p>
                </div>
                <div className="btn-field">
                    <button type="button" id="signupBtn" onclick={() => handleClick()} >Sign Up</button>
                    <button type="button" id="signinBtn" className="disable">Sign in</button>
                </div>
                </form>
            </div>
            
            </div>
            
            

        
        </body>
    </div>
 )
}