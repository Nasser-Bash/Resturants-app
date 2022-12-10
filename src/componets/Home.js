import React,{useState}  from "react";
import RestCard from "./resturantCard";
import Sidebar from "./sidebar";
import { Row, Container, Button } from "react-bootstrap";
const RestList=({restaurants,filteringByRate})=>{
    const [visible, setvisible] = useState(20);
    const firstdata = restaurants.slice(0,visible)
    const showMore = ()=>{
        setvisible(visible+20)
        console.log(restaurants.length);
      }
    return(
        <div className="d-lg-flex justify-content-around  my-4 p-4 ">    
        <Sidebar filteringByRate={filteringByRate}/>
        <div className="cards ">
            <Container className="position-relative  ">
          <Row>
            {
                 firstdata.map((resturant)=>{
                    return (
                         <RestCard key={resturant.id} resturant={resturant}/>
                    )
                })    
            }
             </Row>
                
             {
                    visible < restaurants.length ? <span className="d-flex justify-content-center">
                         <Button className="button show-more "  onClick={showMore}>show more</Button> </span>:<p className="text-center">  No more resturants </p> 

                 }
             </Container>
              
                   
        </div>
        </div>
    )

}
export default RestList