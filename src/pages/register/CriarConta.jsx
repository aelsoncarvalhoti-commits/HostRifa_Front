import styled from "styled-components"
import PrimaryButton from "../../components/PrimaryButton"
import { FormConteiner, Form, InputConteiner, StyledInput } from '../../Styles/StyledForm'
import { Title } from "../../Styles/StyledText"

const FakeLabel = styled.label`
    color: #6b6b6b;
`

const CriarConta = () =>{

    return (

        <FormConteiner>

            <Title>Criar Conta</Title>

            <Form>
                <InputConteiner>
                    <StyledInput placeholder="Nome de usuário"/>
                </InputConteiner>

                <InputConteiner>
                    <FakeLabel>Data de nascimento</FakeLabel>
                    <StyledInput placeholder="Data de Nascimento" type="date"/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="email" placeholder="E-mail" autoComplete="undefined"/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="password" placeholder="Senha"/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput type="password" placeholder="Confirme sua senha"/>
                </InputConteiner>

                <PrimaryButton>Cadastrar</PrimaryButton>
            </Form>

        </FormConteiner>

    )

}

export default CriarConta