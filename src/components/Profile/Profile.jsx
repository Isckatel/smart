import  {useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Profile = (props) => {
    const history = useHistory();

    useEffect(()=> {
        if (!props.login.auth) history.push('/');
    });
    return (
        <div>
            <h1>{props.login.login}</h1>
        </div>
    );
}

export default Profile;