const ENTER_LOGIN = "ENTER_LOGIN";
const ENTER_PASS = "ENTER_PASS";

let initialState = {
    login: "developer21",
    password: "123456",
    enterLogin: "",
    enterPass: "",
    auto: false    
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case ENTER_LOGIN:
            return {
                ...state
            }
        case ENTER_PASS:
            return state;    
        default: 
            return state;
    }
}

export default loginReducer;