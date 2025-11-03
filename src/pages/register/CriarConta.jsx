import styled from "styled-components"
import PrimaryButton from "../../components/PrimaryButton"
import { FormConteiner, Form, InputConteiner, StyledInput } from '../../Styles/StyledForm'
import { Title } from "../../Styles/StyledText"
import { useState } from "react"

const FakeLabel = styled.label`
    color: #6b6b6b;
`

const CriarConta = () =>{

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [birthday, setBirthday] = useState()

    return (

        <FormConteiner>

            <Title>Criar Conta</Title>

            <Form>
                <InputConteiner>
                    <StyledInput placeholder="Nome de usuário" onChange={e => setUsername(e.target.value)}/>
                </InputConteiner>

                <InputConteiner>
                    <FakeLabel>Data de nascimento</FakeLabel>
                    <StyledInput placeholder="Data de Nascimento" type="date" onChange={e => setBirthday(e.target.value)}/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="email" placeholder="E-mail" autoComplete="undefined" onChange={e => setEmail(e.target.value)}/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="password" placeholder="Confirme sua senha" onChange={e => setConfirmPassword(e.target.value)}/>
                </InputConteiner>

                <PrimaryButton>Cadastrar</PrimaryButton>
            </Form>

        </FormConteiner>

    )

}

export default CriarConta