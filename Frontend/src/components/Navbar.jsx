import React,{useState,useEffect,useRef} from "react";
import { Navigate,useNavigate } from 'react-router-dom';


export default function Navbar(props) {
    const navigate = useNavigate()
    const menuRef = useRef(null);

    
    const [show,setShow] = useState(false)
    function showDropDown(){
        setShow(prev=> !prev)
    }
    let display = show ? "dropdown" : "dropdown-none";

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShow(false);
          }
        };
    
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);
    
        // Remove event listener when the component unmounts (important!)
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []); 

    //obj1 - put a menu dropdown to the side consisting of the signup ,cart , my posts 
  
    return (
        <nav>
            <div className="navBrand">
                <img src="/src/images/logoKeja.png" className="nav--logo" />
                <h3 className="title">KEJA</h3>
            </div>
            <h3>{props.fullName}</h3>
            <div className="navFunctions">
                <button onClick={props.render} className="srchBtn"><img   className="srchImg" src="/src/images/search.png" alt="" /></button>
                <div className="menu" id="menu" ref={menuRef}>
                    <button onClick={showDropDown} id="menu">-</button>
                    {show && (
                    <div className={display}>
                        <button onClick={props.signUp}>SignUp</button>
                        <button onClick={props.cart} >Cart</button>
                        <button onClick={props.post}>MyPosts</button>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}
