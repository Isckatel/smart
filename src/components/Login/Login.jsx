import {enterLoginAC, enterPassAC, toggleAuthAC} from "../../redux/login-reducer";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const history = useHistory();

    const onLoginChange = (e) =>  {
        let str = e.target.value;
        let action =  enterLoginAC(str);
        props.dispatch(action);
    }

    const onPassChange =(e) => {
        let str = e.target.value;
        let action =  enterPassAC(str);
        props.dispatch(action);
    }

    const isButtDisabled = (props.login.login === props.login.enterLogin) && (props.login.password === props.login.enterPass);

    const goProfile = () => {
        props.dispatch(toggleAuthAC());
        history.push('/profile');
    }

    return (
        <div className = 'loginForm'>
            <div className ='labelLog'>
                <label from='login'>Логин </label>
                <label from='password'>Пароль </label>
            </div>
            <div className ='inputLog'>
                <input id='login' name='login' 
                    value = {props.login.enterLogin} onChange={onLoginChange} /><br />            
                <input id='password' name='password' type='password'
                    value = {props.login.enterPass} onChange={onPassChange} />
            </div>            
            <button className='buttEnter' disabled={!isButtDisabled}
            onClick={goProfile}>Войти</button>
        </div>
    );
}

export default Login;