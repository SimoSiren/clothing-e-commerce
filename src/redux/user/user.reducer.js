const INITIALS_STATE = {
    currentUser: null
}

const userReducer = (state = INITIALS_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer