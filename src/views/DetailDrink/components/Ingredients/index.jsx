import { SubTitle } from "../../../../components/SubTitle"

export const Ingredients = ({data}) =>{
    
    return(
        <div className="ingredientsList">
            <SubTitle>Ingredients</SubTitle>
            
                <ul>
                    {data[0]?.map( (item,i) =>(
                        <li key={item+i}>{item[1]}</li>
                    ))}
                </ul>
            
        </div>
    )
}