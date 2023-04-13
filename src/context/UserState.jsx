// Aqui se crean las funciones y se crea el provider
import { useReducer } from "react";
import { userReducer } from './userReducer';
import { UserContext } from "./UserContext";
import { nanoid } from 'nanoid';
import { ADD_USER, UPDATE_USER, DELETE_USER } from "./actions";

const UserState = ({ children }) => {

    const initialState = {
        users: [],
        userForUpdate: ''
    }

    const [state, dispatch] = useReducer(userReducer, initialState);
    //console.log(state)
    
    const addUser = (user) => {
        dispatch({
            type: ADD_USER,
            payload: {...user, id: nanoid(5)}
        })
    } 
    
    const deleteUser = (id) => {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    };

    const updateUser = (updatedUser) => {
        //console.log(updatedUser)
        dispatch({
            type: UPDATE_USER,
            payload: updatedUser
        }) 
    }

    return (
        <UserContext.Provider value={{ 
            ...state,
            addUser,
            deleteUser,
            updateUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserState }