import {Routes,Route} from "react-router-dom"
import Main from "../Pages/Main";
import NewProducts from "../Pages/NewProducts";
import Offers from "../Pages/Offers";
import Products from "../Pages/Product";
import Room from "../Pages/Room";

function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/room" element={<Room/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/newproduct" element={<NewProducts/>}/>
        </Routes>

    </div>
}

export default AllRoutes;