import PrimaryButton from "../../components/PrimaryButton"
import { FormConteiner, Form, InputConteiner, StyledInput } from '../../Styles/StyledForm'
import { Title } from '../../Styles/StyledText'
import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

const NavLink = styled(Link)`
margin-top: 60px;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #01119c;

    &:hover{
        text-decoration: underline;
        color: #eb8b32;
    }

`

const Login = () =>{

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login = async () =>{

        const request = await fetch("http://localhost:8080/user/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })

    }

    return (

        <FormConteiner>
            <div>
                <Title>Login</Title>
            </div>

            <Form action="">

                <InputConteiner>
                    <StyledInput id="username" type="text" placeholder="Seu nome de usuário" required onChange={e => setUsername(e.target.value)}/>
                </InputConteiner>

                <InputConteiner>
                    <StyledInput id="password" type="password" placeholder="Sua senha" required onChange={e => setPassword(e.target.value)}/>
                </InputConteiner>

                <PrimaryButton onClick={login}>Entrar</PrimaryButton>

            </Form>

            <NavLink to="/criarConta">Não tem uma conta ? Clique Aqui!</NavLink>
        
        </FormConteiner>

    )

}

export default Login