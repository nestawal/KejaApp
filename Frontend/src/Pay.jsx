import { useState , useEffect} from 'react';
import {useLocation,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';

//finish request input functions  
export default function Pay(){
    const navigate = useNavigate()
    const {propertyId} = useParams()
    const {personId} = useParams()
    const {amount} = useParams()
    console.log(`The property id is ${propertyId} and the personId is ${personId} for this amount ${amount}`);
   
    const url = "http://localhost:3001";

 
    const [phone,setPhone] = useState('')
    console.log(phone)

    function handleChange(e){
        setPhone(e.target.value);

        console.log("This is phone",phone)
    }

    function handleSubmit(e){
        e.preventDefault();

        if(phone){
            axios.post(`${url}/pay`,{
                propertyId : propertyId,
                personId: personId,
                phone: phone,
            })
            .then(result=>{
                console.log(result)
                alert("pay succesful you will head back to the homepage now ")
                .then(navigate(`/`))
            })
            .catch(error=>console.log(error))
        }
    }

    

    return(
        <div>
            <div>
                <u><h1>Pay </h1></u>
                
                <p>
                    <><strong>if U input your number below you agree to pay agreed amount with the landlord</strong></>&nbsp;
                    <strong>Input the number here</strong>&nbsp;<u><input type="text" id="rentMonths" name="phone"  value={phone} min="1" placeholder="input phoneNo format(254xxxxxxxxx) " onChange={handleChange}  /></u> 
                
                </p>
                   

                <button onClick={(e)=>handleSubmit(e)}>submit</button>
            </div>
        </div>
    )
}

