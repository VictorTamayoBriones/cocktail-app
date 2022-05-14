import { Route, Routes } from "react-router-dom"
import { DetailView } from "../views/DetailDrink";
import { Home } from '../views/Home';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/drink:id" element={ <DetailView/> }/>
        </Routes>
    )
}