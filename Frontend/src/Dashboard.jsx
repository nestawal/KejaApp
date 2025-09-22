import {useLocation,useNavigate } from 'react-router-dom';

export default function Dashboard(){
    const location = useLocation();
    const navigate = useNavigate();

    const formData = location.state || {};

    function goToComp(s){
        navigate(`/${s}`,{state: {formData}})
        console.log("clicked :",s);
    }
    return(
        <div className="Dashboard">
            <div className="dashComp" onClick={() => goToComp("posts")}>Myposts</div>
            <div  className="dashComp">Requested</div>
            <div  className="dashComp">Leased</div>
            <div  className="dashComp">Cash Record</div>
        </div>
    )
}