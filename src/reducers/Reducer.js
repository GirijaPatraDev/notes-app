
export const initialState = JSON.parse(localStorage.getItem('notes')) || []
export const reducer = (state, action) =>{
    switch (action.type) {
        case 'save':
            return [...state, action.payload];
        case 'delete':
            return state.filter(note => note.id !== action.payload)
        default:
            return state;
    }
}