import React from "react";
import { Navigate } from 'react-router-dom';


export default function Navbar() {
    const [goSign, setGoSign] = React.useState(false);

    if(goSign){
      return <Navigate to="/sign" />;
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
            <div>
                <button onClick={SignUpButton}>SignUp</button>
            </div>
        </nav>
    )
}