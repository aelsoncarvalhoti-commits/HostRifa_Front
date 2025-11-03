import { FormConteiner, Form, InputConteiner, StyledInput } from '../../Styles/StyledForm'
import { Title } from "../../Styles/StyledText"
import { useState } from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../components/PrimaryButton'

const FakeLabel = styled.label`
    color: #6b6b6b;
`

const NovaRifa = () => {

    const token = sessionStorage.getItem("token")

    const [nome, setNome] = useState()
    const [homologatePlatform, setHomologatePlatform] = useState()
    const [homologateCode, setHomologateCode] = useState()
    const [raffleImage, setRaffleImage] = useState()
    const [prizeImage, setPrizeImage] = useState()
    const [value, setValue] = useState()

    const criarRifa = async () =>{

        const request = await fetch("http://localhost:8080/raffle/newRaffle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authenticate": `Bearer ${token}`
            },
            body: JSON.stringify({
                nome,
                homologatePlatform,
                homologateCode,
                raffleImage,
                prizeImage,
                value
            })
        })

    }

    const validarQuantidade = () => {

    }

    return (
        <FormConteiner>
            <Title>Cria nova rifa</Title>
            <Form>

                <InputConteiner>
                    <StyledInput placeholder='Nome da Rifa'/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput placeholder='Plataforma de Homologação'/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput placeholder='Codigo de homologação'/>
                </InputConteiner>

                <InputConteiner>
                    <FakeLabel>Foto da capa</FakeLabel>
                    <StyledInput type='file'/>
                </InputConteiner>

                <InputConteiner>
                    <FakeLabel>Foto do prêmio</FakeLabel>
                    <StyledInput type='file'/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type='number' onKeyDown={(e) => {
                        if (e.key === "." || e.key === ",") e.preventDefault();
                    }} placeholder='Quantidade'/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type='number' placeholder='Preço do número R$'/>
                </InputConteiner>

                <PrimaryButton onClick={criarRifa}>Criar Rifa</PrimaryButton>

            </Form>

        </FormConteiner>
    )

}

export default NovaRifa