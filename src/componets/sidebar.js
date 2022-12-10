import React ,{useContext}from 'react'
import Filterlist from "./filterlist";
import { Form  } from "react-bootstrap";
import { Data } from "../App";
 const Sidebar = ({filteringByRate }) => {
  const context = useContext(Data);

  const onsearch = (word)=>{
    context(word)
} 
  return (
    <div className='sidebar p-2 d-lg-block d-flex justify-content-around '>
      <Form className="mb-4  ">
                            <h6 className='mx-2'>Search Restaurants</h6>
                            <Form.Control
                                type="search"
                                placeholder="Search by resturant name or city"
                                className="rounded-pill"
                                aria-label="Search"
                                onChange={(e)=>onsearch(e.target.value)}
                            />
                            
         </Form>    
         <Filterlist filteringByRate={filteringByRate}/>
        
         
    </div>
  )
}
export default Sidebar;