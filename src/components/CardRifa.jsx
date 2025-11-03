import styled from "styled-components"
import cardImage from '../../public/carrosorteio.png'

const Card = styled.div`
    width: 300px;
    background-color: white;
    margin: 10px;
    border-radius: 6px 6px 6px 6px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.3rem;
`

const Image = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 6px 6px 0px 0px;
`

const Content = styled.div`
    padding: 10px;

`
const Title = styled.h3`
    margin: 0;
`

const Desc = styled.p`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1rem;
`

const Price = styled.p`
    font-size: 1rem;
    color: #1e971e;
    text-align: end;
`

const CardRifa = () => {

    return (
        <Card>
            <Image src={cardImage} alt="carro" />
            <Content>
                <Title>Titulo</Title>
                <Desc>Descricao</Desc>
                <Price>R$ 2,50 <small>por bilhete</small></Price>
            </Content>
        </Card>
    )


}

export default CardRifa