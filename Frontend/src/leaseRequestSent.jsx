import { useNavigate } from "react-router-dom"

export default function  LeaseRequestSent(){
    const navigate = useNavigate();

    return(
        <div>
            <p>
                Thank you.
                Your request lease was sent succesfully .
                Wait for post owner to approve .
                if approved ,you will see it in your Dashboard,with your request with status approved.&nbsp;
                <strong>please don't send another request on this prperty</strong>
            </p>

            <button onClick={()=>navigate("/")}>Go Back to homepage</button>
        </div>
    )
}