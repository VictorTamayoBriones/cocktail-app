import { Route, Routes } from "react-router-dom"
import { Home } from '../views/Home';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
        </Routes>
    )
}