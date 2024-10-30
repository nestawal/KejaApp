import React from "react";
import { Navigate,useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate()
    const [goSign, setGoSign] = React.useState(false);

    if(goSign){
      return <Navigate to="/signUp" />;
    }
    function SignUpButton(){
        setGoSign(prevState => !prevState)
    }

    function goCart(){
        navigate("/cart")
    }
  
    return (
        <nav>
            <div className="navBrand">
                <img src="/src/images/logoKeja.png" className="nav--logo" />
                <h3 className="title">KEJA</h3>
            </div>
            <div>
                <button onClick={SignUpButton}>SignUp</button>
                <button onClick={goCart}>
                <img src="/src/images/cart-logo.png"  className="nav--logo"  />
                </button>
            </div>
        </nav>
    )
}