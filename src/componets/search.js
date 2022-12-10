import React  from "react";
import Flip from 'react-reveal/Zoom';
import foodVideo from "../media/foodVideo.mp4";
const Searchbar = ()=>{
       
        return(
            <div className="searchBar ">
                    <video src={foodVideo} autoPlay loop muted   />
                    
                        <Flip>
                                <div className="title text-white mb-2 text-center ">
                                        <h1 className="">Search about your favorite food and restaurants </h1>
                                </div>   
                        </Flip>
                         
            </div>   
    )
}
export default Searchbar;