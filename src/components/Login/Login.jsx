

const Login = (props) => {
    return (
        <div className = 'loginForm'>
            <div className ='labelLog'>
                <label from='login'>Логин </label>
                <label from='password'>Пароль </label>
            </div>
            <div className ='inputLog'>
                <input id='login' name='login' placeholder="Введите логин"></input><br />            
                <input id='password' name='password' type='password' placeholder="Введите пароль"></input>
            </div>            
            <button className='buttEnter'>Войти</button>
        </div>
    );
}

export default Login;