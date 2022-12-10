import React ,{useState} from "react";
import { Link } from "react-router-dom";
import { Card,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-reveal/Zoom';
const RestCard = ({resturant})=>{
        const [starRate, setstarRate] = useState(5);
        return(
             
            <Col sm className="my-3  d-flex justify-content-center">
                   <Zoom>
           <Card className="" style={{ width: '15rem' }}>
            <Link to={`/resturant/${resturant.id}`}>
                 <Card.Img variant="top" src={resturant.image} />
                <Card.Title className="pt-4 ps-3 ">{resturant.name}</Card.Title>
                </Link>
                <Card.Body>
                <Card.Text className="text-end">
                {resturant.type}
                </Card.Text >
                <div className="rating d-flex">
                        <Card.Text className="text-start fa fa-home">
                        ({resturant.rating})
                        { [...Array(resturant.rating)].map((star)=>{
                        return(
                                <FontAwesomeIcon icon={faStar} style={{color:'#ffbf00'}}></FontAwesomeIcon>
                        )
                       })}
                 {     
                               [...Array(starRate-resturant.rating)].map((star)=>{
                                return(
                                        <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                )
                               })     
                }
                        </Card.Text>
                       
                       
                </div>
            </Card.Body>
    </Card>
    </Zoom>
    </Col>
    
    )

}
export default RestCard;