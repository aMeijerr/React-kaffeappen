import styled from "styled-components";

interface StyledButtonProps {
    variant?: "primary" | "secondary"
    fullWidth?: boolean
}

const Button = styled.button<StyledButtonProps>`
    background-color: ${ props => props.variant === "primary" ? "#FFD23F" : "#B6BF54"};
    width: ${props => props.fullWidth ? "500px" : null};
    text-transform: uppercase;
    padding: 15px;
    border: none;
    border-radius: 2rem;
    min-width: 250px;
    margin: 5px;
`;

// export const LoginButton = () => (
//     <Button type="button" variant="primary">Logga in</Button>
// )

// export const RegisterButton = () => (
//     <Button type="button" variant="secondary">Registrera</Button>
// )

// export const FullLengthButton = () => (
//     <Button type="button" fullWidth={true} variant="secondary">Klicka här</Button>
// )

export default Button;


