import CardRifa from "../../components/CardRifa"
import styled from "styled-components"
import { FormConteiner, StyledInput, } from "../../Styles/StyledForm"
import PrimaryButton from "../../components/PrimaryButton"

const ConteinerRifas = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
`

const SearchConteiner = styled.div`
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Rifas = () => {
    return (

        <>
            <SearchConteiner>
                <StyledInput style={{backgroundColor: "rgb(215, 230, 243)"}} placeholder="Pesquisar"/>
                <PrimaryButton>Pesquisar</PrimaryButton>
            </SearchConteiner>

            <ConteinerRifas>
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
                <CardRifa/>
            </ConteinerRifas>
        </>
        
    )
}

export default Rifas