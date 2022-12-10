import React  from "react";
import {Form} from 'react-bootstrap';
const Filterlist = ({filteringByRate})=>{
        return (
            <div className="filter-list ">
                    <h6 className="mx-2">Sort:</h6>
                    <Form.Select className="rounded-pill " aria-label="Default select example" onChange={filteringByRate}>
                        <option>Sort Restaurants</option>
                        <option value="filterByRate">by rating</option>
                     </Form.Select>
               
            </div>
        )
}
export default Filterlist;