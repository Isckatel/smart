const ENTER_LOGIN = "ENTER_LOGIN";
const ENTER_PASS = "ENTER_PASS";
const SET_AUTH ="SET_AUTH";

let initialState = {
    login: "developer21",
    password: "123456",
    enterLogin: "",
    enterPass: "",
    auth: false    
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ENTER_LOGIN:
            return {
                ...state,
                enterLogin: action.newText
            }
        case ENTER_PASS:
            return {
                ...state,
                enterPass: action.newText
            }
        case SET_AUTH:
            return {
                ...state,
                auth: action.auth
            }   
        default: 
            return state;
    }
}

export const enterLoginAC = (newText) => 
    ({type:ENTER_LOGIN, newText});

export const enterPassAC = (newText) => 
    ({type:ENTER_PASS, newText});
    
export const toggleAuthAC = (auth) =>
    ({type:SET_AUTH, auth});

export default loginReducer;