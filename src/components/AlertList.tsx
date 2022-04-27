import styled from "styled-components";

interface ListProps {
    variant?: "success" | "fail"
}

const AlertList = styled.ul<ListProps>`
    background: ${props => props.variant === "success" ? "green" : "red"};
    position: fixed;
    margin: 0;
    bottom: 0;
    color: white;
    width: 100vw;
    text-align: left;

    li {
        margin: 0.5rem;
    }
`;

// export const AlertListFail = () => (
//     <AlertList>
//         <li>Användarnamnet är upptaget</li>
//         <li>Lösenorden stämmer inte överrens</li>
//     </AlertList>
// )

// export const AlertListSuccess = () => (
//     <AlertList variant="success">
//         <li>Du har nu blivit registrerad. Nu kan du logga in!</li>
//     </AlertList>
// )

export default AlertList;


