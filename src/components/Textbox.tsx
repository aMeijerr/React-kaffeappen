import styled from "styled-components";

interface TextboxProps {
    isValid?: boolean
    fullWidth?: boolean
}

const Textbox = styled.input<TextboxProps>`
    border: ${props => props.isValid === undefined ? "1px solid black" : "1px solid red"};
    background: ${props => props.isValid === undefined ? null : "#F799AD"};
    width: ${props => props.fullWidth ? "100vw" : null};
    border-radius: 3px;
    padding: 1rem;
    font-size: 1.2rem;
`;

// export const NormalTextbox = () => (
//     <Textbox placeholder="användarnamn"/>
// );

// export const NotValidTextbox = () => (
//     <Textbox isValid={false}/>
// );

// export const FullWidthTextbox = () => (
//     <Textbox fullWidth={true}/>
// );

export default Textbox;

