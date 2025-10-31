import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import { Title } from '../Styles/StyledText'

import styled from 'styled-components'

const Nav =  styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 10px;

    @media (min-width: 600px){
        flex-direction: row;
        gap: 20px;
    }

`

const StyledHeader = styled.header`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px){
        flex-direction: row;
        justify-content: space-around;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover{
        text-decoration: underline;
        color: #eb8b32;
    }

`

const Header = () => {

    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        navigate('/login');
    }

    const handleLogin = () =>{
        navigate('/login')
    }

    return (
        <StyledHeader>

            <div>
                <Title>HostRifa</Title>
            </div>
            <Nav>
                <NavLink to="/">Proposta de Valor</NavLink>
                <NavLink to="/planos">Nossos Planos</NavLink>
                <NavLink to="/rifas">Rifas</NavLink>
                <NavLink to="/parceiros">Parceiros</NavLink>
            </Nav>

            {token? (

                <button>Página de usuario</button>

            ) : (
                <PrimaryButton onClick={handleLogin}>Entrar / Cadastrar</PrimaryButton>
            )}

        </StyledHeader>
    )

}

export default Header