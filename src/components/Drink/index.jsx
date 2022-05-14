import { useNavigate } from "react-router-dom"
import { DrinkCard } from "./styled"

export const Drink = ({image, text}) => {

    const navigate = useNavigate()
    const handleClick = (id) => navigate(`/drink${id}`)

    return(
        <DrinkCard onClick={ ()=>handleClick(text) } >
            <img src={image} alt="" />
            {text ? <div className="text"><h3>{text}</h3></div> : null}
        </DrinkCard>
    )
}