import React , {createContext, useEffect,useState} from "react";
import "./css/main.css"
import NavBar from "./componets/NavBar";
import Footer from "./componets/footer";
import axios from "axios";
import Searchbar from "./componets/search";
import RestList from "./componets/Home";
import ResturantDetaile from "./componets/resturantDetaile";
import { BrowserRouter,Routes,Route } from "react-router-dom";

  export const Data = createContext();
function App() {

  const [restaurants, setrestaurants] = useState([]);
  const [ratefilter, setratefilter] = useState([]);
  const getaAllResturants = async ()=>{
    const repos = await axios.get("https://example-data.draftbit.com/restaurants?_limit=90") ;
    setrestaurants(repos.data)
  }
 
  useEffect(() => {
    getaAllResturants();
  
  }, []);

  const getaSearchResturants = async (word)=>{
    const repos = await axios.get("https://example-data.draftbit.com/restaurants?q="+ word) ;
    setrestaurants(repos.data)
  }

  const filteringByRate = (e)=>{  
     if(e.target.value ==='filterByRate'){
      const rating =  restaurants.sort((a, b)=> {
        return parseFloat(a.rating) - parseFloat(b.rating);
      })
      setratefilter(rating)
}
  




}
  return (
    <div className="App">
        <NavBar/>
        <Searchbar/>
      <Data.Provider value={getaSearchResturants}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<RestList restaurants={restaurants}  bysearch={getaAllResturants} filteringByRate={filteringByRate}  />}/>
            <Route path="/resturant/:id" element= {<ResturantDetaile/> }  />
          </Routes>
        </BrowserRouter>
        </Data.Provider>
        <Footer/>
    </div>
  );
}
export default App;
