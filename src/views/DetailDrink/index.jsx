import { TitleSection } from "../../components/TitleSection"
import { Details } from "./style"
import mojito from '../../assets/images/mojito.png'
import { Ingredients } from "./components/Ingredients"
import { Glass } from "./components/Glass"
import { ListLabels } from "./components/ListLabels"
import { Instructions } from "./components/Instructions"

export const DetailView = () =>{
    return(
        <>
            <TitleSection>Mojito</TitleSection>
            <Details>
                <div className="data">
                    <img src={mojito} alt="" />
                    <ListLabels/>
                </div>
                <div className="ingredients">
                    <Ingredients/>
                    <Glass/>
                </div>
                <Instructions/>
            </Details>   
        </>
    )
}