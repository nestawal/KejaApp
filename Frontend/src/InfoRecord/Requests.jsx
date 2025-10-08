import {useState,useEffect} from "react";

//fix tomorrow trying to take pendingUsername to the acceptInfo function and patch in the database
export default function Requests(props){
    const [info,setInfo] = useState(props.info)
    console.log(info.name)
    const postInfo = useState(props.postInfo)
    console.log("this is a post info for requests",postInfo)
    console.log("post info id :",postInfo[0]._id)

    useState(()=>{
        setInfo(props.info)
        console.log("this is new props:",info);
    },[props.info]);

    //write this
    const acceptInfo=()=>{
      

        const newReq={
             leased : true,
            accepted :{
                acceptedUserId : acceptedUserId,
                months : months,
                date : Date.now()
        }

    }
    return(
        <div>
            <table className="infotable">
                <thead>
                    <tr>
                        <th>date</th>
                        <th>name</th>
                        <th>months</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {info.map(user=>{
                        return(
                            <tr key={user._id}> 
                                <td>{new Date(user.date).toLocaleDateString()}</td>
                                <td>{user.name}</td>
                                <td>{user.months}</td>
                                <td><button className="deny">x</button></td>
                                <td><button className="accept">accept</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}