import {React,useState} from "react"
import { Link } from "react-router-dom"

export default function SideBar(props){
    return(
        <div className="SideSec">
            <Link to='signUp'><button >SignUp</button></Link>
            <Link to='/cart'><button  >Cart</button></Link>
            <Link to='posts'><button>MyPosts</button></Link>
            <button>Log out</button>
        </div>
    )
}