import './App.css';
import Title from './components/Title';
// import { LoginButton, RegisterButton, FullLengthButton } from './components/Button';
// import { NormalTextbox, NotValidTextbox, FullWidthTextbox } from './components/Textbox';
// import { AlertListFail, AlertListSuccess } from './components/AlertList';
import AlertList from './components/AlertList';
import LoginForm from './views/LoginForm';
// import RegisterForm from './views/Register';
import Button from './components/Button';

function App() {
  const loginUserHandler = (user: any) => {
    console.log(user)
  }
  return (
    <div className="App">
      <div className="container">
        <Title>Kaffeappen</Title>

        <LoginForm onSubmitUserInfo={loginUserHandler}/>
        <Button type="button" variant="secondary">Registrera</Button>

        <AlertList>
          <li>Användarnamnet är upptaget</li>
          <li>Lösenorden stämmer inte överrens</li>
        </AlertList>
      </div>
    </div>
  );
}

export default App;
