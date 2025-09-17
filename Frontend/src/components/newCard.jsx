import React,{useState} from "react"
import { Link } from "react-router-dom"

const NewCard =(props) => {
    console.log(props)
    console.log(props.id);
    console.log(props.postLogOnly)

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    const [isListed,setListed] = useState(false)
    function weka(){
        setListed(prevState => !prevState)
        if(!isListed){
            props.cart();
        }
    
    } 



    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`data:image/jpeg;base64,${props.file}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="/src/images/star.png" className="card--star" />
                {/*<span>{props.stats.rating}</span>*/}
                {/*<span className="gray">({props.stats.reviewCount}) • </span>*/}
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ksh{props.price}</span> / person
            </p>
            <div>
                {props.postLogOnly && <button onClick={weka}>{isListed ? "Listed":"List"}</button> }
                <Link to={`/posts/${props.id}`}><button>...</button></Link>
                <button>request</button>
            </div>
            
        </div>
    )
}

export default NewCard;