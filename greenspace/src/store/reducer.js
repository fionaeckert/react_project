const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            clinics: []
        }
    }
    switch (action.type) {
        case "GET_CLINICS":
            return {
                ...state,
                clinics: state.clinics.concat(action.data)
            }
        default:
            return state
    }
}
export default reducer