import {React,useState} from "react"

export default function SideBar(props){
    return(
        <div className="SideSec">
            <button onClick={props.signUp}>SignUp</button>
            <button onClick={props.cart} >Cart</button>
            <button onClick={props.post}>MyPosts</button>
            <button>Log out</button>
        </div>
    )
}