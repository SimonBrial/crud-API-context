// Este contiene el switch case function

import {
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from './actions';

const userReducer = (state, action) => {
    const { type, payload } = action;
    //console.log(payload)
    //console.log(state)

    switch (type) {
        case ADD_USER:
            return {
                users: [...state.users, payload]
            }

        case DELETE_USER:
            return {
                users: state.users.filter(user => user.id !== payload)
            }
        case UPDATE_USER:

            const updatedUser = payload;

            const updatedUsers = state.users.map((user) => {
                if (user.id === updatedUser.id) {
                    console.log(updatedUser)
                    return updatedUser;
                }
                //console.log(user)
                return user;
            })

            console.log(updatedUser)

            return {
                ...state,
                users: updatedUsers,
                userForUpdate: updatedUser.id
            }

        default:
            return state;
    }
};

export { userReducer };