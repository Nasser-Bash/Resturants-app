import axios from "axios";
import React ,{useEffect,useState} from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger ,faPhone ,faStar } from "@fortawesome/free-solid-svg-icons";
const ResturantDetaile=()=>{
     const itemId=useParams();
    const [detailes, setdetailes] = useState([]);
    const [starRate, setstarRate] = useState(5);
    const getItemDetailes= async ()=>{
        const itemDetaile = await axios.get('https://example-data.draftbit.com/restaurants?id='+ itemId.id);
        setdetailes(itemDetaile.data);
       
    }
    useEffect(() => {   
        getItemDetailes();
    }, []);

        return(
            <div className="resturant-detaile">
            {detailes.map((restu)=>{
                return(
                    <Container>
                        <div className="resturant d-lg-flex d-block my-4  justify-content-between">
                            <div className="resturant-img ">
                                <img src={restu.image}></img> 
                               
                                </div>  
                            <div className="resturant-body mx-1 p-5  ">
                                    <h2 className="resturant-name display-6 ">{restu.name}</h2>
                                    <div>
                                        <ul className="my-4">
                                                <li className="my-4">
                                                    <h6> <span className="list-title"> Food Type <FontAwesomeIcon className="mx-1" icon={faBurger} ></FontAwesomeIcon> :</span>  {restu.type}</h6>
                                                </li>
                                                
                                                <li className="my-4">
                                                    <h6> <span className="list-title">  Phone <FontAwesomeIcon className="mx-1" icon={faPhone} ></FontAwesomeIcon> :</span>   {restu.type}</h6>
                                                </li>

                                                <li className="my-4">
                                                    <h6> <span className="list-title">  City   :</span>   {restu.city}</h6>
                                                </li>  

                                                <li className="my-4">
                                                    <h6> <span className="list-title">  Address   :</span>   {restu.address}</h6>
                                                </li>  

                                                <li className="my-4">
                                                <h6>
                                        ({restu.rating})
                                        { [...Array(restu.rating)].map((star)=>{
                        return(
                                <FontAwesomeIcon icon={faStar} style={{color:'#ffbf00'}}></FontAwesomeIcon>
                        )
                       })}
                        {     
                               [...Array(starRate-restu.rating)].map((star)=>{
                                return(
                                        <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                )
                               })     
                }
                                        </h6>
                                                </li>                                               
                                        </ul>
                                        </div>
                                  
                            </div>
                        </div>            
                </Container>
         )           
            })}
           
           </div>
        )
}
export default ResturantDetaile;