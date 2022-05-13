import { DrinkCard } from "./styled"

export const Drink = ({image, name}) => {
    return(
        <DrinkCard>
            <img src={image} alt="" />
            {name ? <h3>{name}</h3> : null}
        </DrinkCard>
    )
}