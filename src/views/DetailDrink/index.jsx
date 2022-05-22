import { TitleSection } from "../../components/TitleSection"
import { Details } from "./style"
import mojito from '../../assets/images/mojito.png'
import { Ingredients } from "./components/Ingredients"
import { Glass } from "./components/Glass"
import { ListLabels } from "./components/ListLabels"
import { Instructions } from "./components/Instructions"
import { useParams } from "react-router-dom"
import { useGetCocktail } from "../../hooks/useGetCocktail"

export const DetailView = () =>{

    const {id}=useParams();
    const {cocktail, ingredients} = useGetCocktail(id)
    
    return(
        <>
            <TitleSection>{cocktail.strDrink}</TitleSection>
            <Details>
                <div className="data">
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <ListLabels labels={cocktail.strTags}/>
                </div>
                <div className="ingredients">
                    <Ingredients data={ingredients}/>
                    <Glass glass={cocktail.strGlass} />
                </div>
                <Instructions instructions={cocktail.strInstructions} />
            </Details>   
        </>
    )
}