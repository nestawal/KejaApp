import React from "react";
import { Navigate,useNavigate } from 'react-router-dom';


export default function Navbar(props) {
    const navigate = useNavigate()
    const [goSign, setGoSign] = React.useState(false);

    if(goSign){
      return <Navigate to="/signUp" />;
    }
    function SignUpButton(){
        setGoSign(prevState => !prevState)
    }

    
  
    return (
        <nav>
            <div className="navBrand">
                <img src="/src/images/logoKeja.png" className="nav--logo" />
                <h3 className="title">KEJA</h3>
            </div>
            <h3>{props.fullName}</h3>
            <div className="navFunctions">
                <button onClick={props.render}>O</button>
                <button onClick={SignUpButton}>SignUp</button>
                <button onClick={props.cart} className="nav--cart">
                <img src="/src/images/cart-logo.png" className="nav--logo"   />
                </button>
            </div>
        </nav>
    )
}