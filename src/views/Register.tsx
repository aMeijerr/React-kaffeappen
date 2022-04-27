import styled from "styled-components";
import Textbox from "../components/Textbox";
import { Form } from "./LoginForm";
import Button from "../components/Button";

const RegisterForm = () => (
    <Form>
    <Textbox type="text" placeholder="användarnamn"/>
    <Textbox type="password" placeholder="lösenord"/>
    <Textbox type="password" placeholder="upprepa lösenord"/>

    <Button type="button" variant="secondary">Registrera</Button>
    </Form>
)

export default RegisterForm;