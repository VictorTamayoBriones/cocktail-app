import { SubTitle } from '../../../../components/SubTitle';
import { Text } from '../../style';
import { InstructionsContainer } from './style';

export const Instructions = ({instructions}) =>{
    return(
        <InstructionsContainer>
            <SubTitle>Instrutions</SubTitle>
            <Text>{ instructions }</Text>
        </InstructionsContainer>
    )
}