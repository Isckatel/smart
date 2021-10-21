import {enterLoginAC} from "../../redux/login-reducer";

const Login = (props) => {
    // let loginRef = React.createRef();

    let onLoginChange = (e) =>  {
        let str = e.target.value;
        let action =  enterLoginAC(str);
        props.dispatch(action);
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
                <input id='password' name='password' type='password' placeholder="Введите пароль" />
            </div>            
            <button className='buttEnter'>Войти</button>
        </div>
    );
}

export default Login;