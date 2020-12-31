let id = 3;

const initialState = [
    {
        id: 1,
        title: 'Enregistrer le tutoriel',
        completed: false
    },
    {
        id: 2,
        title: 'Preparer le tutoriel',
        completed: true
    },
]

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

export function TodoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO_ACTIONN:
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default:
            return state
    }
}