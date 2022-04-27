import styled from "styled-components";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useState } from "react";


export const Form = styled.form`
    display: flex;
    flex-direction: column;

button {
    margin-top: 3rem;
}

input {
    margin: 0.5rem;
}
`;

// interface LoginFormType {
//     user: string,
//     password: string
// }

const LoginForm = (props: any) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const userChangeHandler = (event: any) => {
        setEnteredUsername(event.target.value)
    }

    const passwordChangeHandler = (event: any) => {
        setEnteredPassword(event.target.value)
    }

    const submitHandler = (event: any) => {
        event.preventDefault();

        const userInfo = {
            user: enteredUsername,
            password: enteredPassword
        };
        props.onSubmitUserInfo(userInfo);

        setEnteredUsername('');
        setEnteredPassword('');
    }

    return(
    <Form onSubmit={submitHandler}>
    <Textbox 
    type="username" 
    placeholder="användarnamn"
    onChange={userChangeHandler}
    />
    <Textbox 
    type="password" 
    placeholder="lösenord"
    onChange={passwordChangeHandler}
    />

    <Button 
    type="submit" 
    variant="primary"
    >Logga in</Button>
    </Form>
)}

export default LoginForm;