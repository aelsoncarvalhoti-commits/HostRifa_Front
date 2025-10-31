import styled from "styled-components"

export const FormConteiner = styled.div`
    margin: 50px;
    max-width: 1600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

`

export const InputConteiner = styled.div`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    max-width: 400px;
    justify-content: center;

`

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.3rem;
    padding: 10px;
    min-width: 350px;

    &:focus{
        outline: none;
    }
`